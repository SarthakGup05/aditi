import { NextResponse } from "next/server";
import db from "@/lib/db";

export const RouteController = {
  // --- CREATE (POST) ---
  create: async (req: Request) => {
    try {
      const body = await req.json();

      // Basic Validation
      if (!body.slug || !body.title || !body.basePrice) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }

      // Check if slug already exists
      const existing = await db.serviceRoute.findUnique({ where: { slug: body.slug } });
      if (existing) {
        return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
      }

      const newRoute = await db.serviceRoute.create({
        data: {
            ...body,
            // Ensure relations are created correctly if passed
            gallery: body.gallery ? { create: body.gallery } : undefined,
            packages: body.packages ? { create: body.packages } : undefined,
        }
      });

      return NextResponse.json(newRoute, { status: 201 });
    } catch (error) {
      console.error("CREATE Error:", error);
      return NextResponse.json({ error: "Failed to create route" }, { status: 500 });
    }
  },

  // --- READ ALL (GET) ---
  getAll: async () => {
    try {
      const routes = await db.serviceRoute.findMany({
        where: { isActive: true }, // ✅ Only show active routes in the list
        orderBy: { createdAt: 'desc' },
        include: { packages: true }
      });
      return NextResponse.json(routes, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch routes" }, { status: 500 });
    }
  },

  // --- READ ONE (GET) ---
  getBySlug: async (slug: string) => {
    console.log("🔍 API is looking for slug:", slug); 

    try {
      // ✅ FIX: Use findFirst to allow filtering by isActive
      const route = await db.serviceRoute.findFirst({
        where: { 
            slug: slug,
            isActive: true 
        },
        include: { gallery: true, packages: true }
      });

      console.log("✅ API found:", route ? route.slug : "Nothing");

      if (!route) return NextResponse.json({ error: "Route not found" }, { status: 404 });

      return NextResponse.json(route, { status: 200 });
    } catch (error) {
      console.error("GET Error:", error);
      return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }
  },

  // --- UPDATE (PATCH) ---
  update: async (slug: string, req: Request) => {
    try {
      const body = await req.json();

      // Check if route exists
      const existing = await db.serviceRoute.findUnique({ where: { slug } });
      if (!existing) return NextResponse.json({ error: "Route not found" }, { status: 404 });

      const updatedRoute = await db.serviceRoute.update({
        where: { slug },
        data: body,
      });

      return NextResponse.json(updatedRoute, { status: 200 });
    } catch (error) {
      console.error("UPDATE Error:", error);
      return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
  },

  // --- DELETE (DELETE) ---
  delete: async (slug: string) => {
    try {
        await db.serviceRoute.delete({
            where: { slug }
        });
        return NextResponse.json({ message: "Route deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Route not found" }, { status: 404 });
    }
  }
};