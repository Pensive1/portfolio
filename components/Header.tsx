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
      <header className="w-full bg-[rgb(var(--header-bg))] flex flex-col sticky top-0 z-20 md:relative md:bg-[rgb(var(--bg))] md:px-8 md:pt-5 xl:w-[100vw] xl:px-5 xl:pt-5">
        <div className="responsive-wrapper md:rounded-xl md:h-auto md:p-4 md:bg-[rgb(var(--header-bg))] xl:w-full xl:justify-center ">
          <div className="header__content flex justify-between h-[4.375rem] items-center w-full md:h-auto xl:w-[54.75rem] 2xl:w-[70.5rem]">
            <div className="logo">
              <Link
                href={"/"}
                className="text-[rgb(var(--txt-logo))] uppercase font-semibold tracking-widest text-xl"
              >
                Richard Acquaye
              </Link>
            </div>

            <nav className="hidden md:flex md:gap-12 md:items-center text-[rgb(var(--txt-link))]">
              <div className="flex gap-4">{renderLinks()}</div>
              <Button
                href={"/Richard-Acquaye_CV.pdf"}
                linkType="external"
                isFile={true}
                btnType="header"
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
                <IcnClose size={24} fillColor="rgb(var(--txt-link))" />
              ) : (
                <IcnBurgerMenu size={24} fillColor="rgb(var(--txt-link))" />
              )}
            </Link>
          </div>
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
