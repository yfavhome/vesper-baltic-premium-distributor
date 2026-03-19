import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "./en";
import { lv } from "./lv";
import { ru } from "./ru";

export type Language = "en" | "lv" | "ru";

type Translations = typeof en;

const translations: Record<Language, Translations> = { en, lv, ru };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("vesper_lang") as Language;
    return saved && translations[saved] ? saved : "en";
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("vesper_lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
