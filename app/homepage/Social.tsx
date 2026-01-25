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
                href="https://www.instagram.com/palisadesparkbakery/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Palisades Park Bakery on Instagram (opens in new tab)"
                className="group flex items-center w-full bg-linear-to-r from-[#dbb753] via-[#a4225d] to-[#333a87] text-white rounded justify-center text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Instagram
                <div className="h-12 w-12 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                  <SVGInstagram />
                </div>
              </Link>

              <Link
                href="https://www.facebook.com/palisadesparkbakery/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Palisades Park Bakery on Facebook (opens in new tab)"
                className="group flex items-center w-full bg-[#254e84] text-white rounded justify-center text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Facebook
                <div className="h-12 w-12 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                  <SVGFacebook />
                </div>
              </Link>

              <Link
                href="https://x.com/palparkbakery"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Palisades Park Bakery on Twitter (opens in new tab)"
                className="group flex items-center w-full bg-[#377aa4] text-white rounded justify-center text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
