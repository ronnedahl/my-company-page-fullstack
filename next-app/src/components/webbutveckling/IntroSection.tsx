import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="py-15">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              alt="Web analysis"
              width={600}
              height={400}
              className="w-full h-auto rounded-[20px]"
            />
          </div>
          <div>
            <h2 className="text-[1.6rem] md:text-[2.2rem] font-semibold mb-5 text-accent-green">
              Vi moderniserar utan risk
            </h2>
            <p className="text-gray-text mb-5">
              Många företag drar sig för att göra om sin gamla hemsida av rädsla
              för att försvinna från Google. Det är en befogad rädsla om man gör
              fel.
            </p>
            <p className="text-gray-text mb-5">
              <strong>Vår metod är annorlunda.</strong> Istället för att
              &quot;riva huset och bygga nytt&quot; medan kunderna tittar på,
              arbetar vi med en stegvis implementering. Vi använder modern
              AI-teknik för att analysera din nuvarande struktur och se till att
              Google förstår att den nya sidan är samma sida – fast bättre,
              snabbare och snyggare.
            </p>
            <p className="text-gray-text mb-5">
              Vi erbjuder allt från enkla landningssidor för det lilla företaget
              till komplexa plattformar med bokningssystem för den växande
              verksamheten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
