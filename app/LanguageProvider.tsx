
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Language = "fr" | "ar";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  ar: boolean;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");
  const ar = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? "rtl" : "ltr";
  }, [lang, ar]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, ar }}>
      <div lang={lang} dir={ar ? "rtl" : "ltr"} className="min-w-0">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
