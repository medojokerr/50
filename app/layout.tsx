import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo, Noto_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" })
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-noto-sans-arabic" })

export const metadata: Metadata = {
  title: "Videofy - AI Video Ads | Professional Video Creation",
  description: "Create stunning advertising videos in minutes using AI. Professional quality, fast delivery, and affordable pricing. Get your business noticed with engaging video content.",
  keywords: "AI video creation, advertising videos, video marketing, AI-powered videos, professional videos, video ads, digital marketing",
  authors: [{ name: "Videofy Team" }],
  creator: "Videofy",
  publisher: "Videofy",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    title: "Videofy - AI Video Ads",
    description: "Create stunning advertising videos in minutes using AI",
    siteName: "Videofy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Videofy - AI Video Ads",
    description: "Create stunning advertising videos in minutes using AI",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1E2A38" },
    { media: "(prefers-color-scheme: dark)", color: "#1E2A38" },
  ],
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
