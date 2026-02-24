interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-[1.8rem] md:text-[2.5rem] font-semibold mb-2.5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-text max-w-[500px] mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
