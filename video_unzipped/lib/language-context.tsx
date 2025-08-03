"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getTranslation, type Locale } from "./i18n"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: ReturnType<typeof getTranslation>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("ar") // Default to Arabic

  useEffect(() => {
    // Set initial direction based on default locale
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"
  }, [locale])

  const t = getTranslation(locale)

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
