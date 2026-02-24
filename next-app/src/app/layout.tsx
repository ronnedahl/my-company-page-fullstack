import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Växtkraft Webb - Modern Webbutveckling",
  description:
    "Vi hjälper lokala företag i Karlstad att växa digitalt med moderna hemsidor och AI-teknik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
