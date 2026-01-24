import Link from "next/link";
import {
  SVGFacebook,
  SVGInstagram,
  SVGTwitter,
} from "../_components/svg/social";
import Image from "next/image";

type Props = {};

function Social({}: Props) {
  return (
    <section className="relative">
      <div className="wrapper">
        <div className="flex p-4 justify-center md:gap-8">
          <div className="relative w-full max-w-80 aspect-9/16 max-[600px]:hidden">
            <Image
              src="/images/follow-mobile2.png"
              alt="Social Media on Mobile"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 my-auto">
            <div className="flex flex-col w-fit">
              <p className="text-xs uppercase tracking-wider pb-4">Follow-Us</p>
              <p className="text-[2em] leading-tight font-semibold text-gray-600">
                Follow Our Bakery
              </p>
              <p className="text-[1.1em]">
                See our fresh bakes, daily specials, and behind-the-scenes.
              </p>
            </div>

            <div className="flex flex-col items-center w-full gap-2 m-auto">
              <Link
                href="https://instagram.com/yourbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center w-full bg-linear-to-r from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white rounded justify-center"
              >
                Instagram
                <div className="h-12 w-12 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                  <SVGInstagram />
                </div>
              </Link>

              <Link
                href="https://facebook.com/yourbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center w-full bg-[#1877F2] text-white rounded justify-center"
              >
                Facebook
                <div className="h-12 w-12 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                  <SVGFacebook />
                </div>
              </Link>

              <Link
                href="https://twitter.com/yourbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center w-full bg-[#1DA1F2] text-white rounded justify-center"
              >
                Twitter
                <div className="h-12 w-12 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                  <SVGTwitter />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Social;
