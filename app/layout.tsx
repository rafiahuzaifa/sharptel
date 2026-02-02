import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

const poppins = Poppins({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased bg-white text-text font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
