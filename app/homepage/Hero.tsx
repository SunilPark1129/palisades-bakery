import Image from "next/image";
import heroImg from "./images/hero.jpg";

function Hero() {
  return (
    <section className="flex flex-col">
      <div className="w-full aspect-video max-h-200 min-h-85 relative">
        <Image
          className="object-cover contrast-75 saturate-120"
          src="/images/main-hero.jpg"
          fill
          alt="Palisades Park Bakery Banner"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
