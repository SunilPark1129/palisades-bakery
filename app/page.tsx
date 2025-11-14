import Image from "next/image";
import Hero from "./homepage/Hero";
import About from "./homepage/About";
import GroupOrder from "./homepage/GroupOrder";
import CustomOrder from "./homepage/CustomOrder";
import Block from "./homepage/Block";
import DineIn from "./homepage/DineIn";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <About />
      <CustomOrder />
      <Block />
      <GroupOrder />
      <DineIn />
    </main>
  );
}
