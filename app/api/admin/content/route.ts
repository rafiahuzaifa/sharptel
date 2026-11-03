import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { canSaveContent, CONTENT_TAG, getAdminData, saveAdminData, type AdminData } from "@/lib/content";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await getAdminData();
  return NextResponse.json({ ...data, canSave: canSaveContent() });
}

export async function PUT(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!canSaveContent()) {
    return NextResponse.json(
      { error: "Blob storage is not connected yet. Content cannot be saved." },
      { status: 503 }
    );
  }
  try {
    const { content, pageVisibility, sectionVisibility, sectionFields }: AdminData = await req.json();
    await saveAdminData({ content, pageVisibility, sectionVisibility, sectionFields });
    // Every public page reads admin data through the layout, so refresh them all at once.
    revalidateTag(CONTENT_TAG, { expire: 0 });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Save content error:", err);
    return NextResponse.json({ error: "Failed to save content." }, { status: 500 });
  }
}
