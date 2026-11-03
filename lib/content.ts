import { put, list } from "@vercel/blob";
import { unstable_cache } from "next/cache";
import {
  defaultContent,
  defaultPageVisibility,
  type AdminData,
  type PageVisibility,
  type PublicCmsData,
  type SiteContent,
} from "./cms-shared";

export * from "./cms-shared";

const CONTENT_KEY = "site-content.json";
export const CONTENT_TAG = "site-content";

/** Local development (no Blob token, not on Vercel) keeps admin data in a gitignored file. */
const useLocalFile = () => !process.env.BLOB_READ_WRITE_TOKEN && !process.env.VERCEL;
const LOCAL_DIR = ".cms";

function mergeContent(partial: Partial<SiteContent> | null | undefined): SiteContent {
  if (!partial) return defaultContent;
  return {
    hero: { ...defaultContent.hero, ...partial.hero },
    services: partial.services?.length ? partial.services : defaultContent.services,
    capabilities: partial.capabilities?.length ? partial.capabilities : defaultContent.capabilities,
    about: { ...defaultContent.about, ...partial.about },
    testimonials: partial.testimonials?.length ? partial.testimonials : defaultContent.testimonials,
    industries: partial.industries?.length ? partial.industries : defaultContent.industries,
    contact: { ...defaultContent.contact, ...partial.contact },
  };
}

function normalize(data: Partial<AdminData> | null | undefined): AdminData {
  return {
    content: mergeContent(data?.content),
    pageVisibility: { ...defaultPageVisibility, ...(data?.pageVisibility || {}) },
    sectionVisibility: data?.sectionVisibility || {},
    sectionFields: data?.sectionFields || {},
  };
}

const defaults = (): AdminData => normalize(null);

/** The Blob store id is embedded in the token, so the public URL is known without a list() call. */
function blobUrl(): string | null {
  const m = process.env.BLOB_READ_WRITE_TOKEN?.match(/^vercel_blob_rw_([a-z0-9]+)_/i);
  return m ? `https://${m[1].toLowerCase()}.public.blob.vercel-storage.com/${CONTENT_KEY}` : null;
}

async function readBlob(fresh: boolean): Promise<Partial<AdminData> | null> {
  let url = blobUrl();
  if (!url) {
    const { blobs } = await list({ prefix: CONTENT_KEY, limit: 1 });
    url = blobs.find((b) => b.pathname === CONTENT_KEY)?.url ?? null;
    if (!url) return null;
  }
  // A cache-busting query skips the Blob CDN so a save is visible right away.
  const res = await fetch(fresh ? `${url}?v=${Date.now()}` : url, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Blob read failed: ${res.status}`);
  return res.json();
}

async function readLocal(): Promise<Partial<AdminData> | null> {
  const fs = await import("node:fs/promises");
  try {
    return JSON.parse(await fs.readFile(`${LOCAL_DIR}/${CONTENT_KEY}`, "utf8"));
  } catch {
    return null;
  }
}

/** Uncached read, used by the admin API so the editor always sees the latest save. */
export async function getAdminData(fresh = true): Promise<AdminData> {
  try {
    if (useLocalFile()) return normalize(await readLocal());
    if (!process.env.BLOB_READ_WRITE_TOKEN) return defaults();
    return normalize(await readBlob(fresh));
  } catch (err) {
    console.error("getAdminData error:", err);
    return defaults();
  }
}

export async function saveAdminData(data: AdminData): Promise<void> {
  const json = JSON.stringify(normalize(data), null, 2);
  if (useLocalFile()) {
    const fs = await import("node:fs/promises");
    await fs.mkdir(LOCAL_DIR, { recursive: true });
    await fs.writeFile(`${LOCAL_DIR}/${CONTENT_KEY}`, json, "utf8");
    return;
  }
  await put(CONTENT_KEY, json, {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  });
}

export const canSaveContent = () => useLocalFile() || !!process.env.BLOB_READ_WRITE_TOKEN;

/** Cached for page rendering; the admin save route invalidates CONTENT_TAG. */
const getCachedAdminData = unstable_cache(() => getAdminData(true), [CONTENT_KEY], { tags: [CONTENT_TAG] });

export async function getSiteContent(): Promise<SiteContent> {
  return (await getCachedAdminData()).content;
}

export async function getPublicCmsData(): Promise<PublicCmsData> {
  const { sectionVisibility, sectionFields } = await getCachedAdminData();
  return { sectionVisibility, sectionFields };
}

let visibilityMemo: { at: number; value: PageVisibility } | null = null;

/** Used by the proxy on every page request, so it is memoised briefly instead of hitting storage each time. */
export async function getPageVisibility(): Promise<PageVisibility> {
  if (visibilityMemo && Date.now() - visibilityMemo.at < 30_000) return visibilityMemo.value;
  const { pageVisibility } = await getAdminData(false);
  visibilityMemo = { at: Date.now(), value: pageVisibility };
  return pageVisibility;
}
