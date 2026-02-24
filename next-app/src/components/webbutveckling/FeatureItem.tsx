import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FeatureData } from "@/types";

export default function FeatureItem({ icon, title, description }: FeatureData) {
  return (
    <div className="bg-white p-7 rounded-[16px] border border-[#eee]">
      <div className="text-accent-green text-2xl mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4 className="text-[1.1rem] font-semibold mb-2.5">{title}</h4>
      <p className="text-[0.9rem] text-gray-text">{description}</p>
    </div>
  );
}
