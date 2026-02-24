import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SeoMigration from "@/components/sections/SeoMigration";
import Services from "@/components/sections/Services";
import Who from "@/components/sections/Who";
import Work from "@/components/sections/Work";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Chatbot from "@/components/sections/Chatbot";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SeoMigration />
        <Services />
        <Who />
        <Work />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
