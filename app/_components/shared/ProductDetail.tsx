import { EntryType } from "@/lib/mockData";
import Image from "next/image";
import Link from "next/link";
import PriceDetail from "./PriceDetail";

export default async function ProductDetail({
  id,
  category,
}: {
  id: string;
  category: string;
}) {
  const data: EntryType = await fetch(
    `http://localhost:3000/api/${category}/${id}`
  )
    .then((res) => res.json())
    .then((data) => data.data);

  return (
    <div className="wrapper">
      {/* why max-sm:p-2 ??*/}

      <main className="flex flex-col gap-4 p-4 max-sm:p-2 mb-8">
        <div className="flex gap-2">
          <Link href={"/"} className="underline">
            Home
          </Link>
          {" > "}
          <Link href={`/${category}`} className="underline">
            {category.slice(0, 1).toUpperCase() + category.slice(1)}
          </Link>
          {" > "}
          <div>{data.title}</div>
        </div>

        <div className="flex gap-8 max-md:flex-col">
          <div className="relative flex-1 w-full aspect-square mb-auto max-w-[30rem] max-md:max-w-full">
            <Image
              src={data.url}
              alt={data.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col flex-1 gap-8 max-w-[36rem] max-md:px-4 max-md:max-w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl">{data.title}</h1>
              <PriceDetail data={data} />
              <p>{data.description}</p>
            </div>

            <div className="w-full border-b border-b-gray-200 mx-auto"></div>

            <div className="bg-gray-100 p-4">
              <div className="flex flex-col gap-4">
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
