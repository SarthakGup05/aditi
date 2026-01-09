import { RouteController } from "@/lib/controllers/route.controller";
import { NextRequest } from "next/server";

// GET /api/routes -> List All
export async function GET(request: NextRequest) {
  // 🟢 FIX: Pass the 'request' object directly. 
  // The Controller extracts 'admin=true' internally.
  return RouteController.getAll(request);
}

// POST /api/routes -> Create New
export async function POST(request: NextRequest) {
  return RouteController.create(request);
}