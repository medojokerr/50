"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import VideofyLogo from "@/components/videofy-logo"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"
import {
  CheckCircle, DollarSign, Zap, Share2, Play, Palette, Mic, Users, Music, Sparkles,
  Phone, ExternalLink, Star, Award, Clock, Shield, Heart, TrendingUp, Target, Camera,
  Video, Megaphone, ShoppingCart, Gift, Trophy, ThumbsUp, MessageCircle, Rocket, Crown, Smile
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const { locale, t } = useLanguage()

  return (
    <div
      className={`min-h-screen bg-navy text-white ${locale === "ar" ? "font-arabic" : "font-sans"}`}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-navy/90 border-b border-skyBlue/20 shadow-2xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="transform hover:scale-105 transition-all duration-300">
            <VideofyLogo alt={t.logoAlt} />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="#features" className="text-white/80 hover:text-skyBlue transition-colors duration-300 cursor-pointer">
                {locale === "ar" ? "المزايا" : "Features"}
              </a>
              <a href="#portfolio" className="text-white/80 hover:text-skyBlue transition-colors duration-300 cursor-pointer">
                {locale === "ar" ? "أعمالنا" : "Portfolio"}
              </a>
              <a href="#packages" className="text-white/80 hover:text-skyBlue transition-colors duration-300 cursor-pointer">
                {locale === "ar" ? "الباقات" : "Packages"}
              </a>
            </div>
            <div className="transform hover:scale-105 transition-all duration-300">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative container mx-auto px-6 py-20 text-center md:py-32 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-skyBlue/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-orangeCTA/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-skyBlue/5 to-orangeCTA/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="mb-8 transform hover:scale-105 transition-all duration-500">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-skyBlue to-orangeCTA bg-clip-text text-transparent animate-pulse">
                  {t.headerTitle.split(' ').slice(0, 2).join(' ')}
                </span>
                <br />
                <span className="text-white">
                  {t.headerTitle.split(' ').slice(2).join(' ')}
                </span>
              </h1>
            </div>

            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-orangeCTA to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                {locale === "ar" ? "عرض حصري: خصم 30%" : "EXCLUSIVE: 30% OFF TODAY"}
              </div>
              <p className="text-xl md:text-2xl text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
                {locale === "ar"
                  ? "احصل على فيديو إعلاني احترافي مصمم خصيصاً لعملك - جودة عالية وتسليم سريع"
                  : "Get a professional advertising video designed specifically for your business - high quality and fast delivery"
                }
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  {locale === "ar" ? "جودة احترافية" : "Professional Quality"}
                </span>
                <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {locale === "ar" ? "تسليم 24 ساعة" : "24h Delivery"}
                </span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  {locale === "ar" ? "جودة احترافية" : "Pro Quality"}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "🔥 أريد الاستفادة من العرض الحصري! أريد فيديو إعلاني احترافي" : "🔥 I want to take advantage of the exclusive offer! I want a professional advertising video")}`} target="_blank" rel="noopener noreferrer">
                <Button className="group bg-gradient-to-r from-red-500 via-orange-500 to-red-600 hover:from-red-600 hover:via-red-500 hover:to-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-red-500/30 flex items-center gap-4 font-bold relative overflow-hidden animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Rocket className="w-7 h-7 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">{t.orderNow}</span>
                  <Gift className="w-6 h-6 transform group-hover:bounce transition-transform duration-300" />
                </Button>
              </Link>

              <div className="text-center">
                <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm mb-2 animate-bounce">
                  {locale === "ar" ? "⏰ باقي 23:47:32" : "⏰ Only 23:47:32 Left"}
                </div>
                <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "أريد مشاهدة أمثلة من أعمالكم" : "I want to see examples of your work")}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="group border-2 border-skyBlue text-skyBlue hover:bg-skyBlue hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 font-semibold bg-transparent">
                    <Play className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                    {locale === "ar" ? "شاهد أعمالنا ����" : "View Our Work 🎬"}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Urgency Banner */}
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-8 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 text-white">
                <Crown className="w-6 h-6 text-yellow-400 animate-bounce" />
                <span className="font-bold text-lg">
                  {locale === "ar" ? "🎯 فقط 7 مواعيد متبقية هذا الأسبوع!" : "🎯 Only 7 Slots Left This Week!"}
                </span>
                <Crown className="w-6 h-6 text-yellow-400 animate-bounce" />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-orangeCTA mb-2">500+</div>
                <p className="text-white/70">{locale === "ar" ? "فيديو مُنجز" : "Videos Created"}</p>
              </div>
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-skyBlue mb-2">24/7</div>
                <p className="text-white/70">{locale === "ar" ? "دعم متواصل" : "Support Available"}</p>
              </div>
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-orangeCTA mb-2">48h</div>
                <p className="text-white/70">{locale === "ar" ? "مدة التسليم" : "Delivery Time"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative bg-gradient-to-br from-white via-gray-50 to-white text-navy py-20 md:py-32 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-skyBlue/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-orangeCTA/5 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-navy via-skyBlue to-orangeCTA bg-clip-text text-transparent">
                  {t.featuresTitle}
                </span>
              </h2>
              <p className="text-xl text-navy/70 max-w-3xl mx-auto">
                {locale === "ar"
                  ? "نركز على شيء واحد فقط: تسليمك فيديو إعلاني مثالي جاهز للنشر فوراً"
                  : "We focus on one thing only: delivering you a perfect advertising video ready to publish immediately"
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 - Speed */}
              <Card className="group bg-gradient-to-br from-navy via-blue-900 to-navy text-white border-none shadow-2xl hover:shadow-skyBlue/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-skyBlue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-skyBlue to-blue-400 rounded-full flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Zap className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-skyBlue transition-colors duration-300">{t.featureSpeed}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white/80 relative z-10">
                  <p className="text-lg leading-relaxed">
                    {locale === "ar" ? "فيديو جاهز للنشر يسلم إليك في أسرع وقت ممكن" : "Ready-to-publish video delivered to you in the fastest time possible"}
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 - Quality */}
              <Card className="group bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white border-none shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-green-200 transition-colors duration-300">{t.featureQuality}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white/80 relative z-10">
                  <p className="text-lg leading-relaxed">
                    {locale === "ar" ? "فيديو نهائي بجودة احترافية أفضل من توقعاتك" : "Final video with professional quality better than your expectations"}
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 - Low Cost */}
              <Card className="group bg-gradient-to-br from-orangeCTA via-orange-500 to-orange-600 text-white border-none shadow-2xl hover:shadow-orangeCTA/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <DollarSign className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-orange-200 transition-colors duration-300">{t.featureLowCost}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white/80 relative z-10">
                  <p className="text-lg leading-relaxed">
                    {locale === "ar" ? "تكلفة ثابتة واضحة - تدفع وتستلم فيديوك جاهز" : "Clear fixed cost - pay and receive your ready video"}
                  </p>
                </CardContent>
              </Card>

              {/* Feature 4 - Social Media */}
              <Card className="group bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white border-none shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="flex flex-col items-center text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Share2 className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-purple-200 transition-colors duration-300">{t.featureSocialMedia}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white/80 relative z-10">
                  <p className="text-lg leading-relaxed">
                    {locale === "ar" ? "فيديو جاهز للنشر على أي منصة فوراً بدون أي تعديل إضافي" : "Video ready to publish on any platform immediately without any additional editing"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="relative container mx-auto px-6 py-20 md:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy/5 via-transparent to-skyBlue/5"></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-orangeCTA/10 rounded-full blur-2xl animate-pulse delay-500"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-skyBlue/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-navy via-skyBlue to-orangeCTA bg-clip-text text-transparent">
                {t.portfolioTitle}
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {t.portfolioSubtitle}
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-skyBlue to-orangeCTA mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
            {/* Portfolio Item 1 */}
            <Card className="group bg-gradient-to-br from-navy via-blue-900 to-navy text-white border-none shadow-2xl hover:shadow-skyBlue/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-skyBlue/10 via-transparent to-orangeCTA/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative aspect-video bg-gradient-to-br from-skyBlue/30 via-blue-500/20 to-orangeCTA/30 flex items-center justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4">
                    <ShoppingCart className="w-8 h-8 text-white/50 animate-pulse" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <TrendingUp className="w-6 h-6 text-white/30 animate-bounce" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Target className="w-6 h-6 text-white/40 animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Star className="w-5 h-5 text-yellow-400/60 animate-pulse" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow">
                    <Play className="w-12 h-12 text-white transform group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-gradient-to-r from-orangeCTA to-orange-600 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg animate-float">
                  30s
                </div>
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {locale === "ar" ? "جودة 4K" : "4K Quality"}
                </div>
              </div>

              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Camera className="w-5 h-5 text-skyBlue" />
                  <h3 className="text-xl font-bold group-hover:text-skyBlue transition-colors duration-300">
                    {locale === "ar" ? "إعلان منتج تجاري" : "Product Commercial"}
                  </h3>
                </div>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {locale === "ar" ? "فيديو إعلاني احترافي لمنتج تجاري بجودة سينمائية" : "Professional commercial video for a product with cinematic quality"}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {locale === "ar" ? "احترافي" : "Professional"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-skyBlue" />
                    {locale === "ar" ? "تسليم سريع" : "Fast Delivery"}
                  </span>
                </div>
                <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "��ريد مشاهدة مثال إعلان منتج تجاري" : "I want to see the product commercial example")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-orangeCTA to-orange-600 hover:from-orange-600 hover:to-orangeCTA text-white rounded-xl py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 shadow-lg hover:shadow-orangeCTA/25">
                    <Play className="w-5 h-5" />
                    {t.viewOnWhatsApp}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Portfolio Item 2 */}
            <Card className="group bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white border-none shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative aspect-video bg-gradient-to-br from-emerald-400/30 via-green-500/20 to-skyBlue/30 flex items-center justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4">
                    <Shield className="w-8 h-8 text-white/50 animate-pulse" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Award className="w-6 h-6 text-white/30 animate-bounce" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <ThumbsUp className="w-6 h-6 text-white/40 animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Heart className="w-5 h-5 text-pink-400/60 animate-pulse" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-glow">
                    <Play className="w-12 h-12 text-white transform group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-gradient-to-r from-skyBlue to-blue-600 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg animate-float">
                  60s
                </div>
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {locale === "ar" ? "دعم فني" : "Support"}
                </div>
              </div>

              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Megaphone className="w-5 h-5 text-green-300" />
                  <h3 className="text-xl font-bold group-hover:text-green-200 transition-colors duration-300">
                    {locale === "ar" ? "إعلان خدمات" : "Services Ad"}
                  </h3>
                </div>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {locale === "ar" ? "فيديو إعلاني لخدمات الشركات مع دعم فني متميز" : "Advertising video for business services with premium support"}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-green-400" />
                    {locale === "ar" ? "موثوق" : "Trusted"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-yellow-400" />
                    {locale === "ar" ? "مميز" : "Premium"}
                  </span>
                </div>
                <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "أريد مشاهدة مثال إعلان الخدمات" : "I want to see the services ad example")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-skyBlue to-blue-600 hover:from-blue-600 hover:to-skyBlue text-white rounded-xl py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 shadow-lg hover:shadow-skyBlue/25">
                    <Play className="w-5 h-5" />
                    {t.viewOnWhatsApp}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Portfolio Item 3 */}
            <Card className="group bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white border-none shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative aspect-video bg-gradient-to-br from-purple-400/30 via-pink-500/20 to-orange-400/30 flex items-center justify-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4">
                    <Crown className="w-8 h-8 text-yellow-400/60 animate-pulse" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Sparkles className="w-6 h-6 text-white/30 animate-bounce" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Users className="w-6 h-6 text-white/40 animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Trophy className="w-5 h-5 text-yellow-400/60 animate-pulse" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow">
                    <Play className="w-12 h-12 text-white transform group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-gradient-to-r from-orangeCTA to-pink-600 text-white text-sm px-3 py-1 rounded-full font-bold shadow-lg animate-float">
                  ⭐ Premium
                </div>
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                  {locale === "ar" ? "شخصيات ناطقة" : "AI Characters"}
                </div>
              </div>

              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-pink-300" />
                  <h3 className="text-xl font-bold group-hover:text-pink-200 transition-colors duration-300">
                    {locale === "ar" ? "إعلان بشخصيات ناطقة" : "Speaking Characters Ad"}
                  </h3>
                </div>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {locale === "ar" ? "فيديو بشخصيات ذكية ناطقة وتفاعلية متطورة" : "Video with intelligent speaking and interactive characters"}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    {locale === "ar" ? "VIP" : "VIP"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-purple-300" />
                    {locale === "ar" ? "ذكي" : "Smart"}
                  </span>
                </div>
                <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "أريد مشاهدة مثال الشخصيات الناطقة" : "I want to see the speaking characters example")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white rounded-xl py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                    <Play className="w-5 h-5" />
                    {t.viewOnWhatsApp}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="bg-white text-navy py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.newFeaturesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-navy to-blue-900 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-skyBlue to-blue-400 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{t.feature3D}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  {locale === "ar" ? "تأثيرات ثلاثية الأبعاد مذهلة لجذب الانتباه" : "Stunning 3D effects to capture attention"}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orangeCTA to-orange-600 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-4">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{t.featureVoice}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white/80">
                  {locale === "ar" ? "أصوات طبيعية بالذكاء الاصطناعي" : "Natural AI-generated voices"}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600 to-purple-800 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{t.featureCustom}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white/80">
                  {locale === "ar" ? "شخصيات مخصصة حسب احتياجاتك" : "Custom characters for your needs"}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-600 to-green-800 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-4">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{t.featureEffects}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white/80">
                  {locale === "ar" ? "تأثيرات بصرية احترافية ومذهلة" : "Professional and stunning visual effects"}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-600 to-pink-800 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-4">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{t.featureMusic}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white/80">
                  {locale === "ar" ? "موسيقى خلفية تناسب محتواك" : "Background music that fits your content"}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{t.featureBranding}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white/80">
                  {locale === "ar" ? "دمج علامتك التجارية بشكل احترافي" : "Professional brand integration"}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-blue-900 to-navy"></div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-skyBlue/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-orangeCTA/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
                <span className="bg-gradient-to-r from-skyBlue via-white to-orangeCTA bg-clip-text text-transparent">
                  {t.whyChooseUsTitle}
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                {t.whyChooseUsSubtitle}
              </p>
              <div className="mt-8 w-24 h-1 bg-gradient-to-r from-skyBlue to-orangeCTA mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Reason 1 */}
              <div className="group text-center transform hover:scale-105 transition-all duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-skyBlue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-skyBlue/50 transition-all duration-300 animate-float">
                  <Rocket className="w-12 h-12 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-skyBlue transition-colors duration-300">
                  {t.whyReason1}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {t.whyReason1Desc}
                </p>
              </div>

              {/* Reason 2 */}
              <div className="group text-center transform hover:scale-105 transition-all duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-orangeCTA to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-orangeCTA/50 transition-all duration-300 animate-float delay-200">
                  <Trophy className="w-12 h-12 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orangeCTA transition-colors duration-300">
                  {t.whyReason2}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {t.whyReason2Desc}
                </p>
              </div>

              {/* Reason 3 */}
              <div className="group text-center transform hover:scale-105 transition-all duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-green-500/50 transition-all duration-300 animate-float delay-500">
                  <Smile className="w-12 h-12 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {t.whyReason3}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {t.whyReason3Desc}
                </p>
              </div>

              {/* Reason 4 */}
              <div className="group text-center transform hover:scale-105 transition-all duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 animate-float delay-700">
                  <Award className="w-12 h-12 text-white transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {t.whyReason4}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {t.whyReason4Desc}
                </p>
              </div>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-orangeCTA mb-2 animate-pulse">500+</div>
                <p className="text-white/70 text-lg">{locale === "ar" ? "فيديو مُسلم" : "Videos Delivered"}</p>
              </div>
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-skyBlue mb-2 animate-pulse">48h</div>
                <p className="text-white/70 text-lg">{locale === "ar" ? "متوسط التسليم" : "Average Delivery"}</p>
              </div>
              <div className="transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 animate-pulse">99%</div>
                <p className="text-white/70 text-lg">{locale === "ar" ? "عملاء راضون" : "Satisfied Clients"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-br from-white via-gray-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-navy via-skyBlue to-orangeCTA bg-clip-text text-transparent">
                  {t.testimonialTitle}
                </span>
              </h2>
              <div className="flex justify-center items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 200}ms`}} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial 1 */}
              <Card className="bg-white border-2 border-skyBlue/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-navy/80 text-center italic mb-6 leading-relaxed">"{t.testimonial1}"</p>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-skyBlue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Smile className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-navy">{locale === "ar" ? "أحمد محمد" : "Ahmed M."}</p>
                    <p className="text-sm text-navy/60">{locale === "ar" ? "صاحب متجر إلكتروني" : "E-commerce Owner"}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-white border-2 border-orangeCTA/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-navy/80 text-center italic mb-6 leading-relaxed">"{t.testimonial2}"</p>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orangeCTA to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ThumbsUp className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-navy">{locale === "ar" ? "سارة أحمد" : "Sarah A."}</p>
                    <p className="text-sm text-navy/60">{locale === "ar" ? "مديرة تسويق" : "Marketing Manager"}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="bg-white border-2 border-green-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-navy/80 text-center italic mb-6 leading-relaxed">"{t.testimonial3}"</p>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-navy">{locale === "ar" ? "محمد علي" : "Mohamed A."}</p>
                    <p className="text-sm text-navy/60">{locale === "ar" ? "رائد أعمال" : "Entrepreneur"}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orangeCTA via-orange-500 to-orange-600"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {t.ctaTitle}
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {t.ctaSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "مرحباً! أريد طلب فيديو إعلاني احترافي" : "Hello! I want to order a professional advertising video")}`} target="_blank" rel="noopener noreferrer">
                <Button className="group bg-white text-orangeCTA hover:bg-gray-100 text-xl px-12 py-6 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 flex items-center gap-4 font-bold relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orangeCTA/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <Phone className="w-7 h-7 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">{t.orderNow}</span>
                  <Gift className="w-6 h-6 transform group-hover:bounce transition-transform duration-300" />
                </Button>
              </Link>

              <div className="text-white/80 text-center">
                <p className="text-lg font-semibold mb-2">{locale === "ar" ? "🎉 عرض محدود!" : "🎉 Limited Offer!"}</p>
                <p className="text-sm">{locale === "ar" ? "احصل على خصم 10% على طلبك الأول" : "Get 10% off your first order"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-red-700"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-yellow-400 text-black px-6 py-3 rounded-full inline-block font-bold text-lg mb-6 animate-bounce">
                {locale === "ar" ? "🚨 تحذير: العرض ينتهي قريباً!" : "🚨 WARNING: Offer Ends Soon!"}
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                {locale === "ar" ? "🔥 عرض الجمعة البيضاء المحدود!" : "🔥 LIMITED BLACK FRIDAY DEAL!"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
                  <Gift className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{t.freeRevision}</h3>
                  <p className="text-white/80">{locale === "ar" ? "قيمة 200 جنيه" : "Worth $50"}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
                  <Music className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{t.exclusiveBonus}</h3>
                  <p className="text-white/80">{locale === "ar" ? "قيمة 150 جنيه" : "Worth $35"}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
                  <Rocket className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{t.instantDelivery}</h3>
                  <p className="text-white/80">{locale === "ar" ? "قيمة 300 جنيه" : "Worth $75"}</p>
                </div>
              </div>

              <div className="bg-yellow-400 text-black p-6 rounded-lg mb-8">
                <div className="text-3xl font-extrabold mb-2">
                  {locale === "ar" ? "توفر أكثر من 650 جنيه!" : "SAVE OVER $160!"}
                </div>
                <div className="text-lg font-semibold">
                  {locale === "ar" ? "احصل على كل هذا مجاناً مع أي باقة اليوم فقط!" : "Get ALL This FREE with Any Package Today Only!"}
                </div>
              </div>

              <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "🔥 أريد الاستفادة من عرض الجمعة البيضاء المحدود!" : "🔥 I want to take advantage of the LIMITED Black Friday deal!")}`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-red-600 hover:bg-gray-100 text-2xl px-16 py-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-4 font-extrabold mx-auto animate-pulse">
                  <Crown className="w-8 h-8" />
                  {locale === "ar" ? "احجز العرض الآن!" : "CLAIM DEAL NOW!"}
                  <Trophy className="w-8 h-8" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="relative container mx-auto px-6 py-20 md:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-10 w-48 h-48 bg-skyBlue/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-orangeCTA/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-navy/5 via-transparent to-skyBlue/5 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center mb-20 relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-skyBlue to-orangeCTA bg-clip-text text-transparent">
                {t.packagesTitle}
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {locale === "ar" ? "اختر الباقة التي تناسب احتياجاتك واحصل على فيديوهات احترافية بجودة سينمائية" : "Choose the package that suits your needs and get professional videos with cinematic quality"}
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-skyBlue to-orangeCTA mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Package 1 - 30 seconds Basic */}
            <Card className="bg-white text-navy border-2 border-skyBlue/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative group">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-skyBlue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">{t.package30SecBasic}</CardTitle>
                <p className="text-4xl font-extrabold text-orangeCTA">{t.price300EGP}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                  <p className="text-green-300 text-sm font-semibold">
                    {locale === "ar" ? "✨ الأكثر طلباً للمبتدئين" : "✨ Most Popular for Beginners"}
                  </p>
                </div>
                <ul className="list-none space-y-3 text-sm mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {locale === "ar" ? "فيديو إعلاني قصير واضح ومؤثر" : "Short, clear and impactful advertising video"}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {locale === "ar" ? "جودة عالية HD بتقنيات حديثة" : "High quality HD with modern techniques"}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {locale === "ar" ? "تعليق صوتي احترافي باللغة ال��طلوبة" : "Professional voiceover in required language"}
                  </li>
                  <li className="flex items-center justify-center">
                    <Music className="w-5 h-5 text-skyBlue mr-3" />
                    <span className="text-skyBlue font-semibold">
                      {locale === "ar" ? "موسيقى خلفية مناسبة" : "Suitable background music"}
                    </span>
                  </li>
                </ul>
                <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "🚀 أريد البدء بالباقة الأساسية (300 جنيه) + العروض المجانية!" : "🚀 I want to start with the Basic package (300 EGP) + FREE bonuses!")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-skyBlue to-blue-500 hover:from-blue-500 hover:to-skyBlue text-white rounded-lg py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <Rocket className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{locale === "ar" ? "ابد�� النجاح!" : "Start Success!"}</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Package 2 - 60 seconds Standard */}
            <Card className="bg-white text-navy border-2 border-skyBlue/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative group">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">{t.package60SecStandard}</CardTitle>
                <p className="text-4xl font-extrabold text-orangeCTA">{t.price500EGP}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
                  <p className="text-blue-300 text-sm font-semibold">
                    {locale === "ar" ? "🏆 الخيار الذكي للأعمال المتنامية" : "🏆 Smart Choice for Growing Businesses"}
                  </p>
                </div>
                <ul className="list-none space-y-3 text-sm mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {locale === "ar" ? "فيديو إعلاني أطول مع تفاصيل أكثر" : "Longer advertising video with more details"}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {locale === "ar" ? "جودة عالية مع تأثيرات بصرية متق��مة" : "High quality with advanced visual effects"}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {locale === "ar" ? "دعم فني متميز أثناء العمل" : "Premium technical support during work"}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    {locale === "ar" ? "تعديل واحد مجاني إذا احتجت" : "One free revision if needed"}
                  </li>
                  <li className="flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-purple-500 mr-3" />
                    <span className="text-purple-400 font-semibold">
                      {locale === "ar" ? "تأثيرات بصرية إضافية" : "Additional visual effects"}
                    </span>
                  </li>
                </ul>
                <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "أريد طلب باقة 60 ثانية - قياسية (500 جنيه)" : "I want to order the 60 seconds Standard package (500 EGP)")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white rounded-lg py-3 font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t.orderNow}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Package 3 - 30 seconds Premium */}
            <Card className="bg-gradient-to-br from-orangeCTA via-orange-500 to-orange-600 text-white border-2 border-orange-300 shadow-2xl hover:shadow-orangeCTA/25 transition-all duration-300 transform hover:scale-105 relative group">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                {locale === "ar" ? "🔥 مميزة" : "🔥 Premium"}
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">{t.package30SecPremium}</CardTitle>
                <p className="text-4xl font-extrabold text-white">{t.price500EGPPremium}</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="list-none space-y-3 text-sm mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3" />
                    {locale === "ar" ? "فيديو إعلاني قصير" : "Short advertising video"}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3" />
                    {locale === "ar" ? "جودة عالية" : "High quality"}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3" />
                    {t.speakingCharacters}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-200 mr-3" />
                    {t.professionalVoiceover}
                  </li>
                </ul>
                <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "أريد طلب باقة 30 ثانية - مميزة (500 جنيه)" : "I want to order the 30 seconds Premium package (500 EGP)")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-white text-orangeCTA hover:bg-gray-100 rounded-lg py-3 font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                    <Phone className="w-4 h-4" />
                    {t.orderNow}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Package 4 - 60 seconds Premium */}
            <Card className="bg-gradient-to-br from-navy via-blue-800 to-blue-900 text-white border-2 border-skyBlue shadow-2xl hover:shadow-skyBlue/25 transition-all duration-300 transform hover:scale-105 relative group">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-skyBlue to-blue-400 text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                {locale === "ar" ? "⭐ الأفضل" : "⭐ Best"}
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-skyBlue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2">{t.package60SecPremium}</CardTitle>
                <p className="text-4xl font-extrabold text-skyBlue">{t.price700EGP}</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="list-none space-y-3 text-sm mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    {locale === "ar" ? "فيديو إعلاني طويل" : "Long advertising video"}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    {locale === "ar" ? "جودة عالية" : "High quality"}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    {t.speakingCharacters}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    {t.premiumSupport}
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                    {t.oneRevision}
                  </li>
                </ul>
                <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "أريد طلب باقة 60 ثانية - مميزة (700 جنيه)" : "I want to order the 60 seconds Premium package (700 EGP)")}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-skyBlue to-blue-400 hover:from-blue-400 hover:to-skyBlue text-white rounded-lg py-3 font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                    <Phone className="w-4 h-4" />
                    {t.orderNow}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why AI Section */}
        <section className="bg-white text-navy py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.whyAITitle}</h2>
            <p className="text-lg leading-relaxed">{t.whyAIDescription}</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.faqTitle}</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-skyBlue">
              <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline">
                {t.faqQ1}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">{t.faqA1}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-skyBlue">
              <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline">
                {t.faqQ2}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">{t.faqA2}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-skyBlue">
              <AccordionTrigger className="text-lg font-semibold text-white hover:no-underline">
                {t.faqQ3}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">{t.faqA3}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Payment Methods Section */}
        <section className="bg-white text-navy py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.paymentMethodsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-navy text-white border-skyBlue shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-semibold">{t.vodafoneCash}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-lg font-bold text-orangeCTA">{t.whatsappNumber}</CardContent>
              </Card>
              <Card className="bg-navy text-white border-skyBlue shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-semibold">{t.usdtTrc20}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-lg font-bold text-orangeCTA break-all">
                  {t.usdtAddress}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Our Process Section */}
      <section className="bg-gradient-to-r from-skyBlue via-blue-600 to-navy py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              {locale === "ar" ? "🎬 كيف نعمل معك" : "🎬 How We Work With You"}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {locale === "ar" ? "عملية بسيطة وسريعة للحصول على فيديوك الاحترافي" : "Simple and fast process to get your professional video"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-orangeCTA rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === "ar" ? "1. أرسل متطلباتك" : "1. Send Your Requirements"}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {locale === "ar" ? "اتصل بنا عبر الواتساب وأخبرنا عن المنتج أو الخدمة التي تريد الإعلان عنها" : "Contact us via WhatsApp and tell us about the product or service you want to advertise"}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === "ar" ? "2. نصنع الفيديو" : "2. We Create The Video"}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {locale === "ar" ? "فريقنا يعمل على إنشاء فيديوك بأحدث تقنيات الذكاء الاصطناعي وأفضل المعايير" : "Our team works on creating your video with the latest AI technology and best standards"}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === "ar" ? "3. نسلم الفيديو" : "3. We Deliver The Video"}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {locale === "ar" ? "تستلم فيديوك النهائي جاهز للنشر خلال 24-48 ساعة حسب الباقة المختارة" : "You receive your final video ready to publish within 24-48 hours depending on the selected package"}
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg inline-block">
              <h3 className="text-2xl font-extrabold text-white mb-2">
                {locale === "ar" ? "✨ هذا كل شيء!" : "✨ That's It!"}
              </h3>
              <p className="text-lg text-white/90">
                {locale === "ar" ? "لا توجد تعقيدات أو متطلبات إضافية - فقط فيديو احترافي جاهز للاستخدام" : "No complications or additional requirements - just a professional video ready to use"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-red-600 via-pink-600 to-red-700 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-400 text-black px-8 py-4 rounded-full inline-block font-extrabold text-xl mb-8 animate-bounce">
              {locale === "ar" ? "���️ آخر تحذير: العرض ينتهي في 6 ساعات!" : "⚠️ FINAL WARNING: Offer Ends in 6 Hours!"}
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              {locale === "ar" ? "جاهز لإنشاء فيديوك الاحتراف��؟" : "Ready to Create Your Professional Video?"}
            </h2>

            <p className="text-2xl text-white/90 mb-8">
              {locale === "ar" ? "انضم لأكثر من 500 ع��يل راضي عن خدماتنا!" : "Join 500+ satisfied customers!"}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "🔥 نعم! أريد الاستفادة من العرض الأخير قبل انتهائه!" : "🔥 YES! I want to take advantage of the final offer before it expires!")}`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-2xl px-16 py-8 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-4 font-extrabold animate-pulse">
                  <Crown className="w-8 h-8" />
                  {locale === "ar" ? "احجز مكانك الآن!" : "SECURE YOUR SPOT NOW!"}
                  <Rocket className="w-8 h-8" />
                </Button>
              </Link>
            </div>

            <div className="text-white/80 text-lg">
              <p className="mb-2">{locale === "ar" ? "🎬 فيديو احترافي جاهز للنشر في 24-48 ساعة" : "🎬 Professional video ready to publish in 24-48 hours"}</p>
              <p className="font-semibold">{locale === "ar" ? "✨ جودة عالية وخدمة سريعة وموثوقة" : "✨ High quality, fast and reliable service"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <div className="absolute -top-16 -left-20 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap animate-bounce">
            {locale === "ar" ? "🔥 عرض محدود!" : "🔥 Limited Offer!"}
            <div className="absolute bottom-0 left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-500"></div>
          </div>
          <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "🚀 مرحباً! أريد الاستفادة من العرض الحصري المحدود!" : "🚀 Hello! I want to take advantage of the exclusive limited offer!")}`} target="_blank" rel="noopener noreferrer">
            <Button className="group w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-pulse-glow relative">
              <Phone className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
                🔥
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-navy/80 hover:bg-navy text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center backdrop-blur-sm"
        >
          <Rocket className="w-6 h-6 transform hover:-translate-y-1 transition-transform duration-300" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-navy via-blue-900 to-navy text-white py-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-skyBlue via-orangeCTA to-skyBlue"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-skyBlue/10 rounded-full blur-2xl"></div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-orangeCTA/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="text-center md:text-right">
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                <VideofyLogo alt={t.logoAlt} />
              </div>
              <p className="text-white/70 leading-relaxed">
                {locale === "ar"
                  ? "منصة إنشاء الفيديوهات الإعلانية بالذكاء الاصطناعي الرائدة في المنطقة"
                  : "The leading AI-powered advertising video creation platform in the region"
                }
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6 text-skyBlue">
                {locale === "ar" ? "روابط سريعة" : "Quick Links"}
              </h3>
              <div className="space-y-3">
                <a href="#features" className="block text-white/70 hover:text-skyBlue transition-colors duration-300 cursor-pointer">
                  {locale === "ar" ? "المزايا" : "Features"}
                </a>
                <a href="#portfolio" className="block text-white/70 hover:text-skyBlue transition-colors duration-300 cursor-pointer">
                  {locale === "ar" ? "أعمالنا" : "Portfolio"}
                </a>
                <a href="#packages" className="block text-white/70 hover:text-skyBlue transition-colors duration-300 cursor-pointer">
                  {locale === "ar" ? "الباقات" : "Packages"}
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6 text-orangeCTA">
                {locale === "ar" ? "تواصل معنا" : "Contact Us"}
              </h3>
              <div className="space-y-4">
                <Link href={`https://wa.me/${t.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-white/70 hover:text-orangeCTA transition-colors duration-300 group">
                  <Phone className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span>{t.whatsappNumber}</span>
                </Link>
                <div className="flex items-center justify-center md:justify-start gap-3 text-white/70">
                  <span className="text-sm">24/7</span>
                  <span>{locale === "ar" ? "دعم متواصل" : "Available Support"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-skyBlue/50 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/60 text-sm mb-4">
              {t.footerText}
            </p>
            <p className="text-white/40 text-xs">
              {locale === "ar"
                ? "صُنع بـ ❤️ باستخدام الذكاء الاصطناعي"
                : "Made with ❤️ using AI Technology"
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
