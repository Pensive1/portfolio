"use client";
import Button from "./Button";
import { burgerModalProps } from "@/types/componentProps";
import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import IcnList from "./icons/icn_list";
//TODO: close modal if navigating away

export default function BurgerModal({
  isMobileBreakpoint,
  isOpen,
  renderLinks,
  setBurgerMenuOpen,
}: burgerModalProps) {
  const burgerMenu = useRef<HTMLDialogElement>(null);
  const linkList = useRef<HTMLElement>(null);

  //Modal status check
  useEffect(() => {
    const menu = burgerMenu.current;

    if (isOpen && menu) {
      menu?.show();
      disableScroll();
    } else {
      menu?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isMobileBreakpoint) {
      setBurgerMenuOpen(false);
      burgerMenu.current?.close();
      enableScroll();
    }
  }, [isMobileBreakpoint]);

  const handleLinkClick = (e: BaseSyntheticEvent) => {
    setBurgerMenuOpen(false);
  };

  const disableScroll = () => {
    document.body.classList.add("disable-scroll");
  };

  const enableScroll = () => {
    document.body.classList.remove("disable-scroll");
  };

  return (
    <dialog
      className="burger-menu w-full min-h-screen fixed top-[70px] p-4 bg-[rgba(var(--header-bg))]/[.7] backdrop-blur-sm md:hidden"
      ref={burgerMenu}
      onClose={enableScroll}
    >
      <div className="menu__content flex flex-col gap-8">
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
          size={2}
        >
          <IcnList size={24} fillColor="rgb(var(--btn-primary-txt))" />
          Resume
        </Button>
      </div>
    </dialog>
  );
}
