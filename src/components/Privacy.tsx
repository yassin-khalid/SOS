import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Privacy = ({ language }: { language: "en" | "ar" }) => {
  const { t, i18n } = useTranslation();

  const { titles, headers, lists, footers } = t("privacy.details", {
    returnObjects: true,
  }) as {
    titles: string[];
    headers: string[];
    lists: (string[] | null)[];
    footers: (string | null)[];
  };
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <div
      className="px-4 lg:px-0 max-w-4xl mx-auto mb-20"
      dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
    >
      <h2
        className={`text-center text-2xl font-bold mb-6 ${
          i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
        }`}
      >
        {t("privacy.title")}
      </h2>
      <p className="mb-3.5">{t("privacy.description")}</p>
      <ol>
        {titles.map((title, i) => (
          <li key={i} className="mb-4">
            <h3
              className={`font-medium text-primary mb-2 text-start ${
                i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
              }`}
            >{`${i + 1}- ${title}`}</h3>
            <p className="mb-1 text-start">{headers[i]}</p>
            <ul className="list-disc ms-6">
              {lists[i]?.map((list, i) => (
                <li key={i} className="text-start">
                  {list}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-start">{footers[i]}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Privacy;
