import Link from "next/link";
import { ProjectResponseDto } from "../../../../typings";
import Typography from "../global/Typography";
import ProjectImage from "./ProjectImage";

const ProjectCard: React.FC<ProjectResponseDto> = ({
  title,
  description,
  image,
  technologies,
  github,
  websiteUrl,
}) => {
  return (
    <div className="flex py-20 my-5 justify-between gap-8 max-h-3/4 flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 flex flex-col gap-5">
        <div>
          <Typography
            variant="h3"
            className="text-center py-10 font-bold  bg-secondary-light"
          >
            {title}
          </Typography>
          {websiteUrl && (
            <Link target="_blank" href={websiteUrl} className="text-3xl ">
              <span className="flex text-secondary-light pt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-[30px] h-[30px] mr-3"
                  fill="#725AC1"
                >
                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
                </svg>
                {title}
              </span>
            </Link>
          )}
          <Typography variant="body1" className="pt-5 text-secondary-dark">
            {description}
          </Typography>
        </div>
        <ul className="flex gap-2 flex-wrap">
          {technologies.map((tech: { id: number; name: string }) => (
            <span
              key={tech.id}
              className="rounded-xl bg-secondary-dark text-primary py-1 px-3 break-all font-bold tracking-[1]"
            >
              {tech.name}
            </span>
          ))}
        </ul>
        <div>
          {github && (
            <Link target="_blank" href={github}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512">
                <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
              </svg>
            </Link>
          )}
        </div>
      </div>
      <div className="rounded-xl w-full lg:w-3/4 h-auto">
        <ProjectImage
          image={image as string}
          title={`${title} website image`}
        />
      </div>
    </div>
  );
};
export default ProjectCard;
