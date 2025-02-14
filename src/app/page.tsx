"use client"
import MainNavigation from "./components/menus/MainNavigation";
import BrandsSection from "./components/sections/BrandsSection";
import FooterSection from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProjectSection from "./components/sections/ProjectSection";
import RecommendationSection from "./components/sections/RecommendationSection";
import SkillSection from "./components/sections/SkillSection";
import { onAuthStateChanged } from "firebase/auth";
import firebase, { auth } from '@/firebase';
import { useEffect, useState } from "react";
import Typography from "./components/global/Typography";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Track auth state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("signed in")
        setIsAuthenticated(true); 
      } else {
        console.log("no user")
        setIsAuthenticated(false); 
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <header className="sticky flex justify-center">
        <MainNavigation isAuthenticated/>
      </header>
      <main className="flex justify-center flex-col">
        <HeroSection />
        <ProjectSection />
        <SkillSection />
        <RecommendationSection />
        <BrandsSection />
        <FooterSection />
      </main>
    </>
  );
}
