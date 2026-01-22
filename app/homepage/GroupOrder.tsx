import Image from "next/image";
// import groupOrderImg from "./images/bakery-group-img.jpg";
import groupOrderImg from "./images/f6.jpg";
// import groupOrderImg from "./images/i24.jpg";
// import groupOrderImg from "./images/p1.jpg";
// import groupOrderImg from "./images/p_2.jpg";
// import groupOrderImg from "./images/p3_2.jpg";
// import groupOrderImg from "./images/p5.jpg";
// import groupOrderImg from "./images/p5_2.jpg";

import { SVGNumberTwo } from "../_components/svg/Numbers";
import Link from "next/link";

function GroupOrder() {
  return (
    <section className="flex flex-row-reverse w-full max-[720px]:flex-col gap-4">
      <div className="relative w-full max-w-xl min-h-64 max-[720px]:max-w-full aspect-video rounded-2xl overflow-hidden">
        <Image
          src={groupOrderImg}
          alt="Group & Bulk Orders"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover saturate-90 contrast-105"
        />
      </div>
      <div className="flex flex-col max-[720px]:p-0 m-auto max-[720px]:max-w-full gap-4 w-full h-auto justify-center max-w-120">
        <div className="flex gap-4 items-center">
          <SVGNumberTwo />
          <h3 className="font-semibold text-[1.2em]">
            Group & Bulk Bread Orders
          </h3>
        </div>
        <p className="text-[1.1em]">
          Planning a group event or gathering? We offer bulk orders of most of
          the items at our bakery, ranging from rolls, pastries, sandwiches, and
          desserts. Share your quantity and pickup time, and we’ll have
          everything ready for you. Contact us to get started.
        </p>
        <Link href="/catering" className="text-blue-600 w-fit">
          Read detail
        </Link>
      </div>
    </section>
  );
}

export default GroupOrder;
