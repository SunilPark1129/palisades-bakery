import Image from "next/image";
import Link from "next/link";

function GroupOrder() {
  return (
    <section className="flex flex-row-reverse w-full max-[720px]:flex-col gap-4">
      <div className="relative w-full max-w-xl max-[720px]:min-h-100 max-[720px]:max-w-full max-[720px]:aspect-video aspect-9/12 rounded-2xl overflow-hidden">
        <Image
          src={"/images/grouporder-img.png"}
          alt="Group & Bulk Orders"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover saturate-120 contrast-85"
        />
      </div>
      <div className="flex flex-col max-[720px]:p-0 m-auto max-[720px]:max-w-full gap-4 w-full h-auto justify-center max-w-90">
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-[1.2em]">Group & Bulk Orders</h3>
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
