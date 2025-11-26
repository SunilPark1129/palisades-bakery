import Image from "next/image";
import dineInImg from "./images/bakery-food-img.jpg";
import SectionHeader from "../_components/ui/SectionHeader";

function DineIn() {
  return (
    <div className="wrapper">
      <section className="flex p-4 gap-4 max-sm:p-2 mb-4">
        <div className="flex flex-col gap-4 mx-auto py-20 flex-1">
          <p className="text-xs uppercase tracking-wider">Dine-In</p>
          <h2 className="text-3xl font-semibold">High Quality Dine-In Meals</h2>
          <p>
            Enjoy more than just cakes and breads—our café also offers a variety
            of freshly prepared meals and beverages. From warm dishes to light
            bites, everything is available for dine-in. Visit our Menu page for
            the full selection.
          </p>
          <button className="py-1 px-4 border rounded w-fit mx-auto cursor-pointer hover:bg-(--clr-primary) hover:text-(--clr-background)">
            View Menu
          </button>
        </div>
        <div className="relative w-full aspect-7/3 flex-1">
          <Image
            src={dineInImg}
            alt="Dine-In Menu"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover saturate-75 contrast-90"
          />
        </div>
      </section>
    </div>
  );
}

export default DineIn;
