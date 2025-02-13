export type Project = {
  title: string;
  description: string;
  image: string | null;
  technology: string[];
  github: string | null;
  websiteUrl: string | null;
};

export type ProjectResponseDto = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  technologies: { id: number; name: string }[];
  github: string | null;
  websiteUrl: string | null;
};
