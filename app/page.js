import Bestsales from "@/components/Home/Bestsales";
import Deals from "@/components/Home/Deals";
import Fqa from "@/components/Home/Fqa";
import Hero from "@/components/Home/Hero";
import Productive from "@/components/Home/Productive";

export default function Home() {
  return (
    <>
      <Hero />
      <Productive />
      <Deals />
      <Bestsales />
      <Fqa />
    </>
  );
}
