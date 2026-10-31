import type { ImageMetadata } from "astro";
import type { Localized } from "../i18n";

import yabaton from "../assets/portfolio/yabaton.jpg";
import russeluno from "../assets/portfolio/russeluno.webp";
import kyotoTourism from "../assets/portfolio/kyoto-tourism.jpg";
import ladin from "../assets/portfolio/ladin.jpg";

export interface Work {
  /** Client or brand name as written in Latin script */
  client: string;
  /** Japanese client name, used on the Japanese page and as a subtitle on the English one */
  clientJa?: string;
  title: Localized;
  /** e.g. "2023" or "2023–2024" */
  year: string;
  /** YouTube video ID; the card plays the video */
  youtube?: string;
  /** Shown as a gallery; the first one is the cover */
  photos?: ImageMetadata[];
  /** Optional CSS object-position for cropping the cover, e.g. "center 60%" */
  coverPosition?: string;
  /** Link to the published work, used when there is no video or photos (shown as a text card) */
  url?: string;
}

// Newest first
export const portfolio: Work[] = [
  {
    client: "Aquellos Ojos Verdes",
    title: { en: "New collection shoots", ja: "新コレクション撮影" },
    year: "2025–2026",
    url: "https://www.aquellosojosverdesbishu.com/%E8%A4%87%E8%A3%BD-25aw",
  },
  {
    client: "Fronville Homes Nagoya",
    clientJa: "フロンヴィルホームズ名古屋",
    title: { en: "Model house “Zuiga”", ja: "モデルハウス「瑞雅 -zuiga-」" },
    year: "2025",
    youtube: "X7cIDv479WQ",
  },
  {
    client: "Yabaton",
    clientJa: "矢場とん",
    title: { en: "“Butanic” commercial", ja: "「ブータニック」広告" },
    year: "2024",
    photos: [yabaton],
    coverPosition: "center 45%",
  },
  {
    client: "Nagoya Kanko Hotel",
    clientJa: "名古屋観光ホテル",
    title: {
      en: "Start your journey from the center of Japan",
      ja: "プロモーション動画",
    },
    year: "2024",
    youtube: "apbnEy9nYt0",
  },
  {
    client: "Russeluno",
    title: { en: "Apparel shoots, 24 sessions", ja: "アパレル撮影（24回）" },
    year: "2023–2024",
    photos: [russeluno],
    coverPosition: "center 3%",
  },
  {
    client: "LIVE JAPAN",
    title: {
      en: "Tokyo Dome City — Exciting One-Day Guide",
      ja: "東京ドームシティ 観光ガイド動画",
    },
    year: "2023",
    youtube: "rQ0P-HWiFXE",
  },
  {
    client: "LIVE JAPAN",
    title: { en: "Mysterious Izumo", ja: "出雲 観光動画" },
    year: "2023",
    youtube: "N6qMlEYdazo",
  },
  {
    client: "JTEKT",
    clientJa: "ジェイテクト",
    title: { en: "15-second TV commercial “Yume”", ja: "15秒CM「ユメ」篇" },
    year: "2023",
    youtube: "C-zdYSOD9jk",
  },
  {
    client: "LIVE JAPAN",
    title: {
      en: "Kyoto tourism etiquette campaign",
      ja: "京都観光マナー啓発キャンペーン",
    },
    year: "2023",
    photos: [kyotoTourism],
    coverPosition: "center 32%",
  },
  {
    client: "IBM Japan",
    clientJa: "日本IBM",
    title: { en: "Metaverse × IBM Japan", ja: "メタバース紹介動画" },
    year: "2022",
    youtube: "_YZfNIfV0uc",
  },
  {
    client: "Hobby Shop Tam Tam",
    clientJa: "ホビーショップタムタム",
    title: { en: "TV commercial", ja: "テレビCM" },
    year: "2022",
    youtube: "OAYqlQL0v_8",
  },
  {
    client: "LADIN",
    title: { en: "Sports bag commercial", ja: "スポーツバッグ CM" },
    year: "2022",
    photos: [ladin],
    coverPosition: "center top",
  },
];
