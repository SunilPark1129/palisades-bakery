import { EntryType } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import cakeImg from "./images/bakery-cake.png";
import React from "react";

type Props = {
  category: string;
  data: EntryType[];
};

async function ProductList({ category, data }: Props) {
  return (
    <div className="wrapper">
      <main className="flex p-4 gap-4">
        <aside className="sticky h-full aside-top flex flex-col gap-1 max-w-48 mt-8 w-full">
          <div>Filter</div>
          <div>All</div>
          <div>Fresh Cream Cake</div>
          <div>Mousse Cake</div>
          <div>Special Cake</div>
          <div>Character Cake</div>
          <div>Slice Cake</div>
        </aside>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-2">
            <Link href={"/"} className="underline">
              Home
            </Link>
            {" > "}
            <div>{category.slice(0, 1).toUpperCase() + category.slice(1)}</div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
            {data.map((entry: EntryType) => (
              <section key={entry.id}>
                <Link
                  href={`http://localhost:3000/cakes/${entry.title}`}
                  className=""
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={cakeImg}
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
