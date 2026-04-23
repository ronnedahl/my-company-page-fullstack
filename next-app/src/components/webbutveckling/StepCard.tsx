import type { StepData } from "@/types";

export default function StepCard({ number, title, description }: StepData) {
  return (
    <div className="p-5 border-l-3 border-white/[0.04] transition-all duration-300 hover:border-l-accent-green hover:bg-white/[0.015]">
      <div className="text-[3rem] font-extrabold text-[#E8D6B5] leading-none mb-2.5">
        {number}
      </div>
      <h3 className="text-[1.25rem] font-semibold mb-2.5">{title}</h3>
      <p className="text-[0.9rem] text-gray-text">{description}</p>
    </div>
  );
}
