export type Lang = "ja" | "en";

export type Localized = Record<Lang, string>;

export const paths: Record<Lang, string> = {
  ja: "/",
  en: "/en/",
};

export const strings = {
  ja: {
    title: "モレヨン マキシム | モデル（名古屋）",
    description:
      "名古屋を拠点に活動するスイス出身のモデル、モレヨン マキシムのプロフィールと実績。SOLINÉE所属。",
    ogLocale: "ja_JP",
    switchLanguage: { label: "EN", lang: "en" },
    nav: { photos: "写真", portfolio: "実績", contact: "連絡先" },
    eyebrow: "モデル · 名古屋",
    heroAlt: "モレヨン マキシムのポートレート",
    stats: {
      height: "身長",
      weight: "体重",
      bust: "バスト",
      waist: "ウエスト",
      hips: "ヒップ",
      shoes: "靴",
      age: "年齢",
      nationality: "国籍",
    },
    age: "{age}歳",
    nationality: "スイス",
    representedBy: "所属",
    sections: {
      photos: "写真",
      portfolio: "実績",
      agencies: "所属事務所",
      contact: "連絡先",
    },
    agencies: {
      solinee: "2025年10月〜現在",
      azs: "2021年〜2025年9月",
      location: "名古屋",
    },
    solineeProfile: "プロフィール",
    lightbox: { label: "メディアビューア", close: "閉じる", prev: "前へ", next: "次へ" },
  },
  en: {
    title: "Maxime Moreillon | Model, Nagoya",
    description:
      "Modeling profile and portfolio of Maxime Moreillon, Swiss model based in Nagoya, Japan, represented by SOLINÉE.",
    ogLocale: "en_US",
    switchLanguage: { label: "日本語", lang: "ja" },
    nav: { photos: "Photos", portfolio: "Portfolio", contact: "Contact" },
    eyebrow: "Model · Nagoya, Japan",
    heroAlt: "Portrait of Maxime Moreillon",
    stats: {
      height: "Height",
      weight: "Weight",
      bust: "Bust",
      waist: "Waist",
      hips: "Hips",
      shoes: "Shoes",
      age: "Age",
      nationality: "Nationality",
    },
    age: "{age}",
    nationality: "Swiss",
    representedBy: "Represented by",
    sections: {
      photos: "Photos",
      portfolio: "Portfolio",
      agencies: "Agencies",
      contact: "Contact",
    },
    agencies: {
      solinee: "Oct 2025 – present",
      azs: "2021 – Sep 2025",
      location: "Nagoya",
    },
    solineeProfile: "profile",
    lightbox: { label: "Media viewer", close: "Close", prev: "Previous", next: "Next" },
  },
} satisfies Record<Lang, unknown>;
