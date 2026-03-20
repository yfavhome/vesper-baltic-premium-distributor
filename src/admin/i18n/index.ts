import { useLanguage } from "@/i18n/LanguageContext";
import { adminEn } from "./en";
import { adminLv } from "./lv";
import { adminRu } from "./ru";
import type { AdminTranslations } from "./en";

const adminTranslations: Record<string, AdminTranslations> = {
  en: adminEn,
  lv: adminLv,
  ru: adminRu,
};

export function useAdminI18n(): AdminTranslations {
  const { lang } = useLanguage();
  return adminTranslations[lang] || adminEn;
}
