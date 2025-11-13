import React from "react";
import SectionHeader from "../_components/ui/SectionHeader";

function Block() {
  return (
    <section className="bg-gray-100 py-40">
      <div className="wrapper">
        <div className="flex flex-col gap-4 p-4 mx-auto max-w-[30rem]">
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
      </div>
    </section>
  );
}

export default Block;
