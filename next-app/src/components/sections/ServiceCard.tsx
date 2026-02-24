import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ServiceCardData } from "@/types";

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardData) {
  return (
    <div className="bg-white text-text p-7 rounded-[16px] border-2 border-accent-green transition-all duration-300 hover:shadow-[0_10px_30px_rgba(6,78,59,0.12)] hover:-translate-y-1">
      <div className="text-accent-green w-10 h-10 flex items-center justify-center rounded-lg mb-5">
        <FontAwesomeIcon icon={icon} className="text-lg" />
      </div>
      <h3 className="text-[1.2rem] font-semibold mb-2.5">{title}</h3>
      <p className="text-[0.85rem] text-gray-text mb-5 leading-relaxed">
        {description}
      </p>
      <span className="text-[0.75rem] text-[#999] mb-4 block">Vad ingår?</span>
      {href ? (
        <Link
          href={href}
          className="inline-block border border-accent-green text-accent-green px-4 py-2 rounded-md text-[0.8rem] font-semibold hover:bg-accent-green hover:text-white transition-all duration-300"
        >
          Läs mer &gt;
        </Link>
      ) : (
        <button className="border border-accent-green text-accent-green px-4 py-2 rounded-md text-[0.8rem] cursor-pointer font-semibold hover:bg-accent-green hover:text-white transition-all duration-300">
          Läs mer &gt;
        </button>
      )}
    </div>
  );
}
