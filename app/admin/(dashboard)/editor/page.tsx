"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ALL_PAGES,
  GLOBAL_SCOPE,
  sectionKey,
  type AdminData,
} from "@/lib/cms-shared";
import ImageField from "../ImageField";
import type { CmsListInfo, PlainItem } from "@/app/components/cms";
import {
  Loader2,
  Save,
  Check,
  RotateCcw,
  RefreshCw,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

/*
 * Visual page editor. The chosen page is loaded in an iframe and its <Managed> sections are
 * discovered from the data-cms-* attributes the public components render, so every page and
 * section shows up here without a hand-written schema.
 */

type FieldKind = "text" | "href" | "image";

interface FoundField {
  name: string;
  kind: FieldKind;
  value: string;
}

interface FoundSection {
  key: string;
  id: string;
  label: string;
  global: boolean;
  off: boolean;
  fields: FoundField[];
}

/** Rendered text back to the editable form: accent spans become `*word*`. */
function serialize(el: Element): string {
  let out = "";
  el.childNodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE) out += n.textContent ?? "";
    else if (n instanceof Element && (n.classList.contains("accent") || n.classList.contains("text-red-600")))
      out += `*${n.textContent ?? ""}*`;
    else out += n.textContent ?? "";
  });
  return out.trim();
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const richHtml = (s: string) => escapeHtml(s).replace(/\*([^*]+)\*/g, '<span class="accent">$1</span>');

const fieldLabel = (name: string) =>
  name
    .replace(/\.(\d+)\./g, (_, i) => ` ${Number(i) + 1} `)
    .replace(/[.]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());

function scan(doc: Document, path: string): FoundSection[] {
  const sections: FoundSection[] = [];
  doc.querySelectorAll("[data-cms-section]").forEach((el) => {
    const id = el.getAttribute("data-cms-section")!;
    const scope = el.getAttribute("data-cms-scope") || path;
    const key = sectionKey(scope, id);
    if (sections.some((s) => s.key === key)) return;

    const fields: FoundField[] = [];
    const add = (name: string, kind: FieldKind, value: string) => {
      if (!fields.some((f) => f.name === name)) fields.push({ name, kind, value });
    };
    el.querySelectorAll("[data-cms-field],[data-cms-href],[data-cms-image]").forEach((node) => {
      // Fields belong to the innermost section around them.
      if (node.closest("[data-cms-section]") !== el) return;
      const field = node.getAttribute("data-cms-field");
      if (field) add(field, "text", serialize(node));
      const href = node.getAttribute("data-cms-href");
      if (href) add(href, "href", node.getAttribute("href") ?? "");
      const image = node.getAttribute("data-cms-image");
      if (image !== null) add(`${node.getAttribute("data-cms-block") || "section"}.image`, "image", image);
    });

    sections.push({
      key,
      id,
      label: el.getAttribute("data-cms-label") || id,
      global: scope === GLOBAL_SCOPE,
      off: el.hasAttribute("data-cms-off"),
      fields,
    });
  });
  return sections;
}

export default function AdminEditorPage() {
  const [data, setData] = useState<AdminData | null>(null);
  const [canSave, setCanSave] = useState(true);
  const [path, setPath] = useState("/");
  const [sections, setSections] = useState<FoundSection[]>([]);
  const [lists, setLists] = useState<CmsListInfo[]>([]);
  const [open, setOpen] = useState<string | null>(null);
  const [scanning, setScanning] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [error, setError] = useState("");
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((d: AdminData & { canSave?: boolean }) => {
        setCanSave(d.canSave !== false);
        setData({
          content: d.content,
          pageVisibility: d.pageVisibility,
          sectionVisibility: d.sectionVisibility || {},
          sectionFields: d.sectionFields || {},
        });
      })
      .catch(() => setError("Failed to load content."));
  }, []);

  // Pages On/Off links here with ?page=<path>.
  useEffect(() => {
    const page = new URLSearchParams(window.location.search).get("page");
    if (page && ALL_PAGES.some((p) => p.path === page)) setPath(page);
  }, []);

  const frameDoc = () => frameRef.current?.contentDocument ?? null;

  const rescan = useCallback(() => {
    const doc = frameRef.current?.contentDocument;
    if (!doc) return;
    setSections(scan(doc, path));
    setLists(Object.values(frameRef.current?.contentWindow?.__cmsLists ?? {}));
    setScanning(false);
  }, [path]);

  const onFrameLoad = () => {
    // Client components finish rendering just after load; give them a moment.
    setTimeout(rescan, 600);
  };

  const reloadFrame = () => {
    setScanning(true);
    frameRef.current?.contentWindow?.location.reload();
  };

  const changePage = (next: string) => {
    if (dirty && !confirm("You have unsaved changes. Switch page anyway? Your edits stay pending until you save.")) return;
    setPath(next);
    setOpen(null);
    setScanning(true);
  };

  const findInFrame = (s: FoundSection) =>
    frameDoc()?.querySelector(
      s.global
        ? `[data-cms-section="${s.id}"][data-cms-scope="${GLOBAL_SCOPE}"]`
        : `[data-cms-section="${s.id}"]:not([data-cms-scope])`
    ) ?? null;

  const setSectionOn = (s: FoundSection, on: boolean) => {
    setData((d) => {
      if (!d) return d;
      const sectionVisibility = { ...d.sectionVisibility };
      if (on) delete sectionVisibility[s.key];
      else sectionVisibility[s.key] = false;
      return { ...d, sectionVisibility };
    });
    setDirty(true);
  };

  const setField = (s: FoundSection, f: FoundField, value: string | undefined) => {
    setData((d) => {
      if (!d) return d;
      const current = { ...(d.sectionFields[s.key] || {}) };
      if (value === undefined) delete current[f.name];
      else current[f.name] = value;
      const sectionFields = { ...d.sectionFields };
      if (Object.keys(current).length) sectionFields[s.key] = current;
      else delete sectionFields[s.key];
      return { ...d, sectionFields };
    });
    setDirty(true);

    // Live preview for text and links; images show after saving.
    if (value === undefined) return;
    const root = findInFrame(s);
    if (!root) return;
    if (f.kind === "text") {
      root.querySelectorAll(`[data-cms-field="${f.name}"]`).forEach((n) => {
        n.innerHTML = richHtml(value);
      });
    } else if (f.kind === "href") {
      root.querySelectorAll(`[data-cms-href="${f.name}"]`).forEach((n) => n.setAttribute("href", value));
    }
  };

  const setList = (s: FoundSection, name: string, items: PlainItem[] | undefined) => {
    setData((d) => {
      if (!d) return d;
      const current = { ...(d.sectionFields[s.key] || {}) };
      if (items === undefined) delete current[`list:${name}`];
      else current[`list:${name}`] = JSON.stringify(items);
      const sectionFields = { ...d.sectionFields };
      if (Object.keys(current).length) sectionFields[s.key] = current;
      else delete sectionFields[s.key];
      return { ...d, sectionFields };
    });
    setDirty(true);
  };

  const setPageOn = (on: boolean) => {
    setData((d) => (d ? { ...d, pageVisibility: { ...d.pageVisibility, [path]: on } } : d));
    setDirty(true);
  };

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Save failed");
      }
      setDirty(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
      reloadFrame();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  if (!data) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        {error || (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Loading editor...
          </>
        )}
      </div>
    );
  }

  const groups = Array.from(new Set(ALL_PAGES.map((p) => p.group)));
  const isHome = path === "/";
  const pageOn = isHome || data.pageVisibility[path] !== false;

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Page Editor</h1>
          <p className="text-gray-500 text-sm">
            Pick a page, switch sections on or off, and edit their text, buttons and images. Wrap a word in{" "}
            <code className="rounded bg-gray-200 px-1">*stars*</code> to make it red.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={path}
            onChange={(e) => changePage(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm"
          >
            {groups.map((g) => (
              <optgroup key={g} label={g}>
                {ALL_PAGES.filter((p) => p.group === g).map((p) => (
                  <option key={p.path} value={p.path}>
                    {p.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <button
            onClick={handleSave}
            disabled={saving || !canSave}
            className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition disabled:opacity-50 flex-shrink-0"
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
            {saving ? "Saving..." : saved ? "Saved" : dirty ? "Save Changes*" : "Save Changes"}
          </button>
        </div>
      </div>

      {!canSave && (
        <div className="mb-4 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          Storage is not connected, so changes cannot be saved yet.
        </div>
      )}
      {error && (
        <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</div>
      )}

      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[380px_1fr]">
        {/* Section list */}
        <div className="min-h-0 overflow-y-auto rounded-2xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <div>
              <div className="text-sm font-semibold text-gray-900">Page visible</div>
              <div className="text-xs text-gray-400">{isHome ? "The homepage always stays on" : path}</div>
            </div>
            <Toggle on={pageOn} disabled={isHome} onChange={setPageOn} />
          </div>

          {isHome && (
            <div className="border-b border-gray-100 bg-gray-50 px-4 py-3 text-xs text-gray-500">
              Homepage section content (slides, services, testimonials…) is edited under{" "}
              <a href="/admin/homepage" className="font-medium text-red-600 underline">
                Homepage Content
              </a>
              . Sections can be switched on or off here.
            </div>
          )}

          {scanning ? (
            <div className="flex items-center gap-2 p-4 text-sm text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin" /> Reading sections...
            </div>
          ) : sections.length === 0 ? (
            <div className="p-4 text-sm text-gray-500">No editable sections found on this page.</div>
          ) : (
            <div className="divide-y divide-gray-100">
              {sections.map((s) => {
                const on = data.sectionVisibility[s.key] !== false;
                const overrides = data.sectionFields[s.key] || {};
                const sectionLists = lists.filter((l) => l.key === s.key);
                // Text inside a list is edited in the list form, not as separate fields.
                const fields = s.fields.filter((f) => !sectionLists.some((l) => f.name.startsWith(`${l.name}.`)));
                const expanded = open === s.key;
                return (
                  <div key={s.key}>
                    <div className="flex items-center gap-2 px-4 py-3">
                      <button
                        onClick={() => {
                          setOpen(expanded ? null : s.key);
                          findInFrame(s)?.firstElementChild?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                        className="flex min-w-0 flex-1 items-center gap-2 text-left"
                      >
                        {expanded ? (
                          <ChevronDown className="h-4 w-4 flex-shrink-0 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-400" />
                        )}
                        <span className={`truncate text-sm font-medium ${on ? "text-gray-900" : "text-gray-400 line-through"}`}>
                          {s.label}
                        </span>
                        {s.global && (
                          <span className="flex-shrink-0 rounded bg-gray-100 px-1.5 py-0.5 text-[10px] uppercase text-gray-500">
                            all pages
                          </span>
                        )}
                        {Object.keys(overrides).length > 0 && (
                          <span className="flex-shrink-0 rounded bg-red-50 px-1.5 py-0.5 text-[10px] uppercase text-red-600">
                            edited
                          </span>
                        )}
                      </button>
                      <Toggle on={on} onChange={(v) => setSectionOn(s, v)} />
                    </div>

                    {expanded && (
                      <div className="space-y-4 bg-gray-50 px-4 py-4">
                        {on &&
                          !s.off &&
                          sectionLists.map((l) => {
                              const saved = overrides[`list:${l.name}`];
                              let items = l.items;
                              try {
                                if (saved) items = JSON.parse(saved);
                              } catch {}
                              return (
                                <ListEditor
                                  key={l.name}
                                  info={l}
                                  items={items}
                                  edited={saved !== undefined}
                                  onChange={(next) => setList(s, l.name, next)}
                                />
                              );
                            })}
                        {s.off || !on ? (
                          <p className="text-xs text-gray-500">
                            This section is switched off. Turn it on and save to edit its content.
                          </p>
                        ) : fields.length === 0 ? (
                          sectionLists.length ? null : (
                            <p className="text-xs text-gray-500">This section has no editable text fields.</p>
                          )
                        ) : (
                          fields.map((f) => {
                            const value = overrides[f.name] ?? f.value;
                            const edited = overrides[f.name] !== undefined;
                            return (
                              <div key={f.name}>
                                <div className="mb-1 flex items-center justify-between">
                                  <label className="text-xs font-semibold text-gray-600">
                                    {fieldLabel(f.name)}
                                    {f.kind === "href" && <span className="font-normal text-gray-400"> (link)</span>}
                                  </label>
                                  {edited && (
                                    <button
                                      onClick={() => setField(s, f, undefined)}
                                      className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-red-600"
                                      title="Restore the original value (after saving)"
                                    >
                                      <RotateCcw className="h-3 w-3" /> Reset
                                    </button>
                                  )}
                                </div>
                                {f.kind === "image" ? (
                                  <ImageField value={value} onChange={(url) => setField(s, f, url)} />
                                ) : value.length > 60 || f.name.endsWith("desc") || f.name.endsWith("subtitle") || f.name.endsWith("lead") || f.name.endsWith("text") ? (
                                  <textarea
                                    value={value}
                                    rows={3}
                                    onChange={(e) => setField(s, f, e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
                                  />
                                ) : (
                                  <input
                                    value={value}
                                    onChange={(e) => setField(s, f, e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
                                  />
                                )}
                              </div>
                            );
                          })
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Live preview */}
        <div className="flex min-h-[60vh] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              {pageOn ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              Preview: {path}
              {dirty && <span className="text-amber-600">— unsaved changes (switches and images show after saving)</span>}
            </span>
            <button onClick={reloadFrame} className="flex items-center gap-1 hover:text-gray-900">
              <RefreshCw className="h-3.5 w-3.5" /> Reload
            </button>
          </div>
          <iframe ref={frameRef} key={path} src={path} onLoad={onFrameLoad} className="w-full flex-1" title="Page preview" />
        </div>
      </div>
    </div>
  );
}

function Toggle({ on, disabled, onChange }: { on: boolean; disabled?: boolean; onChange: (on: boolean) => void }) {
  return (
    <button
      disabled={disabled}
      onClick={() => onChange(!on)}
      className={`relative w-12 rounded-full transition-colors flex-shrink-0 ${on ? "bg-green-500" : "bg-gray-300"} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      style={{ height: "26px" }}
    >
      <span
        className={`absolute top-1 left-1 h-[18px] w-[18px] bg-white rounded-full shadow transition-transform ${
          on ? "translate-x-[22px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}

/** Values that are styling classes rather than content stay out of the form. */
const isStyleValue = (v: string | string[] | undefined) =>
  typeof v === "string" && /^(text|bg|from|to|border|shadow)-/.test(v);
const isImageKey = (k: string) => /image|logo|img|photo|avatar|banner/i.test(k);
const isLongKey = (k: string) => /desc|answer|description|text|summary|address|bio/i.test(k);

function ListEditor({
  info,
  items,
  edited,
  onChange,
}: {
  info: CmsListInfo;
  items: PlainItem[];
  edited: boolean;
  onChange: (items: PlainItem[] | undefined) => void;
}) {
  const sample = info.defaults[0] ?? items[0] ?? {};
  const keys = Object.keys(sample).filter((k) => k !== "id" && !isStyleValue(sample[k]));

  const update = (i: number, k: string, v: string | string[]) =>
    onChange(items.map((it, j) => (j === i ? { ...it, [k]: v } : it)));
  const move = (i: number, by: number) => {
    const next = [...items];
    const [it] = next.splice(i, 1);
    next.splice(i + by, 0, it);
    onChange(next);
  };
  const add = () => {
    const blank: PlainItem = { ...sample };
    for (const k of keys) blank[k] = Array.isArray(sample[k]) ? [] : "";
    if ("id" in sample) blank.id = String(Date.now());
    onChange([...items, blank]);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
          {info.label} <span className="font-normal normal-case">({items.length})</span>
        </div>
        {edited && (
          <button
            onClick={() => onChange(undefined)}
            className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-red-600"
            title="Restore the original list (after saving)"
          >
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
        )}
      </div>

      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="rounded-lg border border-gray-100 bg-gray-50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-gray-400">#{i + 1}</span>
              <div className="flex items-center gap-1 text-gray-400">
                <button disabled={i === 0} onClick={() => move(i, -1)} className="p-1 hover:text-gray-900 disabled:opacity-30" title="Move up">
                  <ArrowUp className="h-3.5 w-3.5" />
                </button>
                <button
                  disabled={i === items.length - 1}
                  onClick={() => move(i, 1)}
                  className="p-1 hover:text-gray-900 disabled:opacity-30"
                  title="Move down"
                >
                  <ArrowDown className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => confirm("Remove this item?") && onChange(items.filter((_, j) => j !== i))}
                  className="p-1 hover:text-red-600"
                  title="Remove"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              {keys.map((k) => {
                const v = it[k] ?? (Array.isArray(sample[k]) ? [] : "");
                return (
                  <div key={k}>
                    <label className="mb-0.5 block text-[11px] font-semibold text-gray-500">
                      {fieldLabel(k)}
                      {Array.isArray(v) && <span className="font-normal text-gray-400"> (one per line)</span>}
                    </label>
                    {Array.isArray(v) ? (
                      <textarea
                        value={v.join("\n")}
                        rows={Math.min(Math.max(v.length, 2), 6)}
                        onChange={(e) => update(i, k, e.target.value.split("\n"))}
                        onBlur={(e) => update(i, k, e.target.value.split("\n").filter((x) => x.trim()))}
                        className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm"
                      />
                    ) : isImageKey(k) ? (
                      <ImageField value={v} onChange={(url) => update(i, k, url)} />
                    ) : isLongKey(k) || v.length > 60 ? (
                      <textarea
                        value={v}
                        rows={3}
                        onChange={(e) => update(i, k, e.target.value)}
                        className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm"
                      />
                    ) : (
                      <input
                        value={v}
                        onChange={(e) => update(i, k, e.target.value)}
                        className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={add}
        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-gray-300 py-2 text-xs font-semibold text-gray-600 hover:border-red-400 hover:text-red-600"
      >
        <Plus className="h-3.5 w-3.5" /> Add item
      </button>
    </div>
  );
}
