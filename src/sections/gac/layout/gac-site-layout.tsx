"use client";

import { useEffect, useRef, useState } from "react";
import { GacContactModal } from "@/sections/gac/components/gac-contact-modal";
import { GacHeader } from "@/sections/gac/components/gac-header";
import { I18nProvider } from "@/sections/gac/context/gac-i18n";
import { BackToTopButton } from "@/sections/gac/layout/back-to-top-button";
import { GacFooter } from "@/sections/gac/layout/gac-footer";
import { NavigationProgress } from "@/sections/gac/layout/navigation-progress";

export function GacSiteLayout({ children }: { children: React.ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false);
  const autoOpenedRef = useRef(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("gac-contact-modal-shown") === "true") {
      autoOpenedRef.current = true;
      return;
    }

    const maybeOpenContact = () => {
      if (autoOpenedRef.current) {
        return;
      }

      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        return;
      }

      if (window.scrollY >= scrollableHeight / 2) {
        autoOpenedRef.current = true;
        window.sessionStorage.setItem("gac-contact-modal-shown", "true");
        setContactOpen(true);
      }
    };

    const frame = window.requestAnimationFrame(maybeOpenContact);
    window.addEventListener("scroll", maybeOpenContact, { passive: true });
    window.addEventListener("resize", maybeOpenContact);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", maybeOpenContact);
      window.removeEventListener("resize", maybeOpenContact);
    };
  }, []);

  return (
    <I18nProvider>
      <div className="min-h-screen bg-black font-sans text-white">
        <NavigationProgress />
        <GacHeader onContactClick={() => setContactOpen(true)} />
        {children}
        <GacFooter />
        <BackToTopButton onContactClick={() => setContactOpen(true)} />
        <GacContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </I18nProvider>
  );
}
