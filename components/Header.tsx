"use-client";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="responsive-wrapper">
        <div className="logo">
          <Link href={"/"}>Richard Acquaye</Link>
        </div>
        <nav className="navigation">
          <Link href={"/"}>Work</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Blog</Link>
        </nav>
      </div>
    </header>
  );
}
