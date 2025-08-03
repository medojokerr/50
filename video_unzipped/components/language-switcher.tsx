"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-context"
import { getTranslation, type Locale } from "@/lib/i18n"

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const t = getTranslation(locale)

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-navy text-white border-skyBlue hover:bg-navy/90 hover:text-white">
          {t.language} ({locale === "en" ? t.english : t.arabic})
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-navy text-white border-skyBlue">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")} className="hover:bg-skyBlue/20">
          {t.english}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("ar")} className="hover:bg-skyBlue/20">
          {t.arabic}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
