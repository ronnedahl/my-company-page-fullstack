import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@/lib/icons";
import type { TestimonialData } from "@/types";

export default function TestimonialCard({
  text,
  authorName,
  authorCompany,
}: TestimonialData) {
  return (
    <div className="bg-card-bg border border-border rounded-xl p-7">
      <div className="text-star-yellow mb-4 text-[0.9rem] flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
      </div>
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="text-light-green text-2xl mb-2.5 block"
      />
      <p className="text-gray-text text-[0.95rem] leading-relaxed mb-5">
        {text}
      </p>
      <div>
        <strong className="block text-[0.95rem]">{authorName}</strong>
        <span className="text-gray-text text-[0.85rem]">{authorCompany}</span>
      </div>
    </div>
  );
}
