import Image from "next/image";
import type { CaseStudyData } from "@/types";

export default function CaseStudy({
  tag,
  title,
  description,
  imageUrl,
  imageAlt,
  statValue,
  statLabel,
  statPosition,
  reverse,
}: CaseStudyData) {
  const statClasses =
    statPosition === "left"
      ? "top-10 left-0"
      : "bottom-8 right-8";

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 items-center mb-24 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <span className="bg-card-bg border border-border px-4 py-1 rounded-[20px] text-[0.8rem] font-semibold inline-block mb-5">
          {tag}
        </span>
        <h3 className="text-[1.2rem] md:text-[2rem] font-semibold mb-4">
          {title}
        </h3>
        <p className="text-gray-text mb-8">{description}</p>
      </div>
      <div className="relative rounded-[20px] overflow-hidden h-[400px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
        />
        <div
          className={`absolute bg-card-bg px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex flex-col ${statClasses}`}
        >
          <strong className="text-[1.5rem] text-text">{statValue}</strong>
          <span className="text-[0.8rem] text-gray-text">{statLabel}</span>
        </div>
      </div>
    </div>
  );
}
