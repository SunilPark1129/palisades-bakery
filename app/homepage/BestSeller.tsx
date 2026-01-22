"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function BestSeller({}: Props) {
  const items = [
    {
      title: "Pearl Salt Bread",
      img: "/images/best-saltbread.png",
      price: "3.00",
    },

    {
      title: "Koroke",
      img: "/images/best-koroke.png",
      price: "4.00",
    },
    {
      title: "Castella",
      img: "/images/best-castella.png",
      price: "10.00",
    },
    {
      title: "Apple Turnover",
      img: "/images/best-turnover.png",
      price: "3.50",
    },

    {
      title: "Red Bean Donut",
      img: "/images/best-redbean.png",
      price: "3.50",
    },
    {
      title: "Pecan Custard",
      img: "/images/best-custard.png",
      price: "20.00",
    },
  ];

  return (
    <div className="wrapper">
      <section className="flex flex-col gap-4 max-[860px]:flex-col p-4">
        <div className="flex gap-4">
          <div className="relative h-80 flex-1 sm:flex hidden">
            <Image
              src="/images/best-hero.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Packaged Sliced Bread"
              className="object-cover rounded-2xl saturate-75 contrast-75"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 w-full sm:justify-end sm:items-end text-left sm:text-right sm:p-4">
            <h2 className="text-[2em] leading-tight font-semibold">
              BEST-SELLER
            </h2>
            <p className="text-gray-600 text-[1.1em]">
              Discover the treats that bring smiles to our customers every day.
            </p>
          </div>
        </div>

        <div className="relative w-full flex-1 rounded-2xl -my-2">
          <div className="absolute w-full h-full z-20 pointer-events-none"></div>
          <Swiper
            grabCursor
            slidesPerView={3.2}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              480: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
            }}
            spaceBetween={18}
            pagination={{
              clickable: true,
            }}
            className="flex! items-stretch!"
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto! flex! py-4">
                <div className="swiper-shadow relative flex flex-col bg-[#f5f5f0] rounded-2xl transition-shadow overflow-hidden w-full">
                  <div className="relative w-full aspect-7/4 shrink-0">
                    <div className="absolute right-0 bottom-0 z-10 py-0.5 px-2 text-[1em] uppercase bg-[#f5f5f0] rounded-tl-sm">
                      Best
                    </div>
                    <Image
                      src={item.img}
                      alt={item.title}
                      priority={idx === 0}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-4 flex-1 justify-between gap-2">
                    <h3 className="sm:text-[1.1em] font-semibold line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="mt-auto"></div>
                    <Link href={"/"} className="text-[1em]">
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
          className="object-contain w-auto h-auto ml-auto z-10 pointer-events-none select-none animate-pulse"
        />
      </section>
    </div>
  );
}

export default BestSeller;
