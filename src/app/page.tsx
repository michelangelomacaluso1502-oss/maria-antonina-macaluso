import Hero from "@/components/sections/Hero";
import Prologue from "@/components/sections/Prologue";
import Biography from "@/components/sections/Biography";
import AngeloFaraci from "@/components/sections/AngeloFaraci";
import Filmography from "@/components/sections/Filmography";
import Timeline from "@/components/sections/Timeline";
import Awards from "@/components/sections/Awards";
import Festivals from "@/components/sections/Festivals";
import Articles from "@/components/sections/Articles";
import Quotes from "@/components/sections/Quotes";
import PhotoBook from "@/components/sections/PhotoBook";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

// One long, scrollable homepage — like the Angelo Faraci reference site.
export default function HomePage() {
  return (
    <main id="main" className="bg-noir">
      <Hero />
      <Prologue />
      <Biography />
      <AngeloFaraci />
      <Filmography />
      <Timeline />
      <Awards />
      <Festivals />
      <Articles />
      <Quotes />
      <PhotoBook />
      <FAQ />
      <Contact />
    </main>
  );
}
