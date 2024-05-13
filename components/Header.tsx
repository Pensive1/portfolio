"use client";
import Link from "next/link";
import Button from "./Button";
import Icon from "./Icon";
// import "./icons/icn_burgerMenu";
// import "./icons/icn_close";
import { SyntheticEvent, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBurgerModal = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[rgb(var(--header-bg))] flex flex-col xl:items-center xl:w-[100vw]">
      <div className="responsive-wrapper flex justify-between md:justify-between h-[4.375rem] items-center xl:w-[54.75rem] 2xl:w-[70.5rem]">
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
          <Button
            href={"/Richard-Acquaye_CV.pdf"}
            linkType="external"
            isFile={true}
          >
            Resume
          </Button>
        </nav>
        <Link
          href="#"
          className="burger-menu md:hidden"
          onClick={toggleBurgerModal}
        >
          {isMenuOpen ? (
            <Icon iconType="close" size={2} />
          ) : (
            <Icon iconType="burgerMenu" size={2} />
          )}
        </Link>
      </div>
    </header>
  );
}
