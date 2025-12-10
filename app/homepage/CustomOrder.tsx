import Link from "next/link";
import { SVGNumberOne } from "../_components/svg/Numbers";
// import customCakeImg from "./images/i23.jpg";
import customCakeImg from "./images/f7.jpg";
import Image from "next/image";

function CustomOrder() {
  return (
    <section className="flex w-full max-sm:p-2 max-[720px]:flex-col">
      <div className="relative w-full max-w-[40rem] aspect-12/9 rounded overflow-hidden">
        <Image
          src={customCakeImg}
          alt="Custom Cake Ordering"
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col p-8 gap-4 w-full h-auto justify-center">
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
