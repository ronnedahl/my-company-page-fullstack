export default function About() {
  return (
    <section id="about" className="py-10 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mb-15">
          <h2 className="text-[1.8rem] md:text-[2.5rem] font-semibold">Om Oss</h2>
          <div className="text-gray-text">
            <p className="mb-5">
              Vi är en nystartad byrå med ett tydligt mål: att ge lokala företag
              tillgång till samma avancerade teknik som de stora jättarna, men
              till en bråkdel av priset.
            </p>
            <p className="mb-5">
              Genom att använda AI i vår utvecklingsprocess kan vi skapa allt
              från bokningssystem till kundsupportlösningar mycket snabbare än
              traditionella byråer. Det betyder lägre kostnader för dig och
              snabbare leverans, så att du kan fokusera på din verksamhet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
