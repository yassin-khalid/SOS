import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Objectives from "@/components/Objectives";
import Vision from "@/components/Vision";
import Who from "@/components/Who";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Landing = ({ language }: { language: "en" | "ar" }) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <>
      <Toaster dir={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"} />
      <Header />
      <Vision />
      <Who />
      <Contact />
      <Objectives />
      <FAQ />
    </>
  );
};

export default Landing;
