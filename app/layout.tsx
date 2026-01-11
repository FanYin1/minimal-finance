import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: '至简金融 - 让资金流动回归简单',
    template: '%s | 至简金融',
  },
  description: '我们剥离了繁琐的中间环节，为您提供最直接、最高效的企业融资与个人信贷咨询服务',
  keywords: ['企业融资', '个人信贷', '债务优化', '金融咨询', '至简金融'],
  authors: [{ name: 'Minimal Finance Team' }],
  creator: '至简金融',
  publisher: '至简金融',
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    title: '至简金融 - 让资金流动回归简单',
    description: '我们剥离了繁琐的中间环节，为您提供最直接、最高效的企业融资与个人信贷咨询服务',
    siteName: '至简金融',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '至简金融',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Puhui - 专业企业解决方案',
    description: 'Puhui 提供专业的企业级解决方案，助力企业数字化转型',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
