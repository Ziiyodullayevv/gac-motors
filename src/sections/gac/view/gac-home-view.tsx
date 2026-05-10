"use client";

import Image from "next/image";
import { GacHeroCarousel } from "@/sections/gac/components/gac-hero-carousel";
import { GacBodyText, GacMoreLink, GacSectionHeading } from "@/sections/gac/components/gac-ui";
import { useI18n } from "@/sections/gac/context/gac-i18n";
import { getLocalizedModel, modelItems, type ModelItem, type ModelSlug } from "@/sections/gac/data/model-data";

const productSections = [
  {
    slug: "ep008",
    image: "/ep008/banner-3.avif",
    objectPosition: "center",
  },
  {
    slug: "aion-i60",
    image: "/i60/b5.jpg",
    objectPosition: "center",
  },
  {
    slug: "gac-s7-trump",
    image: "/s7/p-2-02-pc_large.avif",
    objectPosition: "center",
  },
] satisfies { slug: ModelSlug; image: string; objectPosition: string }[];

function ProductSection({ model, image, objectPosition }: { model: ModelItem; image: string; objectPosition: string }) {
  return (
    <section className="gac-screen-section relative isolate flex min-h-svh items-start justify-center overflow-hidden bg-black text-white">
      <Image
        src={image}
        alt={model.name}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
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
    <section className="gac-about-section flex items-center bg-black text-white">
      <div className="mx-auto grid w-full max-w-[1140px] grid-cols-[460px_1fr] items-center gap-[37.5px] px-6 max-lg:max-w-[884px] max-lg:grid-cols-[minmax(300px,390px)_1fr] max-md:flex max-md:min-h-[90svh] max-md:flex-col max-md:justify-center max-md:gap-8 max-md:px-[30px]">
        <div className="max-w-[461px] max-md:order-2 max-md:text-center">
          <div className="relative mb-[18px] h-[27px] w-[90px] max-md:mx-auto">
            <Image src="/gac/about.png" alt="GAC" fill sizes="90px" className="object-contain object-left" />
          </div>
          <GacBodyText>{t.about.text}</GacBodyText>
          <div className="mt-[18px]">
            <GacMoreLink />
          </div>
        </div>
        <div className="relative h-[420.8px] w-full overflow-hidden max-lg:h-[300px] max-md:order-1 max-md:h-auto max-md:aspect-[627/421]">
          <Image src="/gac/technology.png" alt="GAC group" fill sizes="(max-width: 768px) 86vw, 627px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  const { t } = useI18n();
  const mapSrc =
    "https://yandex.uz/map-widget/v1/?filter=car_brand%3Agac_motor%3Bautomotive_parts%3Agac_motor1&l=masstransit&ll=69.202877%2C41.222076&mode=search&oid=3056707607&ol=biz&sctx=ZAAAAAgBEAAaKAoSCdxlv%2B50TFFAEf6cgvxsnERAEhIJ5NpQMc7flD8RVwVqMXiYhj8iBgABAgMEBSgKOABA31BIAWI6cmVhcnI9c2NoZW1lX0xvY2FsL0dlb3VwcGVyL0FkdmVydHMvQ3VzdG9tTWF4YWR2L0VuYWJsZWQ9MWI6cmVhcnI9c2NoZW1lX0xvY2FsL0dlb3VwcGVyL0FkdmVydHMvQ3VzdG9tTWF4YWR2L01heGFkdj0xNWJEcmVhcnI9c2NoZW1lX0xvY2FsL0dlb3VwcGVyL0FkdmVydHMvQ3VzdG9tTWF4YWR2L1JlZ2lvbklkcz1bMSwxMDE3NF1iQHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW91cHBlci9BZHZlcnRzL01heGFkdlRvcE1peC9NYXhhZHZGb3JNaXg9MTBqAnV6nQHNzMw9oAEAqAEAvQF47NSzwgEFl9DGsQuCAgpnYWMgb2ZmaWNligIdMTg0MTA1MzIyJDE4NDEwNTMyMCQxODQxMDUyNDaSAgCaAgxkZXNrdG9wLW1hcHOqAiYyMjY2MDAxNzExNzcsMTQ2MDY0NzAwMTg0LDIxNDM5MjcwMjYxOA%3D%3D&sll=69.194637%2C41.222076&sspn=0.040770%2C0.022066&text=gac%20office&z=15";

  return (
    <section className="gac-tech-section bg-black text-white">
      <div className="mx-auto flex h-full w-full max-w-[1140px] flex-col px-6 pt-[70.5px] max-md:min-h-[81svh] max-md:justify-center max-md:px-[30px] max-md:pt-16">
        <div className="max-w-[1140px]">
          <GacSectionHeading className="leading-none">{t.tech.title}</GacSectionHeading>
          <GacBodyText className="mt-10 max-w-[1130px] max-md:mt-6">{t.tech.text}</GacBodyText>
        </div>
        <div className="relative mt-[30px] h-[496.59px] w-full overflow-hidden bg-[#151515] max-lg:h-[360px] max-md:h-auto max-md:aspect-[1157/504]">
          <iframe
            src={mapSrc}
            title="Greenergy GAC office location"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
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
