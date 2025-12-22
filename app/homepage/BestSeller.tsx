"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import bread from "../../lib/test/3.png";
import b4 from "../../lib/test/b4.png";
import b14 from "../../lib/test/b14.png";
import b15 from "../../lib/test/b15.png";
import b18 from "../../lib/test/b18.png";
import b21 from "../../lib/test/b21.png";
// import b28 from "../../lib/test/b28.png";
import b31 from "../../lib/test/b31.png";
import b39 from "../../lib/test/b39.png";

type Props = {};

function BestSeller({}: Props) {
  const items = [
    {
      title: "Pearl Salt Bread",
      img: b4,
      price: "3.00",
    },
    {
      title: "Apple Turnover",
      img: b21,
      price: "3.50",
    },
    {
      title: "Koroke",
      img: b15,
      price: "4.00",
    },
    {
      title: "Pecan Custard",
      img: b18,
      price: "20.00",
    },
    {
      title: "Lobster Tail Pastry",
      img: b31,
      price: "5.50",
    },
    {
      title: "Red Bean Donut",
      img: b14,
      price: "3.50",
    },
    {
      title: "Castella",
      img: b39,
      price: "10.00",
    },
  ];

  return (
    <div className="wrapper">
      <section className="flex max-[860px]:flex-col items-center p-4 py-8 -my-4">
        <div className="flex flex-col gap-4 justify-center flex-1">
          <p className="text-xs uppercase tracking-wider">Best-Seller</p>
          <h2 className="text-3xl font-semibold">Made Fresh, Loved by Many</h2>
          <p className="text-gray-600">
            Discover the treats that bring smiles to our customers every day.
          </p>
        </div>

        <div className="relative max-w-[36rem] w-full flex-1 rounded-2xl">
          <div className="absolute w-full h-full z-20 pointer-events-none"></div>
          <Swiper
            grabCursor
            loop
            slidesPerView={1.8}
            spaceBetween={12}
            pagination={{
              clickable: true,
            }}
            className="!flex !items-stretch"
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto !flex py-4">
                <div className="swiper-shadow relative flex flex-col bg-[#f5f5f0] rounded-2xl transition-shadow overflow-hidden w-full">
                  <div className="relative w-full aspect-4/3 flex-shrink-0">
                    <div className="absolute right-0 bottom-0 z-10 py-0.5 px-2 text-xs uppercase bg-[#f5f5f0] rounded-tl-sm">
                      Best
                    </div>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-4 flex-1 justify-between gap-2">
                    <h3 className="sm:text-[1em] font-semibold line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="sm:text-[.9em]">$ {item.price}</p>
                    <div className="mt-auto"></div>
                    <Link href={"/"} className="text-sm">
                      See Detail
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default BestSeller;
