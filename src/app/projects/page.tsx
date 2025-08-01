"use client";
import MainNavigation from "../components/menus/MainNavigation";
import ProjectSection from "../components/sections/ProjectSection";
import MainLink from "../components/global/Link";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/firebase";

const Projects = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  console.log({ isAuthenticated });

  /** Tracks authentication state */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setIsAuthenticated(!!user)
    );

    return () => unsubscribe();
  }, []);
  return (
    <>
      <header className="sticky flex justify-center">
        <MainNavigation />
      </header>
      <main>
        {isAuthenticated && (
          <div className="container mx-auto py-10">
            <MainLink
              path="/projects/add"
              text="Add Project"
              variant="secondary"
            />
          </div>
        )}

        <ProjectSection />
      </main>
    </>
  );
};
export default Projects;
