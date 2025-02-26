import Link from "next/link";
import Typography from "../global/Typography";

const FooterSection = () => {
  return (
    <footer className="pt-20 bg-secondary-dark border-t-[20px] border-secondary-light ">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-1/2">
          <Typography variant="body1" className="text-primary">
            I am a software engineer with a focus on Front-end with 7+ years of
            enterprise experience building scalable solutions for some of the
            worlds top brands. Beyond writing code, I prioritize creating
            seamless, intuitive experiences—for both users and fellow engineers.
            I take an empathetic approach to development, always striving to
            reduce friction and build systems that feel effortless to use and
            maintain.
          </Typography>
        </div>
        <div>
          <ul className="text-primary">
            <li className="text-xl mb-5">
              <Link
                href="/projects"
                className="border-b-2 border-secondary-light hover:border-lightBlue font-extrabold"
              >
                Projects
              </Link>
              <Typography variant="body1">
                View Dylan&apos;s professional work.
              </Typography>
            </li>
            <li className="text-xl mb-5">
              <Link
                href="/projects"
                className="border-b-2 border-secondary-light hover:border-lightBlue font-extrabold"
              >
                Testimonials
              </Link>
              <Typography variant="body1">
                See what people are saying about Dylan&apos;s work.
              </Typography>
            </li>
            <li className="text-xl mb-5">
              <Link
                href="/contact"
                className="border-b-2 border-secondary-light hover:border-lightBlue font-extrabold"
              >
                Contact
              </Link>
              <Typography variant="body1">Send a general message</Typography>
            </li>
          </ul>
        </div>
        <div className="w-full text-center pt-20 pb-10">
          <Typography variant="body1" className="text-primary text-sm">
            Copyright © 2025 Dylan Sieren
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
