import AmazonLogo from "@/../public/assets/brands/Amazon_logo.png";
import HmartLogo from "@/../public/assets/brands/H_Mart_logo.png";
import PepsiLogo from "@/../public/assets/brands/pepsi.png";
import PrincetonLogo from "@/../public/assets/brands/princeton-logo.png";
import UwOshLogo from "@/../public/assets/brands/UW_Oshkosh_logo.png";
import InvescoLogo from "@/../public/assets/brands/invesco-logo.png";

import Image from "next/image";
import SectionHeadingContainer from "../global/SectionHeadingContainer";

const BrandsSection = () => {
  const logos = [
    { src: AmazonLogo, alt: "Amazon Logo" },
    { src: HmartLogo, alt: "Hmart Logo" },
    { src: PepsiLogo, alt: "Pepsi Logo" },
    { src: PrincetonLogo, alt: "Princeton University Logo" },
    { src: UwOshLogo, alt: "UW Oshkosh Logo" },
    { src: InvescoLogo, alt: "Invesco Logo" },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-primary">
      <SectionHeadingContainer title={"Noteable Clients"} />
      <div className="w-full pt-10">
        <div className="flex gap-20 content-center justify-center">
          {logos.map((logo, index) => (
            <div key={index} className="max-h-[250] max-w-[150] content-center">
              <Image src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
