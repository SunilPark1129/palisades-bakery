import Image from "next/image";
import t1 from "./images/t1.jpg";
import CheckSVG from "../_components/svg/CheckSVG";
import { Metadata } from "next";

type Props = {};

const layout = [
  {
    h3: "Order at least 2 days in advance",
    p: [
      "To make sure everything is baked and prepared, please place your order at least 2 days in advance.",
    ],
  },
  {
    h3: "Place order by phone or in-person",
    p: ["Give us a call or visit our bakery to speak with a staff member."],
  },
  {
    h3: "Provide basic information",
    p: [
      "Items wanted",
      "Quantities",
      "Allergy concerns",
      "Date & time of pickup",
    ],
  },
  {
    h3: "Pay in advance",
    p: [
      "Once payment has been confirmed, we will have the order ready for you.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Catering & Group Orders | Palisades Park Bakery",
  description:
    "Plan your event with Palisades Park Bakery! We offer group ordering for breads, cakes, and other baked goods. Perfect for office lunches, gatherings, or special occasions. Call or visit us in New Jersey to place your order.",
  keywords: [
    "group order",
    "catering",
    "large orders",
    "bakery",
    "breads",
    "cakes",
    "Palisades Park Bakery",
  ],
  openGraph: {
    title: "Catering & Group Orders | Palisades Park Bakery",
    description:
      "Flexible group ordering for breads, cakes, and more. Perfect for office lunches, parties, and special events.",
    type: "website",
    images: ["/images/catering-og.jpg"], // OG 이미지 경로
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering & Group Orders | Palisades Park Bakery",
    description:
      "Plan your event with group orders from Palisades Park Bakery. Call or visit us today in New Jersey.",
    images: ["/images/catering-og.jpg"],
  },
};

function page({}: Props) {
  return (
    <div className="wrapper">
      <main className="flex flex-col p-4">
        <header className="flex mb-8 flex-col md:flex-row gap-4">
          <div className="flex flex-1 justify-center gap-4 h-full md:min-w-[20rem]">
            <div className="pb-12">
              <Image
                src={
                  "https://images.pexels.com/photos/2067631/pexels-photo-2067631.jpeg"
                }
                alt="Bread Slices"
                height={500}
                width={500}
                priority
                className="object-cover w-56 aspect-4/7"
              />
            </div>
            <div className="pt-12">
              <Image
                src={t1}
                alt="Fruit Tarts"
                height={500}
                width={500}
                priority
                className="object-cover w-56 aspect-4/7"
              />
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col gap-2 justify-center h-full max-w-140">
              <h1 className="text-[2.25em] font-semibold">Catering</h1>
              <div className="flex flex-col gap-2">
                <h2 className="text-[1.4em] italic">Large Orders Made Easy</h2>
                <p>
                  Our bakery offers flexible group ordering on any items
                  available in our store. This ranges from breads and cakes to
                  brunch dishes and sandwiches. Whatever the occasion, we'll
                  make sure if fits your event perfectly.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-4">
          <section className="flex flex-col gap-4 sm:gap-8 m-auto w-full py-12">
            <div>
              <h2 className="text-[1.8em] font-bold">Ordering Guidelines</h2>
            </div>
            <div className="grid gap-4 sm:gap-8">
              {layout.map(({ h3, p }) => (
                <section
                  key={h3}
                  className="flex flex-col gap-2 list-decimal list-outside"
                >
                  <div className="flex items-center">
                    <h3 className="text-[1.2em] flex gap-4 items-center">
                      <CheckSVG />
                      {h3}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-2 list-disc list-inside px-4">
                    {p.map((item, idx) => (
                      <li className="text-[#58595d]" key={idx}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-[1.5em] font-bold">Place Your Order Today</h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex w-full flex-col gap-4 justify-center">
                <div>Call or Visit Us Now</div>
                <div>(201) 347-6696</div>
                <div>325 Broad Ave, Palisades Park, NJ</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default page;
