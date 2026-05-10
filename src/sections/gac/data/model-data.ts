export type ModelSlug = "ep008" | "aion-i60" | "gac-s7-trump";
export type ModelLanguage = "uz" | "ru";

export type ModelItem = {
  name: string;
  slug: ModelSlug;
  href: string;
  menuImage: string;
  heroSubtitle: string;
  detailIntro: {
    title: string;
    description: string;
    image: string;
  };
  splitFeature: {
    title: string;
    image: string;
  };
  twinFeature: {
    title: string;
    items: {
      image: string;
      caption: string;
    }[];
  };
  comfortFeature: {
    slides: {
      title: string;
      image: string;
    }[];
  };
  fullBleedFeature: {
    image: string;
    title: string;
    description: string;
  };
  showcase: {
    image: string;
    title: string;
    description: string;
  };
  heroSlides: {
    image: string;
    title: string;
    eyebrow: string;
    description: string;
  }[];
  details: {
    kicker: string;
    title: string;
    description: string;
    image: string;
    layout: "wide" | "split" | "compact";
  }[];
  specs: string[];
};

type ModelCopy = {
  heroSubtitle: string;
  detailIntro: {
    title: string;
    description: string;
  };
  splitFeature: {
    title: string;
  };
  twinFeature: {
    title: string;
    items: { caption: string }[];
  };
  comfortFeature: {
    slides: { title: string }[];
  };
  fullBleedFeature: {
    title: string;
    description: string;
  };
  showcase: {
    title: string;
    description: string;
  };
  heroSlides: {
    title: string;
    eyebrow: string;
    description: string;
  }[];
  details: {
    kicker: string;
    title: string;
    description: string;
  }[];
  specs: string[];
};

export const modelItems: ModelItem[] = [
  {
    name: "Dongfeng EP 008",
    slug: "ep008",
    href: "/ep008",
    menuImage: "/ep008/banner-2.jpg",
    heroSubtitle: "6 o‘rinli elektr oilaviy SUV",
    detailIntro: {
      title: "Katta kuzov, silliq elektr siluet",
      description:
        "Dongfeng EP 008 5 metrdan uzun kuzov, 3025 mm g‘ildirak bazasi va 6 o‘rinli salon bilan oilaviy safarlar uchun keng makon beradi.",
      image: "/ep008/banner-3.avif",
    },
    splitFeature: {
      title:
        "Orqa qator yo‘lovchilari uchun qulay stakan tutqichlari, sensorli boshqaruv va mayda buyumlar uchun tartibli joylar",
      image: "/ep008/08-1.jpg",
    },
    twinFeature: {
      title: "Uzoq yo‘l uchun biznes-klass qulaylik",
      items: [
        {
          image: "/ep008/b1.avif",
          caption:
            "Ikkinchi qatordagi keng kreslolar isitish, ventilyatsiya va massaj funksiyalari bilan uzoq safarni yengillashtiradi.",
        },
        {
          image: "/ep008/b2.webp",
          caption:
            "Buklama stol, oyoq tayanchi va alohida o‘qish chiroqlari salonni ish va dam olish uchun qulay zonaga aylantiradi.",
        },
      ],
    },
    comfortFeature: {
      slides: [
        {
          title:
            "Keng salon tartibi yo‘lovchilar uchun havo, bagaj uchun esa ko‘proq amaliy joy qoldiradi",
          image: "/ep008/banner-5.jpg",
        },
        {
          title:
            "Sokin elektr yurish, katta kuzov va yumshoq interyer Dongfeng EP 008’ni oilaviy marshrutlar uchun mos qiladi",
          image: "/ep008/banner-2.jpg",
        },
      ],
    },
    fullBleedFeature: {
      image: "/ep008/banner-4.avif",
      title: "Butun salon bo‘ylab qulay foydalanish",
      description:
        "Uch qatorli joylashuv, tekis buklanadigan o‘rindiqlar va ko‘p sonli saqlash joylari kundalik foydalanishda ham, uzoq safarda ham asqatadi.",
    },
    showcase: {
      image: "/ep008/banner-2.jpg",
      title: "Elektr platformadagi keng oilaviy SUV",
      description:
        "Dongfeng EP 008 sokin yurish, 6 o‘rinli salon va katta yuk imkoniyatini birlashtirib, zamonaviy oilaviy avtomobil rolini bajaradi.",
    },
    heroSlides: [
      {
        image: "/ep008/banner-1.webp",
        title: "Dongfeng EP 008",
        eyebrow: "Elektr oilaviy SUV",
        description:
          "Keng salon, 6 o‘rinli joylashuv va elektr platforma kundalik hayot hamda safarlarni qulay qiladi.",
      },
      {
        image: "/ep008/banner-3.jpg",
        title: "Dongfeng EP 008",
        eyebrow: "Katta kuzov",
        description:
          "Uzun g‘ildirak bazasi, tekis yon chiziqlar va baland pozitsiya avtomobilga salobatli ko‘rinish beradi.",
      },
      {
        image: "/ep008/banner-7.jpg",
        title: "Dongfeng EP 008",
        eyebrow: "Premium interyer",
        description:
          "Orqa qator qulayliklari, yumshoq materiallar va sokin muhit oilaviy safarni yanada osoyishta qiladi.",
      },
    ],
    details: [
      {
        kicker: "Eksteryer",
        title: "Kenglikni ko‘rsatadigan proporsiya",
        description:
          "Yirik kuzov va silliq yon chiziqlar Dongfeng EP 008’ga zamonaviy elektr SUV ko‘rinishini beradi.",
        image: "/ep008/banner-3.jpg",
        layout: "wide",
      },
      {
        kicker: "Interyer",
        title: "Uch qatorli qulay salon",
        description:
          "6 o‘rinli joylashuv, alohida kreslolar va saqlash zonalari yo‘lovchilarga shaxsiy makon yaratadi.",
        image: "/ep008/banner-4.avif",
        layout: "split",
      },
      {
        kicker: "Amaliyot",
        title: "Har kuni ishlatishga tayyor",
        description:
          "Elektr yurish, keng yuk xonasi va oilaga mos salon Dongfeng EP 008’ni kundalik yo‘nalishlarda ham qulay qiladi.",
        image: "/ep008/banner-5.webp",
        layout: "compact",
      },
    ],
    specs: ["6 o‘rinli salon", "636 km gacha CLTC EV yurish", "3025 mm g‘ildirak bazasi", "50W simsiz zaryad"],
  },
  {
    name: "Aion i60",
    slug: "aion-i60",
    href: "/aion-i60",
    menuImage: "/i60/b1.webp",
    heroSubtitle: "Ikki xil quvvat tizimiga ega aqlli SUV",
    detailIntro: {
      title: "Toza elektr dizayn va ixcham SUV proporsiyasi",
      description:
        "Aion i60 shahar uchun mos besh o‘rinli kuzov, silliq old qism va yopiq aerodinamik chiziqlar bilan zamonaviy EV xarakterini ko‘rsatadi.",
      image: "/i60/banner-3.webp",
    },
    splitFeature: {
      title:
        "Katta markaziy ekran, raqamli panel va ergonomik konsol haydovchi atrofida sokin, texnologik muhit yaratadi",
      image: "/i60/banner-9.webp",
    },
    twinFeature: {
      title: "Har kunlik elektr qulaylik",
      items: [
        {
          image: "/i60/b2.png",
          caption:
            "Yumshoq o‘rindiqlar va keng old qator shahardagi qisqa qatnovlarda ham, uzoqroq yo‘lda ham qulaylik beradi.",
        },
        {
          image: "/i60/banner-7.avif",
          caption:
            "Aion i60 EV va range-extender versiyalari bilan taklif qilinadi, 3C tez zaryad esa vaqtni tejaydi.",
        },
      ],
    },
    comfortFeature: {
      slides: [
        {
          title:
            "Raqamli kokpit, sokin yurish va besh o‘rinli joylashuv Aion i60’ni kundalik hayotga moslaydi",
          image: "/i60/b1.webp",
        },
        {
          title:
            "650 km gacha EV yurish masofasi va 200 km masofani 5 daqiqada tiklash imkoniyati uzoq yo‘lda ham ishonch beradi",
          image: "/i60/banner-2.jpg",
        },
      ],
    },
    fullBleedFeature: {
      image: "/i60/b5.jpg",
      title: "Shahar va safar uchun mos elektr xarakter",
      description:
        "Aion i60 silliq harakat, tez zaryadlash va aqlli yordamchilar orqali haydovchiga kamroq tashvish, ko‘proq nazorat beradi.",
    },
    showcase: {
      image: "/i60/banner-2.jpg",
      title: "Elektr harakat uchun amaliy tanlov",
      description:
        "Aion i60 besh o‘rinli salon, EV yoki EREV quvvat tizimi va zamonaviy kokpit bilan oilaviy hamda ish kunlariga mos keladi.",
    },
    heroSlides: [
      {
        image: "/i60/b1.webp",
        title: "Aion i60",
        eyebrow: "AION",
        description:
          "Toza elektr siluet, besh o‘rinli salon va shahar uchun yengil boshqaruv.",
      },
      {
        image: "/i60/banner-3.webp",
        title: "Aion i60",
        eyebrow: "Ikki xil quvvat",
        description:
          "EV versiyasi uzoq yurish masofasini, range-extender versiyasi esa marshrut erkinligini ta’minlaydi.",
      },
      {
        image: "/i60/banner-5.jpg",
        title: "Aion i60",
        eyebrow: "Tez zaryad",
        description:
          "3C tez zaryad texnologiyasi kundalik foydalanishda vaqtni tejashga yordam beradi.",
      },
    ],
    details: [
      {
        kicker: "Eksteryer",
        title: "Silliq va toza old ko‘rinish",
        description:
          "Yopiq old panel, ingichka faralar va aerodinamik shakl Aion i60’ning elektr xarakterini kuchaytiradi.",
        image: "/i60/banner-3.webp",
        layout: "wide",
      },
      {
        kicker: "Interyer",
        title: "Raqamli kokpit",
        description:
          "Katta ekran, raqamli panel va markaziy konsol haydovchi uchun aniq, sodda boshqaruv muhitini yaratadi.",
        image: "/i60/banner-6.avif",
        layout: "split",
      },
      {
        kicker: "Foydalanish",
        title: "Shaharda yengil, yo‘lda ishonchli",
        description:
          "EV va EREV tanlovi, tez zaryad hamda qulay salon Aion i60’ni turli marshrutlarga moslashtiradi.",
        image: "/i60/b1.webp",
        layout: "compact",
      },
    ],
    specs: ["EV va EREV versiyalar", "650 km gacha EV yurish", "3C tez zaryad", "5 o‘rinli salon"],
  },
  {
    name: "GAC S7 Trumpchi",
    slug: "gac-s7-trump",
    href: "/gac-s7-trump",
    menuImage: "/s7/03-1.jpg",
    heroSubtitle: "Keng salonli aqlli flagman SUV",
    detailIntro: {
      title: "Baland pozitsiya va kuchli SUV xarakteri",
      description:
        "GAC S7 Trumpchi 1780 mm baland kuzov, 20 dyuymli g‘ildiraklar va keng yorug‘lik grafikasi bilan yo‘lda darhol ajralib turadi.",
      image: "/s7/4b9375212866023.6747e715e3eef.webp",
    },
    splitFeature: {
      title:
        "15,6 dyuymli markaziy ekran, 8,88 dyuymli raqamli panel va 50W simsiz zaryad haydovchi atrofida texnologik muhit yaratadi",
      image: "/s7/1200x900.webp",
    },
    twinFeature: {
      title: "Flagman darajadagi salon",
      items: [
        {
          image: "/s7/interior-gac-s7.jpg",
          caption:
            "Haydovchiga yo‘naltirilgan panel, keng ekran va toza markaziy konsol boshqaruvni qulay qiladi.",
        },
        {
          image: "/s7/gac-s7-obzor-110.webp",
          caption:
            "Keng o‘rindiqlar, yumshoq materiallar va sozlanadigan qulayliklar uzoq yo‘lda charchoqni kamaytiradi.",
        },
      ],
    },
    comfortFeature: {
      slides: [
        {
          title:
            "PHEV va EREV rejimlari shaharda elektr sokinligini, uzoq yo‘lda esa katta yurish masofasini beradi",
          image: "/s7/2024-12-31_11-34-57.jpg",
        },
        {
          title:
            "Keng ko‘rinish, L2 darajadagi yordamchilar va 720° xavfsizlik konsepsiyasi har safarda ishonch beradi",
          image: "/s7/3.jpg",
        },
      ],
    },
    fullBleedFeature: {
      image: "/s7/p-2-02-pc_large.avif",
      title: "Katta makon, aqlli texnologiya va kuchli yurish",
      description:
        "1020 km gacha umumiy yurish masofasi, 150 km elektr yurish va ADiGO texnologiyalari S7’ni oilaviy hamda uzoq safarlar uchun tayyor qiladi.",
    },
    showcase: {
      image: "/s7/03-1.jpg",
      title: "Flagman SUV xarakteri",
      description:
        "GAC S7 Trumpchi yirik kuzov, keng salon va zamonaviy gibrid quvvat tizimi orqali premium SUV hissini beradi.",
    },
    heroSlides: [
      {
        image: "/s7/2.jpg",
        title: "GAC S7 Trumpchi",
        eyebrow: "GAC",
        description:
          "Baland kuzov, yirik pozitsiya va aqlli yorug‘lik grafikasi bilan flagman SUV ko‘rinishi.",
      },
      {
        image: "/s7/p-2-02-pc_large.avif",
        title: "GAC S7 Trumpchi",
        eyebrow: "Keng salon",
        description:
          "30 m² charm qoplamali interyer, 12 dinamikli audio va qulay o‘rindiqlar yo‘lovchilar uchun yaratilgan.",
      },
      {
        image: "/s7/2024-12-31_11-34-57.jpg",
        title: "GAC S7 Trumpchi",
        eyebrow: "Aqlli gibrid",
        description:
          "PHEV va EREV rejimlari qisqa qatnovda ham, uzoq safarda ham moslashuvchan yurish beradi.",
      },
    ],
    details: [
      {
        kicker: "Eksteryer",
        title: "Yo‘lda baland va ishonchli turadi",
        description:
          "Keskin yon chiziqlar, yirik g‘ildiraklar va kuchli old qism S7’ga qat’iy SUV pozitsiyasini beradi.",
        image: "/s7/2.jpg",
        layout: "wide",
      },
      {
        kicker: "Interyer",
        title: "Texnologiya markazda",
        description:
          "15,6 dyuymli ekran, raqamli panel va simsiz zaryad kundalik boshqaruvni zamonaviy va sodda qiladi.",
        image: "/s7/1200x900.webp",
        layout: "split",
      },
      {
        kicker: "Komfort",
        title: "Uzoq yo‘l uchun keng salon",
        description:
          "Orqa qatorning 137° gacha egilishi, isitish, ventilyatsiya va massaj funksiyalari yo‘lovchilar uchun qulaylik yaratadi.",
        image: "/s7/fff9eb212866023.6747e715e39d2.webp",
        layout: "compact",
      },
    ],
    specs: ["1020 km gacha umumiy yurish", "150 km NEDC elektr yurish", "15,6 dyuymli ekran", "12 dinamikli audio"],
  },
];

const modelCopyRu: Record<ModelSlug, ModelCopy> = {
  ep008: {
    heroSubtitle: "6-местный электрический семейный SUV",
    detailIntro: {
      title: "Крупный кузов и чистый электрический силуэт",
      description:
        "Dongfeng EP 008 сочетает кузов длиной более 5 метров, колесную базу 3025 мм и 6-местный салон для просторных семейных поездок.",
    },
    splitFeature: {
      title:
        "Удобные подстаканники для задних пассажиров, сенсорное управление и аккуратные места для мелких вещей",
    },
    twinFeature: {
      title: "Комфорт бизнес-класса для дальних поездок",
      items: [
        {
          caption:
            "Широкие кресла второго ряда с подогревом, вентиляцией и массажем снижают усталость в длительных поездках.",
        },
        {
          caption:
            "Складной столик, подставка для ног и индивидуальная подсветка создают удобную зону для работы и отдыха.",
        },
      ],
    },
    comfortFeature: {
      slides: [
        {
          title:
            "Просторная компоновка салона оставляет больше воздуха для пассажиров и практичного места для багажа",
        },
        {
          title:
            "Тихий электрический ход, крупный кузов и мягкий интерьер делают Dongfeng EP 008 подходящим для семейных маршрутов",
        },
      ],
    },
    fullBleedFeature: {
      title: "Удобство во всем салоне",
      description:
        "Трехрядная компоновка, складываемые сиденья и множество мест хранения полезны и в повседневности, и в дальней дороге.",
    },
    showcase: {
      title: "Просторный семейный SUV на электрической платформе",
      description:
        "Dongfeng EP 008 объединяет тихий ход, 6-местный салон и большую практичность для роли современного семейного автомобиля.",
    },
    heroSlides: [
      {
        title: "Dongfeng EP 008",
        eyebrow: "Электрический семейный SUV",
        description:
          "Просторный салон, 6-местная компоновка и электрическая платформа делают ежедневные поездки удобнее.",
      },
      {
        title: "Dongfeng EP 008",
        eyebrow: "Крупный кузов",
        description:
          "Длинная колесная база, ровные боковые линии и высокая посадка придают автомобилю солидный вид.",
      },
      {
        title: "Dongfeng EP 008",
        eyebrow: "Премиальный интерьер",
        description:
          "Комфорт заднего ряда, мягкие материалы и тихая атмосфера делают семейную поездку спокойнее.",
      },
    ],
    details: [
      {
        kicker: "Экстерьер",
        title: "Пропорции, подчеркивающие простор",
        description:
          "Крупный кузов и плавные боковые линии формируют современный облик электрического SUV.",
      },
      {
        kicker: "Интерьер",
        title: "Комфортный трехрядный салон",
        description:
          "6-местная компоновка, отдельные кресла и зоны хранения создают личное пространство для пассажиров.",
      },
      {
        kicker: "Практичность",
        title: "Готов к ежедневному использованию",
        description:
          "Электрический ход, вместительный багажник и семейный салон делают Dongfeng EP 008 удобным для повседневных маршрутов.",
      },
    ],
    specs: ["6-местный салон", "До 636 км CLTC на электротяге", "Колесная база 3025 мм", "Беспроводная зарядка 50W"],
  },
  "aion-i60": {
    heroSubtitle: "Интеллектуальный SUV с двумя типами силовой установки",
    detailIntro: {
      title: "Чистый EV-дизайн и компактные SUV-пропорции",
      description:
        "Aion i60 показывает современный электрический характер через пятиместный кузов, плавную переднюю часть и аэродинамичные линии.",
    },
    splitFeature: {
      title:
        "Большой центральный экран, цифровая панель и эргономичная консоль создают спокойную технологичную среду вокруг водителя",
    },
    twinFeature: {
      title: "Электрический комфорт на каждый день",
      items: [
        {
          caption:
            "Мягкие сиденья и просторный передний ряд удобны и в коротких городских поездках, и на более длинном маршруте.",
        },
        {
          caption:
            "Aion i60 предлагается в EV- и range-extender-версиях, а быстрая зарядка 3C помогает экономить время.",
        },
      ],
    },
    comfortFeature: {
      slides: [
        {
          title:
            "Цифровой кокпит, тихий ход и пятиместная компоновка делают Aion i60 удобным для повседневной жизни",
        },
        {
          title:
            "До 650 км запаса хода EV и восстановление 200 км за 5 минут добавляют уверенности в дальней дороге",
        },
      ],
    },
    fullBleedFeature: {
      title: "Электрический характер для города и поездок",
      description:
        "Aion i60 дает плавное движение, быструю зарядку и интеллектуальные ассистенты, чтобы у водителя было меньше забот и больше контроля.",
    },
    showcase: {
      title: "Практичный выбор для электрической мобильности",
      description:
        "Aion i60 сочетает пятиместный салон, EV или EREV силовую установку и современный кокпит для семьи и рабочих дней.",
    },
    heroSlides: [
      {
        title: "Aion i60",
        eyebrow: "AION",
        description:
          "Чистый электрический силуэт, пятиместный салон и легкое управление для города.",
      },
      {
        title: "Aion i60",
        eyebrow: "Две силовые установки",
        description:
          "EV-версия дает большой запас хода, а range-extender добавляет свободу маршрута.",
      },
      {
        title: "Aion i60",
        eyebrow: "Быстрая зарядка",
        description:
          "Технология 3C помогает экономить время при ежедневном использовании.",
      },
    ],
    details: [
      {
        kicker: "Экстерьер",
        title: "Плавная и чистая передняя часть",
        description:
          "Закрытая передняя панель, тонкие фары и аэродинамичная форма усиливают электрический характер Aion i60.",
      },
      {
        kicker: "Интерьер",
        title: "Цифровой кокпит",
        description:
          "Большой экран, цифровая панель и центральная консоль создают понятную среду управления для водителя.",
      },
      {
        kicker: "Использование",
        title: "Легкий в городе, уверенный в дороге",
        description:
          "Выбор EV или EREV, быстрая зарядка и удобный салон адаптируют Aion i60 к разным маршрутам.",
      },
    ],
    specs: ["EV и EREV версии", "До 650 км EV-запаса хода", "Быстрая зарядка 3C", "5-местный салон"],
  },
  "gac-s7-trump": {
    heroSubtitle: "Интеллектуальный флагманский SUV с просторным салоном",
    detailIntro: {
      title: "Высокая посадка и сильный SUV-характер",
      description:
        "GAC S7 Trumpchi выделяется на дороге кузовом высотой 1780 мм, 20-дюймовыми колесами и выразительной световой графикой.",
    },
    splitFeature: {
      title:
        "15,6-дюймовый центральный экран, 8,88-дюймовая цифровая панель и 50W беспроводная зарядка создают технологичную среду",
    },
    twinFeature: {
      title: "Салон флагманского уровня",
      items: [
        {
          caption:
            "Ориентированная на водителя панель, широкий экран и чистая центральная консоль делают управление удобным.",
        },
        {
          caption:
            "Широкие сиденья, мягкие материалы и настраиваемые функции комфорта уменьшают усталость в дальних поездках.",
        },
      ],
    },
    comfortFeature: {
      slides: [
        {
          title:
            "Режимы PHEV и EREV дают электрическую тишину в городе и большой запас хода на дальней дороге",
        },
        {
          title:
            "Широкий обзор, ассистенты уровня L2 и концепция безопасности 720° добавляют уверенности в каждой поездке",
        },
      ],
    },
    fullBleedFeature: {
      title: "Большое пространство, умные технологии и сильная динамика",
      description:
        "До 1020 км общего запаса хода, 150 км электрического хода и технологии ADiGO делают S7 готовым к семье и дальним маршрутам.",
    },
    showcase: {
      title: "Характер флагманского SUV",
      description:
        "GAC S7 Trumpchi передает ощущение премиального SUV через крупный кузов, просторный салон и современную гибридную систему.",
    },
    heroSlides: [
      {
        title: "GAC S7 Trumpchi",
        eyebrow: "GAC",
        description:
          "Высокий кузов, крупная посадка и интеллектуальная световая графика формируют образ флагманского SUV.",
      },
      {
        title: "GAC S7 Trumpchi",
        eyebrow: "Просторный салон",
        description:
          "30 м² кожаной отделки, 12 динамиков и комфортные сиденья созданы для пассажиров.",
      },
      {
        title: "GAC S7 Trumpchi",
        eyebrow: "Умный гибрид",
        description:
          "Режимы PHEV и EREV дают гибкость и для коротких поездок, и для дальних маршрутов.",
      },
    ],
    details: [
      {
        kicker: "Экстерьер",
        title: "Высоко и уверенно стоит на дороге",
        description:
          "Резкие боковые линии, крупные колеса и сильная передняя часть задают S7 уверенную SUV-позицию.",
      },
      {
        kicker: "Интерьер",
        title: "Технологии в центре",
        description:
          "15,6-дюймовый экран, цифровая панель и беспроводная зарядка делают повседневное управление современным и простым.",
      },
      {
        kicker: "Комфорт",
        title: "Просторный салон для дальней дороги",
        description:
          "Наклон второго ряда до 137°, подогрев, вентиляция и массаж создают высокий уровень комфорта для пассажиров.",
      },
    ],
    specs: ["До 1020 км общего запаса хода", "150 км NEDC на электротяге", "15,6-дюймовый экран", "Аудио с 12 динамиками"],
  },
};

export function getModelBySlug(slug: string) {
  return modelItems.find((model) => model.slug === slug);
}

export function getLocalizedModel(model: ModelItem, lang: ModelLanguage): ModelItem {
  if (lang === "uz") {
    return model;
  }

  const copy = modelCopyRu[model.slug];

  return {
    ...model,
    heroSubtitle: copy.heroSubtitle,
    detailIntro: {
      ...model.detailIntro,
      ...copy.detailIntro,
    },
    splitFeature: {
      ...model.splitFeature,
      ...copy.splitFeature,
    },
    twinFeature: {
      title: copy.twinFeature.title,
      items: model.twinFeature.items.map((item, index) => ({
        ...item,
        caption: copy.twinFeature.items[index]?.caption ?? item.caption,
      })),
    },
    comfortFeature: {
      slides: model.comfortFeature.slides.map((slide, index) => ({
        ...slide,
        title: copy.comfortFeature.slides[index]?.title ?? slide.title,
      })),
    },
    fullBleedFeature: {
      ...model.fullBleedFeature,
      ...copy.fullBleedFeature,
    },
    showcase: {
      ...model.showcase,
      ...copy.showcase,
    },
    heroSlides: model.heroSlides.map((slide, index) => ({
      ...slide,
      ...(copy.heroSlides[index] ?? {}),
    })),
    details: model.details.map((detail, index) => ({
      ...detail,
      ...(copy.details[index] ?? {}),
    })),
    specs: copy.specs,
  };
}
