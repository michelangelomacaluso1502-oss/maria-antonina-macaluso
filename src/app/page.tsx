import Hero from "@/components/sections/Hero";
import Prologue from "@/components/sections/Prologue";
import Biography from "@/components/sections/Biography";
import AngeloFaraci from "@/components/sections/AngeloFaraci";
import LoveStory from "@/components/sections/LoveStory";
import Filmography from "@/components/sections/Filmography";
import AltreProduzioni from "@/components/sections/AltreProduzioni";
import VideoGallery from "@/components/sections/VideoGallery";
import Timeline from "@/components/sections/Timeline";
import Awards from "@/components/sections/Awards";
import Festivals from "@/components/sections/Festivals";
import Articles from "@/components/sections/Articles";
import Quotes from "@/components/sections/Quotes";
import PhotoBook from "@/components/sections/PhotoBook";
import ContentCreator from "@/components/sections/ContentCreator";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import PochiAttimiVenezia from "@/components/sections/PochiAttimiVenezia";

// One long, scrollable homepage — like the Angelo Faraci reference site.
export default function HomePage() {
  return (
    <main id="main" className="bg-noir">
      <Hero />
      <Prologue />
      <Biography />
      <AngeloFaraci />
      <LoveStory />
      <Filmography />
      <AltreProduzioni />
      <VideoGallery />
      <Timeline />
      <Awards />
      <Festivals />
      <Articles />
      <PochiAttimiVenezia />
      <Quotes />
      <PhotoBook />
      <ContentCreator />
      <FAQ />
      <Contact />
    </main>
  );
}
