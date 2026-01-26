import { homeCategories } from "@/lib/homeData";
import Image from "next/image";
import Link from "next/link";

function Categories() {
  return (
    <div className="wrapper">
      <section className="flex flex-col w-full p-4 gap-8">
        <h2 className="sr-only">Categories</h2>
        <div className="flex w-full items-center">
          <div className="flex flex-col w-fit">
            <p className="text-xs uppercase tracking-wider pb-4">Categories</p>
            <p className="text-[2em] leading-tight font-semibold text-gray-600">
              What are you Craving Today?
            </p>
            <p className="text-[1.1em]">
              Find your favorite treat among our handcrafted selection.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-3 gap-4 w-full max-[600px]:grid-cols-2 max-[440px]:gap-2">
          {homeCategories.map((item) => (
            <li key={item.title}>
              <Link
                href={`/${item.title.toLowerCase()}`}
                className="flex flex-col gap-2 relative w-full group"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.url}
                    alt={item.title}
                    fill
                    priority
                    sizes="(max-width: 460px) 50vw, (max-width: 6000px) 50vw, 40vw"
                    className="object-cover group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="text-center text-[1em] uppercase tracking-wider">
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Categories;
