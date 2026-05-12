import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getModelBySlug, modelItems } from "@/sections/gac/data/model-data";
import { ModelDetailView } from "@/sections/gac/view/models/model-detail-view";
import {
  generateModelMetadata,
  buildModelCarJsonLd,
  buildBreadcrumbJsonLd,
  SITE_URL,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return modelItems.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) return {};
  return generateModelMetadata(model);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const model = getModelBySlug(slug);

  if (!model) notFound();

  const carJsonLd = buildModelCarJsonLd(model);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Asosiy Sahifa", url: SITE_URL },
    { name: model.name, url: `${SITE_URL}${model.href}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ModelDetailView model={model} />
    </>
  );
}
