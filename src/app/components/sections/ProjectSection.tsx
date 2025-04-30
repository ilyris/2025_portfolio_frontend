"use client";
// import { useEffect, useState } from "react";
import { ProjectResponseDto } from "../../../../typings";
import ProjectCard from "../projects/ProjectCard";
// import axios from "axios";
// import ProjectCardSkeleton from "../projects/ProjectCardSkeleton";
import SectionHeadingContainer from "../global/SectionHeadingContainer";
import projectData from "@/data/projectMockData.json";

const ProjectSection = () => {
  // const [projects, setProjects] = useState<ProjectResponseDto[]>([]);
  // const [isFetchingData, setIsFetchingData] = useState<boolean>(true);

  // const handleFetchingProjects = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/project`,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     // setProjects(response.data);
  //     setIsFetchingData(false);
  //   } catch (error) {
  //     setIsFetchingData(false);
  //     console.error("Error fetching projects:", error);
  //   }
  // };
  // useEffect(() => {
  //   handleFetchingProjects();
  // }, []);

  return (
    <section id="projects" className="bg-primary py-20">
      <SectionHeadingContainer title={"Featured Work"} />
      <ul className="mx-auto container">
        {/* {isFetchingData
          ? [1, 2, 3].map((key: number) => <ProjectCardSkeleton key={key} />)
          : projectData.projects.map((project: ProjectResponseDto) => (
              <ProjectCard key={project.title} {...project} />
            ))} */}

        {projectData.projects.map((project: ProjectResponseDto) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </section>
  );
};
export default ProjectSection;
