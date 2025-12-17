import Image from "next/image";
import React from "react";
// import f11 from "../homepage/images/f11.png";
import f9 from "../homepage/images/f9.jpg";
import strawberry from "./images/strawberry.jpg";
import chocolate from "./images/chocolate.jpg";
import lemon from "./images/lemon.jpg";
import vanilla from "./images/vanilla.jpg";
// import carrot from "./images/carrot.jpg";
import more from "./images/more.jpg";
// import color from "./images/color.webp";
import color2 from "./images/color2.jpg";
import writing from "./images/writing.jpg";
import decoration from "./images/decoration.avif";
import prints from "./images/prints.webp";
import rectangle from "./images/rectangle.jpg";
import round from "./images/round.jpg";
import round2 from "./images/round2.jpg";
import tier from "./images/tier.jpg";
import BulletPoint from "../_components/svg/BulletPoint";
// import tier2 from "./images/tier2.webp";

type Props = {};

function page({}: Props) {
  return (
    <main className="flex flex-col gap-6">
      <header className="flex">
        <div className="relative w-3/5">
          <Image
            src={f9}
            alt="Palisades Park Bakery Custom Cake"
            className="object-cover saturate-80 contrast-80"
          />
        </div>
        <div className="w-2/5 p-6 bg-(--clr-background4)">
          <div className="flex flex-col h-full justify-center gap-4 max-w-100 mx-auto">
            <h1 className="text-4xl font-semibold">Custom Cakes</h1>
            <section className="flex flex-col gap-2">
              <h2 className="text-[1.1rem] italic">
                Bring Any Design. Celebrate Any Moment
              </h2>
              <p>
                From birthday celebrations to weddings and milestones, Palisades
                Park Bakery brings your custom cake ideas to life with fresh
                ingredients, any flavor you love, and fully personalized
                designs.
              </p>
            </section>
          </div>
        </div>
      </header>

      <div className="wrapper p-4">
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <h2 className="text-[1.1rem] italic">Ordering Guidelines</h2>
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4">
              <div>
                <div className="flex items-center gap-1">
                  <BulletPoint />
                  <div className="underline">
                    Order at least 2 days in advance
                  </div>
                </div>
                <ul className="list-disc list-outside pl-10">
                  <li>
                    We handcraft each custom cake, so early notice helps us
                    prepare ingredients, design details, and specialized
                    decorations.
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <BulletPoint />
                  <div className="underline">
                    Place your order by phone or in-person
                  </div>
                </div>
                <ul className="list-disc list-outside pl-10">
                  <li>Just call or visit to speak with a staff member.</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <BulletPoint />
                  <div className="underline">Provide basic information</div>
                </div>
                <ul className="list-disc list-outside pl-10">
                  <li>Cake size (up to full sheet or 10" round)</li>
                  <li>Flavor & filling</li>
                  <li>Any allergies</li>
                  <li>Date & time of pickup</li>
                  <li>Design ideas & occasion (optional)</li>
                </ul>
                <p></p>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <BulletPoint />
                  <div className="underline">Pay in advance</div>
                </div>
                <ul className="list-disc list-outside pl-10">
                  <li>
                    Once payment is confirmed, the order will be made ready for
                    you.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4 p-6 bg-(--clr-background4)">
            <div>
              <h2 className="text-[1.1rem] italic font-semibold">
                Cake Options
              </h2>
              <p>Choose your desired custom cake</p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 items-center">
                <div className="font-semibold text-lg">1. Pick your size</div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Image
                        src={rectangle}
                        alt="Strawberry Flavor Cake"
                        className="object-cover rounded-full w-32 aspect-square"
                      />
                    </div>
                    <p className="text-center text-sm text-(--clr-logo)">
                      up to full sheet
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Image
                        src={round2}
                        alt="Chocolate Flavor Cake"
                        className="object-cover rounded-full w-32 aspect-square"
                      />
                    </div>
                    <p className="text-center text-sm text-(--clr-logo)">
                      up to 10" round
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Image
                        src={tier}
                        alt="More Flavor Cakes"
                        className="object-cover rounded-full w-32 aspect-square"
                      />
                    </div>
                    <p className="text-center text-sm text-(--clr-logo)">
                      up to 2 tiers
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <p className="font-semibold text-lg">2. Pick your flavor</p>
                <div className="grid grid-cols-5 gap-6 max-md:grid-cols-3">
                  <div className="relative">
                    <Image
                      src={strawberry}
                      alt="Strawberry Flavor Cake"
                      className="object-cover rounded-full w-32 aspect-square"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={chocolate}
                      alt="Chocolate Flavor Cake"
                      className="object-cover rounded-full w-32 aspect-square"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={lemon}
                      alt="More Flavor Cakes"
                      className="object-cover rounded-full w-32 aspect-square"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={vanilla}
                      alt="More Flavor Cakes"
                      className="object-cover rounded-full w-32 aspect-square"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src={more}
                      alt="More Flavor Cakes"
                      className="object-cover rounded-full w-32 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <div className="font-semibold text-lg">
                  3. Pick your customization
                </div>

                <div className="grid grid-cols-4 gap-6 flex-2 max-md:grid-cols-3">
                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Image
                        src={color2}
                        alt="Strawberry Flavor Cake"
                        className="object-cover rounded-full w-32 aspect-square"
                      />
                    </div>
                    <p className="text-center text-sm text-(--clr-logo)">
                      color
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Image
                        src={writing}
                        alt="Chocolate Flavor Cake"
                        className="object-cover rounded-full w-32 aspect-square"
                      />
                    </div>
                    <p className="text-center text-sm text-(--clr-logo)">
                      writing
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Image
                        src={decoration}
                        alt="More Flavor Cakes"
                        className="object-cover rounded-full w-32 aspect-square"
                      />
                    </div>
                    <p className="text-center text-sm text-(--clr-logo)">
                      decoration
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="relative">
                      <Image
                        src={prints}
                        alt="More Flavor Cakes"
                        className="object-cover rounded-full w-32 aspect-square"
                      />
                    </div>
                    <p className="text-center text-sm text-(--clr-logo)">
                      printed photos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[1.1rem] italic">
              Place Your Group Order Today
            </h2>
            <p>We'll help create the perfect cake for your celebration.</p>
            <div>Call or Visit Us Now</div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default page;
