"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { GacSectionHeading } from "@/sections/gac/components/gac-ui";

type ComfortSlide = {
  title: string;
  image: string;
};

const AUTOPLAY_MS = 5200;

export function ModelComfortCarousel({ slides }: { slides: ComfortSlide[] }) {
  const [active, setActive] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const next = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [next]);

  const slideTransform = {
    transform: `translateX(-${active * 100}%)`,
  };

  return (
    <section className="relative bg-black px-6 py-[132px] text-white max-md:px-5 max-md:py-16">
      <div className="mx-auto grid max-w-[1624px] grid-cols-[0.82fr_1.18fr] items-center gap-[78px] max-lg:grid-cols-1 max-lg:gap-10">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-700 ease-out" style={slideTransform}>
            {slides.map((slide) => (
              <div key={slide.title} className="min-w-full">
                <GacSectionHeading className="max-w-[680px]">{slide.title}</GacSectionHeading>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[905/510] overflow-hidden bg-[#111]">
          <div className="flex h-full transition-transform duration-700 ease-out" style={slideTransform}>
            {slides.map((slide) => (
              <div key={slide.image} className="relative h-full min-w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 1024px) 92vw, 905px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1624px] items-center justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={`rounded-full transition-all duration-500 ${
              index === active ? "h-2 w-10 bg-white" : "size-2 bg-white/45 hover:bg-white/75"
            }`}
            type="button"
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
        <button
          className="grid size-9 place-items-center rounded-full border-2 border-white/60 text-white/75 transition hover:border-white hover:text-white max-md:size-[30px]"
          type="button"
          onClick={next}
          aria-label="Next slide"
        >
          <span className="size-3 rotate-45 border-r-2 border-t-2 border-current max-md:size-2.5" />
        </button>
      </div>
    </section>
  );
}
