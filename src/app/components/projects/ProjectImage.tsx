import Image from "next/image";
import { useState } from "react";

const ProjectImage = ({ image, title }: { image: string; title: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full">
      {loading && <div className="w-full h-auto bg-gray-300 animate-pulse" />}

      <Image
        className={`w-full object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        src={image}
        alt={`${title} website image`}
        width={500}
        height={500}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default ProjectImage;
