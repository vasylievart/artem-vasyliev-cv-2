"use client";

import { Lang, LanguageContextProps } from "@/types";
import { createContext, useContext } from "react";


const translations: Record<Lang, Record<string, string>> = {
  en: {
    about: "About Me",
    cv: "CV",
    projects: "Projects",
    contact: "Contact",
    switch: "ES",
  },
  es: {
    about: "Sobre mí",
    cv: "CV",
    projects: "Proyectos",
    contact: "Contacto",
    switch: "EN",
  },
};



const LanguageContext = createContext<LanguageContextProps | null>(null);

export const LanguageProvider = ({
  children,
  initialLang,
} : {
  children: React.ReactNode; 
  initialLang: Lang;
}) => {
  
  const lang = initialLang as Lang;
  const toggleLang = () => {
    const newLang = lang === "en" ? "es" : "en";
    window.location.pathname = `/${newLang}`;
  };
  const t = (key: string) => translations[lang][key] ||  key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("LanguageContext not found");
  return ctx;
};
