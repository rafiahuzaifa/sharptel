"use client";

import { useEffect, useState } from "react";
import { ALL_PAGES, type PageVisibility, type AdminData } from "@/lib/content";
import { Loader2, Save, Check } from "lucide-react";

export default function AdminPagesPage() {
  const [visibility, setVisibility] = useState<PageVisibility | null>(null);
  const [fullData, setFullData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/content")
      .then((r) => r.json())
      .then((data: AdminData) => {
        setFullData(data);
        setVisibility(data.pageVisibility);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load pages.");
        setLoading(false);
      });
  }, []);

  const toggle = (path: string) => {
    setVisibility((prev) => (prev ? { ...prev, [path]: !prev[path] } : prev));
  };

  const handleSave = async () => {
    if (!fullData || !visibility) return;
    setSaving(true);
    setError("");
    setSaved(false);
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fullData, pageVisibility: visibility }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Save failed");
      }
      setFullData((prev) => (prev ? { ...prev, pageVisibility: visibility } : prev));
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed.");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !visibility) {
    return (
      <div className="flex items-center gap-2 text-gray-500">
        <Loader2 className="h-5 w-5 animate-spin" /> Loading pages...
      </div>
    );
  }

  const groups = Array.from(new Set(ALL_PAGES.map((p) => p.group)));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Pages On/Off</h1>
          <p className="text-gray-500">
            Turn a page off to redirect visitors to the homepage. The homepage itself always stays on.
          </p>
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
        <div className="mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group}>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">{group}</h3>
            <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
              {ALL_PAGES.filter((p) => p.group === group).map((page) => {
                const isHome = page.path === "/";
                const on = isHome ? true : visibility[page.path] !== false;
                return (
                  <div key={page.path} className="flex items-center justify-between px-5 py-3.5">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{page.label}</div>
                      <div className="text-gray-400 text-xs">{page.path}</div>
                    </div>
                    <button
                      disabled={isHome}
                      onClick={() => toggle(page.path)}
                      className={`relative w-12 h-6.5 rounded-full transition-colors flex-shrink-0 ${
                        on ? "bg-green-500" : "bg-gray-300"
                      } ${isHome ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                      style={{ height: "26px" }}
                    >
                      <span
                        className={`absolute top-1 left-1 h-[18px] w-[18px] bg-white rounded-full shadow transition-transform ${
                          on ? "translate-x-[22px]" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
