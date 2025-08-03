# دليل النشر السريع - Videofy

## المتطلبات الأساسية
- Node.js 18+ 
- npm أو yarn
- حساب Vercel (مجاني)

## خطوات النشر على Vercel

### 1. التحضير للنشر
```bash
# تأكد من تثبيت الباكجات
npm install

# فحص البناء محلياً (اختياري)
npm run build
```

### 2. رفع الكود إلى GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 3. النشر على Vercel

#### الطريقة الأولى: Vercel CLI
```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel

# اتبع التعليمات في Terminal
```

#### الطريقة الثانية: Vercel Dashboard
1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول بحساب GitHub
3. اضغط "New Project"
4. اختر repository المطلوب
5. اضغط "Deploy"

### 4. إعداد متغيرات البيئة في Vercel
في لوحة تحكم Vercel:
1. اذهب إلى Project Settings
2. اختر "Environment Variables"
3. أضف هذه المتغيرات:

```
NEXT_PUBLIC_WHATSAPP_NUMBER = 01062453344
NEXT_PUBLIC_USDT_ADDRESS = YOUR_USDT_ADDRESS
NEXT_PUBLIC_SITE_URL = https://your-domain.vercel.app
```

### 5. إعداد Domain مخصص (اختياري)
1. في Project Settings اختر "Domains"
2. أضف domain الخاص بك
3. اتبع تعليمات DNS

## إعدادات إضافية

### تحسين الأداء
- تم تفعيل ضغط الصور تلقائياً
- تم تحسين CSS و JavaScript
- تم إعداد Headers الأمان

### مراقبة الأداء
- استخدم Vercel Analytics (مجاني)
- راقب Core Web Vitals
- تحقق من Lighthouse Score

### تحديث المحتوى
- غير النصوص في `lib/i18n.ts`
- حدث رقم الواتساب في متغيرات البيئة
- عدل عنوان USDT في متغيرات البيئة

## استكشاف الأخطاء

### خطأ Build Failed
```bash
# تأكد من صحة الكود
npm run type-check

# تأكد من تث��يت الباكجات
npm install

# جرب البناء محلياً
npm run build
```

### خطأ Environment Variables
- تأكد من إضافة جميع المتغيرات المطلوبة
- تأكد من بدء المتغيرات بـ `NEXT_PUBLIC_`
- أعد النشر بعد إضافة المتغيرات

### مشاكل الخطوط العربية
- تأكد من تحميل خطوط Google Fonts
- تحقق من إعداد RTL في CSS

## الدعم
للمساعدة في النشر:
- راجع [Vercel Docs](https://vercel.com/docs)
- تحقق من [Next.js Deployment](https://nextjs.org/docs/deployment)

## أمان الموقع
- ✅ HTTPS تلقائي
- ✅ Headers الأمان 
- ✅ حماية XSS
- ✅ Content Security Policy

**وقت النشر المتوقع: 2-5 دقائق** ⚡
