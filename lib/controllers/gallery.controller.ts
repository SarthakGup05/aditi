import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export class GalleryController {
  
  // ADD IMAGE
  static async create(req: NextRequest) {
    try {
      const body = await req.json();
      
      const { routeId, imageUrl, altText, caption } = body;

      if (!routeId || !imageUrl) {
        return NextResponse.json({ error: "Route ID and Image URL are required" }, { status: 400 });
      }

      const newImage = await prisma.routeGallery.create({
        data: {
          routeId: Number(routeId),
          imageUrl,
          altText,
          caption
        }
      });

      return NextResponse.json(newImage, { status: 201 });
    } catch (error) {
      console.error("🔥 GALLERY_CREATE Error:", error);
      return NextResponse.json({ error: "Failed to add image" }, { status: 500 });
    }
  }

  // DELETE IMAGE
  static async delete(id: number) {
    try {
      await prisma.routeGallery.delete({
        where: { id }
      });
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("🔥 GALLERY_DELETE Error:", error);
      return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
  }
}
