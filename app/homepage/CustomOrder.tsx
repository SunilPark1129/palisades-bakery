import customCakeImg from "./images/bakery-custom-cake-img.jpg";
import Image from "next/image";
import SectionHeader from "../_components/ui/SectionHeader";

function CustomOrder() {
  return (
    <div className="wrapper">
      <section className="flex p-4">
        <div className="relative flex-1 aspect-3/4">
          <Image
            src={customCakeImg}
            alt="Custom Cake Ordering"
            fill
            className="object-cover saturate-50 contrast-90 brightness-110"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col justify-center h-full gap-4 p-4 mx-auto max-w-[420px]">
            <SectionHeader title="Order Custom Cakes" />
            <p>
              From birthdays to weddings, we design custom cakes to your taste.
              Choose the size, flavors, and decorations; our in-house baker
              crafts everything fresh. Bring a reference photo or simply share
              your idea—please order in advance so we can make it perfect.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomOrder;
