export default function Home() {
  return (
    <main className="px-6 py-20 text-center space-y-10">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold tracking-tight">
          CoinDoor
        </h1>
        <p className="text-xl opacity-70 max-w-xl mx-auto">
          Your gateway to live crypto charts, market insights & real-time news.
        </p>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <a
          href="#charts"
          className="px-6 py-3 rounded-xl font-medium border border-white/20 hover:bg-white/10 transition"
        >
          View Charts
        </a>

        <a
          href="#news"
          className="px-6 py-3 rounded-xl font-medium bg-white text-black hover:bg-white/90 transition"
        >
          Latest News
        </a>
      </div>
    </main>
  );
}
