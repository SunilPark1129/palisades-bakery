import { homeCategories } from "@/lib/homeData";
import Image from "next/image";
import Link from "next/link";
// import bake from "./images/bread.jpg";
import bake from "./images/i13.jpg";

function Categories() {
  return (
    <div className="wrapper">
      <section className="flex flex-col w-full p-4 sm:pb-0 gap-8">
        <h2 className="sr-only">Categories</h2>
        <div className="flex w-full items-center">
          <div className="flex flex-col gap-4 w-fit">
            <p className="text-xs uppercase tracking-wider">Categories</p>
            <p className="text-[2.6em] leading-tight font-semibold text-gray-600">
              What are you Craving Today?
            </p>
            <p>Find your favorite treat among our handcrafted selection.</p>
          </div>
        </div>
        <ul className="grid grid-cols-5 gap-4 w-full max-[800px]:grid-cols-3 max-[440px]:grid-cols-2 max-[440px]:gap-2">
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
                  className="aspect-square w-full h-full object-cover group-hover:brightness-110 rounded-md"
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
