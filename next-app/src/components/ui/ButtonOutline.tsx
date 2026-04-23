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
      className={`border border-white/20 text-white/90 px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-accent-green hover:text-accent-green backdrop-blur-sm inline-flex items-center gap-2 transition-all duration-300 ${className}`}
    >
      {children}
      {icon && <FontAwesomeIcon icon={icon} />}
    </a>
  );
}
