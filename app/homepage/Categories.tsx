import { homeCategories } from "@/lib/homeData";
import Image from "next/image";
import Link from "next/link";
import bake from "./images/bread.jpg";

function Categories() {
  return (
    <div className="wrapper">
      <section className="flex flex-col w-full px-4 gap-4">
        <h2 className="sr-only">Categories</h2>
        <div className="flex flex-row-reverse w-full items-center gap-8">
          <div className="flex flex-col gap-4 max-w-[36rem] w-full">
            <p className="text-xs uppercase tracking-wider">Categories</p>
            <p className="text-xl font-semibold text-gray-600">
              What are you{" "}
              <span className="font-bold text-4xl whitespace-nowrap">
                Craving Today?
              </span>
            </p>
            <p className="">
              Find your favorite treat among our handcrafted selection.
            </p>
            <small className="text-[#ee7f7f]">
              Select the bread photo below you like
            </small>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src={bake}
              alt={"bake"}
              width={600}
              priority
              className="absoulte w-full h-full object-cover saturate-75"
            />
          </div>
        </div>
        <ul className="grid grid-cols-6 gap-2 w-full max-[800px]:grid-cols-3 max-[440px]:grid-cols-2">
          {homeCategories.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-1 rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-square group">
                <Link href={`/${item.title.toLowerCase()}`}>
                  {/* <div className="absolute left-0 left-[50%] -translate-x-1/2 bottom-2 rounded z-10 px-2 py-1 bg-[#fff] text-sm text-center">
                  {item.title}
                </div> */}
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={280}
                    priority
                    className="absoulte w-full h-full object-cover group-hover:brightness-110"
                  />
                </Link>
              </div>
              {/* <div className="text-center text-sm">{item.title}</div> */}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Categories;
