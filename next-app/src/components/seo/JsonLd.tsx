export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Webbkraft",
    url: "https://webbkraft.net",
    logo: "https://webbkraft.net/images/logo-webb.webp",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+46704893020",
      contactType: "customer service",
      availableLanguage: "Swedish",
    },
    email: "info@webbkraft.net",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://webbkraft.net",
    name: "Webbkraft",
    description:
      "Vi hjälper lokala företag i Karlstad att växa digitalt med moderna hemsidor och AI-teknik.",
    url: "https://webbkraft.net",
    telephone: "+46704893020",
    email: "info@webbkraft.net",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karlstad",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.4022,
      longitude: 13.5115,
    },
    areaServed: {
      "@type": "City",
      name: "Karlstad",
    },
    priceRange: "$$",
    image: "https://webbkraft.net/images/logo-webb.webp",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Webbtjänster",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Webbutveckling & Redesign",
            description:
              "Vi bygger nya moderna sidor eller fräschar upp din gamla utan att tappa din plats på Google.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bokningssystem Online",
            description:
              "Låt kunderna boka tid direkt på nätet med smidiga bokningssystem.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Chatbot & Kundtjänst",
            description:
              "Smart AI-chattbot som svarar på dina kunders frågor dygnet runt.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Synlighet på Google",
            description:
              "Vi hjälper dig att klättra i sökresultaten så att lokala kunder hittar ditt företag.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Snabbanalys & Åtgärd",
            description:
              "Blixtsnabb analys av din nuvarande sida med konkreta förbättringsförslag.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hastighet & Prestanda",
            description:
              "Vi optimerar din kod och dina bilder så att sidan laddar blixtsnabbt.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
