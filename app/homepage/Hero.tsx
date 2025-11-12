import Image from "next/image";
import React from "react";
import heroImg from "./images/bakery-hero-img.jpg";

function Hero() {
  return (
    <div className="flex flex-col gap-[1rem] pt-[1.5rem]">
      <h1 className="text-4xl text-center">PALISADES PARK BAKERY</h1>
      <div className="max-w-[100%] min-h-[100vh] relative">
        <Image
          className="object-cover absolute max-w-[100%] max-h-[100%] "
          src={heroImg}
          fill
          alt="Palisades Park Bakery Banner"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
