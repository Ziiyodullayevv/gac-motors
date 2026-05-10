"use client";

import { GacHeader } from "@/sections/gac/components/gac-header";
import { I18nProvider } from "@/sections/gac/context/gac-i18n";
import { BackToTopButton } from "@/sections/gac/layout/back-to-top-button";
import { GacFooter } from "@/sections/gac/layout/gac-footer";
import { NavigationProgress } from "@/sections/gac/layout/navigation-progress";

export function GacSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-black font-sans text-white">
        <NavigationProgress />
        <GacHeader />
        {children}
        <GacFooter />
        <BackToTopButton />
      </div>
    </I18nProvider>
  );
}
