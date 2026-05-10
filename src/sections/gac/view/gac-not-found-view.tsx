"use client";

import Link from "next/link";
import { useI18n } from "@/sections/gac/context/gac-i18n";
import { modelItems } from "@/sections/gac/data/model-data";

export function GacNotFoundView() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-white max-md:px-5">
      <section className="mx-auto flex min-h-[70svh] max-w-[1140px] flex-col justify-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/50">404</p>
        <h1 className="mt-5 text-[56px] font-bold leading-none max-md:text-[36px]">{t.notFound.title}</h1>
        <p className="mt-5 max-w-[560px] text-lg leading-7 text-white/70 max-md:text-base">
          {t.notFound.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-md border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
          >
            {t.common.home}
          </Link>
          {modelItems.map((model) => (
            <Link
              key={model.slug}
              href={model.href}
              className="rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:bg-white/10 hover:text-white"
            >
              {model.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
