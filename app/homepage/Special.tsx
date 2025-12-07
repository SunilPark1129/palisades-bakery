import React from "react";
import CustomOrder from "./CustomOrder";
import GroupOrder from "./GroupOrder";
import Image from "next/image";

type Props = {};

function Special({}: Props) {
  return (
    <div className="wrapper">
      <section className="px-4 flex flex-col gap-4">
        <header className="flex flex-col gap-4">
          {/* <p className="text-xs uppercase tracking-wider">Special-Orders</p> */}
          <div className="flex gap-4 items-center">
            <h2 className="text-3xl font-semibold">Make Custom Order</h2>
            <div className="w-fit rounded-full">
              <Image
                src="/images/custome-cake2.png"
                alt="cake"
                width={64}
                height={64}
              />
            </div>
          </div>
          <p>See what services we can offer to make your special day.</p>
        </header>
        <div className="flex flex-col gap-8">
          <CustomOrder />
          <GroupOrder />
        </div>
      </section>
    </div>
  );
}

export default Special;
