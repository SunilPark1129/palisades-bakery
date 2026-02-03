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
      link: "/breads/693eef969fb801d4f98d4237",
      price: "3.00",
    },

    {
      title: "Castella",
      img: "/images/best-castella.png",
      link: "/breads/693eef969fb801d4f98d4242",
      price: "10.00",
    },
    {
      title: "Apple Turnover",
      img: "/images/best-turnover.png",
      link: "/breads/693eef969fb801d4f98d422c",
      price: "3.50",
    },
    {
      title: "Red Bean Donut",
      img: "/images/best-redbean.png",
      link: "/breads/69656fef03f41272a3f36eca",
      price: "3.50",
    },
    {
      title: "Koroke",
      img: "/images/best-koroke.png",
      link: "/breads/693eef969fb801d4f98d4249",
      price: "4.00",
    },

    {
      title: "Pecan Custard",
      img: "/images/best-custard.png",
      link: "/breads/693eef969fb801d4f98d4240",
      price: "20.00",
    },
  ];

  return (
    <div className="wrapper">
      <section className="flex flex-col gap-4 max-[860px]:flex-col p-4">
        <div className="flex gap-4">
          {/* <div className="relative h-80 flex-1 sm:flex hidden">
            <Image
              src="/images/best-hero.jpg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="Packaged Sliced Bread"
              className="object-cover rounded-2xl saturate-75 contrast-75"
            />
          </div> */}
          <div className="flex flex-col flex-1 w-full">
            <h2 className="text-[2em] leading-tight font-semibold text-gray-600">
              BEST-SELLER
            </h2>
            <p className="text-[1.1em]">
              Try our most loved treats and daily favorites.
            </p>
          </div>
        </div>

        <div className="relative w-full flex-1 rounded-2xl -my-2 max-h-[430px] overflow-hidden">
          <div className="absolute w-full h-full z-20 pointer-events-none"></div>
          <Swiper
            grabCursor
            slidesPerView={2.2}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              600: { slidesPerView: 2.2 },
            }}
            spaceBetween={18}
            pagination={{
              clickable: true,
            }}
            className="flex! items-stretch!"
          >
            {items.map((item, idx) => (
              <SwiperSlide key={idx} className="h-auto! flex! py-4">
                <div className="relative flex flex-col overflow-hidden w-full">
                  <div className="relative w-full aspect-7/4 shrink-0">
                    {/* <div className="absolute right-0 bottom-0 z-10 py-0.5 px-2 text-[1em] uppercase bg-[#f5f5f0] rounded-tl-sm">
                      Best
                    </div> */}
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
                    <h3 className="sm:text-[1.2em] font-semibold line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="mt-auto"></div>
                    <Link
                      href={`${item.link}`}
                      className="text-[1em] underline w-fit"
                      aria-label={`See details for ${item.title}`}
                    >
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
          alt="Drag left to see more best-selling items"
          aria-hidden
          className="object-contain w-auto h-auto ml-auto -mb-6 z-10 pointer-events-none select-none animate-pulse"
        />
      </section>
    </div>
  );
}

export default BestSeller;
