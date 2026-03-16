import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 pb-20 text-gray-text text-sm border-t border-[#1e1e1e]">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; 2026 Webbkraft. Alla rättigheter reserverade.</p>
        <div className="flex gap-6">
          <Link href="/integritetspolicy" className="hover:text-text transition-colors">
            Integritetspolicy
          </Link>
          <Link href="/villkor" className="hover:text-text transition-colors">
            Allmänna Villkor
          </Link>
        </div>
      </div>
    </footer>
  );
}
