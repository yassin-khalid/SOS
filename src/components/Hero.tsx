import CountUp from "react-countup";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-6">
      <h1
        className={`text-secondary text-center ${
          i18n.resolvedLanguage === "en" ? "font-display " : "font-arabic"
        } text-4xl md:text-5xl mb-8`}
      >
        {t("hero.title")}
      </h1>
      <p className="text-slate-300 text-center text-lg mb-16 max-w-3xl mx-auto">
        {t("hero.description")}
      </p>
      <div className="flex items-center justify-center gap-8 mb-12">
        <a href="#track">
          <Button
            className="text-white"
            onClick={() =>
              toast(t("hero.toast.message"), {
                description: t("hero.toast.description"),
                action: {
                  label: t("hero.toast.label"),
                  onClick(event) {
                    console.log(event);
                  },
                },
              })
            }
          >
            {t("hero.buttons.track")}
          </Button>
        </a>
        <a href="#about">
          <Button className="text-darker" variant="secondary">
            {t("hero.buttons.more")}
          </Button>
        </a>
      </div>
      <div className="flex items-center justify-center gap-12">
        <div className="flex flex-col gap-3 items-center">
          <div className="font-bold text-4xl text-primary">
            <span>+</span>
            <CountUp end={150} duration={5} />
          </div>
          <span className="text-secondary text-center">
            {t("hero.trucks.uncovered")}
          </span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="font-bold text-4xl text-primary">
            <span>+</span>
            <CountUp end={50} duration={5} />
          </div>
          <span className="text-secondary text-center">
            {t("hero.trucks.covered")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
