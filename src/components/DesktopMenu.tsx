import { useTranslation } from "react-i18next";

const DesktopMenu = () => {
  const { t, i18n } = useTranslation();
  return (
    <nav
      className={`hidden ${
        i18n.resolvedLanguage === "en" ? "font-display" : "font-arabic"
      } md:block`}
    >
      <ul className="flex items-center gap-8">
        <li>
          <a className="p-3 hover:text-primary rounded" href="#">
            {t("nav.home")}
          </a>
        </li>
        <li>
          <a className="p-3 hover:text-primary rounded" href="#">
            {t("nav.about")}
          </a>
        </li>
        <li>
          <a className="p-3 hover:text-primary rounded" href="#">
            {t("nav.contact")}
          </a>
        </li>
        <li>
          <a className="p-3 hover:text-primary rounded" href="#">
            {t("nav.track")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
