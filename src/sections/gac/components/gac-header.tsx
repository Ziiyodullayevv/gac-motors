"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n, type Language } from "@/sections/gac/context/gac-i18n";
import { modelItems } from "@/sections/gac/data/model-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PHONE_NUMBER = "+998 78 141 88 88";
const PHONE_HREF = "tel:+998781418888";

export function GacHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const lightMode = mobileMenuOpen;
  const darkHeader = scrolled && !lightMode;
  const changeLanguage = (value: string) => setLang(value as Language);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileLanguageOpen(false);
  };
  const chooseMobileLanguage = (value: Language) => {
    setLang(value);
    setMobileLanguageOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300 lg:h-[63px] ${
        lightMode
          ? "bg-white text-[#333] shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : darkHeader
            ? "bg-black/88 text-white shadow-[0_1px_0_rgba(255,255,255,0.08)]"
            : "bg-transparent text-white"
      }`}
    >
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-5 sm:px-10">
        <Link
          className="relative -ml-2 grid h-full w-[168px] place-items-center max-lg:w-32"
          href="/"
          aria-label="GAC Uzbekistan"
        >
          <span className="relative h-7 w-32 overflow-visible">
            <Image
              src={lightMode ? "/gac/logo-black.webp" : "/gac/logo-header.webp"}
              alt="GAC"
              fill
              priority
              sizes="128px"
              className={`object-contain transition-transform ${lightMode ? "origin-left scale-[1.35]" : ""}`}
            />
          </span>
        </Link>

        <nav className="ml-5 hidden h-full items-center md:flex lg:ml-9">
          <ul className="flex items-center gap-1 text-[13px] font-bold lg:gap-2 lg:text-sm">
            {modelItems.map((model) => (
              <li key={model.slug}>
                <Link
                  className={`inline-flex h-10 items-center rounded-full px-3.5 transition-colors hover:bg-white/12 hover:text-white lg:px-5 ${
                    lightMode ? "text-[#333] hover:bg-[#f3f3f3] hover:text-[#111]" : "text-white"
                  }`}
                  href={model.href}
                >
                  {model.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className={`ml-auto hidden h-10 items-center rounded-full px-4 text-sm font-bold transition-colors hover:bg-white/12 md:inline-flex ${
            lightMode ? "text-[#222] hover:bg-[#f3f3f3]" : "text-white"
          }`}
          href={PHONE_HREF}
        >
          {PHONE_NUMBER}
        </a>

        <DropdownMenu open={languageOpen} onOpenChange={setLanguageOpen}>
          <DropdownMenuTrigger
            className={`ml-2 hidden size-10 place-items-center rounded-full outline-none transition-colors md:grid ${
              lightMode ? "text-black" : "text-white"
            }`}
            aria-label={t.language.label}
          >
            <Image
              src="/globe.svg"
              alt=""
              width={24}
              height={24}
              className={`size-6 transition ${lightMode ? "brightness-0" : "brightness-0 invert"}`}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={12}
            className="w-36 rounded-2xl border border-white/35 bg-white/70 p-2 text-black shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          >
            <DropdownMenuRadioGroup value={lang} onValueChange={changeLanguage}>
              <DropdownMenuRadioItem
                className="cursor-pointer rounded-xl px-4 py-2.5 text-sm font-bold data-[checked]:bg-black data-[checked]:text-white"
                value="uz"
              >
                {t.language.uz}
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                className="cursor-pointer rounded-xl px-4 py-2.5 text-sm font-bold data-[checked]:bg-black data-[checked]:text-white"
                value="ru"
              >
                {t.language.ru}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <button
          className={`ml-auto grid size-10 place-items-center rounded-full outline-none transition-colors md:hidden ${
            lightMode ? "text-black" : "text-white"
          }`}
          type="button"
          aria-label={t.language.label}
          onClick={() => {
            setMobileMenuOpen(true);
            setMobileLanguageOpen(true);
          }}
        >
          <Image
            src="/globe.svg"
            alt=""
            width={24}
            height={24}
            className={`size-6 transition ${lightMode ? "brightness-0" : "brightness-0 invert"}`}
          />
        </button>

        <button
          className={`ml-2 grid size-10 place-items-center rounded-full outline-none transition-colors md:hidden ${
            lightMode ? "text-black" : "text-white"
          }`}
          type="button"
          aria-label="Open menu"
          aria-controls="gac-mobile-menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => {
            setLanguageOpen(false);
            setMobileMenuOpen((open) => {
              if (open) {
                setMobileLanguageOpen(false);
              }
              return !open;
            });
          }}
        >
          {mobileMenuOpen ? <X className="size-6" strokeWidth={2} /> : <Menu className="size-6" strokeWidth={2} />}
        </button>
      </div>

      <div
        id="gac-mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-16 overflow-hidden bg-white text-[#333] transition-[opacity,transform] duration-300 md:hidden ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-10 pb-8 pt-16">
          <nav className="grid gap-10">
            {modelItems.map((model) => (
              <Link
                key={model.slug}
                className="flex items-center justify-between text-[25px] font-bold leading-none tracking-normal"
                href={model.href}
                onClick={closeMobileMenu}
              >
                {model.name}
                <ChevronRight className="size-8 text-[#333]" strokeWidth={2.2} />
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <a
              className="mb-5 flex h-12 w-full items-center justify-between rounded-xl bg-black/[0.04] px-4 text-[18px] font-bold text-[#333]"
              href={PHONE_HREF}
              onClick={closeMobileMenu}
            >
              <span>{PHONE_NUMBER}</span>
              <ChevronRight className="size-6 text-[#333]" strokeWidth={2.2} />
            </a>

            <button
              className="flex h-14 w-full items-center justify-between border-t border-black/10 text-[20px] font-bold"
              type="button"
              aria-expanded={mobileLanguageOpen}
              onClick={() => setMobileLanguageOpen((open) => !open)}
            >
              <span className="inline-flex items-center gap-3">
                <Image src="/globe.svg" alt="" width={20} height={20} className="size-5 brightness-0" />
                {t.language.label}
              </span>
              <ChevronDown
                className={`size-6 transition-transform ${mobileLanguageOpen ? "rotate-180" : ""}`}
                strokeWidth={2.2}
              />
            </button>

            <div
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                mobileLanguageOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <button
                  className="flex h-12 w-full items-center justify-between text-left text-base font-semibold text-black/75"
                  type="button"
                  onClick={() => chooseMobileLanguage("uz")}
                >
                  {t.language.uz}
                  {lang === "uz" ? <Check className="size-5 text-black" strokeWidth={2.5} /> : null}
                </button>
                <button
                  className="flex h-12 w-full items-center justify-between text-left text-base font-semibold text-black/75"
                  type="button"
                  onClick={() => chooseMobileLanguage("ru")}
                >
                  {t.language.ru}
                  {lang === "ru" ? <Check className="size-5 text-black" strokeWidth={2.5} /> : null}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
