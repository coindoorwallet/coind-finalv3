async function getNews() {
  const res = await fetch(`/api/news`, {
    next: { revalidate: 120 }
  });

  if (!res.ok) return [];

  const data = await res.json();
  return data.items || [];
}

export default async function NewsPage() {
  const articles = await getNews();

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Crypto News</h1>

      {articles.length === 0 && (
        <p className="text-neutral-400">No news available right now.</p>
      )}

      <ul className="space-y-5">
        {articles.map((item) => (
          <li
            key={item.id}
            className="border border-neutral-800 p-4 rounded-lg hover:bg-neutral-900 transition"
          >
            <a
              href={item.url}
              target="_blank"
              className="font-semibold text-lg text-blue-400 hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
