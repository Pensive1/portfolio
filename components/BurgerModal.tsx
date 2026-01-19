"use client";
import Button from "./Button";
import { burgerModalProps } from "@/types/componentProps";
import { useCallback, useEffect, useRef } from "react";
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
  const prevPath = useRef(usePathname());
  const currentPath = usePathname();

  const closeBurgerMenu = useCallback(() => {
    setBurgerMenuOpen(false);
    burgerMenu.current?.close();
    enableScroll();
  }, []);

  useEffect(() => {
    // Close menu on hash change
    const handleHashChange = () => {
      closeBurgerMenu();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [closeBurgerMenu]);

  //Modal status check
  useEffect(() => {
    const menu = burgerMenu.current;
    const isPathChanged = currentPath !== prevPath.current;

    console.log(`The previous path is ${prevPath.current}`);
    console.log(`The current path is ${currentPath}`);
    console.log(`Has the path changed? : ${isPathChanged}`);

    // If path changed, close the menu
    if (isPathChanged) {
      closeBurgerMenu();
      prevPath.current = currentPath; // Update ref with current path (not usePathname()!)
      return;
    }

    // Normal menu logic
    if (isOpen && menu && isMobileBreakpoint) {
      menu?.show();
      disableScroll();
    } else {
      closeBurgerMenu();
    }
  }, [isOpen, isMobileBreakpoint, currentPath, closeBurgerMenu]);



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
