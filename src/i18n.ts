import { default as i18next } from "i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";
import i18nextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguagedetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
