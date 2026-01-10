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

import heroImg from "./images/i10.jpg";

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
      <section className="flex flex-col gap-4 max-[860px]:flex-col p-4 py-8">
        <div className="flex gap-4">
          <div className="relative h-64 flex-1 sm:flex hidden">
            <Image
              src={heroImg}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt=""
              className="object-cover rounded-lg saturate-75 contrast-75"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 w-full sm:justify-end sm:items-end text-left sm:text-right sm:p-4">
            <h2 className="text-[2em] leading-tight font-semibold">
              BEST-SELLER
            </h2>
            <p className="text-gray-600">
              Discover the treats that bring smiles to our customers every day.
            </p>
          </div>
        </div>

        <div className="relative w-full flex-1 rounded-2xl -my-2">
          <div className="absolute w-full h-full z-20 pointer-events-none"></div>
          <Swiper
            grabCursor
            slidesPerView={4.5}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              480: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.5 },
            }}
            spaceBetween={18}
            pagination={{
              clickable: true,
            }}
            className="flex! items-stretch!"
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto! flex! py-4">
                <div className="swiper-shadow relative flex flex-col bg-[#f5f5f0] rounded-lg transition-shadow overflow-hidden w-full">
                  <div className="relative w-full aspect-4/3 shrink-0">
                    <div className="absolute right-0 bottom-0 z-10 py-0.5 px-2 text-xs uppercase bg-[#f5f5f0] rounded-tl-sm">
                      Best
                    </div>
                    <Image
                      src={item.img}
                      alt={item.title}
                      priority
                      width={800}
                      height={800}
                      className="absolute w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-4 flex-1 justify-between gap-2">
                    <h3 className="sm:text-[1em] font-semibold line-clamp-2">
                      {item.title}
                    </h3>
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
        <Image
          src={"/images/dragleft3.png"}
          width={85}
          height={85}
          alt="drag left image"
          className="object-contain ml-auto z-10 pointer-events-none select-none animate-pulse"
        />
      </section>
    </div>
  );
}

export default BestSeller;
