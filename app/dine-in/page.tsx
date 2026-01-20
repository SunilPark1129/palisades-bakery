import {
  brunch,
  pastaAndSteak,
  pizza,
  salad,
  sandwich,
  side,
  soup,
} from "@/lib/dineMockData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dine-In Menu | Palisades Park Bakery",
  description:
    "Enjoy brunch, pasta, steak, pizza, sandwiches, salads, soups, and side orders at Palisades Park Bakery. Freshly made daily for dine-in customers in New Jersey.",
  keywords: [
    "dine-in",
    "bakery menu",
    "brunch",
    "pizza",
    "sandwich",
    "salad",
    "soup",
    "side orders",
    "Palisades Park Bakery",
  ],
  openGraph: {
    title: "Dine-In Menu | Palisades Park Bakery",
    description:
      "Freshly prepared dishes for dine-in customers including brunch, pasta, steak, pizza, sandwiches, salads, soups, and side orders.",
    type: "website",
    images: ["/images/dine-in-og.jpg"], // OG 이미지 경로
  },
  twitter: {
    card: "summary_large_image",
    title: "Dine-In Menu | Palisades Park Bakery",
    description:
      "Freshly prepared dishes for dine-in at Palisades Park Bakery in New Jersey.",
    images: ["/images/dine-in-og.jpg"],
  },
};

const dineMenu = [
  { menuTitle: "Brunch", data: brunch },
  { menuTitle: "Pasta & Steak", data: pastaAndSteak },
  { menuTitle: "Sandwich", data: sandwich },
  { menuTitle: "Salad", data: salad },
  { menuTitle: "Pizza", data: pizza },
  { menuTitle: "Soup", data: soup },
  { menuTitle: "Side Order", data: side },
];

function page() {
  return (
    <main className="wrapper p-4">
      <div className="grid grid-cols-2 gap-12 max-sm:flex max-sm:flex-col">
        {dineMenu.map((menu) => (
          <section key={menu.menuTitle} className="flex flex-col gap-6">
            <h2 className="text-[1.4rem] font-bold">{menu.menuTitle}</h2>
            {menu.data.map((item) => (
              <div key={item.id} className="flex w-full justify-between gap-4">
                <div className="flex flex-col">
                  <h3 className="w-full text-[1.1rem]">{item.title}</h3>
                  <div>{item.koTitle}</div>
                  <p className="text-[.9rem] italic">{item.description}</p>
                </div>
                <p className="text-[1.1rem] whitespace-nowrap">
                  $ {item.price}
                </p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}

export default page;
