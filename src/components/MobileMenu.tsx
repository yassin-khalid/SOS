import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Home, Info, Contact, TrainFrontIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const { t, i18n } = useTranslation();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="md:hidden cursor-pointer text-primary" />
      </SheetTrigger>
      <SheetContent side={i18n.resolvedLanguage === "ar" ? "left" : "right"}>
        <nav
          className={`${
            i18n.resolvedLanguage === "en" ? "font-display" : "font-arabic"
          } p-10 dark:text-secondary`}
        >
          <ul className="flex flex-col gap-8">
            <li>
              <SheetClose asChild>
                <div
                  className="flex hover:text-primary items-center gap-3"
                  dir={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"}
                >
                  <Home />
                  <a className="p-3 rounded" href="#">
                    {t("nav.home")}
                  </a>
                </div>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <div
                  className="flex hover:text-primary items-center gap-3"
                  dir={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"}
                >
                  <Info />
                  <a className="p-3 rounded" href="#about">
                    {t("nav.about")}
                  </a>
                </div>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <div
                  className="flex hover:text-primary items-center gap-3"
                  dir={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"}
                >
                  <Contact />
                  <a className="p-3 rounded" href="#contact">
                    {t("nav.contact")}
                  </a>
                </div>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <div
                  className="flex hover:text-primary items-center gap-3"
                  dir={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"}
                >
                  <TrainFrontIcon />
                  <a className="p-3 rounded" href="#track">
                    {t("nav.track")}
                  </a>
                </div>
              </SheetClose>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
