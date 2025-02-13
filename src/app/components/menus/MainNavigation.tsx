import Link from "next/link";
import MainLink from "../global/Link";
import Typography from "../global/Typography";

const MainNavigation = () => {
  return (
    <nav className="container flex justify-between p-8">
      <div className="group rounded-full bg-secondary p-3">
        <Link href="/" className="text-xl font-extrabold text-primary">
          <span className="group-hover:animate-bounce-smooth inline-block">
            D
          </span>
          <span className="group-hover:animate-bounce-delayed inline-block">
            S
          </span>
        </Link>
      </div>
      <ul>
        <MainLink path="/" variant="primary" text="Home" />
        <MainLink path="/" variant="primary" text="Projects" />
        <MainLink path="/" variant="secondary" text="Contact" />
      </ul>
    </nav>
  );
};

export default MainNavigation;
