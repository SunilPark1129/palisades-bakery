import Image from "next/image";
import SectionHeader from "../_components/ui/SectionHeader";
import groupOrderImg from "./images/bakery-group-img.jpg";

function GroupOrder() {
  return (
    <div className="wrapper">
      <section className="flex p-4 max-sm:p-2 gap-4 max-[720px]:flex-col-reverse">
        <div className="flex-2">
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

        <div className="relative flex-3 aspect-3/2">
          <Image
            src={groupOrderImg}
            alt="Group & Bulk Orders"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover grayscale-65"
          />
        </div>
      </section>
    </div>
  );
}

export default GroupOrder;
