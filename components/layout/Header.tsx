'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ConsultModal } from '@/components/ui/ConsultModal';

const navigation = [
  { name: '企业融资', href: '/business' },
  { name: '个人信贷', href: '/personal' },
  { name: '债务优化', href: '/debt' },
  { name: '合规声明', href: '/compliance' },
  { name: '关于我们', href: '/about' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-white/80 shadow-sm backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'
        )}
      >
        <nav className="mx-auto max-w-7xl px-6">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-300',
              isScrolled ? 'h-16' : 'h-20'
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-black" />
              <span className="text-lg font-bold tracking-tight">浦汇咨询</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-10 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-black"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="text-sm font-medium text-gray-900 transition-colors hover:text-black"
              >
                立刻咨询
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={cn(
              'overflow-hidden transition-all duration-300 md:hidden',
              isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            <div className="flex flex-col space-y-2 border-t border-gray-100 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsConsultOpen(true);
                }}
                className="mx-4 mt-2 rounded-full bg-black py-2 text-center font-medium text-white"
              >
                立刻咨询
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* 咨询弹窗 */}
      <ConsultModal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)} />
    </>
  );
}
