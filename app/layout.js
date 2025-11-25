export const metadata = {
  title: "CoinDoor",
  description: "Crypto charts and news platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
