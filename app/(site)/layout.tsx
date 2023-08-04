import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Richard Acquaye - Developer Portfolio",
  description: "Creative portfolio of Richard Acquaye.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans xl:flex xl:flex-col xl:items-center`}
      >
        <Header />
        <div className="grid grid-cols-4 gap-x-4 px-4 md:px-8 xl:px-0 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6 xl:w-[54.75rem] 2xl:w-[70.5rem]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
