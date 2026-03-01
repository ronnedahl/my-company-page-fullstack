import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@/lib/icons";

export default function SeoMigration() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 mb-15">
      <div className="bg-card-bg border border-border text-white text-center py-16 px-5 sm:px-12 rounded-[30px]">
        <div className="text-3xl mb-4 text-accent-green">
          <FontAwesomeIcon icon={faShieldHalved} />
        </div>
        <h2 className="text-[1.5rem] md:text-[2.5rem] font-semibold mb-5">
          Vi skyddar din Google-ranking
        </h2>
        <p className="max-w-[700px] mx-auto mb-6 text-gray-text">
          Har du redan en hemsida som ger dig kunder idag? Många drar sig för
          att byta system av rädsla för att tappa sin synlighet. Vi är
          specialister på SEO-säkra migreringar.
        </p>
        <p className="max-w-[700px] mx-auto text-gray-text text-[0.95rem]">
          Innan vi rör en enda rad kod analyserar vi vilka av dina sidor som
          driver trafik idag. Vi ser till att den nya hemsidan ärver kraften
          från den gamla genom korrekt teknisk struktur och omdirigeringar. Vi
          bygger inte bara nytt – vi förvaltar och förädlar.
        </p>
      </div>
    </section>
  );
}
