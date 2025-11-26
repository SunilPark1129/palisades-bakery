import React from "react";
import CustomOrder from "./CustomOrder";
import GroupOrder from "./GroupOrder";

type Props = {};

function Special({}: Props) {
  return (
    <div className="wrapper">
      <section className="px-4 flex flex-col gap-4">
        <header className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-wider">Special-Orders</p>
          <h2 className="text-3xl font-semibold">Make Your Own Order</h2>
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
