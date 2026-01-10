import Image from "next/image";
// import groupOrderImg from "./images/bakery-group-img.jpg";
// import groupOrderImg from "./images/f6.jpg";
import groupOrderImg from "./images/i24.jpg";
import { SVGNumberTwo } from "../_components/svg/Numbers";
import Link from "next/link";

function GroupOrder() {
  return (
    <section className="flex flex-row-reverse w-full max-[720px]:flex-col gap-4">
      <div className="relative w-full max-w-xl min-h-64 max-[720px]:max-w-full aspect-video rounded overflow-hidden">
        <Image
          src={groupOrderImg}
          alt="Group & Bulk Orders"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover saturate-50"
        />
      </div>
      <div className="flex flex-col max-[720px]:p-0 m-auto max-[720px]:max-w-full gap-4 w-full h-auto justify-center max-w-120">
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
