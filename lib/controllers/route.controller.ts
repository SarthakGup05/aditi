import { NextResponse } from "next/server";
import db from "@/lib/db";

export const RouteController = {
  // --- CREATE (POST) ---
  create: async (req: Request) => {
    try {
      const body = await req.json();

      // 1. Basic Validation
      if (!body.slug || !body.title || !body.basePrice) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }

      // 2. Check duplicate slug
      const existing = await db.serviceRoute.findUnique({ where: { slug: body.slug } });
      if (existing) {
        return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
      }

      // 3. Create in DB
      const newRoute = await db.serviceRoute.create({
        data: {
            ...body,
            // Ensure relations are formatted correctly for Prisma
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
  // ✅ FIX: Accepts 'isAdmin' to decide if we show Drafts or not
  getAll: async (isAdmin: boolean = false) => {
    try {
      // If Admin, no filter (show all). If Public, filter by isActive: true.
      const whereClause = isAdmin ? {} : { isActive: true };

      const routes = await db.serviceRoute.findMany({
        where: whereClause,
        orderBy: { createdAt: 'desc' },
        include: { packages: true } // Fetch minimal data for list view
      });
      return NextResponse.json(routes, { status: 200 });
    } catch (error) {
      console.error("GET_ALL Error:", error);
      return NextResponse.json({ error: "Failed to fetch routes" }, { status: 500 });
    }
  },

  // --- READ ONE (GET) ---
  getBySlug: async (slug: string) => {
    try {
      // We use findFirst to allow flexible filtering if needed
      const route = await db.serviceRoute.findUnique({
        where: { slug },
        include: { gallery: true, packages: true } 
      });

      if (!route) return NextResponse.json({ error: "Route not found" }, { status: 404 });

      return NextResponse.json(route, { status: 200 });
    } catch (error) {
      console.error("GET_ONE Error:", error);
      return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }
  },

  // --- UPDATE (PATCH) ---
  update: async (slug: string, req: Request) => {
    try {
      const body = await req.json();

      // Check existence
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