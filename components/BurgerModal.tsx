"use client";
import Button from "./Button";
import { burgerModalProps } from "@/types/componentProps";
import { BaseSyntheticEvent, useEffect, useRef } from "react";

export default function BurgerModal({
  isOpen,
  renderLinks,
  setBurgerMenuOpen,
}: burgerModalProps) {
  const burgerMenu = useRef<HTMLDialogElement>(null);
  const linkList = useRef<HTMLElement>(null);

  useEffect(() => {
    const menu = burgerMenu.current;

    if (isOpen && menu) {
      menu?.show();
      disableScroll();
    } else {
      menu?.close();
    }
  }, [isOpen]);

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
          showIcon={true}
          iconType="list"
          size={2}
        >
          Resume
        </Button>
      </div>
    </dialog>
  );
}
