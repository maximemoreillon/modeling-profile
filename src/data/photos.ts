import type { ImageMetadata } from "astro";
import type { Localized } from "../i18n";

import camelCoat from "../assets/profile/camel-coat.jpg";
import casual from "../assets/profile/casual.jpg";
import street from "../assets/profile/street.jpg";
import suit from "../assets/profile/suit.jpg";
import shirtless from "../assets/profile/shirtless.jpg";
import darkShirtWall from "../assets/profile/dark-shirt-wall.jpg";
import navyTeeOutdoor from "../assets/profile/navy-tee-outdoor.jpg";

export { default as heroPhoto } from "../assets/profile/white-tee.jpg";

export interface Photo {
  src: ImageMetadata;
  alt: Localized;
}

// Shown in the Photos section, in this order
export const photos: Photo[] = [
  {
    src: camelCoat,
    alt: {
      en: "In a camel coat, outdoors",
      ja: "キャメルのコートを着た屋外ポートレート",
    },
  },
  {
    src: darkShirtWall,
    alt: {
      en: "Leaning against a wall in a dark shirt",
      ja: "壁にもたれたダークシャツ姿",
    },
  },
  {
    src: casual,
    alt: {
      en: "Seated in a navy jacket and jeans",
      ja: "ネイビーのジャケットとジーンズで座ったポーズ",
    },
  },
  {
    src: street,
    alt: { en: "Full body, walking in the city", ja: "街を歩く全身ショット" },
  },
  {
    src: navyTeeOutdoor,
    alt: {
      en: "Navy T-shirt and necklace, outdoors",
      ja: "ネイビーのTシャツとネックレスの屋外ショット",
    },
  },
  {
    src: suit,
    alt: { en: "In a grey suit", ja: "グレーのスーツ姿" },
  },
  {
    src: shirtless,
    alt: { en: "Open black shirt", ja: "黒いシャツを開けたポーズ" },
  },
];
