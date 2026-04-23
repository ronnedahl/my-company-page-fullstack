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
    ? "glass-card border-accent-green/40 glow-gold -translate-y-2 hover:-translate-y-3 scale-[1.03]"
    : "glass-card border-white/[0.06] hover:-translate-y-1.5 hover:border-accent-green/20";

  const btnClasses = featured
    ? "bg-accent-green border-accent-green text-[#0A0E17] hover:brightness-110 hover:shadow-[0_0_20px_rgba(200,169,110,0.3)]"
    : "border-accent-green/40 text-accent-green hover:bg-accent-green hover:text-[#0A0E17]";

  return (
    <div
      className={`border rounded-2xl p-10 px-7 text-center relative transition-all duration-300 ${cardClasses}`}
    >
      {badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-green/10 text-accent-green px-5 py-1 rounded-[20px] text-[0.8rem] font-semibold border border-accent-green/20">
          {badge}
        </span>
      )}
      <h3 className="text-[1.25rem] font-semibold mb-4">{name}</h3>
      <div className="text-[2.8rem] font-extrabold mb-6">
        {price} <span className="text-base font-medium">kr</span>
      </div>
      <ul className="text-left mb-8">
        {features.map((feature) => (
          <li
            key={feature}
            className="py-2 text-[0.9rem] flex items-center gap-2.5"
          >
            <FontAwesomeIcon icon={faCheck} className="text-xs text-accent-green" />
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
