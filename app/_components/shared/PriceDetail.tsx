"use client";

import { IProduct } from "@/models/Product";
import { useState } from "react";

type Props = { data: IProduct };

function PriceDetail({ data }: Props) {
  const [price, setPrice] = useState<string>(data.price[0]);
  const [selectedSize, setSelectedSize] = useState<number>(0);

  function getProductPrice(index: number) {
    setSelectedSize(index);
    setPrice(data.price[index]);
  }

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl  max-md:text-lg">$ {price}</p>
      {data.size.length !== 0 && (
        <div className="flex flex-col gap-2">
          <div>Size:</div>
          <div className="flex gap-4">
            {data.size.map((item, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => getProductPrice(idx)}
                  className={`border border-gray-300 px-4 py-[1px] w-fit rounded-md cursor-pointer ${
                    selectedSize === idx ? "bg-(--clr-accent)" : "bg-none"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default PriceDetail;
