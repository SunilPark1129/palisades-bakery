import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import MainHeader from "./_components/ui/MainHeader";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://palisadesparkbakerynj.com"),
  title: "Palisades Park Bakery | Fresh Breads, Cakes, Pies & Cookies",
  description:
    "Enjoy freshly baked breads, cakes, pies, and cookies at Palisades Park Bakery. Group orders for events and custom cakes made to order are also available. Visit us in Palisades Park at New Jersey or order online today.",
  keywords: [
    "bakery",
    "breads",
    "cakes",
    "pies",
    "cookies",
    "dine-in",
    "restaurant",
    "cafe",
    "Palisades Park Bakery",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/shortcut-static-icon.png",
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: "Palisades Park Bakery" }],
  openGraph: {
    title: "Palisades Park Bakery | Fresh Breads & Custom Cakes",
    description:
      "Fresh breads available for group orders and custom cakes made to order. Discover our bakery in New Jersey.",
    type: "website",
    images: ["/images/main-hero-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palisades Park Bakery | Fresh Breads & Custom Cakes",
    description:
      "Fresh breads available for group orders and custom cakes made to order.",
    images: ["/images/main-hero-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <MainHeader />
        {children}
        <div className="mt-auto"></div>
        <Footer />
      </body>
    </html>
  );
}
