import Image from "next/image";
import logo from "./images/bakery-footer-logo.png";

function Footer() {
  return (
    <footer className="p-16 bg-(--clr-primary) text-(--clr-background)">
      <div className="wrapper">
        <div className="flex flex-col gap-16 items-center">
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
          <div className="flex w-full justify-between gap-4">
            <div>
              <h3 className="font-semibold">Open Hours</h3>
              <p>6:30 AM - 11 PM</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>325 Broad Ave, Palisades Park, NJ</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>(201) 347-6696</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>palisadesparkbakery@gmail.com</p>
            </div>
          </div>
          <div>
            &copy; 2025 Palisades Park Bakery, Palisades Park, NJ. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
