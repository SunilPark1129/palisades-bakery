import Image from "next/image";

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
          sizes="(max-width: 768px) 100vw,
          (max-width: 1280px) 90vw,
          1335px"
        />
      </div>
    </section>
  );
}

export default Hero;
