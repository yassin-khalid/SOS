import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const Vision = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="my-48 container max-w-2xl">
      <h2
        className={`${
          i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
        } text-primary mb-10 text-center text-3xl`}
      >
        {t("vision.title")}
      </h2>
      <Tabs defaultValue="vision" className="text-center w-full ">
        <TabsList
          className="bg-secondary"
          dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
        >
          <TabsTrigger
            className={`${
              i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
            } data-[state=active]:text-white data-[state=active]:bg-primary text-darker`}
            value="vision"
          >
            {t("vision.vision.title")}
          </TabsTrigger>
          <TabsTrigger
            className={`${
              i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
            } data-[state=active]:text-white data-[state=active]:bg-primary text-darker`}
            value="mission"
          >
            {t("vision.mission.title")}
          </TabsTrigger>
        </TabsList>
        <TabsContent className="dark:text-muted-foreground" value="vision">
          {t("vision.vision.description")}
        </TabsContent>
        <TabsContent className="dark:text-muted-foreground" value="mission">
          {t("vision.mission.description")}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Vision;
