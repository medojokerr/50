#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 فحص ما قبل النشر...\n');

// فحص ملفات البيئة
const envExample = path.join(process.cwd(), '.env.example');
const envLocal = path.join(process.cwd(), '.env.local');

if (!fs.existsSync(envExample)) {
  console.log('❌ ملف .env.example غير موجود');
  process.exit(1);
}

console.log('✅ ملف .env.example موجود');

// فحص ملفات TypeScript الأساسية
const requiredFiles = [
  'app/page.tsx',
  'app/layout.tsx', 
  'lib/i18n.ts',
  'lib/language-context.tsx',
  'components/language-switcher.tsx'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} موجود`);
  } else {
    console.log(`❌ ${file} غير موجود`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n❌ بعض الملفات المطلوبة غير موجودة');
  process.exit(1);
}

// فحص package.json
const packageJson = require('../package.json');
if (!packageJson.dependencies['next']) {
  console.log('❌ Next.js غير موجود في dependencies');
  process.exit(1);
}

console.log('✅ package.json صحيح');

// فحص متغيرات البيئة المطلوبة في الكود
const i18nContent = fs.readFileSync(path.join(process.cwd(), 'lib/i18n.ts'), 'utf8');
if (!i18nContent.includes('NEXT_PUBLIC_WHATSAPP_NUMBER')) {
  console.log('❌ متغير NEXT_PUBLIC_WHATSAPP_NUMBER غير موجود في i18n.ts');
  process.exit(1);
}

console.log('✅ متغيرات البيئة صحيحة في الكود');

console.log('\n🚀 المشروع جاهز للنشر!');
console.log('💡 نصيحة: تأكد من إضافة متغيرات البيئة في Vercel Dashboard');
