"use client";
import Typography from "@/app/components/global/Typography";
import MainNavigation from "@/app/components/menus/MainNavigation";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ChangeEvent, useEffect, useState } from "react";

interface ProjectFormState {
  title: string;
  description: string;
  github: string;
  websiteUrl: string;
  technologies: string[];
  image: string;
}
const ProjectAddPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Track auth state
  const [projectFormState, setProjectFormState] = useState<ProjectFormState>({
    title: "",
    description: "",
    github: "",
    websiteUrl: "",
    technologies: [],
    image: "",
  });
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setProjectFormState({
      ...projectFormState,
      [e.target.name]: e.target.value,
    });
    console.log({ projectFormState });
  };
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

  const addProject = () => {
    console.log("adding!");
  };
  return (
    <>
      <header>
        <MainNavigation isAuthenticated={isAuthenticated} />
      </header>
      <main>
        <section className="container mx-auto">
          <form
            className="flex justify-center items-center flex-col w-1/2 mx-auto rounded-xl border border-black p-5"
            onSubmit={addProject}
          >
            <Typography variant="h3" className="text-center">
              Add Project
            </Typography>
            <div className="flex flex-col w-full pt-5">
              <label>Title</label>
              <input
                type="text"
                name="title"
                className=" border-secondary-dark border p-2 rounded-md"
                value={projectFormState.title}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col w-full py-5">
              <label>Description</label>
              <input
                type="textfield"
                name="description"
                className="border-secondary-dark border p-2 rounded-md"
                value={projectFormState.description}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col w-full py-5">
              <label>Technologies</label>
              <input
                type="text"
                name="technologies"
                className="border-secondary-dark border p-2 rounded-md"
                value={projectFormState.technologies.concat()}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col w-full py-5">
              <label>Github</label>
              <input
                type="text"
                name="github"
                className="border-secondary-dark border p-2 rounded-md"
                value={projectFormState.github}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col w-full py-5">
              <label>Website Url</label>
              <input
                type="text"
                name="websiteUrl"
                className="border-secondary-dark border p-2 rounded-md"
                value={projectFormState.websiteUrl}
                onChange={handleOnChange}
              />
            </div>
            <div className="w-full">
              <button className="bg-secondary-light py-3 px-10 rounded-md w-full text-lg">
                Add
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default ProjectAddPage;
