import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Architecture from "@/components/Architecture";
import Honors from "@/components/Honors";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Methodology />
      <Architecture />
      <Honors />
    </div>
  );
}
