import { CakeType } from "@/lib/mockData";
import Image from "next/image";
import cakeImg from "./images/bakery-cake.png";
import Link from "next/link";
import ButtonCakeSize from "./ButtonCakeSize";

export default async function ProductDetail({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const data: CakeType = await fetch(
    `http://localhost:3000/api/${category}/${slug}`
  )
    .then((res) => res.json())
    .then((data) => data.data);

  return (
    <div className="wrapper">
      <main className="flex flex-col gap-4 p-4 pb-16">
        <div className="flex gap-2">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          {" > "}
          <Link href={`/${category}`} className="hover:underline">
            {category.slice(0, 1).toUpperCase() + category.slice(1)}
          </Link>
          {" > "}
          <div>{slug}</div>
        </div>

        <div className="flex gap-8">
          <div className="relative flex-1 w-full aspect-square">
            <Image src={cakeImg} alt="Cake" fill className="object-cover" />
          </div>

          <div className="flex flex-col flex-1 gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl">{data.title}</h2>
              <p>$ {data.price[0]}</p>
              <div className="flex flex-col gap-2">
                <p>Size:</p>
                {data.price.length === 1 ? (
                  <button className="border border-gray-300 px-4 py-[1px] w-fit rounded-md cursor-pointer">
                    {data.size[0]}
                  </button>
                ) : (
                  <div className="flex gap-4">
                    {data.size.map((item, idx) => {
                      return (
                        <button
                          key={idx}
                          className="border border-gray-300 px-4 py-[1px] w-fit rounded-md cursor-pointer"
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
              <p>{data.description}</p>
            </div>

            <div className="w-1/2 border-b-[2px] border-b-gray-200 mx-auto"></div>

            <div className="bg-gray-100 p-4">
              <div className="flex flex-col gap-4 max-w-120">
                <p>Did you find something you like?</p>
                <p>We're happy to serve you!</p>
                <ul className="list-disc list-outside pl-6">
                  <li>You can purchase it in store.</li>
                  <li>You can also pre-purchase by calling us.</li>
                  <li>
                    If you'd like to check whether it's currently available,
                    please feel free to give us a call.
                  </li>
                </ul>
                <div className="font-semibold">
                  <address className="not-italic">
                    325 Broad Ave, Palisades Park, NJ 07605
                  </address>
                  <div>(201) 347-6696</div>
                </div>
                <p>*For custom orders, please contact our bakery by phone.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
