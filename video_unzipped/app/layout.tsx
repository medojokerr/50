import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-noto-sans-arabic" })

export const metadata: Metadata = {
  title: "Videofy - AI Video Ads",
  description: "Create stunning advertising videos in minutes using AI.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable} ${notoSansArabic.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
