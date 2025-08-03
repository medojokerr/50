# نشر مشروع Videofy - دليل سريع

## 🚀 نشر سريع على Vercel (5 دقائق)

### 1. رفع الكود
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. ربط مع Vercel
- اذهب إلى [vercel.com](https://vercel.com)
- سجل دخول بـ GitHub
- اضغط "New Project"
- اختر المشروع واضغط "Deploy"

### 3. إضافة متغيرات البيئة
في Vercel Dashboard → Project Settings → Environment Variables:

```
NEXT_PUBLIC_WHATSAPP_NUMBER = 01062453344
NEXT_PUBLIC_USDT_ADDRESS = TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE
NEXT_PUBLIC_SITE_URL = https://your-project.vercel.app
```

### 4. إعادة النشر
بعد إضافة المتغيرات، اضغط "Redeploy" في Vercel

## ✅ فحص المشروع محلياً
```bash
npm run pre-deploy
```

## 🛠️ تطوير محلي
```bash
npm install
npm run dev
```

## 📱 تخصيص المحتوى
- **رقم الواتساب**: غير `NEXT_PUBLIC_WHATSAPP_NUMBER`
- **عنوان USDT**: غير `NEXT_PUBLIC_USDT_ADDRESS` 
- **النصوص**: عدل في `lib/i18n.ts`

## 🆘 حل المشاكل
- **Build فشل**: تأكد من متغيرات البيئة
- **خطوط عربية**: تحقق من اتصال الإنترنت للخطوط
- **WhatsApp لا يعمل**: تأكد من صحة رقم الهاتف

---
**وقت النشر: 2-5 دقائق ⚡**
