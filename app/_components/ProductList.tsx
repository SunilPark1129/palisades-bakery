import { CakeType } from "@/lib/mockData";
import Link from "next/link";
import React from "react";

type Props = {
  category: string;
};

async function ProductList({ category }: Props) {
  const data = await fetch(`http://localhost:3000/api/${category}`)
    .then((res) => res.json())
    .then((data) => data.data as CakeType[]);
  return (
    <main>
      <h1></h1>
      <div className="grid">
        {data.map((entry: CakeType) => (
          <Link
            key={entry.id}
            href={`http://localhost:3000/cakes/${entry.title}`}
          >
            {entry.title}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default ProductList;
