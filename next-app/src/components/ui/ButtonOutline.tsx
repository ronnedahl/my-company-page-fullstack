import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonOutlineProps {
  href: string;
  children: React.ReactNode;
  icon?: IconDefinition;
  className?: string;
}

export default function ButtonOutline({
  href,
  children,
  icon,
  className = "",
}: ButtonOutlineProps) {
  return (
    <a
      href={href}
      className={`border border-[#ccc] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-text hover:text-white hover:border-text inline-flex items-center gap-2 ${className}`}
    >
      {children}
      {icon && <FontAwesomeIcon icon={icon} />}
    </a>
  );
}
