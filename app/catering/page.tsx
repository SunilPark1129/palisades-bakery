import Image from "next/image";
import t1 from "./images/t1.jpg";
// import t2 from "./images/t2.jpg";
// import t3 from "./images/t3.jpg";
// import t4 from "./images/t4.jpg";
// import t5 from "./images/t5.jpg";

type Props = {};

const layout = [
  {
    h3: "Order at least 2 days in advance",
    p: [
      "  This gives our team time to prepare fresh items in the quantities you need.",
    ],
  },
  {
    h3: "Place your order by phone or in-person",
    p: ["Just call or visit to speak with a staff member."],
  },
  {
    h3: "Provide basic information",
    p: ["Items wanted", "Quantity", "Any allergies", "Date & time of pickup"],
  },
  {
    h3: "Pay in advance",
    p: ["Once payment is confirmed, the order will be made ready for you."],
  },
];

function page({}: Props) {
  return (
    <div className="wrapper">
      <main className="flex flex-col gap-6 p-4">
        <header className="flex mb-8">
          <div className="flex flex-1 justify-center gap-4 h-full">
            <div>
              <Image
                src={
                  "https://images.pexels.com/photos/2067631/pexels-photo-2067631.jpeg"
                }
                alt="Bread Slices"
                height={500}
                width={500}
                className="object-cover w-56 aspect-4/7"
              />
            </div>
            <div className="translate-y-14">
              <Image
                src={t1}
                alt="Fruit Tarts"
                height={500}
                width={500}
                className="object-cover w-56 aspect-4/7"
              />
            </div>
          </div>
          <div className="flex-1 p-4 flex justify-center">
            <div className="flex flex-col gap-2 justify-center h-full max-w-140">
              <h1 className="text-[2.25rem] font-semibold">Catering</h1>
              <div className="flex flex-col gap-2">
                <h2 className="text-[1.4rem] italic">Large Orders Made Easy</h2>
                <p>
                  Whether you're planning a lunch, gathering, or special event,
                  our bakery offers flexible group ordering on any item we make
                  — from breads and cakes to brunch dishes and sandwiches.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="flex flex-col gap-8 max-w-[60rem] m-auto w-full sm:py-12">
          <div className="text-center py-4">
            <h2 className="text-[1.5em] font-bold">Ordering Guidelines</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {layout.map(({ h3, p }) => (
              <section
                key={h3}
                className="flex flex-col gap-2 list-decimal list-outside"
              >
                <div className="flex items-center">
                  <h3 className="text-[1.2em]">{h3}</h3>
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

        <section className="flex flex-col gap-4 max-w-[60rem] m-auto w-full sm:py-12">
          <div className="text-center py-4">
            <h2 className="text-[1.5em] font-bold">
              Place Your Group Order Today
            </h2>
            <p>We'll help create the perfect cake for your celebration.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex w-full flex-col gap-2 justify-center items-center">
              <div>Call or Visit Us Now</div>
              <div>(201) 347-6696</div>
              <div>325 Broad Ave, Palisades Park, NJ</div>
            </div>
            <div className="w-full">
              <Image
                src={"/images/building.png"}
                width={500}
                height={500}
                alt="palisades park building"
                className="w-full aspect-[16/13] object-cover"
              />
            </div>
          </div>
        </section>
        {/* <section>
          <h2>Our Catering Menu</h2>
          <section>
            <h3>Breakfast & Brunch</h3>
            <ul>
              <li>Assorted Croissants (Butter, Almond, Chocolate)</li>
              <li>Muffin & Scone Platter</li>
              <li>Bagels with Cream Cheese & Jam</li>
              <li>Mini Danish Collection</li>
            </ul>
          </section>
          <section>
            <h3>Desserts & Pastries</h3>
            <ul>
              <li>Mini Cakes & Cupcakes</li>
              <li>Assorted Cookies & Brownies</li>
              <li>Seasonal Fruit Tarts</li>
              <li>Custom Dessert Platters</li>
            </ul>
          </section>
          <section>
            <h3>Savory Options</h3>
            <ul>
              <li>Artisan Bread Basket</li>
              <li>Sandwich & Slider Platters</li>
              <li>Quiche & Savory Pastries</li>
            </ul>
          </section>
          <div>
            All items can be customized for allergies, dietary preferences, and
            event size.
          </div>
        </section>
        <section>
          <h2>Why Choose Our Catering?</h2>
          <ul>
            <li>Baked Fresh Daily</li>
            <li>Premium Ingredients</li>
            <li>Custom Orders Welcome</li>
            <li>Perfect for Any Event Size</li>
          </ul>
        </section>
        <section>
          <h2>Perfect For</h2>
          <ul>
            <li>Corporate Meetings</li>
            <li>Weddings & Receptions</li>
            <li>Birthday Parties</li>
            <li>Baby Showers & Bridal Showers</li>
            <li>School & Community Events</li>
          </ul>
        </section>
        <section>
          <h2>How It Works</h2>
          <ol>
            <li>Choose Your Menu - Select items from our menu page.</li>
            <li>Place Your Order - Contact us directly through call.</li>
            <li>We Bake & Prepare - Everything is baked fresh.</li>
            <li>Pickup - Pickup your order from our store.</li>
          </ol>
        </section>
        <section>
          <div>
            <h2>Catering Inquiry</h2>
            <p>Have a special request or large order? We'd love to help.</p>
          </div>
          <div>
            <div>Phone: (000) 000-0000</div>
            <div>Address: 325 Broad Ave, Palisades Park, NJ 07650</div>
            <div>Email: 000@gmail.com</div>
            <div>Minimum Order: $50</div>
            <div>Lead Time: 48 hours notice required.</div>
          </div>
        </section>
        <section>
          <h2>Frequently Asked Questions</h2>
          <details>
            <summary>How far in advance should I order?</summary>
            <p>
              We recommend at least 48-72 hours notice for standard catering
              orders.
            </p>
          </details>
          <details>
            <summary>Can you accommodate allergies?</summary>
            <p>Yes! Please notify us of any allergies when placing your order.</p>
          </details>
          <details>
            <summary>How to contact us?</summary>
            <p>
              You can directly call now: (000) 000-0000. Or visit our store: 325
              Broad Ave, Palisades Park, NJ 07650. We are excited to help you!
            </p>
          </details>
        </section> */}
      </main>
    </div>
  );
}

export default page;
