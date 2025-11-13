import Image from "next/image";
import heroImg from "./images/bakery-hero-img.jpg";

function Hero() {
  return (
    <section className="flex flex-col">
      <h1 className="text-3xl text-center p-4">PALISADES PARK BAKERY</h1>
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
