// Global type definitions for the project

export interface WhatsAppLink {
  number: string
  message: string
}

export interface PackageFeature {
  icon: React.ComponentType<{ className?: string }>
  text: string
  highlighted?: boolean
}

export interface VideoPackage {
  id: string
  title: string
  price: string
  duration: string
  features: PackageFeature[]
  popular?: boolean
  premium?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  duration: string
  category: string
  thumbnail?: string
  whatsappMessage: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  whatsappNumber: string
  usdtAddress: string
  social: {
    whatsapp: string
  }
}

// Animation and UI types
export interface AnimationProps {
  duration?: number
  delay?: number
  ease?: string
}

export interface ButtonVariants {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

// Form and validation types
export interface ContactForm {
  name: string
  email: string
  message: string
  phone?: string
}

export interface ValidationError {
  field: string
  message: string
}

// Environment variables interface
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WHATSAPP_NUMBER: string
      NEXT_PUBLIC_USDT_ADDRESS: string
      NEXT_PUBLIC_SITE_URL: string
      NEXT_PUBLIC_GA_ID?: string
      NEXT_PUBLIC_HOTJAR_ID?: string
    }
  }
}

export {}
