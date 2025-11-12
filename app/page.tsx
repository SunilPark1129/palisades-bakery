import Image from "next/image";
import Hero from "./homepage/Hero";

export default function Home() {
  return (
    <div className="">
      <div className="max-w-[100%] h-[30rem] relative">
        <Image
          className="object-cover"
          src={
            "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg"
          }
          fill
          alt="girl playing soccer"
          priority
        />
      </div>
      <Hero />
    </div>
  );
}
