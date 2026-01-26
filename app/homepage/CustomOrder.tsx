import Link from "next/link";
import Image from "next/image";

function CustomOrder() {
  return (
    <section className="flex w-full max-[720px]:flex-col gap-4">
      <div className="relative w-full max-w-xl max-[720px]:min-h-100 max-[720px]:max-w-full max-[720px]:aspect-video aspect-9/12 rounded-2xl overflow-hidden">
        <Image
          src={"/images/custom-cake-img.png"}
          alt="Custom Cake Orders"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover saturate-80"
        />
      </div>
      <div className="flex flex-col max-[720px]:p-0 m-auto max-[720px]:max-w-full gap-4 w-full h-auto justify-center max-w-90">
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-[1.2em]">Custom Cake Orders</h3>
        </div>
        <p className="text-[1.1em]">
          We offer custom cakes for birthdays, weddings, and special occasions.
          Choose your size, flavors, and decorations, and our baker will prepare
          everything fresh. Feel free to bring a reference photo or simply tell
          us your idea.
        </p>
        <Link href="/custom-cakes" className="text-blue-600 w-fit">
          Read detail
        </Link>
      </div>
    </section>
  );
}

export default CustomOrder;
