import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            <Image
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2066&auto=format&fit=crop"
              alt="Kalender och bokningssystem"
              width={600}
              height={400}
              className="w-full h-auto rounded-[20px]"
            />
          </div>
          <div>
            <h2 className="text-[1.5rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
              Dina kunder vill boka när det passar dem
            </h2>
            <p className="text-gray-text mb-5">
              Studier visar att över 40% av alla bokningar görs utanför
              kontorstid. Om du bara tar emot samtal under dagen missar du nästan
              hälften av dina potentiella kunder.
            </p>
            <p className="text-gray-text mb-5">
              <strong>Med ett onlinebokningssystem</strong> kan dina kunder boka
              tid direkt på din hemsida — klockan 22 på en söndag eller klockan
              6 på en måndag. Du vaknar till en full kalender istället för
              missade samtal.
            </p>
            <p className="text-gray-text mb-5">
              Vi integrerar bokningssystemet direkt i din hemsida så att det
              känns som en naturlig del av upplevelsen, inte en extern länk som
              skickar besökaren någon annanstans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
