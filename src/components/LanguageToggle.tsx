import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();

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
            onClick={() => i18n.changeLanguage("ar")}
          >
            {t("language.ar")}
          </DropdownMenuItem>
          <DropdownMenuItem
            className={`${
              i18n.resolvedLanguage === "en" ? "font-display" : ""
            }`}
            dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
            onClick={() => i18n.changeLanguage("en")}
          >
            {t("language.en")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
