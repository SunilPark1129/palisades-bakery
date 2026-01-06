import React from "react";
import SectionHeader from "../_components/ui/SectionHeader";
import Image from "next/image";
import f6 from "./images/f6.jpg";

function About() {
  return (
    <section className="p-4">
      <div className="wrapper !max-w-[60rem]">
        <header className="flex mx-auto gap-16 w-full justify-between max-[720]:flex-col p-8">
          {/* <p className="text-xs uppercase tracking-wider">About-Us</p> */}
          <h2 className="sr-only">About Us</h2>
          <p className="max-w-[48rem] m-auto">
            Palisade Park Bakery is located at 325 Broad Ave in Palisadess Park,
            NJ. We take pride in our quality and fresh bread every morning. All
            of our cakes and breads are handcrafted daily by our in-house
            professional baker. Along with our baked goods, we also serve coffee
            and a selection of café-style dishes. We look forward to serving you
            with even better quality and service everyday.
          </p>
        </header>
      </div>
    </section>
  );
}

export default About;
