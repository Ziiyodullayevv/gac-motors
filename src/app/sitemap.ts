import type { MetadataRoute } from "next";
import { modelItems } from "@/sections/gac/data/model-data";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  const modelRoutes: MetadataRoute.Sitemap = modelItems.map((model) => ({
    url: `${SITE_URL}${model.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
    images: [
      `${SITE_URL}${model.heroSlides[0].image}`,
      `${SITE_URL}${model.menuImage}`,
    ],
  }));

  return [...staticRoutes, ...modelRoutes];
}
