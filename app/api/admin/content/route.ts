import { NextRequest, NextResponse } from "next/server";
import { getAdminData, saveAdminData, type AdminData } from "@/lib/content";
import { requireAdmin } from "@/lib/requireAdmin";

export async function GET(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await getAdminData();
  return NextResponse.json(data);
}

export async function PUT(req: NextRequest) {
  if (!(await requireAdmin(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Blob storage is not connected yet. Content cannot be saved." },
      { status: 503 }
    );
  }
  try {
    const data: AdminData = await req.json();
    await saveAdminData(data);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Save content error:", err);
    return NextResponse.json({ error: "Failed to save content." }, { status: 500 });
  }
}
