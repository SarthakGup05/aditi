import { GalleryController } from "@/lib/controllers/gallery.controller";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return GalleryController.delete(Number(id));
}
