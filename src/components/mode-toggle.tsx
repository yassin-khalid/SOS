import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-transparent text-dark focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-transparent"
          variant="default"
          size="icon"
        >
          <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
          onClick={() => setTheme("light")}
        >
          {t("mode.light")}
        </DropdownMenuItem>
        <DropdownMenuItem
          dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
          onClick={() => setTheme("dark")}
        >
          {t("mode.dark")}
        </DropdownMenuItem>
        <DropdownMenuItem
          dir={`${i18n.resolvedLanguage === "ar" ? "rtl" : "ltr"}`}
          onClick={() => setTheme("system")}
        >
          {t("mode.system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
