export async function GET() {
  const token = process.env.CRYPTOPANIC_TOKEN;

  if (!token) {
    return Response.json({ error: "CRYPTOPANIC_TOKEN missing" }, { status: 400 });
  }

  const url = `https://cryptopanic.com/api/v1/posts/?auth_token=${token}&filter=trending`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
