export default function Footer() {
  return (
    <footer className="w-full p-4 border-t border-neutral-800 text-center text-sm text-neutral-400">
      © {new Date().getFullYear()} CoinDoor — All rights reserved.
    </footer>
  );
}
