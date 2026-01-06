import "./globals.css";

export const metadata = {
  title: "Top Hat Limo Services",
  description: "Luxury limo services with 24/7 reservations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-black bg-opacity-80 fixed w-full z-50 backdrop-blur">
      <h2 className="text-2xl font-bold">Top Hat Limo</h2>

      <div className="space-x-6 text-lg">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/pricing" className="hover:text-gray-300">Pricing</a>
        <a href="/reserve" className="hover:text-gray-300">Reservations</a>
        <a href="/admin" className="hover:text-gray-300">Admin</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-20 py-10 text-center bg-black bg-opacity-70">
      <p className="text-gray-400">&copy; {new Date().getFullYear()} Top Hat Limo Services. All rights reserved.</p>
    </footer>
  );
}
