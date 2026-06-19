"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { en } from "../translations/en";
import { es } from "../translations/es";

const translations = { en, es };

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: (key) => key,
});

const get = (obj, path) =>
  path.split(".").reduce((curr, key) => curr?.[key], obj);

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-lang");
    if (stored === "en" || stored === "es") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next) => {
    setLangState(next);
    localStorage.setItem("portfolio-lang", next);
  };

  const t = (key) => get(translations[lang], key) ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
