import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Richard Acquaye - Developer",
  description: "Creative portfolio of Richard Acquaye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <Icon iconType="question" /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
