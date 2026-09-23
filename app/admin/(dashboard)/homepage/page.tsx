"use client";

import { useEffect, useState } from "react";
import type { AdminData, SiteContent } from "@/lib/content";
import ImageField from "../ImageField";
import { Loader2, Save, Check, Plus, Trash2 } from "lucide-react";

const TABS = ["Hero", "Services", "Capabilities", "About", "Testimonials", "Industries", "Contact"] as const;
type Tab = (typeof TABS)[number];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition";

export default function AdminHomepagePage() {
  const [data, setData] = useState<AdminData | null>(null);
  const [tab, setTab] = useState<Tab>("Hero");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((d: AdminData) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load content.");
        setLoading(false);
      });
  }, []);

  const update = (patch: Partial<SiteContent>) => {
    setData((prev) => (prev ? { ...prev, content: { ...prev.content, ...patch } } : prev));
  };

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "Save failed");
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !data) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        <Loader2 className="h-5 w-5 animate-spin" /> Loading content...
      </div>
    );
  }

  const c = data.content;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Homepage Content</h1>
          <p className="text-gray-500">Changes go live on the homepage as soon as you save.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition disabled:opacity-50 flex-shrink-0"
        >
          {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
          {saving ? "Saving..." : saved ? "Saved" : "Save Changes"}
        </button>
      </div>

      {error && (
        <div className="mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</div>
      )}

      {/* Tabs */}
      <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-200">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition ${
              tab === t ? "border-red-600 text-red-600" : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        {tab === "Hero" && (
          <div className="space-y-6">
            <Field label="Badge text">
              <input className={inputCls} value={c.hero.badge} onChange={(e) => update({ hero: { ...c.hero, badge: e.target.value } })} />
            </Field>
            <Field label="Rotating headline words (one per line)">
              <textarea
                className={inputCls}
                rows={4}
                value={c.hero.words.join("\n")}
                onChange={(e) => update({ hero: { ...c.hero, words: e.target.value.split("\n") } })}
              />
            </Field>
            <Field label="Subtitle">
              <textarea
                className={inputCls}
                rows={2}
                value={c.hero.subtitle}
                onChange={(e) => update({ hero: { ...c.hero, subtitle: e.target.value } })}
              />
            </Field>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Background images</span>
                <button
                  type="button"
                  onClick={() => update({ hero: { ...c.hero, backgrounds: [...c.hero.backgrounds, ""] } })}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700"
                >
                  <Plus className="h-3.5 w-3.5" /> Add image
                </button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.hero.backgrounds.map((bg, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="flex-1">
                      <ImageField
                        value={bg}
                        onChange={(url) => {
                          const next = [...c.hero.backgrounds];
                          next[i] = url;
                          update({ hero: { ...c.hero, backgrounds: next } });
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => update({ hero: { ...c.hero, backgrounds: c.hero.backgrounds.filter((_, j) => j !== i) } })}
                      className="text-gray-400 hover:text-red-600 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Stats bar</span>
              <div className="grid sm:grid-cols-2 gap-4">
                {c.hero.stats.map((s, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 bg-gray-50 rounded-lg p-3">
                    <input
                      className={inputCls}
                      type="number"
                      value={s.number}
                      onChange={(e) => {
                        const next = [...c.hero.stats];
                        next[i] = { ...next[i], number: parseFloat(e.target.value) || 0 };
                        update({ hero: { ...c.hero, stats: next } });
                      }}
                      placeholder="Number"
                    />
                    <input
                      className={inputCls}
                      value={s.suffix}
                      onChange={(e) => {
                        const next = [...c.hero.stats];
                        next[i] = { ...next[i], suffix: e.target.value };
                        update({ hero: { ...c.hero, stats: next } });
                      }}
                      placeholder="Suffix (+, %, /7)"
                    />
                    <input
                      className={inputCls}
                      value={s.label}
                      onChange={(e) => {
                        const next = [...c.hero.stats];
                        next[i] = { ...next[i], label: e.target.value };
                        update({ hero: { ...c.hero, stats: next } });
                      }}
                      placeholder="Label"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "Services" && (
          <div className="space-y-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() =>
                  update({ services: [...c.services, { title: "New Service", desc: "", image: "", href: "/" }] })
                }
                className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700"
              >
                <Plus className="h-3.5 w-3.5" /> Add service
              </button>
            </div>
            {c.services.map((s, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-start gap-3">
                  <ImageField
                    value={s.image}
                    onChange={(url) => {
                      const next = [...c.services];
                      next[i] = { ...next[i], image: url };
                      update({ services: next });
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => update({ services: c.services.filter((_, j) => j !== i) })}
                    className="text-gray-400 hover:text-red-600 p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="Title">
                    <input
                      className={inputCls}
                      value={s.title}
                      onChange={(e) => {
                        const next = [...c.services];
                        next[i] = { ...next[i], title: e.target.value };
                        update({ services: next });
                      }}
                    />
                  </Field>
                  <Field label="Link (href)">
                    <input
                      className={inputCls}
                      value={s.href}
                      onChange={(e) => {
                        const next = [...c.services];
                        next[i] = { ...next[i], href: e.target.value };
                        update({ services: next });
                      }}
                    />
                  </Field>
                </div>
                <Field label="Description">
                  <textarea
                    className={inputCls}
                    rows={2}
                    value={s.desc}
                    onChange={(e) => {
                      const next = [...c.services];
                      next[i] = { ...next[i], desc: e.target.value };
                      update({ services: next });
                    }}
                  />
                </Field>
              </div>
            ))}
          </div>
        )}

        {tab === "Capabilities" && (
          <div className="space-y-5">
            <p className="text-xs text-gray-400">Fixed at 6 cards to match the homepage grid layout.</p>
            {c.capabilities.map((cap, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 grid sm:grid-cols-2 gap-3">
                <Field label="Title">
                  <input
                    className={inputCls}
                    value={cap.title}
                    onChange={(e) => {
                      const next = [...c.capabilities];
                      next[i] = { ...next[i], title: e.target.value };
                      update({ capabilities: next });
                    }}
                  />
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Stat">
                    <input
                      className={inputCls}
                      value={cap.stat}
                      onChange={(e) => {
                        const next = [...c.capabilities];
                        next[i] = { ...next[i], stat: e.target.value };
                        update({ capabilities: next });
                      }}
                    />
                  </Field>
                  <Field label="Stat label">
                    <input
                      className={inputCls}
                      value={cap.statLabel}
                      onChange={(e) => {
                        const next = [...c.capabilities];
                        next[i] = { ...next[i], statLabel: e.target.value };
                        update({ capabilities: next });
                      }}
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Description">
                    <textarea
                      className={inputCls}
                      rows={2}
                      value={cap.desc}
                      onChange={(e) => {
                        const next = [...c.capabilities];
                        next[i] = { ...next[i], desc: e.target.value };
                        update({ capabilities: next });
                      }}
                    />
                  </Field>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "About" && (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-6 items-start">
              <ImageField label="Team image" value={c.about.teamImage} onChange={(url) => update({ about: { ...c.about, teamImage: url } })} />
              <Field label="Years experience badge">
                <input className={inputCls} value={c.about.yearsExperience} onChange={(e) => update({ about: { ...c.about, yearsExperience: e.target.value } })} />
              </Field>
              <Field label="Happy clients badge">
                <input className={inputCls} value={c.about.happyClients} onChange={(e) => update({ about: { ...c.about, happyClients: e.target.value } })} />
              </Field>
            </div>
            <Field label="About paragraph">
              <textarea className={inputCls} rows={4} value={c.about.paragraph} onChange={(e) => update({ about: { ...c.about, paragraph: e.target.value } })} />
            </Field>
            <Field label="Highlights (one per line)">
              <textarea
                className={inputCls}
                rows={4}
                value={c.about.highlights.join("\n")}
                onChange={(e) => update({ about: { ...c.about, highlights: e.target.value.split("\n") } })}
              />
            </Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Vision text">
                <textarea className={inputCls} rows={3} value={c.about.visionText} onChange={(e) => update({ about: { ...c.about, visionText: e.target.value } })} />
              </Field>
              <Field label="Mission text">
                <textarea className={inputCls} rows={3} value={c.about.missionText} onChange={(e) => update({ about: { ...c.about, missionText: e.target.value } })} />
              </Field>
            </div>
          </div>
        )}

        {tab === "Testimonials" && (
          <div className="space-y-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() =>
                  update({
                    testimonials: [...c.testimonials, { quote: "", author: "", position: "", company: "", rating: 5 }],
                  })
                }
                className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700"
              >
                <Plus className="h-3.5 w-3.5" /> Add testimonial
              </button>
            </div>
            {c.testimonials.map((t, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold text-gray-400">#{i + 1}</span>
                  <button
                    type="button"
                    onClick={() => update({ testimonials: c.testimonials.filter((_, j) => j !== i) })}
                    className="text-gray-400 hover:text-red-600 p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <Field label="Quote">
                  <textarea
                    className={inputCls}
                    rows={3}
                    value={t.quote}
                    onChange={(e) => {
                      const next = [...c.testimonials];
                      next[i] = { ...next[i], quote: e.target.value };
                      update({ testimonials: next });
                    }}
                  />
                </Field>
                <div className="grid sm:grid-cols-4 gap-3">
                  <Field label="Author">
                    <input
                      className={inputCls}
                      value={t.author}
                      onChange={(e) => {
                        const next = [...c.testimonials];
                        next[i] = { ...next[i], author: e.target.value };
                        update({ testimonials: next });
                      }}
                    />
                  </Field>
                  <Field label="Position">
                    <input
                      className={inputCls}
                      value={t.position}
                      onChange={(e) => {
                        const next = [...c.testimonials];
                        next[i] = { ...next[i], position: e.target.value };
                        update({ testimonials: next });
                      }}
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      className={inputCls}
                      value={t.company}
                      onChange={(e) => {
                        const next = [...c.testimonials];
                        next[i] = { ...next[i], company: e.target.value };
                        update({ testimonials: next });
                      }}
                    />
                  </Field>
                  <Field label="Rating (1-5)">
                    <input
                      type="number"
                      min={1}
                      max={5}
                      className={inputCls}
                      value={t.rating}
                      onChange={(e) => {
                        const next = [...c.testimonials];
                        next[i] = { ...next[i], rating: Math.min(5, Math.max(1, parseInt(e.target.value) || 5)) };
                        update({ testimonials: next });
                      }}
                    />
                  </Field>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Industries" && (
          <div className="space-y-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => update({ industries: [...c.industries, { title: "New Sector", desc: "", image: "" }] })}
                className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700"
              >
                <Plus className="h-3.5 w-3.5" /> Add sector
              </button>
            </div>
            {c.industries.map((ind, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-start gap-3">
                  <ImageField
                    value={ind.image}
                    onChange={(url) => {
                      const next = [...c.industries];
                      next[i] = { ...next[i], image: url };
                      update({ industries: next });
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => update({ industries: c.industries.filter((_, j) => j !== i) })}
                    className="text-gray-400 hover:text-red-600 p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <Field label="Title">
                  <input
                    className={inputCls}
                    value={ind.title}
                    onChange={(e) => {
                      const next = [...c.industries];
                      next[i] = { ...next[i], title: e.target.value };
                      update({ industries: next });
                    }}
                  />
                </Field>
                <Field label="Description">
                  <textarea
                    className={inputCls}
                    rows={2}
                    value={ind.desc}
                    onChange={(e) => {
                      const next = [...c.industries];
                      next[i] = { ...next[i], desc: e.target.value };
                      update({ industries: next });
                    }}
                  />
                </Field>
              </div>
            ))}
          </div>
        )}

        {tab === "Contact" && (
          <div className="space-y-6">
            {(["emails", "phones", "offices"] as const).map((key) => (
              <div key={key}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{key}</span>
                  <button
                    type="button"
                    onClick={() =>
                      update({ contact: { ...c.contact, [key]: [...c.contact[key], { label: "", value: "", href: "" }] } })
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add line
                  </button>
                </div>
                <div className="space-y-2">
                  {c.contact[key].map((line, i) => (
                    <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
                      <input
                        className={inputCls}
                        placeholder="Label"
                        value={line.label}
                        onChange={(e) => {
                          const next = [...c.contact[key]];
                          next[i] = { ...next[i], label: e.target.value };
                          update({ contact: { ...c.contact, [key]: next } });
                        }}
                      />
                      <input
                        className={inputCls}
                        placeholder="Value"
                        value={line.value}
                        onChange={(e) => {
                          const next = [...c.contact[key]];
                          next[i] = { ...next[i], value: e.target.value };
                          update({ contact: { ...c.contact, [key]: next } });
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => update({ contact: { ...c.contact, [key]: c.contact[key].filter((_, j) => j !== i) } })}
                        className="text-gray-400 hover:text-red-600 p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Business hours">
                <input className={inputCls} value={c.contact.businessHours} onChange={(e) => update({ contact: { ...c.contact, businessHours: e.target.value } })} />
              </Field>
              <Field label="Support availability note">
                <input className={inputCls} value={c.contact.supportAvailability} onChange={(e) => update({ contact: { ...c.contact, supportAvailability: e.target.value } })} />
              </Field>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
