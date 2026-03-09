"use client";
import Button from "./Button";
import { burgerModalProps } from "@/types/componentProps";
import { useEffect, useCallback, useRef } from "react";
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
  const currentPath = usePathname();

  const closeBurgerMenu = useCallback(() => {
    setBurgerMenuOpen(false);
  }, []);

  useEffect(() => {
    const menu = burgerMenu.current;
    if (!menu) return;

    if (isOpen && isMobileBreakpoint) {
      menu.show();
      document.body.classList.add("disable-scroll");
    } else {
      menu.close();
      document.body.classList.remove("disable-scroll");
    }
  }, [isOpen, isMobileBreakpoint]);

  // Close on path or hash change (covers back button too)
  useEffect(() => {
    closeBurgerMenu();
  }, [currentPath, closeBurgerMenu]);

  useEffect(() => {
    const handlePopState = () => closeBurgerMenu();
    const handleHashChange = () => closeBurgerMenu();

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [closeBurgerMenu]);

  // Cleanup scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, []);

  return (
    <>
      <dialog
        className="burger-menu w-full fixed top-[70px] p-4 pt-8 bg-[rgba(var(--modal-fill))] z-20 rounded-b-xl md:hidden"
        ref={burgerMenu}
      >
        <div className="menu__content flex flex-col gap-16">
          <nav
            className="burger__list flex flex-col gap-8 text-[rgb(var(--txt-burger-menu))]"
            ref={linkList}
            onClick={closeBurgerMenu}
          >
            {renderLinks()}
          </nav>
          <Button
            href={"/Richard-Acquaye_CV.pdf"}
            isFile={true}
            btnType="header"
          >
            <IcnList size={24} fillColor="white" />
            Resume
          </Button>
        </div>
      </dialog>
      {isOpen && (
        <div className="burger-menu__backdrop" onClick={closeBurgerMenu}></div>
      )}
    </>
  );
}
