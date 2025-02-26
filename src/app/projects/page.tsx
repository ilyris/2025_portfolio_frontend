"use client";
import { useEffect, useState } from "react";
import MainNavigation from "../components/menus/MainNavigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import ProjectSection from "../components/sections/ProjectSection";
import MainLink from "../components/global/Link";

const Projects = () => {
  return (
    <>
      <header className="sticky flex justify-center">
        <MainNavigation />
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
