"use client";

import { EntryType } from "@/lib/mockData";

type Props = { data: EntryType };

function PriceDetail({ data }: Props) {
  return (
    <>
      <p className="text-xl">$ {data.price[0]}</p>
      <div className="flex flex-col gap-2">
        {data.size && (
          <>
            <div>Size:</div>
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
          </>
        )}
      </div>
    </>
  );
}

export default PriceDetail;
