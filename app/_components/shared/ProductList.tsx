"use client";

import { EntryType } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  category: string;
  data: EntryType[];
  asideCategories: string[];
};

function ProductList({ category, data, asideCategories }: Props) {
  const [list, setList] = useState<EntryType[]>(data);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  function getFilteredItems(str: string) {
    setSelectedCategory(str);
    if (str === "All") {
      setList(data);
    } else {
      setList(data.filter((item) => item.category === str));
    }
  }

  return (
    <div className="wrapper">
      <main className="flex p-4 gap-4">
        <aside className="sticky h-full aside-top flex flex-col gap-2 max-w-48 mt-8 w-full max-[900px]:hidden">
          <div>Filter</div>
          <div className="flex flex-col gap-1 pl-1">
            <button
              onClick={() => getFilteredItems("All")}
              className={`flex cursor-pointer ${
                selectedCategory === "All" ? "bg-(--clr-accent)" : "bg-none"
              }`}
            >
              All
            </button>
            {asideCategories.map((item) => (
              <button
                onClick={() => getFilteredItems(item)}
                key={item}
                className={`flex cursor-pointer ${
                  selectedCategory === item ? "bg-(--clr-accent)" : "bg-none"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2">
            <Link href={"/"} className="underline">
              Home
            </Link>
            {" > "}
            <div>{category.slice(0, 1).toUpperCase() + category.slice(1)}</div>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2">
            {list.map((entry: EntryType) => (
              <section key={entry.id}>
                <Link
                  href={`http://localhost:3000/${category}/${entry.title}`}
                  className=""
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      // src={cakeImg}
                      src={entry.url}
                      alt={entry.title}
                      fill
                      sizes="400px"
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-2">
                  <h2 className="text-[12px]">{entry.title}</h2>
                  <p className="text-[12px]">$ {entry.price[0]}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductList;
