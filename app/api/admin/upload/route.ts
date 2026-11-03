import { NextRequest, NextResponse } from "next/server";
import { put, del } from "@vercel/blob";
import { requireAdmin } from "@/lib/requireAdmin";
import { canSaveContent } from "@/lib/content";

export async function POST(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!canSaveContent()) {
    return NextResponse.json({ error: "Blob storage is not connected yet." }, { status: 503 });
  }

  try {
    const form = await req.formData();
    const file = form.get("file");
    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
    }
    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json({ error: "Image must be under 8MB." }, { status: 400 });
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "-");
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      // Local development: keep uploads in a gitignored public folder.
      const fs = await import("node:fs/promises");
      const name = `${Date.now()}-${safeName}`;
      await fs.mkdir("public/cms-uploads", { recursive: true });
      await fs.writeFile(`public/cms-uploads/${name}`, Buffer.from(await file.arrayBuffer()));
      return NextResponse.json({ url: `/cms-uploads/${name}` });
    }
    const blob = await put(`admin-uploads/${Date.now()}-${safeName}`, file, {
      access: "public",
    });

    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload failed." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "Blob storage is not connected yet." }, { status: 503 });
  }

  try {
    const { url } = await req.json();
    if (!url || typeof url !== "string" || !url.includes("admin-uploads/")) {
      return NextResponse.json({ error: "Only uploaded images can be deleted." }, { status: 400 });
    }
    await del(url);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete image error:", err);
    return NextResponse.json({ error: "Delete failed." }, { status: 500 });
  }
}
