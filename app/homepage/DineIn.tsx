import Image from "next/image";
import dineInImg from "./images/bakery-food-img.jpg";

function DineIn() {
  return (
    <div className="wrapper">
      <section className="flex p-4 py-16 gap-4 max-[720px]:flex-col">
        <div className="flex flex-col gap-4 mx-auto flex-1 m-auto w-full min-w-[16rem]">
          <p className="text-xs uppercase tracking-wider">Dine-In</p>
          <h2 className="text-[1.8em] leading-tight font-semibold">
            High Quality Dine-In Meals
          </h2>
          <p className="max-w-120 max-[720px]:max-w-full text-[1.1em]">
            Our bakery also offers a variety of freshly prepared meals, ranging
            from brunch menus to light bites. Everything is made fresh daily,
            perfect for a casual meal with family or friends. Visit our Menu
            page for the full selection.
          </p>
          <button className="py-1 px-4 border rounded w-fit cursor-pointer hover:bg-(--clr-primary) hover:text-(--clr-background) text-[1.1em]">
            View Menu
          </button>
        </div>
        <div className="relative w-full min-[720px]:max-w-140 m-auto aspect-16/11 max-[720px]:aspect-video">
          <Image
            src={
              "https://images.unsplash.com/photo-1447279506476-3faec8071eee?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Dine-In Menu"
            sizes="(max-width: 768px) 100vw, 60vw"
            loading="lazy"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
}

export default DineIn;
