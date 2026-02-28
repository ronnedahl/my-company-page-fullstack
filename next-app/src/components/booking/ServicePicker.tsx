"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot, faCode } from "@/lib/icons";

interface ServicePickerProps {
  selected: string | null;
  onSelect: (service: "ai-consultation" | "web-development") => void;
}

const SERVICES = [
  {
    id: "ai-consultation" as const,
    icon: faRobot,
    title: "AI-konsultation",
    description: "Diskutera hur AI kan effektivisera ditt företag. Vi går igenom möjligheter, verktyg och en konkret plan.",
    duration: "60 min",
  },
  {
    id: "web-development" as const,
    icon: faCode,
    title: "Webbutveckling",
    description: "Gratis rådgivning om din hemsida — ny eller befintlig. Vi tittar på design, prestanda och SEO.",
    duration: "60 min",
  },
];

export default function ServicePicker({ selected, onSelect }: ServicePickerProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-center">Välj tjänst</h2>
      <p className="text-gray-text text-center mb-8">
        Vad vill du ha hjälp med?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
        {SERVICES.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className={`text-left p-6 rounded-xl border-2 transition-all cursor-pointer ${
              selected === s.id
                ? "border-accent-green bg-light-green/30"
                : "border-border hover:border-accent-green/50"
            }`}
          >
            <FontAwesomeIcon
              icon={s.icon}
              className="text-2xl text-accent-green mb-3"
            />
            <h3 className="font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-gray-text mb-3">{s.description}</p>
            <span className="text-xs font-medium text-accent-green">{s.duration}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
