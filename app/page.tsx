import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import ProductFit from "@/components/sections/ProductFit";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import AwardsPartners from "@/components/sections/AwardsPartners";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ProductFit />
        <Benefits />
        <HowItWorks />
        <AwardsPartners />
        <Testimonials />
        <FAQ />
        <Team />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
