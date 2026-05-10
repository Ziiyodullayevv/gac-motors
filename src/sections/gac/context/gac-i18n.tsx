"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "uz" | "ru";

const dictionaries = {
  uz: {
    language: {
      label: "Til",
      uz: "UZB",
      ru: "RU",
    },
    nav: {
      models: "Modellar",
      technology: "Texnologiya",
      discover: "Kashf Eting",
      contact: "Bog'lanish",
      services: "Xizmatlar",
    },
    common: {
      learnMore: "Ko‘proq bilish",
      details: "Batafsil",
      detailedInfo: "Batafsil ma'lumot",
      home: "Bosh sahifa",
      loading: "Yuklanmoqda",
      moreModels: "Boshqa modellar",
      feature: "FEATURE",
    },
    notFound: {
      title: "Sahifa topilmadi",
      description:
        "Siz qidirgan sahifa mavjud emas yoki manzili o‘zgargan. Quyidagi modellardan birini tanlang.",
    },
    hero: [
      "7 O‘rinli Aqlli Flagman SUV",
      "Qattiq Aqlli SUV",
      "Yangi Avlod Trendli Chiroyli Aqlli SUV",
    ],
    products: [
      "Yangi Avlod Texnikasida Sedan",
      "Yangi Oqim Toza Elektr Kuchiga Ega SUV",
    ],
    about: {
      text: "Guangzhou Automobile Group Co., Ltd. (“GAC”) 1997 yil iyun oyida tashkil etilgan. 2023 yilda GAC'ning ishlab chiqarish va hajmi 2,5 milliondan oshib, yildan-yilga ijobiy o‘sishga erishdi.",
    },
    tech: {
      title: "GAC ofisi",
      text: "Greenergy avtosaloni Toshkentda joylashgan. Quyidagi xarita orqali GAC ofis manzilini ko‘rishingiz va yo‘nalishni belgilashingiz mumkin.",
    },
    footer: {
      copyright: "© 2026 GAC GROUP",
      links: ["Cookies Policy", "Term of Use", "Privacy policy"],
    },
  },
  ru: {
    language: {
      label: "Язык",
      uz: "UZB",
      ru: "RU",
    },
    nav: {
      models: "Модели",
      technology: "Технологии",
      discover: "Откройте GAC",
      contact: "Контакты",
      services: "Сервисы",
    },
    common: {
      learnMore: "Узнать больше",
      details: "Подробнее",
      detailedInfo: "Подробная информация",
      home: "Главная",
      loading: "Загрузка",
      moreModels: "Другие модели",
      feature: "FEATURE",
    },
    notFound: {
      title: "Страница не найдена",
      description:
        "Страница, которую вы ищете, не существует или ее адрес изменился. Выберите одну из моделей ниже.",
    },
    hero: [
      "7-местный интеллектуальный флагманский SUV",
      "Надежный интеллектуальный SUV",
      "Стильный интеллектуальный SUV нового поколения",
    ],
    products: [
      "Седан нового поколения",
      "Новый электрический SUV",
    ],
    about: {
      text: "Guangzhou Automobile Group Co., Ltd. (“GAC”) была основана в июне 1997 года. В 2023 году объем производства и продаж GAC превысил 2,5 миллиона автомобилей, сохранив положительную динамику роста.",
    },
    tech: {
      title: "Офис GAC",
      text: "Автосалон Greenergy находится в Ташкенте. На карте ниже можно посмотреть адрес офиса GAC и построить маршрут.",
    },
    footer: {
      copyright: "© 2026 GAC GROUP",
      links: ["Cookies Policy", "Terms of Use", "Privacy policy"],
    },
  },
} as const;

type Dictionary = (typeof dictionaries)[Language];

type I18nContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "uz";
    }
    const saved = window.localStorage.getItem("gac-language");
    if (saved === "uz" || saved === "ru") {
      return saved;
    }
    return "uz";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (nextLang: Language) => {
    setLangState(nextLang);
    window.localStorage.setItem("gac-language", nextLang);
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: dictionaries[lang],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return value;
}
