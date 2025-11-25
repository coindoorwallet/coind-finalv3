async function getNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`, {
    cache: "no-store"
  });
  return res.json();
}

export default async function NewsPage() {
  const data = await getNews();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Latest Crypto News</h1>

      <div className="space-y-4">
        {data.items?.map(item => (
          <div key={item.id} className="p-4 bg-gray-900 rounded-lg">
            <p className="text-lg">{item.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
