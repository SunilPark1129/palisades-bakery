import Hero from "./homepage/Hero";
import About from "./homepage/About";
import GroupOrder from "./homepage/GroupOrder";
import CustomOrder from "./homepage/CustomOrder";
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
      <About />
      <Categories />
      <BestSeller />
      <GradientMask top />
      <Block />
      <GradientMask />
      <DineIn />
      <Special />
      <Social />
      {/* <CustomOrder />
      <GroupOrder /> */}
    </main>
  );
}
