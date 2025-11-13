import React from "react";
import logo from "./images/palisades-bakery-logo.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const navLinks = [
  { label: "Cakes", path: "/cakes" },
  { label: "Breads", path: "/breads" },
  { label: "Cookie", path: "/cookie" },
  { label: "Dine-In", path: "/dine-In" },
  { label: "Catering", path: "/catering" },
  { label: "Location", path: "/location" },
];

function Navbar({}: Props) {
  return (
    <header>
      <div className="wrapper">
        <nav className="flex p-4 gap-4 items-center">
          <div className="flex w-full gap-12 items-center">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Palisades Park Bakery Logo"
                priority
                width={42}
                height={42}
              />
            </Link>
            <ul className="flex gap-6">
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
