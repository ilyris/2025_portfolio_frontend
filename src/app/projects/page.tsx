"use client";
import { useEffect, useState } from "react";
import MainNavigation from "../components/menus/MainNavigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import ProjectSection from "../components/sections/ProjectSection";
import MainLink from "../components/global/Link";

const Projects = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Track auth state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("signed in");
        setIsAuthenticated(true);
      } else {
        console.log("no user");
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <header className="sticky flex justify-center">
        <MainNavigation isAuthenticated={isAuthenticated} />
      </header>
      <main>
        <div className="container mx-auto py-10">
          <MainLink
            path="/projects/add"
            text="Add Project"
            variant="secondary"
          />
        </div>

        <ProjectSection />
      </main>
    </>
  );
};
export default Projects;
