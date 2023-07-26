import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "../globals.css";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
