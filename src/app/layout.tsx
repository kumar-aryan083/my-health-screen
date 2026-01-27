import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-backgroundSoft text-textPrimary antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
