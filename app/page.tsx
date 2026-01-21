import Hero from "./homepage/Hero";
import About from "./homepage/About";
import Block from "./homepage/Block";
import DineIn from "./homepage/DineIn";
import Categories from "./homepage/Categories";
import BestSeller from "./homepage/BestSeller";
import Social from "./homepage/Social";
import Special from "./homepage/Special";
import GradientMask from "./_components/ui/GradientMask";

export default function Home() {
  return (
    <main className="flex flex-col mb-8">
      <Hero />
      <Categories />
      <BestSeller />
      <DineIn />
      <GradientMask top />
      <Block />
      <GradientMask />
      <Special />
      {/* <About /> */}
      <Social />
    </main>
  );
}
