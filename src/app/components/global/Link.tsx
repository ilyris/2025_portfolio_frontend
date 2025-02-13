import Link from "next/link";

interface MainLinkProps {
  variant?: "primary" | "secondary";
  text: string;
  path: string;
}
const MainLink: React.FC<MainLinkProps> = ({
  variant = "primary",
  text,
  path,
}) => {
  const secondaryColorContrastStyle =
    variant === "secondary"
      ? "bg-secondary text-background"
      : "text-secondary hover:text-secondary-dark";

  return (
    <Link
      className={`rounded-lg p-2 ${secondaryColorContrastStyle}`}
      href={path}
    >
      {text}
    </Link>
  );
};
export default MainLink;
