import { RouteController } from "@/lib/controllers/route.controller";
import { NextRequest } from "next/server";

// GET /api/routes/:slug -> Get One
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return RouteController.getBySlug(slug);
}

// PATCH /api/routes/:slug -> Update One
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return RouteController.update(slug, request);
}

// DELETE /api/routes/:slug -> Delete One
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return RouteController.delete(slug);
}
