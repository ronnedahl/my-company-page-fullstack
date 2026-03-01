import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@/lib/icons";
import type { PricingCardData } from "@/types";

export default function PricingCard({
  name,
  price,
  features,
  featured,
  badge,
}: PricingCardData) {
  const cardClasses = featured
    ? "bg-card-bg border-accent-green -translate-y-2 shadow-[0_15px_40px_rgba(6,78,59,0.25)] hover:-translate-y-3"
    : "bg-card-bg border-border hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]";

  const checkColor = "text-accent-green";

  const btnClasses = featured
    ? "bg-accent-green border-accent-green text-white hover:opacity-90"
    : "border-accent-green text-accent-green hover:bg-accent-green hover:text-white";

  return (
    <div
      className={`border rounded-xl p-10 px-7 text-center relative transition-all duration-300 ${cardClasses}`}
    >
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-light-green text-accent-green px-5 py-1 rounded-[20px] text-[0.8rem] font-semibold">
          {badge}
        </span>
      )}
      <h3 className="text-[1.3rem] font-semibold mb-4">{name}</h3>
      <div className="text-[2.8rem] font-extrabold mb-6">
        {price} <span className="text-base font-medium">kr</span>
      </div>
      <ul className="text-left mb-8">
        {features.map((feature) => (
          <li
            key={feature}
            className="py-2 text-[0.9rem] flex items-center gap-2.5"
          >
            <FontAwesomeIcon icon={faCheck} className={`text-xs ${checkColor}`} />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-[0.9rem] border transition-all duration-300 ${btnClasses}`}
      >
        Kom igång <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  );
}
