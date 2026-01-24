import Hero from "./homepage/Hero";
import Block from "./homepage/Block";
import DineIn from "./homepage/DineIn";
import Categories from "./homepage/Categories";
import BestSeller from "./homepage/BestSeller";
import Social from "./homepage/Social";
import Special from "./homepage/Special";
import GradientMask from "./_components/ui/GradientMask";

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
