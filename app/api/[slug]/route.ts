// Old route kept for compatibility; prefer /api/routes/[slug]
export async function GET() {
  return new Response(JSON.stringify({ message: "Moved", detail: "Use /api/routes/[slug] instead" }), {
    status: 301,
    headers: { Location: "/api/routes" },
  });
}

export async function PATCH() {
  return new Response(JSON.stringify({ error: "Not Found" }), { status: 404 });
}

export async function DELETE() {
  return new Response(JSON.stringify({ error: "Not Found" }), { status: 404 });
}