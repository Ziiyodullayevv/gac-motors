import { notFound } from "next/navigation";
import { getModelBySlug, modelItems } from "@/sections/gac/data/model-data";
import { ModelDetailView } from "@/sections/gac/view/models/model-detail-view";

export function generateStaticParams() {
  return modelItems.map((model) => ({
    slug: model.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = getModelBySlug(slug);

  if (!model) {
    notFound();
  }

  return <ModelDetailView model={model} />;
}
