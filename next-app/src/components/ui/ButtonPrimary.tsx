import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ButtonPrimaryProps {
  href: string;
  children: React.ReactNode;
  icon?: IconDefinition;
  className?: string;
}

export default function ButtonPrimary({
  href,
  children,
  icon,
  className = "",
}: ButtonPrimaryProps) {
  const classes = `bg-accent-green text-[#0A0E17] px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:brightness-110 hover:shadow-[0_0_20px_rgba(200,169,110,0.3)] transition-all duration-300 ${className}`;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <FontAwesomeIcon icon={icon} />}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
      {icon && <FontAwesomeIcon icon={icon} />}
    </a>
  );
}
