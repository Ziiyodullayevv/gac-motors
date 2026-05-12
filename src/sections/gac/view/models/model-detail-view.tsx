"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { GacBodyText, GacOutlineLink, GacSectionHeading } from "@/sections/gac/components/gac-ui";
import { useI18n } from "@/sections/gac/context/gac-i18n";
import type { ModelItem } from "@/sections/gac/data/model-data";
import { getLocalizedModel, modelItems } from "@/sections/gac/data/model-data";
import { ModelComfortCarousel } from "./model-comfort-carousel";

function HeroSection({ model }: { model: ModelItem }) {
  return (
    <section className="relative isolate min-h-[900px] overflow-hidden bg-black text-white max-lg:min-h-svh">
      <Image
        src={model.heroSlides[0].image}
        alt={model.name}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/15" />
      <div className="relative z-10 mx-auto flex min-h-[900px] max-w-[1140px] flex-col items-center px-6 pt-[132px] text-center max-lg:min-h-svh max-md:pt-[96px]">
        <h1 className="text-[40px] font-bold leading-none tracking-[0.04em] max-md:text-[28px]">{model.name}</h1>
        <p className="mt-7 text-[24px] font-semibold leading-none max-md:mt-4 max-md:text-[18px]">
          {model.heroSubtitle}
        </p>
      </div>
    </section>
  );
}

const PRESENTATION_PHONE = "+998 55 588 49 49";
const PRESENTATION_PHONE_HREF = "tel:+998555884949";

function PresentationSection({ model }: { model: ModelItem }) {
  const { t } = useI18n();
  const greeting = model.presentation?.greeting ?? t.heroGreeting;
  const offerNote = model.presentation?.offerNote;
  const phoneLabel = model.presentation?.phoneLabel ?? t.tech.callLabel;

  return (
    <section className="bg-black px-6 pb-[72px] pt-[96px] text-white max-md:px-5 max-md:pb-12 max-md:pt-16">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-8 text-center max-md:gap-6">
        <p className="text-[28px] font-semibold leading-tight tracking-tight text-white max-md:text-[22px]">
          {greeting}
        </p>
        {offerNote ? (
          <p className="max-w-[820px] text-[16px] leading-[1.65] text-white/80 max-md:text-[14.5px] max-md:leading-[1.6]">
            {offerNote}
          </p>
        ) : null}
        <a
          href={PRESENTATION_PHONE_HREF}
          className="inline-flex items-center gap-3 border border-white bg-white px-6 py-3 text-[16px] font-bold tracking-tight text-black transition-colors hover:bg-transparent hover:text-white max-md:w-full max-md:justify-center max-md:text-[15px]"
        >
          <Phone className="size-5" strokeWidth={2.2} />
          <span className="flex flex-col items-start leading-tight max-md:items-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] opacity-70">{phoneLabel}</span>
            <span className="text-[17px] font-bold tracking-normal">{PRESENTATION_PHONE}</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function ExteriorIntroSection({ model }: { model: ModelItem }) {
  return (
    <section className="bg-black px-6 pb-[96px] pt-[116px] text-white max-md:px-5 max-md:py-16">
      <div className="mx-auto max-w-[1624px]">
        <div className="mx-auto max-w-[1004px]">
          <GacSectionHeading>{model.detailIntro.title}</GacSectionHeading>
          <GacBodyText className="mt-8 max-md:mt-5">{model.detailIntro.description}</GacBodyText>
        </div>

        <div className="relative mx-auto mt-[52px] aspect-[1624/836] w-full overflow-hidden max-md:mt-8">
          <Image
            src={model.detailIntro.image}
            alt={model.detailIntro.title}
            fill
            sizes="(max-width: 768px) 92vw, 1624px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function SplitFeatureSection({ model }: { model: ModelItem }) {
  return (
    <section className="bg-black px-6 py-[128px] text-white max-md:px-5 max-md:py-16">
      <div className="mx-auto grid max-w-[1624px] grid-cols-[0.82fr_1.18fr] items-center gap-[78px] max-lg:grid-cols-1 max-lg:gap-10">
        <GacSectionHeading className="max-w-[680px]">{model.splitFeature.title}</GacSectionHeading>
        <div className="relative aspect-[905/681] overflow-hidden">
          <Image
            src={model.splitFeature.image}
            alt={model.splitFeature.title}
            fill
            sizes="(max-width: 1024px) 92vw, 905px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function TwinFeatureSection({ model }: { model: ModelItem }) {
  return (
    <section className="bg-black px-6 pb-[112px] pt-[72px] text-white max-md:px-5 max-md:py-16">
      <div className="mx-auto max-w-[1624px]">
        <GacSectionHeading className="text-center">{model.twinFeature.title}</GacSectionHeading>
        <div className="mt-8 grid grid-cols-2 gap-10 max-lg:gap-6 max-md:grid-cols-1">
          {model.twinFeature.items.map((item) => (
            <article key={item.image} className="relative aspect-[790/790] overflow-hidden bg-[#151515]">
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 92vw, 790px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/78 via-black/30 to-transparent px-9 pb-9 pt-28 max-md:px-5 max-md:pb-6">
                <p className="text-[18px] font-medium leading-[1.35] max-md:text-[15px]">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecSheetSection({ model }: { model: ModelItem }) {
  const { t } = useI18n();

  if (!model.specSheet?.length) {
    return null;
  }

  return (
    <section className="bg-black px-6 py-[112px] text-white max-md:px-5 max-md:py-16">
      <div className="mx-auto max-w-[1140px]">
        <GacSectionHeading className="text-center">{t.specs.title}</GacSectionHeading>
        <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-10 max-md:mt-8 max-md:grid-cols-1 max-md:gap-y-8">
          {model.specSheet.map((group) => (
            <div key={group.group} className="flex flex-col">
              <h3 className="border-b border-white/20 pb-4 text-[18px] font-semibold uppercase tracking-[0.16em] text-white">
                {group.group}
              </h3>
              <dl className="mt-4 divide-y divide-white/10">
                {group.items.map((item) => (
                  <div key={item.label} className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-3">
                    <dt className="text-[14px] leading-snug text-white/65 max-md:text-[13px]">{item.label}</dt>
                    <dd className="text-right text-[15px] font-semibold leading-snug text-white max-md:text-[14px]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FullBleedFeatureSection({ model }: { model: ModelItem }) {
  return (
    <section className="relative isolate min-h-[900px] overflow-hidden bg-black text-white max-lg:min-h-[720px] max-md:min-h-[620px]">
      <Image
        src={model.fullBleedFeature.image}
        alt={model.fullBleedFeature.title}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/20" />
      <div className="relative z-10 mx-auto flex max-w-[1140px] flex-col items-center px-6 pt-[96px] text-center max-md:pt-[72px]">
        <GacSectionHeading>{model.fullBleedFeature.title}</GacSectionHeading>
        <GacBodyText className="mt-8 max-w-[1000px] text-center max-md:mt-5">{model.fullBleedFeature.description}</GacBodyText>
      </div>
    </section>
  );
}

function RelatedModelsSection({ model }: { model: ModelItem }) {
  const { lang, t } = useI18n();
  const related = modelItems.filter((item) => item.slug !== model.slug).slice(0, 2);

  return (
    <section className="bg-white px-6 py-16 text-[#202020] max-md:px-5 max-md:py-12">
      <div className="mx-auto max-w-[1140px]">
        <GacSectionHeading className="text-center text-[#3a3a3a]">{t.common.moreModels}</GacSectionHeading>
        <div className="mt-10 grid grid-cols-2 gap-12 max-md:mt-8 max-md:grid-cols-1 max-md:gap-10">
          {related.map((item) => (
            <article key={item.slug} className="flex flex-col items-center text-center">
              <div className="relative h-[180px] w-full max-w-[460px] overflow-hidden max-md:h-[150px]">
                <Image src={item.menuImage} alt={item.name} fill sizes="460px" className="object-contain" />
              </div>
              <h3 className="mt-8 text-[24px] font-medium leading-none max-md:mt-6 max-md:text-[20px]">
                {getLocalizedModel(item, lang).name}
              </h3>
              <div className="mt-5">
                <GacOutlineLink href={item.href}>{t.common.detailedInfo}</GacOutlineLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ModelDetailView({ model }: { model: ModelItem }) {
  const { lang } = useI18n();
  const localizedModel = getLocalizedModel(model, lang);

  return (
    <main id="top" className="min-h-screen bg-black text-white">
      <HeroSection model={localizedModel} />
      <PresentationSection model={localizedModel} />
      <ExteriorIntroSection model={localizedModel} />
      <SplitFeatureSection model={localizedModel} />
      <TwinFeatureSection model={localizedModel} />
      <ModelComfortCarousel slides={localizedModel.comfortFeature.slides} />
      <FullBleedFeatureSection model={localizedModel} />
      <SpecSheetSection model={localizedModel} />
      <RelatedModelsSection model={localizedModel} />
    </main>
  );
}
