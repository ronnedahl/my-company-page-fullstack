import Image from "next/image";

interface ProcessCardProps {
  step: number;
  title: string;
  imageUrl: string;
  imageAlt: string;
  subtitle: string;
  description: string;
}

export default function ProcessCard({
  step,
  title,
  imageUrl,
  imageAlt,
  subtitle,
  description,
}: ProcessCardProps) {
  return (
    <div className="bg-card-bg border border-border rounded-xl overflow-hidden flex flex-col">
      <div className="flex items-center gap-3 p-5 pb-0">
        <span className="w-9 h-9 rounded-full bg-accent-green text-white text-sm font-bold flex items-center justify-center shrink-0">
          {step}
        </span>
        <h3 className="font-semibold text-[0.95rem]">{title}</h3>
      </div>

      <div className="px-5 pt-4">
        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
          <Image src={imageUrl} alt={imageAlt} fill className="object-cover brightness-75" />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-accent-green font-semibold text-[0.9rem] mb-1.5">
          {subtitle}
        </h4>
        <p className="text-gray-text text-[0.85rem] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
