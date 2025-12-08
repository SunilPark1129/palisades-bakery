"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

type Props = {};

function BestSeller({}: Props) {
  const items = [
    {
      title: "Butter Croissant",
      img: "/images/best/b1.png",
      price: "5.99",
    },
    {
      title: "Chocolate Chip Cookie",
      img: "/images/best/b2.png",
      price: "4.99",
    },
    {
      title: "Strawberry Cake",
      img: "/images/best/b3.png",
      price: "20.99",
    },
    {
      title: "Strawberry Cake",
      img: "/images/best/b3.png",
      price: "20.99",
    },
    {
      title: "Strawberry Cake",
      img: "/images/best/b3.png",
      price: "20.99",
    },
  ];

  return (
    <div className="wrapper">
      <section className="flex max-[700px]:flex-col px-4 -my-4">
        <div className="flex flex-col gap-4 py-8 justify-center w-full flex-1">
          <p className="text-xs uppercase tracking-wider">Best-Seller</p>
          <h2 className="text-3xl font-semibold">Made Fresh, Loved by Many</h2>
          <p className="text-gray-600">
            Discover the treats that bring smiles to our customers every day.
          </p>
        </div>

        <div className="relative w-full max-w-[36rem] flex-2 rounded-2xl">
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
                  <div className="relative w-full aspect-16/9 flex-shrink-0">
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
                  <div className="flex flex-col p-4 flex-1 min-h-[10rem] justify-between gap-2">
                    <h3 className="text-lg font-semibold line-clamp-2">
                      {item.title}
                    </h3>
                    <p>$ {item.price}</p>
                    <button className="mt-auto w-full px-4 py-2 text-sm bg-[#dd832e] text-white rounded-lg hover:bg-gray-800 cursor-pointer">
                      View Detail
                    </button>
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
