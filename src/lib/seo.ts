import type { Metadata } from "next";
import type { ModelItem } from "@/sections/gac/data/model-data";

export const SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mymotorsnurafshon.uz/";
export const SITE_NAME = "GAC Uzbekistan";
export const SITE_PHONE = "+998 55 588 49 49";
export const DEALER_NAME = "Greenergy GAC Uzbekistan";

const MODEL_SEO: Record<
	string,
	{ title: string; description: string; ogImage: string; keywords: string[] }
> = {
	ep008: {
		title: "Dongfeng EP 008 O'zbekistonda | 6 O'rinli Elektr SUV, 636 km",
		description:
			"Dongfeng EP 008 — 6 o'rinli elektr oilaviy SUV. 636 km gacha EV yurish masofasi, 3025 mm g'ildirak bazasi, biznes-klass qulaylik. O'zbekistonda narx va buyurtma: +998 55 588 49 49.",
		ogImage: "/ep008/banner-1.webp",
		keywords: [
			"Dongfeng EP 008 Uzbekistan",
			"Dongfeng EP 008 narxi",
			"elektr oilaviy SUV",
			"6 o'rinli elektr avtomobil",
			"EP 008 O'zbekiston",
			"Dongfeng elektr SUV",
		],
	},
	"aion-i60": {
		title: "Aion i60 O'zbekistonda | EV va EREV, 650 km Yurish Masofasi",
		description:
			"Aion i60 — EV va EREV versiyali aqlli kompakt SUV. 650 km yurish masofasi, 3C tez zaryad (200 km 5 daqiqada), 5 o'rinli salon. O'zbekistonda narx va buyurtma: +998 55 588 49 49.",
		ogImage: "/i60/b1.webp",
		keywords: [
			"Aion i60 Uzbekistan",
			"Aion i60 narxi",
			"elektr SUV Uzbekistan",
			"EREV avtomobil",
			"Aion i60 O'zbekiston",
			"tez zaryadlanadigan elektr avtomobil",
		],
	},
	"gac-s7-trump": {
		title: "GAC S7 Trumpchi O'zbekistonda | REEV Premium SUV, 500 ot kuchi",
		description:
			"GAC S7 Trumpchi — flagman REEV premium SUV. 500 ot kuchi, 4WD, 0–100 km/soat 5,5 soniya, Nappa charm + Alcantara salon. O'zbekistonda narx va buyurtma: +998 55 588 49 49.",
		ogImage: "/s7/2.jpg",
		keywords: [
			"GAC S7 Trumpchi Uzbekistan",
			"GAC S7 narxi",
			"premium SUV O'zbekiston",
			"REEV gibrid avtomobil",
			"GAC Trumpchi S7",
			"flagman SUV Toshkent",
		],
	},
};

const FALLBACK_SEO = {
	title: "GAC Avtomobili O'zbekistonda | Narx va Texnik Ko'rsatkichlar",
	description:
		"GAC avtomobillarining O'zbekistondagi rasmiy dileri. Barcha modellar, narxlar va buyurtma uchun murojaat qiling: +998 55 588 49 49.",
	ogImage: "/s7/2.jpg",
	keywords: ["GAC Uzbekistan", "GAC avtomobil narxi"],
};

export function generateModelMetadata(model: ModelItem): Metadata {
	const seo = MODEL_SEO[model.slug] ?? FALLBACK_SEO;
	const url = `${SITE_URL}${model.href}`;
	const ogImageUrl = `${SITE_URL}${seo.ogImage}`;

	return {
		title: seo.title,
		description: seo.description,
		keywords: [
			...seo.keywords,
			"GAC Uzbekistan",
			"GAC avtomobil",
			"elektr avtomobil Uzbekistan",
		],
		alternates: { canonical: url },
		openGraph: {
			title: seo.title,
			description: seo.description,
			url,
			type: "website",
			siteName: SITE_NAME,
			locale: "uz_UZ",
			images: [
				{
					url: ogImageUrl,
					width: 1200,
					height: 630,
					alt: `${model.name} — O'zbekistonda | ${SITE_NAME}`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: seo.title,
			description: seo.description,
			images: [ogImageUrl],
		},
	};
}

export function buildModelCarJsonLd(model: ModelItem) {
	const seo = MODEL_SEO[model.slug] ?? FALLBACK_SEO;
	const url = `${SITE_URL}${model.href}`;

	const brandName =
		model.slug === "ep008"
			? "Dongfeng"
			: model.slug === "aion-i60"
				? "Aion"
				: "GAC";

	return {
		"@context": "https://schema.org",
		"@type": "Car",
		name: model.name,
		description: seo.description,
		image: `${SITE_URL}${seo.ogImage}`,
		url,
		brand: { "@type": "Brand", name: brandName },
		offers: {
			"@type": "Offer",
			availability: "https://schema.org/InStock",
			priceCurrency: "UZS",
			seller: {
				"@type": "AutoDealer",
				name: DEALER_NAME,
				telephone: SITE_PHONE,
				url: SITE_URL,
			},
		},
	};
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

export const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "AutoDealer",
	"@id": `${SITE_URL}/#organization`,
	name: DEALER_NAME,
	url: SITE_URL,
	logo: {
		"@type": "ImageObject",
		url: `${SITE_URL}/gac/logo-header.webp`,
	},
	telephone: SITE_PHONE,
	address: {
		"@type": "PostalAddress",
		addressCountry: "UZ",
		addressLocality: "Toshkent",
		addressRegion: "Toshkent",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: 41.325595,
		longitude: 69.212306,
	},
	hasMap:
		"https://www.google.com/maps/dir/?api=1&destination=41.325595,69.212306",
	makesOffer: [
		{
			"@type": "Offer",
			itemOffered: { "@type": "Car", name: "Dongfeng EP 008" },
		},
		{ "@type": "Offer", itemOffered: { "@type": "Car", name: "Aion i60" } },
		{
			"@type": "Offer",
			itemOffered: { "@type": "Car", name: "GAC S7 Trumpchi" },
		},
	],
};

export const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"@id": `${SITE_URL}/#website`,
	name: SITE_NAME,
	url: SITE_URL,
	publisher: { "@id": `${SITE_URL}/#organization` },
	inLanguage: ["uz", "ru"],
};
