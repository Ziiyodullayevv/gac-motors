import { GacSiteLayout } from "@/sections/gac/layout/gac-site-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <GacSiteLayout>{children}</GacSiteLayout>;
}
