import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://modeling.maximemoreillon.com",
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
    routing: { prefixDefaultLocale: false },
  },
});
