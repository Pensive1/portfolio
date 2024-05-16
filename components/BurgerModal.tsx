"use client";
import Button from "./Button";
import { burgerModalProps } from "@/types/componentProps";
import { BaseSyntheticEvent, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import IcnList from "./icons/icn_list";

export default function BurgerModal({
  isMobileBreakpoint,
  isOpen,
  renderLinks,
  setBurgerMenuOpen,
}: burgerModalProps) {
  const burgerMenu = useRef<HTMLDialogElement>(null);
  const linkList = useRef<HTMLElement>(null);
  const pathName = usePathname();

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

  // Breakpoint check
  useEffect(() => {
    if (!isMobileBreakpoint) {
      fullBurgerMenuClose();
    }
  }, [isMobileBreakpoint]);

  // Route change check
  useEffect(() => {
    fullBurgerMenuClose();
  }, [pathName]);

  const handleLinkClick = (e: BaseSyntheticEvent) => {
    setBurgerMenuOpen(false);
  };

  const fullBurgerMenuClose = () => {
    setBurgerMenuOpen(false);
    burgerMenu.current?.close();
    enableScroll();
  };

  const disableScroll = () => {
    document.body.classList.add("disable-scroll");
  };

  const enableScroll = () => {
    document.body.classList.remove("disable-scroll");
  };

  return (
    <>
      <dialog
        className="burger-menu w-full fixed top-[70px] p-4 pt-8 bg-[rgba(var(--modal-fill))] z-20 rounded-b-xl md:hidden"
        ref={burgerMenu}
        onClose={enableScroll}
      >
        <div className="menu__content flex flex-col gap-16">
          <nav
            className="burger__list flex flex-col gap-8 text-[rgb(var(--txt-burger-menu))]"
            ref={linkList}
            onClick={handleLinkClick}
          >
            {renderLinks()}
          </nav>
          <Button
            href="/Richard-Acquaye_CV.pdf"
            isFile={true}
            linkType="external"
            btnType="burgerMenu"
          >
            <IcnList size={24} fillColor="white" />
            Resume
          </Button>
        </div>
      </dialog>
      {isOpen && <div className="burger-menu__backdrop"></div>}
    </>
  );
}
