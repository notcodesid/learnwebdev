import Footer from "@/components/footer";
import { FeaturesSection } from "@/components/LandingPage_Com/featureSection";
import HeroSection from "@/components/LandingPage_Com/heroScetion";
import { MarqueeDemo } from "@/components/LandingPage_Com/MarqueeDemo";
import { Navbar } from "@/components/LandingPage_Com/navbar";
import Week1 from "@/components/weeks/week1";
import Week2 from "@/components/weeks/week2";
import Week3 from "@/components/weeks/week3";
import Week4 from "@/components/weeks/week4";
import Week5 from "@/components/weeks/week5";
import Week6 from "@/components/weeks/week6";
import Week7 from "@/components/weeks/week7";
import Week8 from "@/components/weeks/week8";
import Week9 from "@/components/weeks/week9";
import Week10 from "@/components/weeks/week10";
import Week11 from "@/components/weeks/week11";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
        <Week1 />
        <Week2 />
        <Week3 />
        <Week4 />
        <Week5 />
        <Week6 />
        <Week7 />
        <Week8 />
        <Week9 />
        <Week10 />
        <Week11 />
    {/* <FeaturesSection />
    <MarqueeDemo/>
    <Footer /> */}
    </>
  );
}
