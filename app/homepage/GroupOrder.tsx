import Image from "next/image";
import React from "react";
import SectionHeader from "../_components/ui/SectionHeader";
import groupOrderImg from "./images/bakery-group-img.jpg";

function GroupOrder() {
  return (
    <section className="flex flex-col gap-18 mx-auto max-w-[100rem] p-4">
      <div className="">
        <Image
          src={groupOrderImg}
          alt="Group & Bulk Orders"
          className=" object-contain grayscale-65 aspect-2/1"
        />
      </div>
      <div className="flex flex-col gap-4 max-w-[36rem] mx-auto">
        <SectionHeader title="Group & Bulk Bread Orders" />
        <p>
          Planning an office meeting or a gathering? We prepare assortments of
          rolls, baguettes, pastries, and sandwich breads in bulk. Tell us the
          quantity and pickup time, and we'll have everything fresh and ready.
          Contact us for details.
        </p>
      </div>
    </section>
  );
}

export default GroupOrder;
