"use client";

import { createContext, Fragment, isValidElement, useContext, useEffect, useMemo, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { sectionKey, type PublicCmsData } from "@/lib/cms-shared";

/*
 * Admin-panel runtime for public pages.
 * <Managed> marks a page section so it can be switched off from the admin panel, and
 * kit components inside it read per-section text/image overrides through useCms().
 * data-cms-* attributes let the admin editor discover sections and their current text.
 */

const CmsContext = createContext<PublicCmsData>({ sectionVisibility: {}, sectionFields: {} });
const SectionContext = createContext<string | null>(null);

export function CmsProvider({ data, children }: { data: PublicCmsData; children: ReactNode }) {
  return <CmsContext.Provider value={data}>{children}</CmsContext.Provider>;
}

export const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);

export function Managed({
  id,
  label,
  scope,
  children,
}: {
  id: string;
  label: string;
  /** Defaults to the current page path; use GLOBAL_SCOPE for site-wide sections. */
  scope?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const { sectionVisibility } = useContext(CmsContext);
  const key = sectionKey(scope ?? normalizePath(pathname), id);
  const marker = { "data-cms-section": id, "data-cms-label": label, "data-cms-scope": scope };

  if (sectionVisibility[key] === false) return <div hidden data-cms-off="" {...marker} />;

  return (
    <SectionContext.Provider value={key}>
      <div style={{ display: "contents" }} {...marker}>
        {children}
      </div>
    </SectionContext.Provider>
  );
}

/** `*word*` in admin-entered text becomes a red accent, matching the <Accent> styling in code. */
export function renderRich(value: string): ReactNode {
  const parts = value.split(/\*([^*]+)\*/g);
  if (parts.length === 1) return value;
  return parts.map((part, i) =>
    i % 2 ? (
      <span key={i} className="accent">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

/** The editable part of a list item: text, numbers and lists of text. */
export type PlainItem = Record<string, string | string[]>;

export interface CmsListInfo {
  key: string;
  name: string;
  label: string;
  items: PlainItem[];
  defaults: PlainItem[];
}

declare global {
  interface Window {
    __cmsLists?: Record<string, CmsListInfo>;
  }
}

/** Readable text of coded JSX such as `<>Fast <Accent>setup</Accent></>`; accent spans become `*word*`. Icons give "". */
function nodeText(node: unknown): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (isValidElement(node)) {
    const props = node.props as { children?: unknown; className?: string };
    const inner = nodeText(props.children);
    const accent = typeof node.type === "function" && "cmsAccent" in node.type;
    return accent || props.className?.includes("accent") ? `*${inner}*` : inner;
  }
  return "";
}

function toPlain(item: object | string): PlainItem {
  if (typeof item === "string") return { value: item };
  const out: PlainItem = {};
  for (const [k, v] of Object.entries(item)) {
    if (typeof v === "string") out[k] = v;
    else if (typeof v === "number") out[k] = String(v);
    else if (Array.isArray(v) && v.every((x) => typeof x === "string")) out[k] = v;
    else if (k !== "icon" && isValidElement(v)) {
      const text = nodeText(v).trim();
      if (text) out[k] = text;
    }
  }
  return out;
}

/** Saved list JSON over the coded defaults; non-text props come from the coded item at the same position, cycling for added items. */
function mergeList<T extends object | string>(raw: string | undefined, defaults: T[]): T[] {
  if (!raw) return defaults;
  try {
    const plain = JSON.parse(raw) as PlainItem[];
    if (typeof defaults[0] === "string") return plain.map((p) => String(p.value ?? "") as T);
    return plain.map((p, i) => {
      const base = (defaults.length ? defaults[i % defaults.length] : {}) as Record<string, unknown>;
      const merged: Record<string, unknown> = { ...base };
      for (const [k, v] of Object.entries(p)) merged[k] = typeof base[k] === "number" ? Number(v) || 0 : v;
      return merged as T;
    });
  } catch {
    return defaults;
  }
}

/** The admin editor reads this registry from the preview iframe to build list forms. */
function registerList(key: string, name: string, label: string, items: (object | string)[], defaults: (object | string)[]) {
  window.__cmsLists ??= {};
  window.__cmsLists[`${key}|${name}`] = { key, name, label, items: items.map(toPlain), defaults: defaults.map(toPlain) };
}

/** A page list (jobs, events, FAQs…) that the admin can edit, add to, remove from and reorder. */
export function useCmsList<T extends object | string>(
  sectionId: string,
  name: string,
  label: string,
  defaults: T[],
  /** GLOBAL_SCOPE for lists in site-wide sections such as the menu and footer. */
  scope?: string
): T[] {
  const pathname = usePathname();
  const { sectionFields } = useContext(CmsContext);
  const key = sectionKey(scope ?? normalizePath(pathname), sectionId);
  const raw = sectionFields[key]?.[`list:${name}`];
  const items = useMemo(() => mergeList(raw, defaults), [raw, defaults]);

  useEffect(() => registerList(key, name, label, items, defaults), [key, name, label, items, defaults]);

  return items;
}

/** Inline editable text for markup that is not built from the kit components. */
export function Field({ name, children }: { name: string; children: ReactNode }) {
  const { text } = useCms();
  return <span data-cms-field={name}>{text(name, children)}</span>;
}

/** Overrides for the section this component is rendered in; falls back to the coded defaults. */
export function useCms() {
  const key = useContext(SectionContext);
  const { sectionFields } = useContext(CmsContext);
  const fields = key ? sectionFields[key] : undefined;
  const get = (name: string) => {
    const v = fields?.[name];
    return v && v.trim() ? v : undefined;
  };
  return {
    text: (name: string, fallback: ReactNode): ReactNode => {
      const v = get(name);
      return v === undefined ? fallback : renderRich(v);
    },
    str: <T extends string | undefined>(name: string, fallback: T): string | T => get(name) ?? fallback,
    /**
     * A kit component's list (cards, points, stats…) with admin additions, removals and reordering.
     * Kit components can render conditionally, so this registers during render instead of in an effect.
     */
    list: <T extends object | string>(name: string, label: string, defaults: T[]): T[] => {
      if (!key) return defaults;
      const items = mergeList(fields?.[`list:${name}`], defaults);
      if (typeof window !== "undefined") registerList(key, name, label, items, defaults);
      return items;
    },
  };
}
