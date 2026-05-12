"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { MapPin, Phone } from "lucide-react";
import { GacHeroCarousel } from "@/sections/gac/components/gac-hero-carousel";
import { GacBodyText, GacMoreLink, GacSectionHeading } from "@/sections/gac/components/gac-ui";
import { useI18n } from "@/sections/gac/context/gac-i18n";
import { getLocalizedModel, modelItems, type ModelItem, type ModelSlug } from "@/sections/gac/data/model-data";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2996.23077153855!2d69.2097410760566!3d41.32559497130773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzMyLjEiTiA2OcKwMTInNDQuMyJF!5e0!3m2!1sen!2s!4v1778474440925!5m2!1sen!2s";
const MAP_DIRECTIONS_HREF = "https://www.google.com/maps/dir/?api=1&destination=41.325595,69.212306";
const PHONE_NUMBER = "+998 55 588 49 49";
const PHONE_HREF = "tel:+998555884949";

const productSections = [
  {
    slug: "ep008",
    image: "/ep008/banner-3.avif",
    objectPosition: "center",
    mobileObjectPosition: "24% center",
  },
  {
    slug: "aion-i60",
    image: "/i60/b5.jpg",
    objectPosition: "center",
    mobileObjectPosition: "76% center",
  },
  {
    slug: "gac-s7-trump",
    image: "/s7/p-2-02-pc_large.avif",
    objectPosition: "center",
    mobileObjectPosition: "center",
  },
] satisfies { slug: ModelSlug; image: string; objectPosition: string; mobileObjectPosition: string }[];

function ProductSection({
  model,
  image,
  objectPosition,
  mobileObjectPosition,
}: {
  model: ModelItem;
  image: string;
  objectPosition: string;
  mobileObjectPosition: string;
}) {
  return (
    <section className="gac-screen-section relative isolate flex min-h-svh items-start justify-center overflow-hidden bg-black text-white">
      <Image
        src={image}
        alt={model.name}
        fill
        sizes="100vw"
        className="object-cover [object-position:var(--object-position)] max-md:[object-position:var(--mobile-object-position)]"
        style={
          {
            "--object-position": objectPosition,
            "--mobile-object-position": mobileObjectPosition,
          } as CSSProperties
        }
      />
      <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="relative z-10 mt-[105px] flex w-full max-w-[680px] flex-col items-center px-6 text-center max-md:mt-[86px]">
        <p className="mb-[18px] text-[42px] font-bold leading-none tracking-[0.04em] max-md:text-[28px]">
          {model.name}
        </p>
        <GacSectionHeading className="text-[28px] leading-none max-md:text-[20px]">{model.heroSubtitle}</GacSectionHeading>
        <div className="mt-[18px]">
          <GacMoreLink href={model.href} />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { t } = useI18n();

  return (
    <section className="gac-about-section flex items-center overflow-hidden bg-black text-white max-md:py-14">
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-[460px_1fr] items-center gap-[37.5px] px-6 max-lg:max-w-[884px] max-lg:grid-cols-[minmax(300px,390px)_1fr] max-md:flex max-md:min-h-[90svh] max-md:flex-col max-md:justify-center max-md:gap-9 max-md:px-0">
        <div className="max-w-[461px] max-md:order-1 max-md:px-[30px] max-md:text-center">
          <div className="relative mb-[18px] h-[27px] w-[90px] max-md:mx-auto">
            <Image src="/gac/about.png" alt="GAC" fill sizes="90px" className="object-contain object-left" />
          </div>
          <GacBodyText>{t.about.text}</GacBodyText>
          <div className="mt-[18px]">
            <GacMoreLink />
          </div>
        </div>
        <div className="relative h-[420.8px] w-full overflow-hidden max-lg:h-[300px] max-md:order-2 max-md:h-[58svh] max-md:min-h-[360px] max-md:w-full">
          <Image
            src="/gac/technology.png"
            alt="GAC group"
            fill
            sizes="(max-width: 768px) 100vw, 627px"
            className="object-cover max-md:object-center"
          />
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const { t } = useI18n();

  return (
    <section className="gac-tech-section overflow-hidden bg-black text-white">
      <div className="mx-auto flex h-full w-full max-w-[1140px] flex-col px-6 pt-[70.5px] max-md:min-h-[81svh] max-md:justify-center max-md:px-[30px] max-md:pt-16">
        <div className="max-w-[1140px]">
          <GacSectionHeading className="leading-none">{t.tech.title}</GacSectionHeading>
          <GacBodyText className="mt-10 max-w-[1130px] max-md:mt-6">{t.tech.text}</GacBodyText>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <a
            href={PHONE_HREF}
            className="group flex items-center gap-4 border border-white/15 bg-white/4 px-5 py-4 transition-colors hover:border-white/40 hover:bg-white/8"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white">
              <Phone className="size-5" strokeWidth={2} />
            </span>
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.18em] text-white/60">{t.tech.phoneLabel}</span>
              <span className="text-base font-semibold text-white">{PHONE_NUMBER}</span>
            </span>
          </a>
          <a
            href={MAP_DIRECTIONS_HREF}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex items-center gap-4 border border-white/15 bg-white/4 px-5 py-4 transition-colors hover:border-white/40 hover:bg-white/8"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white">
              <MapPin className="size-5" strokeWidth={2} />
            </span>
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.18em] text-white/60">{t.tech.addressLabel}</span>
              <span className="text-base font-semibold text-white">{t.tech.address}</span>
            </span>
          </a>
        </div>

        <div className="relative left-1/2 mt-[30px] h-[620px] w-[100dvw] -translate-x-1/2 overflow-hidden bg-[#151515] max-lg:h-[520px] max-md:h-[58svh] max-md:min-h-[420px]">
          <iframe
            src={MAP_EMBED_SRC}
            title="Greenergy GAC office location"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function HomeContent() {
  const { lang } = useI18n();

  return (
    <main className="min-h-screen bg-black text-white">
      <GacHeroCarousel />
      {productSections.map((section) => {
        const model = modelItems.find((item) => item.slug === section.slug);

        return model ? (
          <ProductSection
            key={section.slug}
            model={getLocalizedModel(model, lang)}
            image={section.image}
            objectPosition={section.objectPosition}
            mobileObjectPosition={section.mobileObjectPosition}
          />
        ) : null;
      })}
      <AboutSection />
      <TechnologySection />
    </main>
  );
}

export function GacHomeView() {
  return <HomeContent />;
}
