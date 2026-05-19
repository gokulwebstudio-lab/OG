import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Marquee } from "@/components/Marquee";
import { Videos } from "@/components/Videos";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[#00F5FF]/30">
      <Nav />
      <Hero />
      <StatsBar />
      <Marquee />
      <Videos />
      <About />
      <Team />
      <Community />
      <Footer />
    </main>
  );
}
