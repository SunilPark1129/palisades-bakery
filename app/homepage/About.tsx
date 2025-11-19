import React from "react";
import SectionHeader from "../_components/ui/SectionHeader";

function About() {
  return (
    <div className="wrapper">
      <section className="flex mx-auto p-4 max-sm:p-2 py-24 gap-6 w-full max-w-[66rem] justify-between">
        <SectionHeader title={"About Us"} />
        <p className="max-w-[48rem]">
          Palisades Park Bakery is located at 325 Broad Ave in Palisades Park,
          NJ. We take pride in our quality and fresh bread every morning. All of
          our cakes and breads are handcrafted daily by our in-house
          professional baker. Along with our baked goods, we also serve coffee
          and a selection of café-style dishes. We look forward to serving you
          with even better quality and service everyday.
        </p>
      </section>
    </div>
  );
}

export default About;
