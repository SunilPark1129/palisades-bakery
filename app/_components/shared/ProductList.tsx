"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowDown from "../svg/ArrowDown";
import { IProduct } from "@/models/Product";

type Props = {
  category: string;
  data: IProduct[];
  asideCategories: string[];
};

function ProductList({ category, data, asideCategories }: Props) {
  const [list, setList] = useState<IProduct[]>(data);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isMenuOn, setIsMenuOn] = useState(false);

  function getFilteredItems(str: string) {
    setSelectedCategory(str);
    if (str === "All") {
      setList(data);
    } else {
      setList(data.filter((item) => item.category === str));
    }
    setIsMenuOn(false);
  }

  function mobileFilteredItems() {
    setIsMenuOn((prev) => !prev);
  }

  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <main className="flex p-4 pt-0 max-sm:p-2 gap-4">
        <aside className="sticky h-full aside-top flex flex-col gap-2 max-w-44 mt-8 w-full max-[900px]:hidden">
          <div>Filter</div>
          <div className="flex flex-col gap-1 pl-1">
            {asideCategories.map((item) => (
              <button
                onClick={() => getFilteredItems(item)}
                key={item}
                className={`flex cursor-pointer ${
                  selectedCategory === item
                    ? "bg-(--clr-accent) font-semibold"
                    : "bg-none"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex">
            <div className="flex gap-2">
              <Link href={"/"} className="underline">
                Home
              </Link>
              {" > "}
              <div>
                {category.slice(0, 1).toUpperCase() + category.slice(1)}
              </div>
            </div>
            <div
              onClick={mobileFilteredItems}
              className="cursor-pointer hidden max-[900px]:flex flex-col gap-1 w-fit ml-auto"
            >
              <div className="flex items-center gap-1">
                <div className="ml-auto">
                  <span className="text-sm">{selectedCategory}</span>
                </div>
                <ArrowDown isMenuOn={isMenuOn} />
              </div>
            </div>
          </div>
          {isMenuOn && (
            <div className="flex flex-col w-full border-t border-[#dedede] min-[900px]:hidden">
              {asideCategories.map((item) => (
                <button
                  onClick={() => getFilteredItems(item)}
                  key={item}
                  className={`flex justify-end cursor-pointer px-4 py-2 hover:bg-(--clr-accent) w-full text-sm ${
                    selectedCategory === item ? "hidden" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] max-[580px]:grid-cols-[repeat(2,1fr)] gap-2">
            {list.map((entry: IProduct) => {
              console.log(entry.url);
              return (
                <section key={entry._id} className="group">
                  <Link
                    href={`http://localhost:3000/${category}/${entry._id}`}
                    className=""
                  >
                    <div className="relative w-full aspect-square overflow-hidden">
                      {/* Work on this later when we have all url */}
                      <Image
                        src={
                          entry.url.includes(".")
                            ? `${entry.url}?tr=n-card_thumb`
                            : "/images/custome-cake.png"
                        }
                        // src={"/images/custome-cake.png"}
                        alt={entry.title}
                        width={500}
                        height={500}
                        unoptimized
                        className="object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </Link>
                  <div className="p-2">
                    <h2 className="text-[12px]">{entry.title}</h2>
                    <p className="text-[12px]">$ {entry.price[0]}</p>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductList;
