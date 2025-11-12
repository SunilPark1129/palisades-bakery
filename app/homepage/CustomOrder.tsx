import React from "react";
import customCakeImg from "./images/bakery-custom-cake-img.jpg";
import Image from "next/image";
import SectionHeader from "../_components/ui/SectionHeader";

function CustomOrder() {
  return (
    <section className="max-w-[100rem] flex justify-center gap-10 p-4">
      <div className="">
        <Image
          src={customCakeImg}
          alt="Custom Cake Ordering"
          className="object-contain saturate-50 contrast-90 brightness-110 min-w-[20rem]"
        />
      </div>
      <div className="flex flex-col gap-4 p-4 justify-center max-w-[30rem]">
        <SectionHeader title="Order Custom Cakes" />
        <p>
          From birthdays to weddings, we design custom cakes to your taste.
          Choose the size, flavors, and decorations; our in-house baker crafts
          everything fresh. Bring a reference photo or simply share your
          idea—please order in advance so we can make it perfect.
        </p>
      </div>
    </section>
  );
}

export default CustomOrder;
