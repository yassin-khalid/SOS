import { Boxes, CalendarCheck, Container, LockKeyhole } from "lucide-react";
import { Card, CardDescription, CardHeader } from "./ui/card";
import { useTranslation } from "react-i18next";

const icons = [
  <LockKeyhole className="text-primary mx-auto block mt-6" size={50} />,
  <CalendarCheck className="text-primary mx-auto block mt-6" size={50} />,
  <Container className="text-primary mx-auto block mt-6" size={50} />,
  <Boxes className="text-primary mx-auto block mt-6" size={50} />,
];

const Objectives = () => {
  const { t, i18n } = useTranslation();
  const objectives: { title: string; description: string }[] = t(
    "objective.objectives",
    { returnObjects: true }
  );
  return (
    <section className="max-w-5xl mx-auto my-48 px-4 md:px-0">
      <h2
        className={`text-primary text-3xl ${
          i18n.resolvedLanguage === "en" ? "font-display" : "font-arabic"
        } text-center mb-6`}
      >
        {t("objective.title")}
      </h2>
      <ul
        className="grid grid-cols-2 md:grid-cols-4 gap-5"
        dir={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"}
      >
        {objectives.map((o, i) => (
          <Card key={i}>
            {icons[i]}
            <CardHeader
              className={`text-center dark:text-secondary ${
                i18n.resolvedLanguage === "en" ? "font-display" : "font-arabic"
              }`}
            >
              {o.title}
            </CardHeader>
            <CardDescription className="px-4 pb-6">
              {o.description}
            </CardDescription>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Objectives;
