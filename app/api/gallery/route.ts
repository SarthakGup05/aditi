import { GalleryController } from "@/lib/controllers/gallery.controller";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return GalleryController.create(req);
}
