import Link from "next/link";
import Image from "next/image";
import type { ServiceCardData } from "@/types";

export default function ServiceCard({
  title,
  description,
  href,
  imageUrl,
  imageAlt,
}: ServiceCardData) {
  return (
    <div className="glass-card group rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-green/20 hover:shadow-[0_10px_40px_rgba(200,169,110,0.08)]">
      <div className="px-5 pt-5">
        <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover brightness-75"
          />
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-[1.1rem] mb-2">{title}</h3>
        <p className="text-[0.85rem] text-gray-text mb-5 leading-relaxed flex-1">
          {description}
        </p>
        {href ? (
          <Link
            href={href}
            className="inline-block border border-accent-green/40 text-accent-green px-4 py-2 rounded-md text-[0.8rem] font-semibold hover:bg-accent-green hover:text-black transition-all duration-300 self-start"
          >
            Läs mer &gt;
          </Link>
        ) : (
          <button className="border border-accent-green/40 text-accent-green px-4 py-2 rounded-md text-[0.8rem] cursor-pointer font-semibold hover:bg-accent-green hover:text-black transition-all duration-300 self-start">
            Läs mer &gt;
          </button>
        )}
      </div>
    </div>
  );
}
