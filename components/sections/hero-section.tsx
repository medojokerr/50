"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { CheckCircle, Clock, Trophy, Rocket, Gift, Crown, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { locale, t } = useLanguage()

  return (
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
          <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "أريد الاستفادة من العرض الحصري! أريد فيديو إعلاني احترافي" : "I want to take advantage of the exclusive offer! I want a professional advertising video")}`} target="_blank" rel="noopener noreferrer">
            <Button className="group bg-gradient-to-r from-red-500 via-orange-500 to-red-600 hover:from-red-600 hover:via-red-500 hover:to-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-red-500/30 flex items-center gap-4 font-bold relative overflow-hidden animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Rocket className="w-7 h-7 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">{t.orderNow}</span>
              <Gift className="w-6 h-6 transform group-hover:bounce transition-transform duration-300" />
            </Button>
          </Link>

          <div className="text-center">
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm mb-2 animate-bounce">
              {locale === "ar" ? "باقي 23:47:32" : "Only 23:47:32 Left"}
            </div>
            <Link href={`https://wa.me/${t.whatsappNumber}?text=${encodeURIComponent(locale === "ar" ? "أريد مشاهدة أمثلة من أعمالكم" : "I want to see examples of your work")}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group border-2 border-skyBlue text-skyBlue hover:bg-skyBlue hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 font-semibold bg-transparent">
                <Play className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                {locale === "ar" ? "شاهد أعمالنا" : "View Our Work"}
              </Button>
            </Link>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-8 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 text-white">
            <Crown className="w-6 h-6 text-yellow-400 animate-bounce" />
            <span className="font-bold text-lg">
              {locale === "ar" ? "فقط 7 مواعيد متبقية هذا الأسبوع!" : "Only 7 Slots Left This Week!"}
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
  )
}
