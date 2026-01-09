import  prisma  from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export class RouteController {
  
  // GET ALL
  static async getAll(req: NextRequest) {
    try {
      const { searchParams } = new URL(req.url);
      const isAdmin = searchParams.get("admin") === "true";

      const whereClause = isAdmin ? {} : { isActive: true };

      const routes = await prisma.serviceRoute.findMany({
        where: whereClause,
        orderBy: { createdAt: 'desc' },
        include: { 
          gallery: true, 
          // ❌ REMOVED: packages: true (This caused the crash)
        } 
      });

      return NextResponse.json(routes);
    } catch (error) {
      console.error("🔥 GET_ALL Error:", error); // <--- Log the real error
      return NextResponse.json({ error: "Failed to fetch routes" }, { status: 500 });
    }
  }

  // GET BY SLUG (This was crashing your page)
  static async getBySlug(slug: string) {
    try {
      console.log(`🔎 Searching for slug: ${slug}`); // Debug log

      const route = await prisma.serviceRoute.findUnique({
        where: { slug },
        include: { 
          gallery: true,
          // ❌ REMOVED: packages: true (CRITICAL FIX)
        }
      });
      
      if (!route) {
        console.error(`❌ Route not found for slug: ${slug}`);
        return NextResponse.json({ error: "Not found" }, { status: 404 });
      }
      
      return NextResponse.json(route);
    } catch (error) {
      console.error("🔥 GET_BY_SLUG Error:", error); // <--- Log the real error
      return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
    }
  }

  // CREATE
  static async create(req: NextRequest) {
    try {
      const body = await req.json();
      
      const newRoute = await prisma.serviceRoute.create({
        data: {
          title: body.title,
          slug: body.slug,
          tagline: body.tagline,
          heroImage: body.heroImage,
          distance: body.distance,
          duration: body.duration,
          basePrice: Number(body.basePrice),
          description: body.description,
          isActive: body.isActive,
          highlights: body.highlights || [],
        }
      });

      return NextResponse.json(newRoute, { status: 201 });
    } catch (error) {
      console.error("🔥 CREATE Error:", error);
      return NextResponse.json({ error: "Creation failed" }, { status: 500 });
    }
  }

  // UPDATE
  static async update(slug: string, req: NextRequest) {
    try {
      const body = await req.json();

      const updatedRoute = await prisma.serviceRoute.update({
        where: { slug },
        data: {
          title: body.title,
          tagline: body.tagline,
          heroImage: body.heroImage,
          distance: body.distance,
          duration: body.duration,
          basePrice: Number(body.basePrice),
          description: body.description,
          isActive: body.isActive,
          highlights: body.highlights,
        }
      });

      return NextResponse.json(updatedRoute);
    } catch (error) {
      console.error("🔥 UPDATE Error:", error);
      return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
  }

  // DELETE
  static async delete(slug: string) {
    try {
      await prisma.serviceRoute.delete({
        where: { slug }
      });
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("🔥 DELETE Error:", error);
      return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
  }
}