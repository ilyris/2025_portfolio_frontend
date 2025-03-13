import Typography from "./Typography";

interface SectionHeadingContainerProps {
  title: string;
}

const SectionHeadingContainer: React.FC<SectionHeadingContainerProps> = ({
  title,
}) => {
  return (
    <div className="container mx-auto flex items-center md:pb-20">
      <div className=" w-1/5 lg:w-2/5 h-[5] bg-secondary-dark"></div>
      <Typography
        variant="h2"
        className="text-center section-heading w-3/5 lg:w-2/5 text-secondary-dark"
      >
        {title}
      </Typography>
      <div className=" w-1/5 lg:w-2/5 h-[5] bg-secondary-dark"></div>
    </div>
  );
};

export default SectionHeadingContainer;
