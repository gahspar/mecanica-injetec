import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Injetec Mecânica Automotiva", template: "%s | Injetec" },
  description: "Atendimento técnico premium para veículos importados em Gaspar/SC. Desde 2003.",
  keywords: ["mecânica de importados", "oficina em Gaspar", "diagnóstico automotivo", "Injetec"],
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    description: "Oficina especializada em veículos importados desde 2003.",
    telephone: "+55 47 99191-7785",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rod. Ingo Hering, 9271 — Margem Esquerda",
      addressLocality: "Gaspar",
      addressRegion: "SC",
      postalCode: "89116-755",
      addressCountry: "BR",
    },
    sameAs: [site.instagram, site.google],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "84" },
  };
  return (
    <html lang="pt-BR">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
