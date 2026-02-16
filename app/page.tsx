import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Capabilities from "@/components/Capabilities";
import Trust from "@/components/Trust";
import Deployment from "@/components/Deployment";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Capabilities />
      <Trust />
      <Deployment />
      <Process />
      <CTA />
    </div>
  );
}
