import { getModelBySlug } from "@/sections/gac/data/model-data";
import { ModelDetailView } from "@/sections/gac/view/models/model-detail-view";

export default function Page() {
  const model = getModelBySlug("ep008");

  if (!model) {
    return null;
  }

  return <ModelDetailView model={model} />;
}
