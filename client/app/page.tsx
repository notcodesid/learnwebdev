import Footer from "@/components/footer";
import { FeaturesSection } from "@/components/LandingPage_Com/featureSection";
import HeroSection from "@/components/LandingPage_Com/heroScetion";
import { MarqueeDemo } from "@/components/LandingPage_Com/MarqueeDemo";
import { Navbar } from "@/components/LandingPage_Com/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <MarqueeDemo/>
    <Footer />
    </>
  );
}
