import { homeCategories } from "@/lib/homeData";
import Image from "next/image";
import Link from "next/link";
// import bake from "./images/bread.jpg";
import bake from "./images/i13.jpg";

function Categories() {
  return (
    <div className="wrapper">
      <section className="flex flex-col w-full p-4 gap-4">
        <h2 className="sr-only">Categories</h2>
        <div className="flex justify-center w-full items-center">
          <div className="flex flex-col gap-4 w-fit">
            <p className="text-xs uppercase tracking-wider">Categories</p>
            <p className="text-3xl font-semibold text-gray-600">
              What are you Craving Today?
            </p>
            <p className="">
              Find your favorite treat among our handcrafted selection.
            </p>
          </div>
          {/* <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={bake}
              alt={"bake"}
              width={600}
              priority
              className="absoulte w-full h-full object-cover"
            />
          </div> */}
        </div>
        <ul className="grid grid-cols-6 gap-4 w-full max-[800px]:grid-cols-3 max-[440px]:grid-cols-2">
          {homeCategories.map((item) => (
            <li key={item.title}>
              <Link
                href={`/${item.title.toLowerCase()}`}
                className="flex flex-col gap-2 relative w-full group"
              >
                <Image
                  src={item.url}
                  alt={item.title}
                  width={280}
                  height={280}
                  priority
                  className="aspect-square rounded-full w-full h-full object-cover group-hover:brightness-110"
                />
                <div className="text-center text-xs uppercase tracking-wider">
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Categories;
