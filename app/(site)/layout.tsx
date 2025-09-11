import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";

import { Analytics } from "@vercel/analytics/react";
import { Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-p-28">
      <body
        className={`${outfit.variable} font-sans xl:flex xl:flex-col xl:items-center xl:overflow-x-hidden`}
      >
        {(await draftMode()).isEnabled && (
          <a
            className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
            href="/api/draft-mode/disable"
          >
            Disable preview mode
          </a>
        )}
        <Header />
        <main className="py-10 pb-16 grid grid-cols-4 gap-x-8 px-4 md:px-8 md:pb-24 xl:px-0 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6 xl:w-[54.75rem] 2xl:w-[70.5rem] gap-y-24 md:gap-y-36">
          {children}
        </main>
        <Footer />
        <Analytics />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
