import Link from "next/link";
import React from "react";
import {
  SVGFacebook,
  SVGInstagram,
  SVGTwitter,
} from "../_components/svg/social";
import moibleImage from "./images/mobilefollow.png";
import f1 from "./images/f1.jpg";
import f2 from "./images/f2.jpg";
import f3 from "./images/f3.jpg";
import f4 from "./images/f4.jpg";
import f5 from "./images/f5.jpg";
import f6 from "./images/f6.jpg";
import Image from "next/image";

type Props = {};

const images = [f1, f2, f3, f4, f5, f6];

function Social({}: Props) {
  return (
    <section className="relative bg-[#f2f2f2]">
      <div className="wrapper">
        <div className="flex p-4 items-center">
          <div className="">
            <Image
              className="scale-100"
              src={moibleImage}
              alt="mobile"
              width={400}
            />
          </div>
          <div className="flex w-full gap-4">
            <div className="grid grid-cols-3 w-full gap-1">
              {images.map((item, idx) => (
                <div key={idx} className="relative w-full aspect-3/4">
                  <Image
                    src={item}
                    alt="sns image"
                    fill
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="m-auto p-4">
                <p className="text-xs uppercase tracking-wider">Follow-Us</p>
                <h2 className="text-3xl font-semibold">
                  Follow Your Local Bakery
                </h2>
                <p>
                  See our fresh bakes, daily specials, and behind-the-scenes.
                </p>

                <div className="flex items-center mt-4 px-2 bg-[#fff] w-fit rounded-2xl">
                  {/* Instagram */}
                  <Link
                    href="https://instagram.com/yourbakery"
                    target="_blank"
                    className="group"
                  >
                    <div className="h-12 w-12 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                      <SVGInstagram />
                    </div>
                  </Link>

                  {/* Facebook */}
                  <Link
                    href="https://facebook.com/yourbakery"
                    target="_blank"
                    className="group"
                  >
                    <div className="h-12 w-12 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                      <SVGFacebook />
                    </div>
                  </Link>

                  {/* Twitter/X */}
                  <Link
                    href="https://twitter.com/yourbakery"
                    target="_blank"
                    className="group"
                  >
                    <div className="h-12 w-12 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                      <SVGTwitter />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
