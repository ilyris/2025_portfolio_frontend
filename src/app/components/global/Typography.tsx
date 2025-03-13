import React, { ReactNode } from "react";
import clsx from "clsx"; // Optional: Helps merge classNames conditionally

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1";
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const baseClasses: Record<TypographyProps["variant"], string> = {
    h1: " text-3xl md:text-6xl",
    h2: " text-3xl md:text-5xl",
    h3: " text-3xl md:text-4xl",
    h4: " text-3xl md:text-3xl",
    h5: " text-3xl md:text-2xl",
    h6: " text-3xl md:text-xl",
    body1: "text-lg",
  };

  // Merge the default and custom classes
  const combinedClasses = clsx(baseClasses[variant], className);

  switch (variant) {
    case "h1":
      return <h1 className={combinedClasses}>{children}</h1>;
    case "h2":
      return <h2 className={combinedClasses}>{children}</h2>;
    case "h3":
      return <h3 className={combinedClasses}>{children}</h3>;
    case "h4":
      return <h4 className={combinedClasses}>{children}</h4>;
    case "h5":
      return <h5 className={combinedClasses}>{children}</h5>;
    case "h6":
      return <h6 className={combinedClasses}>{children}</h6>;
    case "body1":
    default:
      return <p className={combinedClasses}>{children}</p>;
  }
};

export default Typography;
