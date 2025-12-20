import Link from "next/link";
import { SVGNumberOne } from "../_components/svg/Numbers";
// import customCakeImg from "./images/i23.jpg";
import customCakeImg from "./images/f8.jpg";
import Image from "next/image";

function CustomOrder() {
  return (
    <section className="flex w-full max-[720px]:flex-col gap-4">
      <div className="relative w-full max-w-[36rem] min-h-[16rem] max-[720px]:max-w-full aspect-16/9 rounded overflow-hidden">
        <Image
          src={customCakeImg}
          alt="Custom Cake Ordering"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover saturate-80"
        />
      </div>
      <div className="flex flex-col max-[720px]:p-0 m-auto max-[720px]:max-w-full gap-4 w-full h-auto justify-center max-w-[30rem]">
        <div className="flex gap-4 items-center">
          <SVGNumberOne />
          <h3 className="font-semibold">Custom Cake Orders</h3>
        </div>
        <p>
          From birthdays to weddings, we design custom cakes to your taste.
          Choose the size, flavors, and decorations; our in-house baker crafts
          everything fresh. Bring a reference photo or simply share your
          idea—please order in advance so we can make it perfect.
        </p>
        <Link href="/custom-cakes" className="text-blue-600 w-fit">
          Read detail
        </Link>
      </div>
    </section>
  );
}

export default CustomOrder;
