"use client";
import Typography from "@/app/components/global/Typography";
import MainNavigation from "@/app/components/menus/MainNavigation";
import { auth } from "@/firebase";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { ChangeEvent, useEffect, useState } from "react";

interface ProjectFormState {
  Title: string;
  Description: string;
  Github: string;
  WebsiteUrl: string;
  Technologies: string;
  Image: File | null;
}

const ProjectAddPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [projectFormState, setProjectFormState] = useState<ProjectFormState>({
    Title: "",
    Description: "",
    Github: "",
    WebsiteUrl: "",
    Technologies: "",
    Image: null,
  });

  /** Handles text input changes */
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProjectFormState({
      ...projectFormState,
      [e.target.name]: e.target.value,
    });
  };

  /** Handles image file selection */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setProjectFormState((prev) => ({ ...prev, Image: file }));
  };

  /** Fetches a pre-signed URL from the backend */
  const getPresignedUrl = async (file: File): Promise<string> => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/project/get-presigned-url`,
        {
          params: { fileName: file.name, contentType: file.type },
        }
      );

      console.log("Received Presigned URL:", response.data.url);
      return response.data.url;
    } catch (error) {
      console.error("Error fetching pre-signed URL:", error);
      throw error;
    }
  };

  /** Uploads file to S3 using pre-signed URL */
  const uploadFileToS3 = async (
    file: File,
    presignedUrl: string
  ): Promise<string> => {
    try {
      const uploadResponse = await axios.put(presignedUrl, file, {
        headers: { "Content-Type": file.type },
      });

      if (uploadResponse.status === 200) {
        console.log("File uploaded successfully!");
        return presignedUrl.split("?")[0]; // Extract clean file URL
      } else {
        throw new Error(
          `File upload failed with status: ${uploadResponse.status}`
        );
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  /** Handles project submission */
  const addProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let ImageUrl = "";

      if (projectFormState.Image) {
        // Step 1: Request pre-signed URL
        const presignedUrl = await getPresignedUrl(projectFormState.Image);

        // Step 2: Upload image to S3
        ImageUrl = await uploadFileToS3(projectFormState.Image, presignedUrl);
      }

      const projectData = {
        Title: projectFormState.Title,
        Description: projectFormState.Description,
        Technologies: projectFormState.Technologies,
        Github: projectFormState.Github,
        WebsiteUrl: projectFormState.WebsiteUrl,
        Image: projectFormState.Image ? projectFormState.Image.name : null,
        ImageUrl: ImageUrl || "",
      };

      // Step 4: Submit project data to backend
      const projectResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/project/add`,
        projectData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Project added successfully:", projectResponse.data);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  /** Tracks authentication state */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setIsAuthenticated(!!user)
    );
    return () => unsubscribe();
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <>
          <header>
            <MainNavigation />
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

                {/* Title */}
                <div className="flex flex-col w-full pt-5">
                  <label>Title</label>
                  <input
                    type="text"
                    name="Title"
                    className="border-secondary-dark border p-2 rounded-md"
                    value={projectFormState.Title}
                    onChange={handleOnChange}
                  />
                </div>

                {/* Description */}
                <div className="flex flex-col w-full py-5">
                  <label>Description</label>
                  <input
                    type="text"
                    name="Description"
                    className="border-secondary-dark border p-2 rounded-md"
                    value={projectFormState.Description}
                    onChange={handleOnChange}
                  />
                </div>

                {/* Technologies */}
                <div className="flex flex-col w-full py-5">
                  <label>Technologies</label>
                  <input
                    type="text"
                    name="Technologies"
                    className="border-secondary-dark border p-2 rounded-md"
                    value={projectFormState.Technologies}
                    onChange={handleOnChange}
                  />
                </div>

                {/* Github */}
                <div className="flex flex-col w-full py-5">
                  <label>Github</label>
                  <input
                    type="text"
                    name="Github"
                    className="border-secondary-dark border p-2 rounded-md"
                    value={projectFormState.Github}
                    onChange={handleOnChange}
                  />
                </div>

                {/* Website URL */}
                <div className="flex flex-col w-full py-5">
                  <label>Website Url</label>
                  <input
                    type="text"
                    name="WebsiteUrl"
                    className="border-secondary-dark border p-2 rounded-md"
                    value={projectFormState.WebsiteUrl}
                    onChange={handleOnChange}
                  />
                </div>

                {/* Image Upload */}
                <div className="flex flex-col w-full py-5">
                  <label>Image</label>
                  <input
                    type="file"
                    name="Image"
                    className="border-secondary-dark border p-2 rounded-md"
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange}
                  />
                </div>

                {/* Submit Button */}
                <div className="w-full">
                  <button className="bg-secondary-light py-3 px-10 rounded-md w-full text-lg">
                    Add
                  </button>
                </div>
              </form>
            </section>
          </main>
        </>
      ) : (
        <main>
          <Typography variant="h2"> Get Authenticated Nerd </Typography>
        </main>
      )}
    </>
  );
};

export default ProjectAddPage;
