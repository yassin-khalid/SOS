import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import sos1 from "../assets/imgs/sos1.jpg";
import sos2 from "../assets/imgs/sos2.jpg";
import sos3 from "../assets/imgs/sos3.jpg";
import sos4 from "../assets/imgs/sos4.jpg";
import sos5 from "../assets/imgs/sos5.jpg";
import sos6 from "../assets/imgs/sos6.jpg";
import sos7 from "../assets/imgs/sos7.jpg";
import sos8 from "../assets/imgs/sos8.jpg";
import sos9 from "../assets/imgs/sos9.jpg";
import sos10 from "../assets/imgs/sos10.jpg";
import { useTranslation } from "react-i18next";

const imgs = [sos1, sos2, sos3, sos4, sos5, sos6, sos7, sos8, sos9, sos10];

const Who = () => {
  const { t, i18n } = useTranslation();
  const points: string[] = t("who.points", { returnObjects: true });
  return (
    <section id="about" className="my-48">
      <h2
        className={`text-primary text-3xl mb-10 ${
          i18n.resolvedLanguage === "en" ? "font-display" : "font-arabic"
        } text-center`}
      >
        {t("who.title")}
      </h2>
      <ScrollArea
        className="max-w-3xl mx-auto"
        dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
      >
        <div
          className="flex w-max gap-2 md:gap-4 p-4"
          dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
        >
          {points.map((p, i) => (
            <figure key={i} className="shrink-0">
              <div className="overflow-hidden rounded-md mb-4 w-[24rem] md:w-[48rem]">
                <img
                  src={imgs[i + 4]}
                  alt={`SOS Fleet ${i}`}
                  className="aspect-[2/1] h-fit w-fit object-cover"
                />
              </div>
              <figcaption className="text-sm max-w-sm md:max-w-3xl px-2 text-muted-foreground">
                {p}
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar
          orientation="horizontal"
          dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
        />
      </ScrollArea>
    </section>
  );
};

export default Who;
