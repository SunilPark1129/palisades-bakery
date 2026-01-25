import Hero from "./homepage/Hero";
import BestSeller from "./homepage/BestSeller";
import dynamic from "next/dynamic";

const Categories = dynamic(() => import("./homepage/Categories"));
const Special = dynamic(() => import("./homepage/Special"));
const Block = dynamic(() => import("./homepage/Block"));
const DineIn = dynamic(() => import("./homepage/DineIn"));
const Social = dynamic(() => import("./homepage/Social"));
const GradientMask = dynamic(() => import("./_components/ui/GradientMask"));

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Hero />
      <BestSeller />
      <Categories />
      <Special />
      <div className="flex flex-col">
        <GradientMask top />
        <Block />
        <GradientMask />
      </div>
      <DineIn />
      <Social />
    </main>
  );
}
