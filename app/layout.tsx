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
    default: '浦汇网 - 让资金流动回归简单',
    template: '%s | 浦汇网',
  },
  description: '浦汇网是专业的贷款信息咨询平台，为您提供企业融资、个人信贷、债务优化咨询服务',
  keywords: ['企业融资', '个人信贷', '债务优化', '金融咨询', '浦汇网', '贷款咨询'],
  authors: [{ name: '浦汇网' }],
  creator: '浦汇网',
  publisher: '浦汇网',
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: '/',
    title: '浦汇网 - 让资金流动回归简单',
    description: '浦汇网是专业的贷款信息咨询平台，为您提供企业融资、个人信贷、债务优化咨询服务',
    siteName: '浦汇网',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '浦汇网',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
