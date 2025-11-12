import Image from "next/image";
import React from "react";
import dineInImg from "./images/bakery-food-img.jpg";
import SectionHeader from "../_components/ui/SectionHeader";

function DineIn() {
  return (
    <section className="max-w-[100rem] p-4 flex flex-col gap-20 pb-[6rem]">
      <div>
        <Image
          src={dineInImg}
          alt="Dine-In Menu"
          className="object-contain aspect-2/1 saturate-75 contrast-90"
        />
      </div>
      <div className="flex flex-col gap-4 max-w-[36rem] mx-auto">
        <SectionHeader title="Dine-In Meals" />
        <p>
          Enjoy more than just cakes and breads—our café also offers a variety
          of freshly prepared meals and beverages. From warm dishes to light
          bites, everything is available for dine-in. Visit our Menu page for
          the full selection.
        </p>
        <button className="border-1 w-fit p-2 mx-auto cursor-pointer hover:bg-[var(--clr-primary)] hover:text-[var(--clr-background)]">
          View Menu
        </button>
      </div>
    </section>
  );
}

export default DineIn;
