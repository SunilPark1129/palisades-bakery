import Image from "next/image";
import heroImg from "./images/i8.jpg";

function Hero() {
  return (
    <section className="flex flex-col">
      <div className="w-full aspect-16/9 max-h-[600px] min-h-[340px] relative">
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
