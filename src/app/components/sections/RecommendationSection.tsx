import Typography from "../global/Typography";
import recommendationData from "@/../mock_data/recommendations.json";
import AutostoreLogo from "@/../public/assets/brands/autostore.svg";
import Image from "next/image";
import SectionHeadingContainer from "../global/SectionHeadingContainer";

interface Recommendation {
  name: string;
  recommendation: string;
  date: string;
  position: string;
  relation: string;
  from: string;
}

interface RecommendationCardProps {
  name: string;
  recommendation: string;
  from: string;
  index: number;
}

const RecommendationSection = () => {
  const { recommendations } = recommendationData;
  return (
    <section className="py-20 container mx-auto">
      <SectionHeadingContainer title={"Testimonials"} />
      {recommendations.map((recommendation: Recommendation, i: number) => (
        <RecommendationCard
          key={recommendation.name}
          index={i}
          {...recommendation}
        />
      ))}
    </section>
  );
};

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  name,
  recommendation,
  from,
  index,
}) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`md:flex ${isEven && "flex-row-reverse"}`}>
      <div className="px-5 py-10 rounded-xl my-20 recommendation-card relative w-full md:w-3/4 m-auto">
        <div className="quote-left w-[70] absolute top-[-50px] left-0 text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"
              fill="#725AC1"
            />
          </svg>
        </div>
        <div className="flex gap-5 content-center"></div>
        <Typography variant="body1" className="clear-left">
          {recommendation}
        </Typography>
        <div className="quote-right w-[70] absolute right-0 bottom-[-20px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z"
              fill="#725AC1"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-1/4 m-auto">
        <Image
          className="mb-5"
          src={AutostoreLogo}
          width={75}
          height={75}
          alt={"Autostore Logo"}
        />
        <Typography variant="h5" className="recommendation-info first">
          {from}
        </Typography>
        <Typography
          variant="h5"
          className="recommendation-info first text-center"
        >
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default RecommendationSection;
