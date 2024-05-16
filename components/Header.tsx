"use client";
import Link from "next/link";
import Button from "./Button";
import IcnBurgerMenu from "./icons/icn_burgerMenu";
import IcnClose from "./icons/icn_close";
import BurgerModal from "./BurgerModal";
import { SyntheticEvent, useState, useEffect } from "react";

export default function Header() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isMobileBreakpoint, setIsMobileBreakpoint] = useState(false);
  const links = [
    { name: "Projects", url: "/#projects", isExternal: false },
    { name: "About", url: "/#about", isExternal: false },
    { name: "Blog", url: "https://medium.com/@racquaye89", isExternal: true },
  ];

  const renderLinks = () => {
    return links.map((link, i) => (
      <Link
        key={i}
        href={link.url}
        target={link.isExternal ? "_blank" : "_self"}
      >
        {link.name}
      </Link>
    ));
  };

  const toggleBurgerModalIcn = (e: SyntheticEvent) => {
    e.preventDefault();
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  //Screen width check
  useEffect(() => {
    const mobScreenSize = window.matchMedia("(width < 744px)");

    const handleScreenWidthChange = (e: MediaQueryListEvent) => {
      setIsMobileBreakpoint(e.matches);
    };

    setIsMobileBreakpoint(mobScreenSize.matches);

    mobScreenSize.addEventListener("change", handleScreenWidthChange);

    return () => {
      mobScreenSize.removeEventListener("change", handleScreenWidthChange);
    };
  }, []);

  return (
    <>
      <header className="w-full bg-[rgb(var(--header-bg))] flex flex-col sticky top-0  z-20 xl:items-center xl:w-[100vw]">
        <div className="responsive-wrapper flex justify-between md:justify-between h-[4.375rem] items-center xl:w-[54.75rem] 2xl:w-[70.5rem]">
          <div className="logo">
            <Link
              href={"/"}
              className="text-[rgb(var(--txt-heading))] uppercase font-semibold tracking-widest text-xl"
            >
              Richard Acquaye
            </Link>
          </div>
          <nav className="hidden gap-4 md:flex md:items-center xl:gap-6 text-[rgb(var(--txt-link))]">
            {renderLinks()}

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
            className="burger-trigger md:hidden"
            onClick={toggleBurgerModalIcn}
          >
            {isBurgerMenuOpen ? (
              // <Icon iconType="close" size={2} />
              <IcnClose size={24} fillColor="rgb(var(--txt-link))" />
            ) : (
              // <Icon iconType="burgerMenu" size={2} />
              <IcnBurgerMenu size={24} fillColor="rgb(var(--txt-link))" />
            )}
          </Link>
        </div>
      </header>
      <BurgerModal
        isMobileBreakpoint={isMobileBreakpoint}
        isOpen={isBurgerMenuOpen}
        setBurgerMenuOpen={setBurgerMenuOpen}
        renderLinks={renderLinks}
      ></BurgerModal>
    </>
  );
}
