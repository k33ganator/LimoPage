export async function POST(req) {
  const data = await req.json();

  console.log("New Reservation:", data);

  return Response.json({ success: true });
}
