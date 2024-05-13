"use client";
import Link from "next/link";
import Button from "./Button";
import Icon from "./Icon";
// import "./icons/icn_burgerMenu";
// import "./icons/icn_close";
import { SyntheticEvent, useState } from "react";
import BurgerModal from "./BurgerModal";

export default function Header() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
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

  const toggleBurgerModal = (e: SyntheticEvent) => {
    e.preventDefault();
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
      <header className="w-full bg-[rgb(var(--header-bg))] flex flex-col fixed top-0 xl:items-center xl:w-[100vw]">
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
            onClick={toggleBurgerModal}
          >
            {isBurgerMenuOpen ? (
              <Icon iconType="close" size={2} />
            ) : (
              <Icon iconType="burgerMenu" size={2} />
            )}
          </Link>
        </div>
      </header>
      {isBurgerMenuOpen && (
        <BurgerModal
          isOpen={isBurgerMenuOpen}
          setBurgerMenuOpen={setBurgerMenuOpen}
          renderLinks={renderLinks}
        />
      )}
    </>
  );
}
