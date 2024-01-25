import BackHomeButton from "@/components/BackHomeButton";
import Privacy from "@/components/Privacy";

const PrivacyPage = ({ language }: { language: "en" | "ar" }) => {
  return (
    <>
      <BackHomeButton />
      <Privacy language={language} />;
    </>
  );
};

export default PrivacyPage;
