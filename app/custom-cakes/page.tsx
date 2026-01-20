import Image from "next/image";
import f9 from "../homepage/images/f9.jpg";
import CheckSVG from "../_components/svg/CheckSVG";
import { Metadata } from "next";

const layout = [
  {
    h3: "Order at least 2 days in advance",
    p: [
      "We handcraft each custom cake, so early notice helps us prepare ingredients, design details, and specialized decorations.",
    ],
  },
  {
    h3: "Place your order by phone or in-person",
    p: ["Just call or visit to speak with a staff member."],
  },
  {
    h3: "Provide basic information",
    p: [
      'Cake size (up to full sheet or 10" round)',
      "Flavor & filling",
      "Any allergies",
      "Date & time of pickup",
      "Design ideas & occasion (optional)",
    ],
  },
  {
    h3: "Pay in advance",
    p: ["Once payment is confirmed, the order will be made ready for you."],
  },
];

export const metadata: Metadata = {
  title: "Custom Cakes | Palisades Park Bakery",
  description:
    "Order your custom cake at Palisades Park Bakery. Handcrafted cakes made to order with your choice of size, flavor, and decoration. Group orders for events are also available. Call or visit us in New Jersey to place your order.",
  keywords: [
    "custom cakes",
    "handmade cake",
    "group order",
    "birthday cake",
    "wedding cake",
    "Palisades Park Bakery",
  ],
  openGraph: {
    title: "Custom Cakes | Palisades Park Bakery",
    description:
      "Handcrafted custom cakes made to order. Choose your size, flavor, and decoration. Group orders available for events. Visit us in New Jersey.",
    type: "website",
    images: ["/images/custom-cake-og.jpg"], // OG 이미지 경로
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Cakes | Palisades Park Bakery",
    description:
      "Handcrafted custom cakes made to order. Group orders available. Call or visit us today.",
    images: ["/images/custom-cake-og.jpg"],
  },
};

function page() {
  return (
    <main className="flex flex-col">
      <header className="flex max-h-160 max-[550px]:flex-col max-[550px]:max-h-full">
        <div className="relative felx-1 w-full">
          <Image
            src={f9}
            alt="Palisades Park Bakery Custom Cake"
            className="object-cover object-top saturate-80 contrast-80 w-full h-full"
          />
        </div>
        <div className="p-6 max-[550px]:py-12 bg-(--clr-background4) felx-1 w-full">
          <div className="flex flex-col h-full justify-center gap-4 max-w-100 mx-auto max-[850px]:text-[.9rem]">
            <h1 className="text-[2.25em] font-semibold">Custom Cakes</h1>
            <div className="flex flex-col gap-2">
              <h2 className="text-[1.4em] italic">
                Bring Any Design. Celebrate Any Moment
              </h2>
              <p>
                From birthday celebrations to weddings and milestones, Palisades
                Park Bakery brings your custom cake ideas to life with fresh
                ingredients, any flavor you love, and fully personalized
                designs.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="wrapper p-4">
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
                  <ul className="flex flex-col gap-2 list-disc list-inside sm:px-4">
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
          <section className="flex flex-col gap-4 sm:gap-8 py-4 rounded-2xl">
            <div className="">
              <h2 className="text-[1.8em] font-bold">Pick Your Styles</h2>
              {/* <p>Choose your desired custom cake</p> */}
            </div>
            <div className="flex flex-col gap-4 sm:gap-16">
              <section className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg flex gap-4 items-center">
                  <CheckSVG /> Pick your size
                </h3>
                <div className="grid grid-cols-3 gap-4 sm:gap-8 max-md:m-auto mr-auto">
                  <div className="flex flex-col gap-2 items-center">
                    <svg
                      className="w-full h-full max-w-32 rounded-full"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="100" height="100" fill="white" />
                      <rect
                        x="18.5"
                        y="29.5"
                        width="63"
                        height="41"
                        fill="white"
                        stroke="black"
                      />
                    </svg>
                    <div className="text-center text-sm">up to full sheet</div>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <svg
                      className="w-full h-full max-w-32 rounded-full"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="100" height="100" fill="white" />
                      <rect
                        x="18.5"
                        y="18.5"
                        width="63"
                        height="63"
                        rx="31.5"
                        fill="white"
                        stroke="black"
                      />
                    </svg>
                    <div className="text-center text-sm">up to 10" round</div>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <svg
                      className="w-full h-full max-w-32 rounded-full"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="100" height="100" fill="white" />
                      <path
                        d="M81.5 50.5V72C81.5 76.1421 78.1421 79.5 74 79.5H26C21.8579 79.5 18.5 76.1421 18.5 72V50.5H81.5Z"
                        fill="white"
                        stroke="black"
                      />
                      <rect
                        x="18.5"
                        y="38.5"
                        width="63"
                        height="23"
                        rx="11.5"
                        fill="white"
                        stroke="black"
                      />
                      <path
                        d="M73.5 27.5V46C73.5 50.1421 70.1421 53.5 66 53.5H34C29.8579 53.5 26.5 50.1421 26.5 46V27.5H73.5Z"
                        fill="white"
                        stroke="black"
                      />
                      <rect
                        x="26.5"
                        y="17.5"
                        width="47"
                        height="23"
                        rx="11.5"
                        fill="white"
                        stroke="black"
                      />
                    </svg>
                    <div className="text-center text-sm">up to 2 tiers</div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg flex gap-4 items-center">
                  <CheckSVG /> Pick your flavor
                </h3>
                <div className="grid grid-cols-4 max-md:m-auto max-md:grid-cols-2 gap-4 sm:gap-8 mr-auto">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1594282241894-4da286138f44?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    alt="strawberry"
                    width={150}
                    height={150}
                    className="object-cover rounded-full w-32 aspect-square m-auto"
                  />
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1633782330753-a346e5303840?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    width={150}
                    height={150}
                    alt="chocolate"
                    className="object-cover rounded-full w-32 aspect-square m-auto"
                  />
                  <Image
                    src={
                      "https://images.pexels.com/photos/4023132/pexels-photo-4023132.jpeg"
                    }
                    width={150}
                    height={150}
                    alt="mango"
                    className="object-cover rounded-full w-32 aspect-square m-auto"
                  />
                  <div className="relative">
                    <svg
                      width="150"
                      height="150"
                      viewBox="0 0 150 150"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full absolute rounded-full"
                    >
                      <rect width="150" height="150" fill="white" />
                      <ellipse
                        cx="74.9423"
                        cy="75.5722"
                        rx="59.3911"
                        ry="32.9467"
                        transform="rotate(-11.9971 74.9423 75.5722)"
                        fill="#E83E3E"
                        fillOpacity="0.18"
                      />
                      <path
                        d="M39.8182 63.7273H43.1818L51.0909 83.0455H51.3636L59.2727 63.7273H62.6364V87H60V69.3182H59.7727L52.5 87H49.9545L42.6818 69.3182H42.4545V87H39.8182V63.7273ZM75.0142 87.3636C73.4384 87.3636 72.0559 86.9886 70.8665 86.2386C69.6847 85.4886 68.7604 84.4394 68.0938 83.0909C67.4347 81.7424 67.1051 80.1667 67.1051 78.3636C67.1051 76.5455 67.4347 74.9583 68.0938 73.6023C68.7604 72.2462 69.6847 71.1932 70.8665 70.4432C72.0559 69.6932 73.4384 69.3182 75.0142 69.3182C76.59 69.3182 77.9688 69.6932 79.1506 70.4432C80.34 71.1932 81.2642 72.2462 81.9233 73.6023C82.59 74.9583 82.9233 76.5455 82.9233 78.3636C82.9233 80.1667 82.59 81.7424 81.9233 83.0909C81.2642 84.4394 80.34 85.4886 79.1506 86.2386C77.9688 86.9886 76.59 87.3636 75.0142 87.3636ZM75.0142 84.9545C76.2112 84.9545 77.196 84.6477 77.9688 84.0341C78.7415 83.4205 79.3134 82.6136 79.6847 81.6136C80.0559 80.6136 80.2415 79.5303 80.2415 78.3636C80.2415 77.197 80.0559 76.1098 79.6847 75.1023C79.3134 74.0947 78.7415 73.2803 77.9688 72.6591C77.196 72.0379 76.2112 71.7273 75.0142 71.7273C73.8172 71.7273 72.8324 72.0379 72.0597 72.6591C71.2869 73.2803 70.715 74.0947 70.3438 75.1023C69.9725 76.1098 69.7869 77.197 69.7869 78.3636C69.7869 79.5303 69.9725 80.6136 70.3438 81.6136C70.715 82.6136 71.2869 83.4205 72.0597 84.0341C72.8324 84.6477 73.8172 84.9545 75.0142 84.9545ZM87.017 87V69.5455H89.608V72.1818H89.7898C90.108 71.3182 90.6837 70.6174 91.517 70.0795C92.3504 69.5417 93.2898 69.2727 94.3352 69.2727C94.5322 69.2727 94.7784 69.2765 95.0739 69.2841C95.3693 69.2917 95.5928 69.303 95.7443 69.3182V72.0455C95.6534 72.0227 95.4451 71.9886 95.1193 71.9432C94.8011 71.8902 94.464 71.8636 94.108 71.8636C93.2595 71.8636 92.5019 72.0417 91.8352 72.3977C91.1761 72.7462 90.6534 73.2311 90.267 73.8523C89.8883 74.4659 89.6989 75.1667 89.6989 75.9545V87H87.017ZM105.71 87.3636C104.028 87.3636 102.578 86.9924 101.358 86.25C100.146 85.5 99.2102 84.4545 98.5511 83.1136C97.8996 81.7652 97.5739 80.197 97.5739 78.4091C97.5739 76.6212 97.8996 75.0455 98.5511 73.6818C99.2102 72.3106 100.127 71.2424 101.301 70.4773C102.483 69.7045 103.862 69.3182 105.438 69.3182C106.347 69.3182 107.244 69.4697 108.131 69.7727C109.017 70.0758 109.824 70.5682 110.551 71.25C111.278 71.9242 111.858 72.8182 112.29 73.9318C112.722 75.0455 112.938 76.4167 112.938 78.0455V79.1818H99.483V76.8636H110.21C110.21 75.8788 110.013 75 109.619 74.2273C109.233 73.4545 108.68 72.8447 107.96 72.3977C107.248 71.9508 106.407 71.7273 105.438 71.7273C104.369 71.7273 103.445 71.9924 102.665 72.5227C101.892 73.0455 101.297 73.7273 100.881 74.5682C100.464 75.4091 100.256 76.3106 100.256 77.2727V78.8182C100.256 80.1364 100.483 81.2538 100.938 82.1705C101.4 83.0795 102.04 83.7727 102.858 84.25C103.676 84.7197 104.627 84.9545 105.71 84.9545C106.415 84.9545 107.051 84.8561 107.619 84.6591C108.195 84.4545 108.691 84.1515 109.108 83.75C109.525 83.3409 109.847 82.8333 110.074 82.2273L112.665 82.9545C112.392 83.8333 111.934 84.6061 111.29 85.2727C110.646 85.9318 109.85 86.447 108.903 86.8182C107.956 87.1818 106.892 87.3636 105.71 87.3636Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-[#ff0000] text-sm pt-4">
                  *We make custom cakes in many different flavors. If you're
                  looking for a particular flavor, please call us to see if it's
                  available.
                </div>
              </section>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg flex gap-4 items-center">
                  <CheckSVG /> Pick your customization
                </h3>
                <div className="grid grid-cols-4 flex-2 max-md:grid-cols-2 gap-4 sm:gap-8 max-md:m-auto mr-auto">
                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1552084117-56a987666449?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      width={150}
                      height={150}
                      alt="colors"
                      className="object-cover rounded-full w-32 aspect-square"
                    />
                    <div className="text-sm">color</div>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      width={150}
                      height={150}
                      alt="writing on the cake"
                      className="object-cover rounded-full w-32 aspect-square"
                    />
                    <div className="text-sm">writing</div>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1600566209579-dd9691ed2ff0?q=80&w=814&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      width={150}
                      height={150}
                      alt="birthday candles"
                      className="object-cover rounded-full w-32 aspect-square"
                    />
                    <div className="text-sm">decoration</div>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1684741892149-e741a75f8f71?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      width={150}
                      height={150}
                      alt="photos displayed on the wall"
                      className="object-cover rounded-full w-32 aspect-square"
                    />
                    <div className="text-sm">printed photos</div>
                  </div>
                </div>
                <div className="text-[#ff0000] text-sm pt-4">
                  *You can call to ask about the cake style or decoration you
                  want.
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4 pt-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-[1.8em] font-bold">Place Your Order Today</h2>
              <p>We'll help create the perfect cake for your celebration.</p>
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
      </div>
    </main>
  );
}

export default page;
