import { GacSiteLayout } from "@/sections/gac/layout/gac-site-layout";
import { GacNotFoundView } from "@/sections/gac/view/gac-not-found-view";

export default function NotFound() {
  return (
    <GacSiteLayout>
      <GacNotFoundView />
    </GacSiteLayout>
  );
}
