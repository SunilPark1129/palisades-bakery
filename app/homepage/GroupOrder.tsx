import Image from "next/image";
import SectionHeader from "../_components/ui/SectionHeader";
import groupOrderImg from "./images/bakery-group-img.jpg";

function GroupOrder() {
  return (
    <div className="wrapper">
      <section className="flex p-4">
        <div className="flex-1">
          <div className="flex flex-col gap-4 p-4 h-full justify-center mx-auto max-w-[420px]">
            <SectionHeader title="Group & Bulk Bread Orders" />
            <p className="">
              Planning an office meeting or a gathering? We prepare assortments
              of rolls, baguettes, pastries, and sandwich breads in bulk. Tell
              us the quantity and pickup time, and we'll have everything fresh
              and ready. Contact us for details.
            </p>
          </div>
        </div>

        <div className="relative flex-1 aspect-3/4">
          <Image
            src={groupOrderImg}
            alt="Group & Bulk Orders"
            fill
            className="object-cover grayscale-65"
          />
        </div>
      </section>
    </div>
  );
}

export default GroupOrder;
