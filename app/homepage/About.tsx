import React from "react";
import SectionHeader from "../_components/ui/SectionHeader";

function About() {
  return (
    <section className="flex gap-[5rem] max-w-[60rem] justify-center mx-auto">
      <SectionHeader title={"About Us"} />
      <p>
        Palisades Park Bakery is located at 325 Broad Ave in Palisades Park, NJ.
        We take pride in our quality and fresh bread every morning. All of our
        cakes and breads are handcrafted daily by our in-house professional
        baker. Along with our baked goods, we also serve coffee and a selection
        of café-style dishes. We look forward to serving you with even better
        quality and service everyday.
      </p>
    </section>
  );
}

export default About;
