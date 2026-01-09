import { FleetController } from "@/lib/controllers/fleet.controller";
import { NextRequest } from "next/server";

export async function GET() {
  return FleetController.getAll();
}

export async function POST(req: NextRequest) {
  return FleetController.create(req);
}