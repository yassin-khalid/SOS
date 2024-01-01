import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import sos7 from "../assets/imgs/sos7.jpg";
import { PhoneCall } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const ways: string[] = t("contact.support.ways", { returnObjects: true });
  return (
    <section id="contact" className="my-48 max-w-4xl mx-auto">
      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 p-0">
          <div className="order-2 md:order-1 max-h-[499px]">
            <img
              src={sos7}
              className="w-full h-full object-cover"
              alt="SOS Fleet"
            />
          </div>
          <div className="flex flex-col justify-between order-1 md:order-2">
            <CardHeader dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}>
              <CardTitle className="font-display text-primary text-3xl">
                {t("contact.title")}
              </CardTitle>
              <CardDescription>
                {t("contact.description")}
                <ul
                  className="mt-8 text-base text-darker dark:text-foreground"
                  dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
                >
                  <li>
                    {t("contact.support.hours")}
                    <ol>
                      {ways.map((w, i) => (
                        <li
                          className="flex items-center gap-10"
                          dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
                        >
                          <span className="text-primary font-display w-10">
                            {i + 1}.
                          </span>
                          {w}
                        </li>
                      ))}
                    </ol>
                  </li>
                </ul>
              </CardDescription>
            </CardHeader>
            <CardFooter
              className="flex justify-end"
              dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
            >
              <Button variant="default">
                <a
                  href="tel:920005587"
                  className="flex items-center gap-2 dark:text-foreground"
                >
                  <PhoneCall />
                  <span>{t("contact.call")}</span>
                </a>
              </Button>
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
