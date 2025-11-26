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

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Hero />
      <BestSeller />
      <Categories />
      <About />
      <Special />
      {/* <Social /> */}
      {/* <CustomOrder />
      <GroupOrder /> */}
      <Block />
      <DineIn />
      {/*
      <DineIn /> */}
    </main>
  );
}
