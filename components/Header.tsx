"use-client";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-[rgb(var(--header-bg))] flex flex-col xl:items-center xl:w-[100vw]">
      <div className="responsive-wrapper flex justify-center md:justify-between h-[4.375rem] items-center xl:w-[54.75rem] 2xl:w-[70.5rem]">
        <div className="logo">
          <Link
            href={"/"}
            className="text-[rgb(var(--txt-heading))] uppercase font-semibold tracking-widest"
          >
            Richard Acquaye
          </Link>
        </div>
        <nav className="hidden gap-4 md:flex md:items-center xl:gap-6 text-[rgb(var(--txt-link))]">
          <Link href={"/#projects"}>Projects</Link>
          <Link href={"/#about"}>About</Link>
          <Link href={"https://medium.com/@racquaye89"} target="_blank">
            Blog
          </Link>
          <Button href={"/Richard-Acquaye_CV.pdf"} linkType="external">
            Resume
          </Button>
        </nav>
      </div>
    </header>
  );
}
