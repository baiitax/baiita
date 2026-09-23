import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Expertise from "@/components/Expertise";
import ExportTrade from "@/components/ExportTrade";
import GapStrategist from "@/components/GapStrategist";
import HowIThink from "@/components/HowIThink";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import VentureLab from "@/components/VentureLab";
import ProductThinking from "@/components/ProductThinking";
import Corridors from "@/components/Corridors";
import BrandStory from "@/components/BrandStory";
import WhyMe from "@/components/WhyMe";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Expertise />
        <GapStrategist />
        <ExportTrade />
        <HowIThink />
        <Skills />
        <Projects />
        <VentureLab />
        <ProductThinking />
        <Corridors />
        <BrandStory />
        <WhyMe />
        <Metrics />
        <Contact />
      </main>
      <Footer />
      <Assistant />
    </>
  );
}
