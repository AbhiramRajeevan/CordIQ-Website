import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { StoryScroll } from "@/components/StoryScroll";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Local } from "@/components/Local";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div
        className="fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(560px 420px at 82% 8%, rgba(139,92,246,0.16), transparent 65%), radial-gradient(480px 400px at 30% 55%, rgba(217,70,239,0.06), transparent 70%), radial-gradient(420px 360px at 10% 30%, rgba(245,130,46,0.10), transparent 70%), rgb(var(--color-bg0))",
        }}
      />
      <div
        className="fixed inset-0 -z-10 opacity-[0.35] pointer-events-none bg-grid"
        style={{
          maskImage: "radial-gradient(700px 500px at 70% 0%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(700px 500px at 70% 0%, black, transparent 75%)",
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <StoryScroll />
        <Problem />
        <Services />
        <Industries />
        <WhyUs />
        <Process />
        <Work />
        <Local />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
