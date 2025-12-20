import Image from "next/image";
import dineInImg from "./images/bakery-food-img.jpg";
import SectionHeader from "../_components/ui/SectionHeader";

function DineIn() {
  return (
    <div className="wrapper">
      <section className="flex p-4 gap-4 max-[600px]:flex-col">
        <div className="flex flex-col gap-4 mx-auto flex-1 m-auto w-full min-w-[16rem]">
          <Image
            src={"/images/dinein.png"}
            width={100}
            height={64}
            alt="food character"
            className="w-[100px] h-[64px] object-contain"
          />
          <p className="text-xs uppercase tracking-wider">Dine-In</p>
          <h2 className="text-3xl font-semibold">High Quality Dine-In Meals</h2>
          <p className="max-w-[30rem] max-[600px]:max-w-full">
            Enjoy more than just cakes and breads—our café also offers a variety
            of freshly prepared meals and beverages. From warm dishes to light
            bites, everything is available for dine-in. Visit our Menu page for
            the full selection.
          </p>
          <button className="py-1 px-4 border rounded w-fit cursor-pointer hover:bg-(--clr-primary) hover:text-(--clr-background)">
            View Menu
          </button>
        </div>
        <div className="relative w-full sm:max-w-[30rem] m-auto aspect-square max-[600px]:aspect-[16/9]">
          <Image
            src={
              "https://images.unsplash.com/photo-1447279506476-3faec8071eee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Dine-In Menu"
            sizes="(max-width: 768px) 100vw, 60vw"
            loading="lazy"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default DineIn;
