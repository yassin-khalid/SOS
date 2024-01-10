import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Objectives from "@/components/Objectives";
import Vision from "@/components/Vision";
import Who from "@/components/Who";
import { Toaster } from "@/components/ui/sonner";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { i18n } = useTranslation();
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
