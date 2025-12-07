import Image from "next/image";
import logo from "./images/bakery-footer-logo.png";
import { SVGFacebook, SVGInstagram, SVGTwitter } from "./svg/social";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-(--clr-primary) text-(--clr-background)">
      <div className="wrapper">
        <div className="flex flex-col gap-16 items-center px-4 py-16">
          <div className="flex flex-col gap-2 items-center text-center">
            <Image
              src={logo}
              alt="Palisades Park Bakery Logo"
              className="w-20 aspect-square rounded-full"
            />
            <div>
              <h2>Palisades Park Bakery</h2>
              <p>Your Local Bakery & Brunch Cafe</p>
            </div>
          </div>
          <div className="flex w-full justify-between gap-4 max-[830px]:flex-col max-[830px]:items-center max-[830px]:text-center ">
            <div>
              <h3 className="font-semibold">Open Hours</h3>
              <p>6:30 AM - 11 PM</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <address className="not-italic">
                325 Broad Ave, Palisades Park, NJ
              </address>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>(201) 347-6696</p>
            </div>
            <div>
              <h3 className="font-semibold">Follow Us</h3>
              <div className="flex gap-1">
                <Link
                  href="https://twitter.com/yourbakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <SVGInstagram />
                </Link>
                <Link
                  href="https://twitter.com/yourbakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <SVGFacebook />
                </Link>
                <Link
                  href="https://twitter.com/yourbakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <SVGTwitter />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            &copy; 2025 Palisades Park Bakery, Palisades Park, NJ. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
