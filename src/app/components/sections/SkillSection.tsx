import ReduxLogo from "@/../public/assets/skills/Redux.png";
import ReactLogo from "@/../public/assets/skills/React-icon.svg.png";
import BootstrapLogo from "@/../public/assets/skills/Bootstrap_logo.png";
import PgsqlLogo from "@/../public/assets/skills/Postgresql.png";
import CsharpLogo from "@/../public/assets/skills/csharp.png";
import TailwindCssLogo from "@/../public/assets/skills/tailwindcss.png";
import MUILogo from "@/../public/assets/skills/materialui.svg";
import CypressLogo from "@/../public/assets/skills/cypress-logo.svg";
import ViteLogo from "@/../public/assets/skills/vite.png";
import NextJsLogo from "@/../public/assets/skills/nextjs.png";
import CssLogo from "@/../public/assets/skills/Css.svg";
import HtmlLogo from "@/../public/assets/skills/html.png";
import GitLogo from "@/../public/assets/skills/git.png";
import GithubLogo from "@/../public/assets/skills/github.svg";
import DrupalLogo from "@/../public/assets/skills/drupal.png";

import Image from "next/image";
import SectionHeadingContainer from "../global/SectionHeadingContainer";

const SkillSection = () => {
  const logos = [
    { src: ReduxLogo, alt: "Redux Logo" },
    { src: ReactLogo, alt: "React Logo" },
    { src: BootstrapLogo, alt: "Bootstrap Logo" },
    { src: PgsqlLogo, alt: "PostgreSQL Logo" },
    { src: CsharpLogo, alt: "C# Logo" },
    { src: TailwindCssLogo, alt: "Tailwind CSS Logo" },
    { src: MUILogo, alt: "Material UI Logo" },
    { src: CypressLogo, alt: "Cypress Logo" },
    { src: ViteLogo, alt: "Vite Logo" },
    { src: NextJsLogo, alt: "Next.js Logo" },
    { src: CssLogo, alt: "Css3 Logo" },
    { src: HtmlLogo, alt: "Html5 Logo" },
    { src: GitLogo, alt: "Git Logo" },
    { src: GithubLogo, alt: "Github Logo" },
    { src: DrupalLogo, alt: "Drupal Logo" },
  ];

  return (
    <section className="relative w-full pt-20 overflow-hidden container mx-auto">
      <SectionHeadingContainer title={"Noteable Skills"} />
      <div className="w-full overflow-hidden pt-20 md:mt-20">
        <div className="flex space-x-10 animate-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image src={logo.src} alt={logo.alt} width={100} height={100} />
            </div>
          ))}
          {/* Duplicate the logos for a seamless infinite scroll effect */}
          {logos.map((logo, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0">
              <Image src={logo.src} alt={logo.alt} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
