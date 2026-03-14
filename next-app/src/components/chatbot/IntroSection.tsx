import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/chatbot.png"
              alt="AI-chatbot på en hemsida"
              width={600}
              height={400}
              className="w-full h-auto rounded-[20px]"
            />
          </div>
          <div>
            <h2 className="text-[1.6rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
              Dina kunder vill ha svar — nu
            </h2>
            <p className="text-gray-text mb-5">
              Studier visar att 82% av konsumenter förväntar sig svar inom 10
              minuter. Om du inte kan svara direkt riskerar du att förlora kunden
              till en konkurrent som kan.
            </p>
            <p className="text-gray-text mb-5">
              <strong>En AI-chatbot löser det problemet.</strong> Den lär sig
              allt om ditt företag — tjänster, priser, öppettider, vanliga
              frågor — och ger personliga svar på sekunder. Kunden får hjälp
              direkt, och du slipper svara på samma fråga hundra gånger.
            </p>
            <p className="text-gray-text mb-5">
              Chatboten integreras direkt på din hemsida och känns som en
              naturlig del av besöket. Ingen extern app, inget krångel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
