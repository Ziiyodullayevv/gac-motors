"use client";

import Image from "next/image";
import { useI18n } from "@/sections/gac/context/gac-i18n";
import { modelItems } from "@/sections/gac/data/model-data";

export function GacFooter() {
  const { t } = useI18n();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto hidden h-96 max-w-[1140px] grid-cols-[1fr_380px] px-6 pt-10 lg:grid">
        <nav className="grid grid-cols-[180px_180px] gap-16">
          <div>
            <h3 className="mb-4 text-base font-semibold leading-6">{t.nav.models}</h3>
            <ul className="space-y-2 text-sm leading-6 text-white/68">
              {modelItems.map((model) => (
                <li key={model.slug}>
                  <a href={model.href} className="hover:text-white">
                    {model.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-base font-semibold leading-6">{t.nav.contact}</h3>
            <ul className="space-y-2 text-sm leading-6 text-white/68">
              <li>
                <a href="mailto:GACI_CMD_CDS_OF@gac-international.com" className="hover:text-white">
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex flex-col items-end">
          <a className="relative h-8 w-[149px]" href="#">
            <Image src="/gac/logo-footer.webp" alt="GAC" fill sizes="149px" className="object-contain" />
          </a>
          <a className="mt-[25.59px] text-sm leading-[21px] text-white/90" href="mailto:GACI_CMD_CDS_OF@gac-international.com">
            E-mail:&nbsp;GACI_CMD_CDS_OF@gac-international.com
          </a>
        </div>
      </div>

      <div className="hidden border-t border-[#323232] lg:block">
        <div className="mx-auto flex h-[39px] max-w-[1140px] items-center justify-between px-6 text-xs leading-[15px] text-[#c2c2c2]">
          <p>{t.footer.copyright}</p>
          <div className="flex text-white">
            {t.footer.links.map((link, index) => (
              <a key={link} className={index === 0 ? "px-1.5" : "border-l border-white px-1.5"} href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-h-[496px] flex-col items-center pt-11 lg:hidden">
        <nav className="flex w-full flex-col gap-4 px-[30px] pb-9">
          <div>
            <h3 className="mb-4 text-base font-semibold leading-6">{t.nav.models}</h3>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              {modelItems.map((model) => (
                <a key={model.slug} href={model.href} className="hover:text-white">
                  {model.name}
                </a>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <h3 className="mb-4 text-base font-semibold leading-6">{t.nav.contact}</h3>
            <a href="mailto:GACI_CMD_CDS_OF@gac-international.com" className="text-sm text-white/70 hover:text-white">
              E-mail
            </a>
          </div>
        </nav>
        <div className="flex w-full max-w-[500px] flex-col items-center px-5 pb-5">
          <a className="relative h-8 w-[149px]" href="#">
            <Image src="/gac/logo-footer.webp" alt="GAC" fill sizes="149px" className="object-contain" />
          </a>
          <a className="mt-8 text-center text-sm leading-[21px] text-white/90" href="mailto:GACI_CMD_CDS_OF@gac-international.com">
            E-mail:&nbsp;GACI_CMD_CDS_OF@gac-international.com
          </a>
        </div>
        <div className="flex w-full justify-center pb-5 pt-9 text-center text-xs leading-[15px] text-white">
          {t.footer.links.map((link, index) => (
            <a key={link} className={index === 0 ? "px-1.5" : "border-l border-white px-1.5"} href="#">
              {link}
            </a>
          ))}
        </div>
        <div className="flex h-10 w-full items-center justify-center border-t border-[#323232] text-xs leading-[15px] text-[#c2c2c2]">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
