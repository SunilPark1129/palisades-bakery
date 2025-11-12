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
    <nav className="p-[1rem] flex justify-between pl-[2rem] pr-[2rem]">
      <div className=" flex w-full gap-10 items-center">
        <Image
          src={logo}
          alt="Palisades Park Bakery Logo"
          priority
          className="w-[2rem] aspect-square rounded-full"
        />
        <ul className="flex gap-5">
          {navLinks.map((links) => {
            return (
              <li key={links.label}>
                <Link href={links.path}>{links.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <a
        href="https://www.ubereats.com/store/palisades-park-bakery/Kia7fAM6U6K3A9EBbOpOKw?srsltid=AfmBOorONAZ0i3xJYgiPlDLlPi3qjNEjASJf71ueJLCjZ5sJoM_n9DaB"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center whitespace-nowrap justify-center"
      >
        Order Online
      </a>
    </nav>
  );
}

export default Navbar;
