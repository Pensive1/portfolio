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
        className={`${outfit.variable} font-sans px-4 md:px-8 xl:w-[54.75rem] xl:px-0 xl:flex-col xl:justify-items-center 2xl:w-[1128rem]`}
      >
        <Header />
        <div className="grid grid-cols-4 gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
