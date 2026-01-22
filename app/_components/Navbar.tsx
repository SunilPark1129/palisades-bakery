"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowDown from "./svg/ArrowDown";
import MobileMenu from "./svg/MobileMenu";

const navLinks = [
  { label: "Dine-In", path: "/dine-in" },
  { label: "Catering", path: "/catering" },
  { label: "Custom Cakes", path: "/custom-cakes" },
];

const cafeLinks = [
  { label: "Cakes", path: "/cakes" },
  { label: "Breads", path: "/breads" },
  { label: "Cookies", path: "/cookies" },
  { label: "Pies", path: "/pies" },
];

function Navbar() {
  const [isMenuOn, setIsMenuOn] = useState<boolean>(false);
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);

  function handleMenuClick() {
    setIsMenuOn((prev) => !prev);
  }

  useEffect(() => {
    function handleTargetClick(e: MouseEvent) {
      const target = e.target as HTMLElement;

      const isInsideNavbar = target.closest("#navbar") !== null;
      const link = target.closest("a") !== null;

      if (!isInsideNavbar || link) {
        setIsMenuOn(false);
      }

      if (isMobileMenu && link) {
        setIsMobileMenu(false);
      }
    }

    document.addEventListener("click", handleTargetClick);

    return () => {
      document.removeEventListener("click", handleTargetClick);
    };
  }, [isMobileMenu]);

  useEffect(() => {
    if (isMobileMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenu]);

  function mobileMenuClick() {
    setIsMobileMenu((prev) => !prev);
  }

  return (
    <>
      <header
        id="navbar"
        className="fixed left-0 top-0 w-full z-100 bg-(--clr-background) h-16 border-[#e8e8e8] border-b"
      >
        <div className="wrapper">
          <nav className="flex h-(--navbar-height) gap-4 items-center px-4">
            <div className="flex w-full gap-12 items-center h-full">
              <Link href={"/"}>
                <Image
                  src="/images/nav-logo.png"
                  alt="Palisades Park Bakery Logo"
                  priority
                  width={42}
                  height={42}
                />
              </Link>

              <ul className="flex gap-6 h-full items-center max-[600px]:hidden">
                <div className="relative h-full flex items-center">
                  <button
                    onClick={handleMenuClick}
                    className="flex gap-1 items-center cursor-pointer"
                  >
                    Bakery <ArrowDown isMenuOn={isMenuOn} />
                  </button>
                  {isMenuOn && (
                    <div className="bg-(--clr-background) absolute left-0 top-[calc(100%-1px)] w-56 border-b border-l border-r border-[#e8e8e8] rounded-b-lg overflow-hidden">
                      <ul className="flex flex-col w-full">
                        {cafeLinks.map((links) => {
                          return (
                            <li key={links.label} className="w-full flex">
                              <Link
                                className="w-full py-2 px-4 hover:bg-[#ebebf9]"
                                href={links.path}
                              >
                                {links.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
                {navLinks.map((links) => {
                  return (
                    <li key={links.label}>
                      <Link href={links.path}>{links.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Link
              href="https://www.ubereats.com/store/palisades-park-bakery/Kia7fAM6U6K3A9EBbOpOKw?srsltid=AfmBOorONAZ0i3xJYgiPlDLlPi3qjNEjASJf71ueJLCjZ5sJoM_n9DaB"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 max-[600px]:hidden"
            >
              Order Online
            </Link>

            <button
              onClick={mobileMenuClick}
              className="hidden cursor-pointer max-[600px]:flex text-(--clr-logo)"
            >
              <MobileMenu />
            </button>
          </nav>
        </div>
      </header>
      {isMobileMenu && (
        <div
          onClick={() => setIsMobileMenu(false)}
          className="fixed top-0 left-0 z-1000 h-full w-full flex flex-col overflow-y-auto backdrop-brightness-25 cursor-pointer"
        >
          <div className="absolute right-4 top-4">
            <button
              onClick={mobileMenuClick}
              className="cursor-pointer text-(--clr-background)"
            >
              <MobileMenu />
            </button>
          </div>
          <div
            className="flex py-12 bg-(--clr-primary) cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <ul className="flex flex-col bg-(--clr-primary) text-(--clr-background)">
                {cafeLinks.map((item) => (
                  <li key={item.label} className="w-full">
                    <Link
                      className="block px-8 py-2 hover:underline w-fit"
                      href={item.path}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex flex-col bg-(--clr-primary) text-(--clr-background)">
                {navLinks.map((item) => (
                  <li key={item.label} className="w-full">
                    <Link
                      className="block px-8 py-2 hover:underline w-fit"
                      href={item.path}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
