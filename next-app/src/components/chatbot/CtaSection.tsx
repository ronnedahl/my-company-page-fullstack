import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-15">
      <div className="bg-card-bg border border-border text-white text-center py-20 px-5 rounded-[30px]">
        <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-5">
          Redo att ge dina kunder svar direkt?
        </h2>
        <p className="max-w-[600px] mx-auto mb-10 text-gray-text">
          Hör av dig så berättar vi mer om hur en AI-chatbot kan hjälpa just
          ditt företag.
        </p>
        <Link
          href="/#contact"
          className="bg-accent-green text-white px-9 py-2 sm:py-4 rounded-lg font-semibold inline-block hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
        >
          Kontakta Oss
        </Link>
      </div>
    </section>
  );
}
