# Videofy - AI Video Ads Landing Page

A modern, high-performance, and bilingual (Arabic/English) landing page for "Videofy" - an AI-powered video creation service. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## ✨ Features

- **🌐 Bilingual Support**: Seamless Arabic/English switching with RTL support
- **📱 Fully Responsive**: Mobile-first design that scales beautifully
- **🚀 High Performance**: Optimized for Core Web Vitals and fast loading
- **🎨 Modern UI**: Beautiful animations and gradient effects
- **♿ Accessible**: WCAG compliant with semantic HTML
- **🔍 SEO Optimized**: Complete meta tags, sitemap, and robots.txt
- **💻 Developer Friendly**: TypeScript, ESLint, Prettier configured
- **🎯 Conversion Focused**: Clear CTAs and social proof elements

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts (Inter, Cairo, Noto Sans Arabic)

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd videofy-landing
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Development**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
videofy-landing/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Main landing page
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # SEO robots configuration
├── components/
│   ├── sections/         # Page section components
│   ├── ui/              # shadcn/ui components
│   ├── language-switcher.tsx
│   └── videofy-logo.tsx
├── lib/
│   ├── i18n.ts          # Internationalization
│   ├── language-context.tsx
│   └── utils.ts
├── public/              # Static assets
├── .env.example        # Environment variables template
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── .gitignore          # Git ignore rules
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json        # Dependencies and scripts
```

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
# WhatsApp Business Number
NEXT_PUBLIC_WHATSAPP_NUMBER=01062453344

# USDT TRC20 Wallet Address
NEXT_PUBLIC_USDT_ADDRESS=YOUR_USDT_TRC20_ADDRESS_HERE

# Website URL for SEO
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run preview      # Build and preview locally
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  navy: "#1E2A38",
  skyBlue: "#00AEEF", 
  orangeCTA: "#FF6B00",
  // Add your brand colors
}
```

### Content
All text content is centralized in `lib/i18n.ts` for easy management:
```typescript
export const translations = {
  en: { /* English content */ },
  ar: { /* Arabic content */ }
}
```

### Sections
The main page components are modular - add, remove, or reorder sections in `app/page.tsx`.

## 🔧 Performance Optimizations

- **Image Optimization**: WebP/AVIF formats with responsive sizing
- **Code Splitting**: Automatic chunks for optimal loading
- **Font Optimization**: Preloaded Google Fonts with display: swap
- **CSS Optimization**: Purged unused styles in production
- **Bundle Analysis**: Use `npm run analyze` to inspect bundle size

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
- **Netlify**: Works out of the box
- **Cloudflare Pages**: Full compatibility
- **AWS Amplify**: Supports SSG/SSR

## 🔍 SEO Features

- ✅ Optimized meta tags and Open Graph
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ Structured data markup
- ✅ Performance optimization
- ✅ Mobile-friendly design
- ✅ Core Web Vitals optimization

## 🛡️ Security

- Environment variables for sensitive data
- No client-side secrets exposure
- Content Security Policy ready
- XSS protection enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run type-check`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, contact us via WhatsApp at the number configured in your environment variables.

---

**Made with ❤️ using Next.js and AI Technology**
