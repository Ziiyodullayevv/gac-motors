import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Rasmiy Elektr Avtomobil Dileri`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "GAC, Dongfeng va Aion elektr avtomobillarining O'zbekistondagi rasmiy dileri. Dongfeng EP 008, Aion i60, GAC S7 Trumpchi — narxlar, texnik ko'rsatkichlar va buyurtma.",
  keywords: [
    "GAC Uzbekistan",
    "GAC avtomobil",
    "elektr avtomobil Uzbekistan",
    "Dongfeng EP 008",
    "Aion i60",
    "GAC S7 Trumpchi",
    "elektr SUV narxi",
    "zamonaviy elektr avtomobil",
  ],
  authors: [{ name: "Greenergy GAC Uzbekistan", url: SITE_URL }],
  creator: "Greenergy GAC Uzbekistan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: "ru_RU",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
