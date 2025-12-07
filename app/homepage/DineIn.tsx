import Image from "next/image";
import dineInImg from "./images/bakery-food-img.jpg";
import SectionHeader from "../_components/ui/SectionHeader";

function DineIn() {
  return (
    <div className="wrapper">
      <section className="flex p-4 gap-4 max-sm:p-2">
        <div className="flex flex-col gap-4 mx-auto flex-1 max-w-[44rem] m-auto">
          <Image
            src={"/images/dinein.png"}
            width={100}
            height={32}
            alt="food character"
          />
          <p className="text-xs uppercase tracking-wider">Dine-In</p>
          <h2 className="text-3xl font-semibold">High Quality Dine-In Meals</h2>
          <p className="max-w-[30rem]">
            Enjoy more than just cakes and breads—our café also offers a variety
            of freshly prepared meals and beverages. From warm dishes to light
            bites, everything is available for dine-in. Visit our Menu page for
            the full selection.
          </p>
          <button className="py-1 px-4 border rounded w-fit cursor-pointer hover:bg-(--clr-primary) hover:text-(--clr-background)">
            View Menu
          </button>
        </div>
        <div className="relative w-full aspect-square flex-1">
          <Image
            src={
              "https://images.unsplash.com/photo-1447279506476-3faec8071eee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            // src={
            //   "https://images.unsplash.com/photo-1617108862436-b4678494f439?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // }
            // src={
            //   "https://images.unsplash.com/photo-1673442635965-34f1b36d8944?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // }
            alt="Dine-In Menu"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover saturate-75 contrast-90 rounded"
          />
        </div>
      </section>
    </div>
  );
}

export default DineIn;
