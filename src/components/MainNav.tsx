import logo from "../assets/sos-logo.png";
import { useEffect, useRef } from "react";
import { ModeToggle } from "./mode-toggle";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "react-i18next";

const MainNav = () => {
  const ref = useRef(document.createElement("div"));
  const { i18n } = useTranslation();

  useEffect(() => {
    const scroll = () => {
      ref.current.classList.toggle("fixed", window.scrollY >= 250);
      ref.current.classList.toggle("bg-white", window.scrollY >= 250);
      ref.current.classList.toggle("z-10", window.scrollY >= 250);
      ref.current.classList.toggle("shadow", window.scrollY >= 250);
      ref.current.classList.toggle("w-full", window.scrollY >= 250);
      ref.current.classList.toggle("dark:bg-background", window.scrollY >= 250);
      ref.current.classList.toggle(
        "dark:text-secondary",
        window.scrollY >= 250
      );
    };
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <div ref={ref} className="py-3 text-darker">
      <div
        className="container max-w-6xl flex items-center justify-between"
        dir={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"}
      >
        <a href="/">
          <img className="w-10" src={logo} alt="" />
        </a>
        <div
          className="flex items-center gap-8"
          dir={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"}
        >
          <DesktopMenu />
          <div
            className="flex items-center gap-2"
            dir={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"}
          >
            <ModeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
