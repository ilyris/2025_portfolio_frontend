import Typography from "./Typography";

interface SectionHeadingContainerProps {
  title: string;
}

const SectionHeadingContainer: React.FC<SectionHeadingContainerProps> = ({
  title,
}) => {
  return (
    <div className="container mx-auto flex items-center pb-20">
      <div className="w-2/5 h-[5] bg-secondary-dark"></div>
      <Typography variant="h2" className="text-center section-heading w-2/5">
        {title}
      </Typography>
      <div className="w-2/5 h-[5] bg-secondary-dark"></div>
    </div>
  );
};

export default SectionHeadingContainer;
