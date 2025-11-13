import Image from "next/image";
import SectionHeader from "../_components/ui/SectionHeader";
import groupOrderImg from "./images/bakery-group-img.jpg";

function GroupOrder() {
  return (
    <div className="wrapper">
      <section className="flex mx-auto p-4 gap-8">
        <div className="flex flex-col justify-center gap-4 max-w-[36rem] mx-auto">
          <SectionHeader title="Group & Bulk Bread Orders" />
          <p className="max-w-[32rem]">
            Planning an office meeting or a gathering? We prepare assortments of
            rolls, baguettes, pastries, and sandwich breads in bulk. Tell us the
            quantity and pickup time, and we'll have everything fresh and ready.
            Contact us for details.
          </p>
        </div>

        <div className="relative w-full aspect-8/9">
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
