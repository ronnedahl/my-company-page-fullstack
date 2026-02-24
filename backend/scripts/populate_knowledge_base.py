"""Populate Firebase vector store with Växtkraft Webb company information."""

import asyncio
import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent))

from src.services.firebase_vector_store import FirebaseVectorStore
import structlog

logger = structlog.get_logger()


async def populate_knowledge_base():
    """Add Växtkraft Webb company information to the vector store."""

    store = FirebaseVectorStore()

    documents = [
        {
            "text": "Växtkraft Webb är en nystartad webbutvecklingsbyrå i Karlstad med ett tydligt mål: att ge lokala företag tillgång till samma avancerade teknik som de stora jättarna, men till en bråkdel av priset. Vi hjälper lokala företag i Karlstad att växa digitalt. Oavsett om du behöver fixa din nuvarande sida eller bygga nytt från grunden, gör vi det snabbare och billigare med hjälp av modern AI-teknik utan att tumma på kvaliteten.",
            "metadata": {"category": "company", "topic": "introduction"}
        },
        {
            "text": "Växtkraft Webb erbjuder följande tjänster: 1) Ny eller befintlig hemsida – vi bygger nya moderna sidor eller fräschar upp din gamla, från enkla landningssidor till större plattformar. 2) Bokningssystem – låt kunderna boka tid direkt på nätet, vi integrerar smidiga bokningssystem. 3) Automatisk kundtjänst / AI-chatbot – en smart AI-chattbot som svarar på kunders frågor dygnet runt. 4) SEO – vi hjälper dig klättra i sökresultaten så lokala kunder hittar ditt företag. 5) Snabbanalys & åtgärd – blixtsnabb analys av din nuvarande sida med förslag på förbättringar. 6) Hastighet & prestanda – optimering av kod och bilder för blixtsnabb laddning.",
            "metadata": {"category": "services", "topic": "overview"}
        },
        {
            "text": "Våra priser och paket: Startpaketet kostar 4 900 kr och inkluderar landningssida, mobilanpassad design, kontaktformulär och grundläggande SEO. Tillväxtpaketet kostar 12 900 kr och inkluderar företagswebbplats (flersidig), bokningssystem, SEO-optimering och Google-anslutning. Premiumpaketet kostar 24 900 kr och inkluderar allt i Tillväxtpaketet plus AI-chatbot, löpande support, prestandaoptimering samt analys och uppföljning. Transparenta priser utan dolda kostnader.",
            "metadata": {"category": "pricing", "topic": "packages"}
        },
        {
            "text": "Vår SEO-migreringsprocess i 4 steg: 1) SEO-analys och kartläggning – vi använder AI för att skanna nuvarande webbplats, kartlägger alla URL:er, nyckelord och trafikdrivande innehåll. 2) Spegling av struktur – vi behåller samma URL-struktur och skapar vattentäta 301-omdirigeringar om URL:er måste ändras. 3) Prestandaoptimering – renare kod och optimerade bilder, Google älskar snabba sidor. 4) Stegvis lansering – realtidsövervakning via Google Search Console med omedelbara justeringar. Vi moderniserar utan risk – istället för att riva huset och bygga nytt arbetar vi med stegvis implementering.",
            "metadata": {"category": "process", "topic": "seo_migration"}
        },
        {
            "text": "Inom webbutveckling kan vi bygga: landningssidor, företagswebbplatser med flera sidor, bokningssystem, mobilanpassade sidor med responsive design, blixtsnabb laddning och sidor med enkel redigering. Vi moderniserar utan risk – många företag drar sig för att göra om sin gamla hemsida av rädsla för att försvinna från Google. Vår metod är annorlunda: istället för att riva och bygga nytt arbetar vi med stegvis implementering som bevarar din Google-ranking.",
            "metadata": {"category": "services", "topic": "webbutveckling"}
        },
        {
            "text": "Vår teknikstack: Vi bygger med Next.js, React och Tailwind CSS för moderna, snabba och responsiva webbplatser. Vi använder AI-verktyg i vår utvecklingsprocess för att skapa allt från bokningssystem till kundsupportlösningar mycket snabbare än traditionella byråer. Det betyder lägre kostnader och snabbare leverans.",
            "metadata": {"category": "technology", "topic": "tech_stack"}
        },
        {
            "text": "Om Växtkraft Webb: Vi är ett lokalt företag i Karlstad grundat av Peter. Genom att använda AI i vår utvecklingsprocess kan vi skapa allt från bokningssystem till kundsupportlösningar mycket snabbare än traditionella byråer. Det betyder lägre kostnader för dig och snabbare leverans, så att du kan fokusera på din verksamhet. Som din lokala partner finns vi alltid nära till hands – ingen stor anonym byrå, utan en personlig kontakt som förstår ditt företag och dina behov.",
            "metadata": {"category": "company", "topic": "about"}
        },
        {
            "text": "Kontakta Växtkraft Webb: E-post: hej@vaxtkraftwebb.se. Telefon: 070-123 45 67. Vi finns i Karlstad, Sverige. Har du frågor eller vill komma igång? Fyll i kontaktformuläret på vår hemsida så hör vi av oss inom 24 timmar. Du kan också boka en gratis rådgivning direkt via hemsidan.",
            "metadata": {"category": "contact", "topic": "contact_info"}
        },
        {
            "text": "Varför välja Växtkraft Webb? Riskfri lansering med SEO-skydd som bevarar din Google-ranking. Modern teknik med Next.js, React och AI-verktyg. Lokalt företag i Karlstad med personlig kontakt. Snabbare och billigare leverans tack vare AI-driven utvecklingsprocess. Transparenta priser utan dolda kostnader. Vi kombinerar AI-verktyg med kreativt hantverk för att leverera snabbare, smartare och till ett bättre pris.",
            "metadata": {"category": "company", "topic": "why_us"}
        },
        {
            "text": "Kundcase och resultat: 1) Restaurang Smak – genom SEO-optimering och mobilanpassade menyer ökade bordsbokningarna med 50%. Anna L. säger: 'Peter förstod exakt vad vi behövde och levererade snabbt.' 2) Klipp & Trim frisörsalong – ny hemsida med integrerat bokningssystem gav 75% fler bokningar och minskad tid i telefon. Erik B. säger: 'Bokningssystemet har förändrat vår vardag.' 3) Bygg & Montage AB – AI-assistent på hemsidan svarar på offertförfrågningar dygnet runt, vilket ökade inkommande leads med 50%. Sara M. säger: 'Vi har fått 50% fler leads sedan lanseringen.'",
            "metadata": {"category": "cases", "topic": "customer_results"}
        }
    ]
    
    logger.info(f"Adding {len(documents)} documents to knowledge base...")
    
    for i, doc in enumerate(documents):
        try:
            doc_id = await store.add_document(
                text=doc["text"],
                metadata=doc["metadata"]
            )
            logger.info(f"Added document {i+1}/{len(documents)}: {doc_id}")
        except Exception as e:
            logger.error(f"Failed to add document {i+1}: {e}")
    
    logger.info("Knowledge base population completed!")


if __name__ == "__main__":
    asyncio.run(populate_knowledge_base())