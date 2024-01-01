import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  const { t, i18n } = useTranslation();
  const questions = t("faq.questions", { returnObjects: true }) as string[];
  const answers = t("faq.answers", { returnObjects: true }) as string[];
  return (
    <section className="my-48 container max-w-2xl">
      <h2
        className={`${
          i18n.resolvedLanguage === "ar" ? "font-arabic" : "font-display"
        } text-primary mb-10 text-center text-3xl`}
      >
        {t("faq.title")}
      </h2>
      <Accordion type="multiple" className="w-full">
        {questions.map((q, i) => (
          <AccordionItem
            value={`item-${i + 1}`}
            dir={i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}
          >
            <AccordionTrigger className="text-start">{q}</AccordionTrigger>
            <AccordionContent>{answers[i]}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
