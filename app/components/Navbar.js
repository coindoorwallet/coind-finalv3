export default function Navbar() {
  return (
    <nav className="w-full p-4 border-b border-neutral-800 flex items-center justify-between">
      <h1 className="text-xl font-bold">CoinDoor</h1>

      <div className="flex gap-6 text-neutral-300">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/news" className="hover:text-white">News</a>
        <a href="/markets" className="hover:text-white">Markets</a>
      </div>
    </nav>
  );
}
