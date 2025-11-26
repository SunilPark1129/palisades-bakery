import Image from "next/image";
import groupOrderImg from "./images/bakery-group-img.jpg";
import { SVGNumberTwo } from "../_components/svg/Numbers";
import Link from "next/link";

function GroupOrder() {
  return (
    <section className="flex flex-row-reverse w-full max-sm:p-2 max-[720px]:flex-col">
      <div className="relative w-full max-w-[40rem] aspect-16/9 rounded overflow-hidden">
        <Image
          src={groupOrderImg}
          alt="Group & Bulk Orders"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover grayscale-65"
        />
      </div>
      <div className="flex flex-col p-8 gap-4 w-full h-auto justify-center">
        <div className="flex gap-4 items-center">
          <SVGNumberTwo />
          <h3 className="font-semibold">Group & Bulk Bread Orders</h3>
        </div>
        <p>
          Planning an office meeting or a gathering? We prepare assortments of
          rolls, baguettes, pastries, and sandwich breads in bulk. Tell us the
          quantity and pickup time, and we'll have everything fresh and ready.
          Contact us for details.
        </p>
        <Link href="/catering" className="text-blue-600 w-fit">
          Read detail
        </Link>
      </div>
    </section>
  );
}

export default GroupOrder;
