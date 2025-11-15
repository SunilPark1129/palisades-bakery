import { CakeType } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import cakeImg from "./images/bakery-cake.png";
import React from "react";

type Props = {
  category: string;
};

async function ProductList({ category }: Props) {
  const data = await fetch(`http://localhost:3000/api/${category}`)
    .then((res) => res.json())
    .then((data) => data.data as CakeType[]);

  return (
    <div className="wrapper">
      <main className="flex p-4 gap-4">
        <aside className="sticky top-0 flex flex-col gap-1 p-4 max-w-48 w-full">
          <div>Home {">"} Cakes</div>
          <div>All</div>
          <div>Fresh Cream Cake</div>
          <div>Mousse Cake</div>
          <div>Special Cake</div>
          <div>Character Cake</div>
          <div>Slice Cake</div>
        </aside>
        <div className="grid grid-cols-4 gap-6 w-full">
          {data.map((entry: CakeType) => (
            <div>
              <Link
                key={entry.id}
                href={`http://localhost:3000/cakes/${entry.title}`}
                className=""
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={cakeImg}
                    alt="Cake"
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-2">
                <h2>{entry.title}</h2>
                <p>Price: $ {entry.price[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductList;
