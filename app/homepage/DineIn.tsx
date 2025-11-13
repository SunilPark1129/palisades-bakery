import Image from "next/image";
import dineInImg from "./images/bakery-food-img.jpg";
import SectionHeader from "../_components/ui/SectionHeader";

function DineIn() {
  return (
    <div className="wrapper">
      <section className="flex flex-col items-center gap-24 p-4 pb-24">
        <div className="relative w-full aspect-7/3">
          <Image
            src={dineInImg}
            alt="Dine-In Menu"
            fill
            className="object-cover saturate-75 contrast-90"
          />
        </div>
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          <SectionHeader title="Dine-In Meals" />
          <p>
            Enjoy more than just cakes and breads—our café also offers a variety
            of freshly prepared meals and beverages. From warm dishes to light
            bites, everything is available for dine-in. Visit our Menu page for
            the full selection.
          </p>
          <button className="p-2 border w-fit mx-auto cursor-pointer hover:bg-(--clr-primary) hover:text-(--clr-background)">
            View Menu
          </button>
        </div>
      </section>
    </div>
  );
}

export default DineIn;
