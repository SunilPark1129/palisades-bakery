"use client";

import { useEffect, useState } from "react";
import logo from "./images/palisades-bakery-logo.png";
import Image from "next/image";
import Link from "next/link";
import ArrowDown from "./svg/ArrowDown";

const navLinks = [
  { label: "Dine-In", path: "/dine-In" },
  { label: "Catering", path: "/catering" },
  { label: "Location", path: "/location" },
];

const cafeLinks = [
  { label: "Cakes", path: "/cakes" },
  { label: "Breads", path: "/breads" },
  { label: "Cookies", path: "/cookies" },
  { label: "Pies", path: "/pies" },
  { label: "Desserts", path: "/desserts" },
];

function Navbar() {
  const [isMenuOn, setIsMenuOn] = useState<boolean>(false);

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
    }

    document.addEventListener("click", handleTargetClick);

    return () => {
      document.removeEventListener("click", handleTargetClick);
    };
  }, []);
  return (
    <header
      id="navbar"
      className="fixed left-0 top-0 w-full z-100 bg-(--clr-background) h-[4rem] border-[#e8e8e8] border-b-1"
    >
      <div className="wrapper">
        <nav className="flex h-(--navbar-height) gap-4 items-center px-4">
          <div className="flex w-full gap-12 items-center h-full">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Palisades Park Bakery Logo"
                priority
                width={42}
                height={42}
              />
            </Link>
            <ul className="flex gap-6 h-full items-center">
              <div className="relative h-full flex items-center">
                <button
                  onClick={handleMenuClick}
                  className="flex gap-1 items-center cursor-pointer"
                >
                  Bakery <ArrowDown isMenuOn={isMenuOn} />
                </button>
                {isMenuOn && (
                  <div className="bg-(--clr-background) absolute left-0 top-[calc(100%_-_1px)] w-[14rem] border-b-1 border-l-1 border-r-1 border-[#e8e8e8] rounded-b-lg overflow-hidden">
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
            className="shrink-0"
          >
            Order Online
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
