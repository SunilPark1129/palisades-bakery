import React from "react";
import SectionHeader from "../_components/ui/SectionHeader";

function Block() {
  return (
    <section className="w-full flex justify-center bg-gray-100 pt-[10rem] pb-[10rem]">
      <div className="max-w-[30rem] p-4 flex flex-col gap-4">
        <h2 className="text-3xl">
          Enjoy our freshly handcrafted{" "}
          <span className="font-semibold">Cookies</span> &{" "}
          <span className="font-semibold">Pies</span>
        </h2>
        <p>
          Enjoy our freshly baked, handcrafted cookies made in-house. From
          classic flavors to seasonal specials, each cookie is prepared with
          quality ingredients for the perfect bite.
        </p>
      </div>
    </section>
  );
}

export default Block;
