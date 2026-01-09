import  prisma  from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export class FleetController {
  
  // GET ALL
  static async getAll() {
    try {
      const fleets = await prisma.vehiclePackage.findMany({
        orderBy: { id: 'desc' }
        // ❌ REMOVED: include: { route: ... } (No longer exists)
      });
      return NextResponse.json(fleets);
    } catch (error) {
      console.error("🔥 GET_ALL Error:", error);
      return NextResponse.json({ error: "Failed to fetch fleets" }, { status: 500 });
    }
  }

  // GET BY ID
  static async getById(id: number) {
    try {
      const fleet = await prisma.vehiclePackage.findUnique({
        where: { id }
        // ❌ REMOVED: include: { route: ... }
      });
      
      if (!fleet) return NextResponse.json({ error: "Not found" }, { status: 404 });
      
      return NextResponse.json(fleet);
    } catch (error) {
      console.error("🔥 GET_BY_ID Error:", error);
      return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
    }
  }

  // CREATE
  static async create(req: NextRequest) {
    try {
      const body = await req.json();

      const newFleet = await prisma.vehiclePackage.create({
        data: {
          title: body.title,             // ✅ Was 'carModel'
          category: body.category,
          pricePerKm: Number(body.pricePerKm), // ✅ Was 'price'
          image: body.image || "",
          // ❌ REMOVED: seats, bags, routeId
        }
      });

      return NextResponse.json(newFleet, { status: 201 });
    } catch (error) {
      console.error("🔥 CREATE Error:", error);
      return NextResponse.json({ error: "Creation failed" }, { status: 500 });
    }
  }

  // UPDATE BY ID
  static async update(id: number, req: NextRequest) {
    try {
      const body = await req.json();

      const updatedFleet = await prisma.vehiclePackage.update({
        where: { id },
        data: {
          title: body.title,
          category: body.category,
          pricePerKm: body.pricePerKm ? Number(body.pricePerKm) : undefined,
          image: body.image,
        }
      });

      return NextResponse.json(updatedFleet);
    } catch (error) {
      console.error("🔥 UPDATE Error:", error);
      return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
  }

  // DELETE BY ID
  static async delete(id: number) {
    try {
      await prisma.vehiclePackage.delete({
        where: { id }
      });
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("🔥 DELETE Error:", error);
      return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
  }
}