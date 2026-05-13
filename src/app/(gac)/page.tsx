import type { Metadata } from "next";
import { GacHomeView } from "@/sections/gac";
import {
  SITE_URL,
  SITE_NAME,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const HOME_OG_IMAGE = `${SITE_URL}/s7/2.jpg`;

export const metadata: Metadata = {
  title: `${SITE_NAME} | Rasmiy Elektr Avtomobil Dileri`,
  description:
    "GAC, Dongfeng va Aion elektr avtomobillarining O'zbekistondagi rasmiy dileri. Dongfeng EP 008, Aion i60, GAC S7 Trumpchi — narxlar, texnik ko'rsatkichlar va buyurtma uchun murojaat qiling: +998 94 545 54 94.",
  keywords: [
    "GAC Uzbekistan",
    "GAC avtomobillari O'zbekiston",
    "elektr avtomobil Uzbekistan",
    "Dongfeng EP 008 Uzbekistan",
    "Aion i60 Uzbekistan",
    "GAC S7 Trumpchi Uzbekistan",
    "elektr SUV narxi Toshkent",
    "zamonaviy elektr avtomobil",
    "GAC rasmiy diler",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} | Rasmiy Elektr Avtomobil Dileri`,
    description:
      "Dongfeng EP 008, Aion i60, GAC S7 Trumpchi — O'zbekistondagi rasmiy GAC dileri. Barcha modellar, narxlar va buyurtma.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: HOME_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GAC Uzbekistan — Rasmiy Elektr Avtomobil Dileri",
      },
    ],
  },
  twitter: {
    title: `${SITE_NAME} | Rasmiy Elektr Avtomobil Dileri`,
    description:
      "Dongfeng EP 008, Aion i60, GAC S7 Trumpchi — O'zbekistondagi rasmiy GAC dileri.",
    images: [HOME_OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <GacHomeView />
    </>
  );
}
