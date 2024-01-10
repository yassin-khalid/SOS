import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const BackHomeButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Button
      className="my-6 lg:ml-48 ml-5 rounded-md hover:bg-primary hover:text-secondary"
      variant="ghost"
      onClick={() => navigate("/")}
    >
      <MoveLeft className="mr-2 w-4 h-4" />
      {t("privacy.button")}
    </Button>
  );
};

export default BackHomeButton;
