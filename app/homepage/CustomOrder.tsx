import Link from "next/link";
import { SVGNumberOne } from "../_components/svg/Numbers";
// import customCakeImg from "./images/i23.jpg";
import customCakeImg from "./images/f8.jpg";
import Image from "next/image";

function CustomOrder() {
  return (
    <section className="flex w-full max-[720px]:flex-col gap-4">
      <div className="relative w-full max-w-xl min-h-64 max-[720px]:max-w-full aspect-video rounded overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Custom Cake Ordering"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover saturate-80"
        />
      </div>
      <div className="flex flex-col max-[720px]:p-0 m-auto max-[720px]:max-w-full gap-4 w-full h-auto justify-center max-w-120">
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
