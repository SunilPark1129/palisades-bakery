import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <main>
      <header>
        <h1>Custom Cakes</h1>
        <p>
          Every celebration is unique and your cake should be too. From
          birthdays to weddings, we create fully customized cakes designed to
          match your vision, theme, and taste.
        </p>
      </header>
      <section>
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
      </section>
    </main>
  );
}

export default page;
