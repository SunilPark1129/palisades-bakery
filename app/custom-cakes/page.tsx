import Image from "next/image";
import React from "react";
import f9 from "../homepage/images/f9.jpg";

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
        <section>
          <h2 className="text-[1.1rem] italic">Ordering Guidelines</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div>Order at least 2 days in advance</div>
              <p>
                We handcraft each custom cake, so early notice helps us prepare
                ingredients, design details, and specialized decorations.
              </p>
            </div>
            <div>
              <div>Place your order by phone or in-person</div>
              <p>Just call or visit to speak with a staff member.</p>
            </div>
            <div>
              <div>Provide basic information</div>
              <ul className="list-disc list-inside pl-4">
                <li>Cake size (up to full sheet or 10" round)</li>
                <li>Flavor & filling</li>
                <li>Any allergies</li>
                <li>Date & time of pickup</li>
                <li>Design ideas & occasion (optional)</li>
              </ul>
              <p></p>
            </div>
            <div>
              <div>Pay in advance</div>
              <p>
                Once payment is confirmed, the order will be made ready for you.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[1.1rem] italic">Cake Options</h2>
          <div className="flex flex-col gap-4">
            <div>
              <div>Sizes</div>
              <div>
                <p>Up to full sheet cakes</p>
                <p>Up to 10" round cakes</p>
                <p>Up to 2 tiers</p>
              </div>
            </div>
            <div>
              <div>Flavors</div>
              <p>All flavors are available upon request.</p>
            </div>
            <div>
              <div>Customization</div>
              <p>Colors, decorations, and writing done to request</p>
              <p>Accomodations available for basic dietary needs</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[1.1rem] italic">Place Your Group Order Today</h2>
          <p>We'll help create the perfect cake for your celebration.</p>
          <div>Call or Visit Us Now</div>
        </section>

        {/* <section>
          <h2>What You Can Customize</h2>
          <section>
            <h3>Cake Size</h3>
            <ul>
              <li>6", 8", 10" Round Cakes</li>
              <li>Half & Full Sheet Cakes</li>
              <li>Multi-Tier Wedding Cakes</li>
            </ul>
          </section>
          <section>
            <h3>Design</h3>
            <ul>
              <li>Minimal & Elegant</li>
              <li>Floral & Romantic</li>
              <li>Character & Themed Cakes</li>
            </ul>
          </section>
          <section>
            <h3>Flavors</h3>
            <ul>
              <li>Vanilla</li>
              <li>Strawberry</li>
              <li>Chocolate</li>
              <li>Red Velvet</li>
              <li>Lemon</li>
              <li>Matcha</li>
            </ul>
          </section>
          <section>
            <h3>Fillings & Frosting</h3>
            <ul>
              <li>Fresh Cream</li>
              <li>Buttercream</li>
              <li>Cream Cheese Frosting</li>
              <li>Fruit Fillings</li>
              <li>Chocolate Ganache</li>
            </ul>
          </section>
          <div>Flavor and design options may vary by season.</div>
        </section>
        <section>
          <h2>Perfect For</h2>
          <ul>
            <li>Birthdays</li>
            <li>Weddings & Engagements</li>
            <li>Anniversaries</li>
            <li>Baby Showers</li>
            <li>Graduations</li>
            <li>Corporate Events</li>
          </ul>
        </section>
        <section>
          <h2>How to Order</h2>
          <ol>
            <li>
              Choose Your flavor - Think about the what kind of flavor cake you
              want.
            </li>
            <li>
              Deisgn Consultation - Contact us to confirm your design, flavor, and
              pricing.
            </li>
            <li>Confirmation & Deposit - Orders are confirmed with a deposit.</li>
            <li>Pickup - Your cake will be ready on your selected date.</li>
          </ol>
        </section>
        <section>
          <div>
            <h2>Custom Cake Request</h2>
            <p>We'd love to help.</p>
          </div>
          <div>
            <div>Phone: (000) 000-0000</div>
            <div>Address: 325 Broad Ave, Palisades Park, NJ 07650</div>
            <div>Email: 000@gmail.com</div>
          </div>
        </section>
        <section>
          <h2>Frequently Asked Questions</h2>
          <dialog>
            <summary>How far in advance should I order?</summary>
            <p>
              We recommend at least 48-72 hours notice for standard catering
              orders.
            </p>
          </dialog>
          <dialog>
            <summary>Can you accommodate allergies?</summary>
            <p>Yes! Please notify us of any allergies when placing your order.</p>
          </dialog>
        </section> */}
      </div>
    </main>
  );
}

export default page;
