import  db  from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export class FleetController {
  
  // GET ALL
  static async getAll() {
    try {
      const fleets = await db.vehiclePackage.findMany({
        orderBy: { id: 'asc' } // Sorted by ID so they appear in order (1, 2, 3...)
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
      const fleet = await db.vehiclePackage.findUnique({
        where: { id }
      });
      
      if (!fleet) return NextResponse.json({ error: "Not found" }, { status: 404 });
      
      return NextResponse.json(fleet);
    } catch (error) {
      console.error("🔥 GET_BY_ID Error:", error);
      return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
    }
  }

  // CREATE (Updated for new Schema)
  static async create(req: NextRequest) {
    try {
      const body = await req.json();

      const newFleet = await db.vehiclePackage.create({
        data: {
          title: body.title,
          category: body.category,
          pricePerKm: Number(body.pricePerKm),
          image: body.image || "",
          
          // 🟢 NEW FIELDS
          description: body.description || "",
          seats: body.seats || "",
          bags: body.bags || "",
          fuel: body.fuel || "",
          features: body.features || [], // Saves as JSON array
        }
      });

      return NextResponse.json(newFleet, { status: 201 });
    } catch (error: any) {
      console.error("🔥 CREATE Error:", error);
      
      if (error.code === 'P2002') {
        return NextResponse.json(
            { error: "A vehicle with this title already exists." }, 
            { status: 409 }
        );
      }

      return NextResponse.json({ error: "Creation failed" }, { status: 500 });
    }
  }

  // UPDATE (Updated for new Schema)
  static async update(id: number, req: NextRequest) {
    try {
      const body = await req.json();

      const updatedFleet = await db.vehiclePackage.update({
        where: { id },
        data: {
          title: body.title,
          category: body.category,
          pricePerKm: body.pricePerKm ? Number(body.pricePerKm) : undefined,
          image: body.image,
          
          // 🟢 NEW FIELDS (Only update if provided)
          description: body.description,
          seats: body.seats,
          bags: body.bags,
          fuel: body.fuel,
          features: body.features,
        }
      });

      return NextResponse.json(updatedFleet);
    } catch (error) {
      console.error("🔥 UPDATE Error:", error);
      return NextResponse.json({ error: "Update failed" }, { status: 500 });
    }
  }

  // DELETE
  static async delete(id: number) {
    try {
      await db.vehiclePackage.delete({
        where: { id }
      });
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("🔥 DELETE Error:", error);
      return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
  }
}