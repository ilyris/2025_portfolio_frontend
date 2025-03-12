"use client";
import MainNavigation from "./components/menus/MainNavigation";
import BrandsSection from "./components/sections/BrandsSection";
import ContactSection from "./components/sections/ContactSection";
import FooterSection from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import RecommendationSection from "./components/sections/RecommendationSection";
import SkillSection from "./components/sections/SkillSection";

export default function Home() {
  return (
    <>
      <header className="sticky flex justify-center">
        <MainNavigation />
      </header>
      <main className="flex justify-center flex-col">
        <HeroSection />
        <ProjectSection />
        <SkillSection />
        <RecommendationSection />
        <BrandsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
