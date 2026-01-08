import { RouteController } from "@/lib/controllers/route.controller";
import { NextRequest } from "next/server";

// GET /api/routes -> List All
// Supports query param: /api/routes?admin=true
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const isAdmin = searchParams.get("admin") === "true";

  return RouteController.getAll(isAdmin);
}

// POST /api/routes -> Create New
export async function POST(request: NextRequest) {
  return RouteController.create(request);
}
