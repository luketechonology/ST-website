import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Architecture from "@/components/Architecture";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Methodology />
      <Architecture />
    </div>
  );
}
