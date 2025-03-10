export const metadata = {
  title: "Home - ITRIX",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import HeroHome from "@/components/hero-home-creative";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Pricing from "@/components/pricing-home";
import SplitCarousel from "@/components/split-carousel";
import Cta from "@/components/cta";
import SplineScene from "@/components/SplineScene";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <HeroHome />
      <SplineScene />
      <Hero />
      <Workflows />
      <Features />
      <SplitCarousel />
      {/* <Pricing /> */}
      <Cta />
    </>
  );
}
