import { getModelBySlug } from "@/sections/gac/data/model-data";
import { ModelDetailView } from "@/sections/gac/view/models/model-detail-view";
import {
  generateModelMetadata,
  buildModelCarJsonLd,
  buildBreadcrumbJsonLd,
  SITE_URL,
} from "@/lib/seo";

const model = getModelBySlug("gac-s7-trump")!;

export const metadata = generateModelMetadata(model);

export default function Page() {
  if (!model) return null;

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
