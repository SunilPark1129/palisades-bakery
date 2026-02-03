import CustomOrder from "./CustomOrder";
import GroupOrder from "./GroupOrder";

type Props = {};

function Special({}: Props) {
  return (
    <div className="wrapper">
      <section className="p-4 flex flex-col gap-4">
        <header className="flex flex-col gap-4">
          <div className="flex flex-col w-fit">
            <p className="text-xs uppercase tracking-wider pb-4">
              Special-Orders
            </p>
            <p className="text-[2em] leading-tight font-semibold text-gray-600">
              Make Custom Order
            </p>
            <p className="text-[1.1em]">
              See what services we can offer for you.
            </p>
          </div>
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
