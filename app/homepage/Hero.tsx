import Image from "next/image";
import heroImg from "./images/i8.jpg";

function Hero() {
  return (
    <section className="flex flex-col">
      <div className="w-full aspect-video max-h-150 min-h-85 relative">
        <Image
          // className="object-cover saturate-50 contrast-35"
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
