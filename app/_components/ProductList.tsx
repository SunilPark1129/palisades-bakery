import { CakeType } from "@/lib/mockData";
import React from "react";

type Props = {
  category: string;
};

async function ProductList({ category }: Props) {
  const data = await fetch(`http://localhost:3000/api/${category}`)
    .then((res) => res.json())
    .then((data) => data.data);
  return (
    <main>
      <h1></h1>
      <div>
        {data.map((entry: CakeType) => (
          <div key={entry.id}>{entry.title}</div>
        ))}
      </div>
    </main>
  );
}

export default ProductList;
