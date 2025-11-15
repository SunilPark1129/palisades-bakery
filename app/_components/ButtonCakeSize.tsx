// "use client";

import { CakeType } from "@/lib/mockData";
import React from "react";

export default async function ButtonCakeSize({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const data: CakeType = await fetch(
    `http://localhost:3000/api/${category}/${slug}`
  )
    .then((res) => res.json())
    .then((data) => data.data);

  return (
    <div>
      {data.price.length === 1 ? (
        <button className="border border-gray-300 px-4 py-[1px] w-fit rounded-md cursor-pointer">
          {data.size[0]}
        </button>
      ) : (
        <div className="flex gap-4">
          {data.size.map((item, idx) => {
            return (
              <button
                key={idx}
                className="border border-gray-300 px-4 py-[1px] w-fit rounded-md cursor-pointer"
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
