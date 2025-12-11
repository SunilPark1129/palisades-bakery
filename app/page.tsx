import Image from "next/image";
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
    <main className="flex flex-col gap-8">
      <Hero />
      <Categories />
      <div>
        <GradientMask top />
        <div className="flex flex-col gap-8 bg-(--clr-background2)">
          <BestSeller />
        </div>
        <GradientMask />
      </div>
      <About />
      <DineIn />
      <Block />
      <Special />
      <Social />
      {/* <CustomOrder />
      <GroupOrder /> */}
    </main>
  );
}
