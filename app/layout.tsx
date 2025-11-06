import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";

export const metadata = {
  title: "Codrix Solution",
  description: "modern web development agency",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ScrollButton />
        <Footer />
      </body>
    </html>
  );
}
