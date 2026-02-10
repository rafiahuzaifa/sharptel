import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "Sharptel - Technology Solutions Provider",
  description: "Pakistan's leading ICT solutions provider offering connectivity, software, and managed services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased bg-white text-text`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
