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
  specSheet?: {
    group: string;
    items: { label: string; value: string }[];
  }[];
  presentation?: {
    greeting: string;
    paragraphs: string[];
    offerNote: string;
    phoneLabel: string;
    phone: string;
    phoneHref: string;
  };
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
  specSheet?: { group: string; items: { label: string; value: string }[] }[];
  presentation?: {
    greeting: string;
    paragraphs: string[];
    offerNote: string;
    phoneLabel: string;
  };
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
    specSheet: [
      {
        group: "Kuzov va o‘lchamlar",
        items: [
          { label: "Kuzov uzunligi", value: "5 metrdan ortiq" },
          { label: "G‘ildirak bazasi", value: "3025 mm" },
          { label: "O‘rindiqlar", value: "6 ta (3 qator)" },
          { label: "Salon konfiguratsiyasi", value: "Tekis buklanadigan, ko‘p saqlash zonasi" },
        ],
      },
      {
        group: "Quvvat tizimi",
        items: [
          { label: "Tizim turi", value: "Toza elektr (EV)" },
          { label: "Yurish masofasi", value: "636 km gacha (CLTC)" },
          { label: "Privod", value: "Elektr motor" },
          { label: "Yurish xarakteri", value: "Sokin, silliq elektr harakat" },
        ],
      },
      {
        group: "Komfort va salon",
        items: [
          { label: "2-qator o‘rindiqlari", value: "Isitish, ventilyatsiya, massaj" },
          { label: "Qo‘shimcha", value: "Buklama stol, oyoq tayanchi, alohida o‘qish chiroqlari" },
          { label: "Simsiz zaryad", value: "50W" },
          { label: "Stakan tutqichlari", value: "Sensorli boshqaruv bilan" },
        ],
      },
    ],
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
    specSheet: [
      {
        group: "Kuzov va o‘lchamlar",
        items: [
          { label: "Klass", value: "Ixcham SUV" },
          { label: "O‘rindiqlar", value: "5 ta" },
          { label: "Dizayn", value: "Toza elektr siluet, aerodinamik" },
          { label: "Old qism", value: "Yopiq panel, ingichka faralar" },
        ],
      },
      {
        group: "Quvvat tizimi",
        items: [
          { label: "Versiyalar", value: "EV va Range-Extender (EREV)" },
          { label: "EV yurish masofasi", value: "650 km gacha" },
          { label: "Tez zaryad", value: "3C — 200 km masofa 5 daqiqada" },
          { label: "Foydalanish", value: "Shahar va uzoq marshrutlar" },
        ],
      },
      {
        group: "Texnologiya va salon",
        items: [
          { label: "Markaziy ekran", value: "Katta diagonal" },
          { label: "Asboblar paneli", value: "Raqamli kokpit" },
          { label: "Markaziy konsol", value: "Ergonomik joylashuv" },
          { label: "Yordamchilar", value: "Aqlli haydash yordamchilari" },
        ],
      },
    ],
  },
  {
    name: "GAC S7 Trumpchi",
    slug: "gac-s7-trump",
    href: "/gac-s7-trump",
    menuImage: "/s7/03-1.jpg",
    heroSubtitle: "Ketma-ket gibrid (REEV) flagman premium SUV",
    detailIntro: {
      title: "4900 mm uzunlik, 1780 mm balandlik — flagman SUV pozitsiyasi",
      description:
        "GAC S7 Trumpchi 4900 × 1950 × 1780 mm o‘lchamlari, 2880 mm g‘ildirak bazasi va 200 mm klirens bilan yo‘lda salobatli turadi. Bagaj hajmi 720 litrdan 2050 litrgacha kengayadi va kundalik foydalanish ham, uzoq safar ham qulay bo‘ladi.",
      image: "/s7/4b9375212866023.6747e715e3eef.webp",
    },
    splitFeature: {
      title:
        "Head-Up Display, eshik dovodchiklari, 50W simsiz zaryad, Nappa charm va Alcantara qoplamasi flagman texnologik muhit yaratadi",
      image: "/s7/1200x900.webp",
    },
    twinFeature: {
      title: "5 ta kapitan o‘rindiqlari va REEV gibrid kuchi",
      items: [
        {
          image: "/s7/interior-gac-s7.jpg",
          caption:
            "Barcha 5 ta kapitan uslubidagi o‘rindiq isitish, ventilyatsiya (obduv) va massaj funksiyalari bilan jihozlangan; salon Nappa charm va Alcantara bilan qoplangan.",
        },
        {
          image: "/s7/gac-s7-obzor-110.webp",
          caption:
            "1.5 litrli turbo benzin (4A15M3, 4 silindrli, 110 ot kuchi) generator vazifasini bajaradi va 36.3 kWh LFP batareyani quvvatlantiradi — toza elektr rejimida NEDC bo‘yicha 153 km masofa.",
        },
      ],
    },
    comfortFeature: {
      slides: [
        {
          title:
            "To‘liq privod (4WD), 500 ot kuchi va 0–100 km/soatgacha 5,5 soniya — flagman dinamika va ishonch",
          image: "/s7/2024-12-31_11-34-57.jpg",
        },
        {
          title:
            "20 dyuymli Michelin shinalari, old qismda qattiqligi moslanuvchi adaptiv amortizatsiya tizimi va diodli faralar har turdagi yo‘lga moslashadi",
          image: "/s7/3.jpg",
        },
      ],
    },
    fullBleedFeature: {
      image: "/s7/p-2-02-pc_large.avif",
      title: "Premium krossover — har bir tafsilot o‘ylangan",
      description:
        "GAC S7 Trumpchi 2025 va 2026 yilgi modellari, barcha kuzov hamda salon ranglari va barcha versiyalarda mavjud. Avtomobilga 3 yil yoki 120 000 km rasmiy kafolat beriladi.",
    },
    showcase: {
      image: "/s7/03-1.jpg",
      title: "Flagman SUV xarakteri",
      description:
        "GAC S7 Trumpchi yirik kuzov, keng salon va REEV gibrid quvvat tizimi orqali premium SUV hissini beradi.",
    },
    heroSlides: [
      {
        image: "/s7/2.jpg",
        title: "GAC S7 Trumpchi",
        eyebrow: "REEV flagman",
        description:
          "4900 mm uzun kuzov, 20 dyuymli Michelin g‘ildiraklari va diodli faralar bilan flagman SUV ko‘rinishi.",
      },
      {
        image: "/s7/p-2-02-pc_large.avif",
        title: "GAC S7 Trumpchi",
        eyebrow: "Nappa + Alcantara salon",
        description:
          "5 ta kapitan o‘rindiq, isitish · ventilyatsiya · massaj, Nappa charm va Alcantara qoplamasi yo‘lovchilar uchun yaratilgan.",
      },
      {
        image: "/s7/2024-12-31_11-34-57.jpg",
        title: "GAC S7 Trumpchi",
        eyebrow: "500 ot kuchi · 4WD",
        description:
          "Ketma-ket gibrid (REEV), 36.3 kWh LFP batareya va 153 km NEDC elektr yurish — har turdagi marshrutga tayyor.",
      },
    ],
    details: [
      {
        kicker: "Eksteryer",
        title: "Yo‘lda baland va ishonchli turadi",
        description:
          "4900 × 1950 × 1780 mm o‘lchami, 200 mm klirens, 20 dyuymli Michelin shinalari va diodli faralar S7’ga qat’iy SUV pozitsiyasini beradi.",
        image: "/s7/2.jpg",
        layout: "wide",
      },
      {
        kicker: "Interyer",
        title: "Texnologiya markazda",
        description:
          "Head-Up Display, simsiz zaryad, Nappa charm bilan qoplangan salon va eshik dovodchiklari kundalik boshqaruvni zamonaviy va sodda qiladi.",
        image: "/s7/1200x900.webp",
        layout: "split",
      },
      {
        kicker: "Komfort",
        title: "Barcha 5 yo‘lovchi uchun kapitan qulayligi",
        description:
          "5 ta kapitan o‘rindiq isitish, ventilyatsiya (obduv) va massaj funksiyalari bilan jihozlangan, salon esa Nappa charm va Alcantara bilan qoplangan.",
        image: "/s7/fff9eb212866023.6747e715e39d2.webp",
        layout: "compact",
      },
    ],
    specs: [
      "4900 × 1950 × 1780 mm",
      "2880 mm g‘ildirak bazasi · 200 mm klirens",
      "720–2050 L bagaj hajmi",
      "4WD · 500 ot kuchi",
      "0–100 km/soat — 5,5 soniya",
      "1.5T 4A15M3 generator (110 ot kuchi)",
      "36.3 kWh LFP batareya · 153 km NEDC EV",
      "50 L yoqilg‘i baki",
      "20\" Michelin · adaptiv old amortizatsiya",
      "Nappa charm + Alcantara salon",
      "5 ta kapitan o‘rindiq · isitish/obduv/massaj",
      "Head-Up Display · eshik dovodchiklari",
      "3 yil yoki 120 000 km kafolat",
    ],
    presentation: {
      greeting: "Assalomu alaykum, hurmatli xaridor!",
      paragraphs: [
        "GAC S7 Trumpchi — ketma-ket gibrid (REEV) turidagi zamonaviy premium krossover hisoblanadi. Avtomobil o‘lchamlari: uzunligi 4900 mm, kengligi 1950 mm, balandligi 1780 mm. G‘ildirak bazasi 2880 mm, klirensi esa 200 mmni tashkil qiladi. Bagaj hajmi 720 litrdan 2050 litrgacha kengayadi.",
        "Avtomobil to‘liq privod (4WD) tizimiga ega bo‘lib, umumiy quvvati 500 ot kuchini tashkil qiladi. 0 dan 100 km/soatgacha atigi 5,5 soniyada tezlashadi. 1.5 litrli turbo benzin dvigateli (4A15M3, 4 silindrli, 110 ot kuchi) generator sifatida ishlaydi. Yoqilg‘i baki hajmi 50 litr.",
        "Avtomobil 36.3 kWh sig‘imli litiy-temir-fosfat batareyasi bilan jihozlangan bo‘lib, NEDC standarti bo‘yicha faqat elektr rejimida 153 km masofani bosib o‘tadi.",
        "Shuningdek, avtomobilda eshik dovodchiklari, Head-Up Display, 5 ta kapitan uslubidagi o‘rindiqlar, barcha o‘rindiqlarda obduv, isitish va massaj funksiyalari mavjud. Salon Nappa charm va Alcantara bilan qoplangan. 20 razmerli Michelin shinalari, old qismida qattiqligi moslanuvchi adaptiv amortizatsiya tizimi hamda diodli faralar bilan jihozlangan.",
      ],
      offerNote:
        "Hurmatli xaridor, siz uchun qulay sharoitlar: avtomobilning barcha ranglari (salon va kuzov) hamda barcha versiyalari mavjud. 2025/2026 yilgi modellari mavjud. Avtomobillarga 3 yil yoki 120 000 km rasmiy kafolat beriladi.",
      phoneLabel: "Bog‘lanish uchun raqam",
      phone: "+998 94 545 54 94",
      phoneHref: "tel:+998945455494",
    },
    specSheet: [
      {
        group: "Kuzov va o‘lchamlar",
        items: [
          { label: "Uzunlik × Kenglik × Balandlik", value: "4900 × 1950 × 1780 mm" },
          { label: "G‘ildirak bazasi", value: "2880 mm" },
          { label: "Klirens", value: "200 mm" },
          { label: "Bagaj hajmi", value: "720 – 2050 L" },
        ],
      },
      {
        group: "Quvvat va dinamika",
        items: [
          { label: "Privod", value: "To‘liq privod (4WD)" },
          { label: "Umumiy quvvat", value: "500 ot kuchi" },
          { label: "0–100 km/soat", value: "5,5 soniya" },
          { label: "Tizim turi", value: "Ketma-ket gibrid (REEV)" },
        ],
      },
      {
        group: "Dvigatel va batareya",
        items: [
          { label: "Generator dvigatel", value: "1.5T 4A15M3, 4 silindr, 110 ot kuchi" },
          { label: "Yoqilg‘i baki", value: "50 L" },
          { label: "Batareya", value: "36.3 kWh, litiy-temir-fosfat (LFP)" },
          { label: "Elektr yurish (NEDC)", value: "153 km" },
        ],
      },
      {
        group: "Komfort va salon",
        items: [
          { label: "O‘rindiqlar", value: "5 ta kapitan uslubidagi o‘rindiq" },
          { label: "O‘rindiq funksiyalari", value: "Isitish, obduv, massaj — barchasida" },
          { label: "Salon qoplamasi", value: "Nappa charm + Alcantara" },
          { label: "Qo‘shimcha", value: "Head-Up Display, eshik dovodchiklari, 50W simsiz zaryad" },
        ],
      },
      {
        group: "Yurish qismi va yorug‘lik",
        items: [
          { label: "G‘ildirak va shinalar", value: "20\" Michelin" },
          { label: "Old amortizatsiya", value: "Qattiqligi moslanuvchi adaptiv" },
          { label: "Faralar", value: "Diodli (LED)" },
          { label: "Kafolat", value: "3 yil yoki 120 000 km" },
        ],
      },
    ],
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
    specSheet: [
      {
        group: "Кузов и габариты",
        items: [
          { label: "Длина кузова", value: "Более 5 метров" },
          { label: "Колёсная база", value: "3025 мм" },
          { label: "Сиденья", value: "6 мест (3 ряда)" },
          { label: "Конфигурация салона", value: "Складные сиденья, множество мест хранения" },
        ],
      },
      {
        group: "Силовая установка",
        items: [
          { label: "Тип", value: "Полностью электрический (EV)" },
          { label: "Запас хода", value: "До 636 км (CLTC)" },
          { label: "Привод", value: "Электромотор" },
          { label: "Характер хода", value: "Тихий, плавный электрический" },
        ],
      },
      {
        group: "Комфорт и салон",
        items: [
          { label: "Сиденья 2-го ряда", value: "Подогрев, вентиляция, массаж" },
          { label: "Дополнительно", value: "Складной столик, подставка для ног, подсветка" },
          { label: "Беспроводная зарядка", value: "50W" },
          { label: "Подстаканники", value: "С сенсорным управлением" },
        ],
      },
    ],
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
    specSheet: [
      {
        group: "Кузов и габариты",
        items: [
          { label: "Класс", value: "Компактный SUV" },
          { label: "Сиденья", value: "5 мест" },
          { label: "Дизайн", value: "Чистый электрический силуэт, аэродинамика" },
          { label: "Передняя часть", value: "Закрытая панель, тонкие фары" },
        ],
      },
      {
        group: "Силовая установка",
        items: [
          { label: "Версии", value: "EV и Range-Extender (EREV)" },
          { label: "Запас хода EV", value: "До 650 км" },
          { label: "Быстрая зарядка", value: "3C — 200 км за 5 минут" },
          { label: "Применение", value: "Город и дальние маршруты" },
        ],
      },
      {
        group: "Технологии и салон",
        items: [
          { label: "Центральный экран", value: "Большой диагонали" },
          { label: "Приборная панель", value: "Цифровой кокпит" },
          { label: "Центральная консоль", value: "Эргономичная компоновка" },
          { label: "Ассистенты", value: "Интеллектуальные помощники вождения" },
        ],
      },
    ],
  },
  "gac-s7-trump": {
    heroSubtitle: "Флагманский премиум-SUV с последовательным гибридом (REEV)",
    detailIntro: {
      title: "Длина 4900 мм, высота 1780 мм — флагманские пропорции",
      description:
        "GAC S7 Trumpchi уверенно стоит на дороге благодаря габаритам 4900 × 1950 × 1780 мм, колёсной базе 2880 мм и клиренсу 200 мм. Багажник 720–2050 л подходит и для повседневных задач, и для длительных поездок.",
    },
    splitFeature: {
      title:
        "Head-Up Display, доводчики дверей, беспроводная зарядка 50W и отделка Nappa + Alcantara создают флагманскую технологичную атмосферу",
    },
    twinFeature: {
      title: "5 капитанских кресел и силовая установка REEV",
      items: [
        {
          caption:
            "Все 5 капитанских кресел оснащены подогревом, вентиляцией и массажем; салон отделан кожей Nappa и Alcantara — флагманский комфорт для каждого пассажира.",
        },
        {
          caption:
            "1.5-литровый турбобензиновый двигатель (4A15M3, 4 цилиндра, 110 л.с.) работает как генератор и заряжает LFP-батарею 36,3 кВт·ч — до 153 км в режиме EV по NEDC.",
        },
      ],
    },
    comfortFeature: {
      slides: [
        {
          title:
            "Полный привод 4WD, общая мощность 500 л.с. и разгон 0–100 км/ч за 5,5 секунды — флагманская динамика и уверенность",
        },
        {
          title:
            "20-дюймовые шины Michelin, передняя адаптивная подвеска регулируемой жёсткости и LED-фары адаптируются к любой дороге",
        },
      ],
    },
    fullBleedFeature: {
      title: "Премиальный кроссовер — каждая деталь продумана",
      description:
        "Модели GAC S7 Trumpchi 2025 и 2026 годов доступны во всех цветах кузова и салона, во всех комплектациях. Официальная гарантия — 3 года или 120 000 км.",
    },
    showcase: {
      title: "Характер флагманского SUV",
      description:
        "GAC S7 Trumpchi передаёт ощущение премиального SUV через крупный кузов, просторный салон и силовую установку REEV.",
    },
    heroSlides: [
      {
        title: "GAC S7 Trumpchi",
        eyebrow: "Флагман REEV",
        description:
          "Кузов длиной 4900 мм, 20-дюймовые колёса Michelin и LED-фары формируют образ флагманского SUV.",
      },
      {
        title: "GAC S7 Trumpchi",
        eyebrow: "Салон Nappa + Alcantara",
        description:
          "5 капитанских кресел с подогревом, вентиляцией и массажем, отделка Nappa и Alcantara — для пассажиров.",
      },
      {
        title: "GAC S7 Trumpchi",
        eyebrow: "500 л.с. · 4WD",
        description:
          "Последовательный гибрид (REEV), батарея LFP 36,3 кВт·ч и запас хода EV 153 км по NEDC — готов к любому маршруту.",
      },
    ],
    details: [
      {
        kicker: "Экстерьер",
        title: "Уверенная и высокая посадка",
        description:
          "Габариты 4900 × 1950 × 1780 мм, клиренс 200 мм, 20-дюймовые шины Michelin и LED-фары задают S7 уверенную SUV-позицию.",
      },
      {
        kicker: "Интерьер",
        title: "Технологии в центре",
        description:
          "Head-Up Display, беспроводная зарядка, отделка Nappa и доводчики дверей делают ежедневное управление современным и простым.",
      },
      {
        kicker: "Комфорт",
        title: "Капитанский комфорт для всех 5 пассажиров",
        description:
          "5 капитанских кресел оснащены подогревом, вентиляцией и массажем, а салон отделан кожей Nappa и Alcantara.",
      },
    ],
    specs: [
      "4900 × 1950 × 1780 мм",
      "Колёсная база 2880 мм · клиренс 200 мм",
      "Багажник 720–2050 л",
      "4WD · 500 л.с.",
      "0–100 км/ч — 5,5 секунды",
      "1.5T 4A15M3 генератор (110 л.с.)",
      "LFP-батарея 36,3 кВт·ч · 153 км NEDC EV",
      "Топливный бак 50 л",
      "20\" Michelin · адаптивная передняя подвеска",
      "Салон Nappa + Alcantara",
      "5 капитанских кресел · подогрев/вентиляция/массаж",
      "Head-Up Display · доводчики дверей",
      "Гарантия 3 года или 120 000 км",
    ],
    presentation: {
      greeting: "Ассалому алайкум, уважаемый покупатель!",
      paragraphs: [
        "GAC S7 Trumpchi — современный премиальный кроссовер с последовательной гибридной силовой установкой (REEV). Габариты автомобиля: длина 4900 мм, ширина 1950 мм, высота 1780 мм. Колёсная база — 2880 мм, клиренс — 200 мм. Объём багажника увеличивается с 720 до 2050 литров.",
        "Автомобиль оснащён системой полного привода (4WD), общая мощность составляет 500 л.с. Разгон с 0 до 100 км/ч занимает всего 5,5 секунды. 1.5-литровый турбобензиновый двигатель (4A15M3, 4 цилиндра, 110 л.с.) работает в качестве генератора. Объём топливного бака — 50 литров.",
        "Автомобиль оборудован литий-железо-фосфатной батареей ёмкостью 36,3 кВт·ч и в чисто электрическом режиме по стандарту NEDC проезжает 153 км.",
        "Кроме того, в автомобиле есть доводчики дверей, Head-Up Display, 5 капитанских кресел, на всех сиденьях имеются функции вентиляции, подогрева и массажа. Салон отделан кожей Nappa и Alcantara. Установлены 20-дюймовые шины Michelin, передняя адаптивная подвеска регулируемой жёсткости и светодиодные фары.",
      ],
      offerNote:
        "Уважаемый покупатель, для вас комфортные условия: доступны все цвета (салона и кузова) и все комплектации автомобиля. В наличии модели 2025/2026 годов. На автомобиль предоставляется официальная гарантия 3 года или 120 000 км.",
      phoneLabel: "Номер для связи",
    },
    specSheet: [
      {
        group: "Кузов и габариты",
        items: [
          { label: "Длина × Ширина × Высота", value: "4900 × 1950 × 1780 мм" },
          { label: "Колёсная база", value: "2880 мм" },
          { label: "Клиренс", value: "200 мм" },
          { label: "Объём багажника", value: "720 – 2050 л" },
        ],
      },
      {
        group: "Мощность и динамика",
        items: [
          { label: "Привод", value: "Полный привод (4WD)" },
          { label: "Общая мощность", value: "500 л.с." },
          { label: "0–100 км/ч", value: "5,5 секунды" },
          { label: "Тип силовой установки", value: "Последовательный гибрид (REEV)" },
        ],
      },
      {
        group: "Двигатель и батарея",
        items: [
          { label: "Двигатель-генератор", value: "1.5T 4A15M3, 4 цилиндра, 110 л.с." },
          { label: "Топливный бак", value: "50 л" },
          { label: "Батарея", value: "36,3 кВт·ч, литий-железо-фосфатная (LFP)" },
          { label: "Запас хода EV (NEDC)", value: "153 км" },
        ],
      },
      {
        group: "Комфорт и салон",
        items: [
          { label: "Сиденья", value: "5 капитанских кресел" },
          { label: "Функции сидений", value: "Подогрев, вентиляция, массаж — на всех" },
          { label: "Отделка салона", value: "Nappa + Alcantara" },
          { label: "Дополнительно", value: "Head-Up Display, доводчики дверей, беспроводная зарядка 50W" },
        ],
      },
      {
        group: "Подвеска и оптика",
        items: [
          { label: "Колёса и шины", value: "20\" Michelin" },
          { label: "Передняя подвеска", value: "Адаптивная регулируемой жёсткости" },
          { label: "Фары", value: "Светодиодные (LED)" },
          { label: "Гарантия", value: "3 года или 120 000 км" },
        ],
      },
    ],
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
    specSheet: copy.specSheet ?? model.specSheet,
    presentation:
      model.presentation && copy.presentation
        ? {
            ...model.presentation,
            greeting: copy.presentation.greeting,
            paragraphs: copy.presentation.paragraphs,
            offerNote: copy.presentation.offerNote,
            phoneLabel: copy.presentation.phoneLabel,
          }
        : model.presentation,
  };
}
