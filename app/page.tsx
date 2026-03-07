import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import Comparison from "./components/Comparison";
import Pricing from "./components/Pricing";
import SocialProof from "./components/SocialProof";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Comparison />
        <Pricing />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
