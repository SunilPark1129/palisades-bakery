import Image from "next/image";
import heroImg from "./images/bakery-hero-img.jpg";
import MainHeader from "../_components/ui/MainHeader";

function Hero() {
  return (
    <section className="flex flex-col">
      <MainHeader />
      <div className="w-full aspect-16/9 max-h-[600px] min-h-[340px] relative">
        <Image
          className="object-cover"
          src={heroImg}
          fill
          alt="Palisades Park Bakery Banner"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
