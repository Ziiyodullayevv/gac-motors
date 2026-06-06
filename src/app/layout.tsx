import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/seo";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col">
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1025818736538151');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1025818736538151&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
