import Footer from "@/components/footer";
import { FeaturesSection } from "@/components/LandingPage_Com/featureSection";
import HeroSection from "@/components/LandingPage_Com/heroScetion";
import { ImageEffect } from "@/components/LandingPage_Com/ImageEffect";
import { MarqueeDemo } from "@/components/LandingPage_Com/MarqueeDemo";
import { Navbar } from "@/components/LandingPage_Com/navbar";

export default function() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ImageEffect />
    <FeaturesSection />
    <MarqueeDemo/>
    <Footer />
    </>

  );
}
