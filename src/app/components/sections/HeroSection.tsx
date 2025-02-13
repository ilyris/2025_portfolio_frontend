import Typography from "../global/Typography";

const HeroSection = () => {
  return (
    <section className="mx-auto py-20 my-20">
      <Typography variant="h1" className="text-center">
        👋 Hi There, I am{" "}
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          D
        </span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          y
        </span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          l
        </span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          a
        </span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          n
        </span>
        <span className="inline-block text-secondary">&nbsp;</span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          S
        </span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          i
        </span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          e
        </span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          r
        </span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          e
        </span>
        <span className="inline-block text-secondary transition-transform duration-300 ease-in-out hover:-translate-y-2">
          n
        </span>
      </Typography>
      <div className="w-[50%] text-center mx-auto py-5">
        <Typography variant="h5">
          I am a Software Engineer with 7+ years of enterprise experience,
          building and scaling solutions for some of the world's most recognized
          brands.
        </Typography>
      </div>
    </section>
  );
};
export default HeroSection;
