import Link from "next/link";
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
    <section className="relative">
      <div className="wrapper">
        <div className="flex p-4 justify-center">
          <Image
            className="scale-100 max-[600px]:hidden"
            src={moibleImage}
            alt="mobile"
            width={400}
          />
          <div className="flex flex-col gap-4 my-auto">
            <p className="text-xs uppercase tracking-wider">Follow-Us</p>
            <h2 className="text-[1.8em] leading-tight font-semibold">
              Follow Your Local Bakery
            </h2>
            <p>See our fresh bakes, daily specials, and behind-the-scenes.</p>

            <div className="flex flex-col items-center w-full gap-2 m-auto">
              <Link
                href="https://instagram.com/yourbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center w-full bg-gradient-to-r from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white rounded justify-center"
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
