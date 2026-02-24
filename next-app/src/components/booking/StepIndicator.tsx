"use client";

const STEPS = ["Tjänst", "Datum", "Tid", "Uppgifter", "Klart"];

interface StepIndicatorProps {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {STEPS.map((label, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        const isDone = step < currentStep;

        return (
          <div key={label} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  isDone
                    ? "bg-accent-green text-white"
                    : isActive
                      ? "bg-accent-green text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {isDone ? "✓" : step}
              </div>
              <span
                className={`text-xs hidden sm:block ${
                  isActive ? "text-accent-green font-semibold" : "text-gray-text"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-8 h-0.5 mb-5 sm:mb-0 ${
                  isDone ? "bg-accent-green" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
