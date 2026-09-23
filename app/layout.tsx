import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mujaheedbaita.com"),
  title: {
    default:
      "Mujaheed Baita — Technology Strategist, Systems Architect & Export Market Strategist",
    template: "%s — Mujaheed Baita",
  },
  description:
    "Mujaheed Baita identifies the gaps businesses overlook, designs the systems they need, and turns opportunities into scalable technology and commercial infrastructure. Focused on African markets, Saudi/GCC trade corridors, fintech infrastructure, business automation and venture architecture.",
  keywords: [
    "Mujaheed Baita",
    "Mujaheed Baita technology strategist",
    "Mujaheed Baita software",
    "Mujaheed Baita business strategist",
    "Nigeria technology strategist",
    "Nigeria export strategist",
    "African technology entrepreneur",
    "African business systems",
    "Nigeria Saudi trade",
    "African GCC trade",
    "systems architect",
    "venture builder",
    "fintech infrastructure Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mujaheedbaita.com",
    siteName: "Mujaheed Baita",
    title: "Mujaheed Baita — I Build Systems Around Opportunity",
    description:
      "Technology strategist, systems architect, export-market strategist and venture builder transforming business gaps into intelligent digital infrastructure across Africa and the GCC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mujaheed Baita — I Build Systems Around Opportunity",
    description:
      "Technology strategist, systems architect, export-market strategist and venture builder — Africa · GCC · Fintech · Export · Automation.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mujaheed Baita",
  jobTitle: [
    "Technology Strategist",
    "Systems Architect",
    "Export Market Strategist",
    "Venture Builder",
  ],
  description:
    "Multidisciplinary technology and business systems strategist operating at the intersection of African markets, GCC trade corridors, fintech infrastructure and business process automation.",
  knowsAbout: [
    "Software Architecture",
    "Business Process Automation",
    "Fintech Infrastructure",
    "Export Strategy",
    "African Markets",
    "GCC Market Entry",
    "Venture Building",
    "Digital Transformation",
  ],
  url: "https://mujaheedbaita.com",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
