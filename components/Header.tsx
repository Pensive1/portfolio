"use-client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#f2f2f2] text-[#333333] flex flex-col xl:items-center xl:w-[100vw]">
      <div className="responsive-wrapper flex justify-between h-[4.375rem] items-center xl:w-[54.75rem] 2xl:w-[70.5rem]">
        <div className="logo">
          <Link href={"/"}>Richard Acquaye</Link>
        </div>
        <nav className="flex gap-4 xl:gap-6">
          <Link href={"/#projects"}>Projects</Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"/"}>Blog</Link>
        </nav>
      </div>
    </header>
  );
}
