import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const SVGFacebook = dynamic(() =>
  import("./svg/social").then((mod) => mod.SVGFacebook),
);
const SVGInstagram = dynamic(() =>
  import("./svg/social").then((mod) => mod.SVGInstagram),
);
const SVGTwitter = dynamic(() =>
  import("./svg/social").then((mod) => mod.SVGTwitter),
);

function Footer() {
  return (
    <footer className="mt-16 bg-(--clr-primary) text-(--clr-background)">
      <div className="wrapper">
        <div className="flex flex-col gap-14 items-center px-4 py-16">
          <div className="flex flex-col gap-2 items-center text-center">
            <Image
              src="/images/footer-logo.png"
              alt="Palisades Park Bakery Logo"
              className="w-20 aspect-square rounded-full"
              width={120}
              height={120}
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
                  href="https://www.instagram.com/palisadesparkbakery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="Palisades Park Bakery Instagram"
                >
                  <SVGInstagram />
                </Link>
                <Link
                  href="https://www.facebook.com/palisadesparkbakery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="Palisades Park Bakery Facebook"
                >
                  <SVGFacebook />
                </Link>
                <Link
                  href="https://x.com/palparkbakery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                  aria-label="Palisades Park Bakery Twitter"
                >
                  <SVGTwitter />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            &copy; 2026 Palisades Park Bakery, Palisades Park, NJ. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
