import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLocation } from "react-router";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Globe className="text-primary cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem
            className={`${
              i18n.resolvedLanguage === "ar" ? "font-arabic font-bold" : ""
            }`}
            dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
          >
            <a
              href={
                location.pathname.includes("/en")
                  ? location.pathname.replace("/en", "/ar")
                  : location.pathname.includes("/ar")
                  ? location.pathname
                  : "/ar"
              }
            >
              {t("language.ar")}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`${
              i18n.resolvedLanguage === "en" ? "font-display" : ""
            }`}
            dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
          >
            <a
              href={
                location.pathname.includes("/ar")
                  ? location.pathname.replace("/ar", "/en")
                  : location.pathname.includes("/en")
                  ? location.pathname
                  : "/en"
              }
            >
              {t("language.en")}
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
