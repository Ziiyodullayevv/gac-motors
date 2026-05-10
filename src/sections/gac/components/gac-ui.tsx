"use client";

import { useI18n } from "@/sections/gac/context/gac-i18n";

export function GacMoreLink({ href = "#", children }: { href?: string; children?: React.ReactNode }) {
  const { t } = useI18n();

  return (
    <a
      className="inline-flex h-10 min-w-[172px] items-center justify-center rounded-[5px] border border-white/80 bg-white/5 px-8 text-base font-semibold text-white transition-colors hover:bg-white hover:text-black max-md:h-9 max-md:min-w-[150px] max-md:text-sm"
      href={href}
    >
      {children ?? t.common.learnMore}
    </a>
  );
}

export function GacOutlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="inline-flex h-10 min-w-[172px] items-center justify-center rounded-[5px] border border-[#222] bg-transparent px-8 text-base font-semibold text-[#202020] transition-colors hover:bg-black hover:text-white max-md:h-9 max-md:min-w-[150px] max-md:text-sm"
      href={href}
    >
      {children}
    </a>
  );
}

export function GacSectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-[32px] font-semibold leading-tight tracking-normal max-md:text-[24px] ${className}`}>
      {children}
    </h2>
  );
}

export function GacBodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[18px] leading-[27px] text-white/90 max-md:text-[15px] max-md:leading-6 ${className}`}>{children}</p>;
}
