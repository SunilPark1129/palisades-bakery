import CustomOrder from "./CustomOrder";
import GroupOrder from "./GroupOrder";

type Props = {};

function Special({}: Props) {
  return (
    <div className="wrapper">
      <section className="p-4 flex flex-col gap-4">
        <header className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-wider">Special-Orders</p>
          <div className="flex gap-4 items-center">
            <h2 className="text-[1.8em] leading-tight font-semibold">
              Make Custom Order
            </h2>
          </div>
          <p className="text-[1.1em]">
            See what services we can offer to make your special day.
          </p>
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
