import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bovine Strength Systems | Premium Personal Training in Monterey, CA",
  description: "6,000 sq ft private gym offering personalized strength training, nutrition counseling, and a welcoming environment for all fitness levels in Monterey, California.",
  keywords: "personal training, gym, strength training, Monterey, California, fitness, nutrition counseling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
