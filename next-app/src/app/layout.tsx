import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

config.autoAddCss = false;

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webbkraft.net"),
  title: {
    default: "Webbkraft - Modern Webbutveckling i Karlstad",
    template: "%s | Webbkraft",
  },
  description:
    "Vi hjälper lokala företag i Karlstad att växa digitalt med moderna hemsidor och AI-teknik.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Webbkraft",
    title: "Webbkraft - Modern Webbutveckling i Karlstad",
    description:
      "Vi hjälper lokala företag i Karlstad att växa digitalt med moderna hemsidor och AI-teknik.",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webbkraft - Modern Webbutveckling i Karlstad",
    description:
      "Vi hjälper lokala företag i Karlstad att växa digitalt med moderna hemsidor och AI-teknik.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
