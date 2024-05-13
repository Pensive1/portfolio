"use client";

import Link from "next/link";
import Button from "./Button";
import { burgerModalProps } from "@/types/componentProps";
import { BaseSyntheticEvent, SyntheticEvent, useEffect, useRef } from "react";

export default function BurgerModal({
  isOpen,
  renderLinks,
  setBurgerMenuOpen,
}: burgerModalProps) {
  const burgerMenu = useRef<HTMLDialogElement>(null);
  const linkList = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log(`Modal is open: ${isOpen}`);
    if (isOpen) {
      burgerMenu.current?.show();
    } else {
      burgerMenu.current?.close();
    }
  }, [isOpen]);

  //   const closeModal = () => {
  //     burgerMenu.current?.close();
  //     setBurgerMenuOpen(false);
  //   };

  const handleLinkClick = (e: BaseSyntheticEvent) => {
    // console.dir(e.target);
    console.log("Burger menu link clicked");
    console.dir(e);

    setBurgerMenuOpen(false);
  };

  return (
    <dialog
      className="burger-menu w-full fixed top-[70px] p-4 flex flex-col gap-8 bg-[rgba(var(--header-bg))]/[.7] backdrop-blur-sm md:hidden"
      ref={burgerMenu}
    >
      <nav
        className="burger__list flex flex-col gap-6 text-[rgb(var(--txt-link))]"
        ref={linkList}
        onClick={handleLinkClick}
      >
        {renderLinks()}
      </nav>
      <Button
        href="/Richard-Acquaye_CV.pdf"
        isFile={true}
        linkType="external"
        showIcon={true}
        iconType="list"
        size={2}
      >
        Resume
      </Button>
    </dialog>
  );
}
