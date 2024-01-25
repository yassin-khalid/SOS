import LanguageToggle from "./LanguageToggle";
import Social from "./Social";
import { ModeToggle } from "./mode-toggle";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const links = [
    t("privacy.link", { returnObjects: true }) as {
      href: string;
      title: string;
    },
    t("customer-terms.link", { returnObjects: true }) as {
      href: string;
      title: string;
    },
    t("service-terms.link", { returnObjects: true }) as {
      href: string;
      title: string;
    },
  ];
  return (
    <footer className="bg-secondary py-8 px-4 lg:px-0 dark:bg-background dark:border">
      <div className="max-w-6xl mx-auto">
        <div
          className="flex gap-5 mb-8"
          dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
        >
          <span className="text-muted-foreground font-medium text-lg">
            {t("footer.follow")}
          </span>
          <Social />
        </div>
        <div
          className="flex flex-row-reverse items-end justify-between"
          dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
        >
          <div className="flex gap-6 items-center">
            <span className="text-xs text-muted-foreground">SOS 2024 ©</span>
            <ModeToggle />
            <LanguageToggle />
          </div>
          <ul className="flex flex-col md:flex-row md:items-center gap-3.5">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={`/${i18n.resolvedLanguage}${link.href}`}
                  className="text-sm text-muted-foreground hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
