import customCakeImg from "./images/bakery-custom-cake-img.jpg";
import Image from "next/image";
import SectionHeader from "../_components/ui/SectionHeader";

function CustomOrder() {
  return (
    <div className="wrapper">
      <section className="flex p-4 max-sm:p-2 gap-4 max-[720px]:flex-col">
        <div className="relative flex-3 aspect-3/4">
          <Image
            src={customCakeImg}
            alt="Custom Cake Ordering"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover saturate-50 contrast-90 brightness-110"
          />
        </div>
        <div className="flex-2">
          <div className="flex flex-col gap-4 p-4 h-full justify-center mx-auto max-w-[420px]">
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
