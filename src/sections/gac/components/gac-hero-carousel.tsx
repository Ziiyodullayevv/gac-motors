"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { GacMoreLink } from "@/sections/gac/components/gac-ui";
import { useI18n } from "@/sections/gac/context/gac-i18n";
import { getLocalizedModel, getModelBySlug, type ModelSlug } from "@/sections/gac/data/model-data";

const slideConfigs = [
  {
    slug: "ep008",
    image: "/ep008/banner-1.webp",
    objectPosition: "center",
    mobileObjectPosition: "42% center",
  },
  {
    slug: "aion-i60",
    image: "/i60/b1.webp",
    objectPosition: "center",
    mobileObjectPosition: "68% center",
  },
  {
    slug: "gac-s7-trump",
    image: "/s7/2.jpg",
    objectPosition: "center",
    mobileObjectPosition: "68% center",
  },
] satisfies { slug: ModelSlug; image: string; objectPosition: string; mobileObjectPosition: string }[];

const AUTOPLAY_MS = 5200;

export function GacHeroCarousel() {
  const { lang, t } = useI18n();
  const slides = slideConfigs.map((slide) => {
    const model = getModelBySlug(slide.slug);

    if (!model) {
      throw new Error(`Missing model data for ${slide.slug}`);
    }

    return {
      ...slide,
      model: getLocalizedModel(model, lang),
    };
  });
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slideCount = slides.length;
  const activeSlide = slides[active];
  const showPrevious = active > 0;
  const showNext = active < slideCount - 1;

  const goTo = useCallback((index: number) => {
    setActive((index + slideCount) % slideCount);
  }, [slideCount]);

  const next = useCallback(() => {
    setActive((current) => (current + 1) % slideCount);
  }, [slideCount]);

  const previous = useCallback(() => {
    setActive((current) => (current - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);
    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return (
    <section className="gac-screen-section relative isolate flex min-h-svh items-start justify-center overflow-hidden bg-black text-white">
      {slides.map((slide, index) => {
        const isActive = index === active;

        return (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.image}
              alt={slide.model.name}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: isMobile ? slide.mobileObjectPosition : slide.objectPosition }}
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />

      <div className="relative z-10 mt-[105px] flex w-full max-w-[860px] flex-col items-center px-6 text-center max-md:mt-[86px]">
        <p className="mb-5 inline-block border border-white/45 bg-black/30 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm max-md:mb-4 max-md:text-[11px] max-md:tracking-[0.18em]">
          {t.heroGreeting}
        </p>
        <div className="grid w-full grid-cols-1 items-start">
          {slides.map((slide, index) => (
            <p
              key={slide.model.slug}
              className={`col-start-1 row-start-1 [overflow-wrap:anywhere] text-[clamp(1.875rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[0.04em] text-white transition-opacity duration-700 ease-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={index !== active}
            >
              {slide.model.name}
            </p>
          ))}
        </div>
        <div className="mt-[18px] grid w-full grid-cols-1 items-start">
          {slides.map((slide, index) => (
            <h1
              key={slide.image}
              className={`col-start-1 row-start-1 [overflow-wrap:anywhere] text-[clamp(1.25rem,3.4vw,2.875rem)] font-semibold leading-[1.12] tracking-normal transition-opacity duration-700 ease-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.model.heroSubtitle}
            </h1>
          ))}
        </div>
        <div className="mt-7 max-md:mt-5">
          <GacMoreLink href={activeSlide.model.href} />
        </div>
      </div>

      <div className="absolute bottom-[49.5px] left-1/2 z-10 grid -translate-x-1/2 grid-cols-[36px_auto_36px] items-center gap-3.5 max-md:bottom-8 max-md:grid-cols-[30px_auto_30px] max-md:gap-2.5">
        <button
          className={`grid size-9 place-items-center rounded-full border-2 border-white/60 text-white/75 transition hover:border-white hover:text-white max-md:size-[30px] ${
            showPrevious ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          type="button"
          onClick={previous}
          aria-label="Previous slide"
          tabIndex={showPrevious ? 0 : -1}
          aria-hidden={!showPrevious}
        >
          <ChevronLeft className="size-6 max-md:size-4.5" strokeWidth={2.4} />
        </button>

        <div className="flex h-[18px] items-center justify-center gap-3 max-md:gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              className={`rounded-full transition-all duration-500 ${
                index === active ? "h-2 w-[48px] bg-white max-md:h-1.5 max-md:w-9" : "size-2 bg-white/55 hover:bg-white/80 max-md:size-1.5"
              }`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>

        <button
          className={`grid size-9 place-items-center rounded-full border-2 border-white/60 text-white/75 transition hover:border-white hover:text-white max-md:size-[30px] ${
            showNext ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          type="button"
          onClick={next}
          aria-label="Next slide"
          tabIndex={showNext ? 0 : -1}
          aria-hidden={!showNext}
        >
          <ChevronRight className="size-6 max-md:size-4.5" strokeWidth={2.4} />
        </button>
      </div>
    </section>
  );
}
