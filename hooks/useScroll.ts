'use client';

import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
}

/**
 * 监听页面滚动状态的 Hook
 * @param threshold - 判断是否滚动的阈值，默认 10px
 */
export function useScroll(threshold = 10): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      setScrollState({
        scrollY: currentScrollY,
        scrollX: currentScrollX,
        scrollDirection: direction,
        isScrolled: currentScrollY > threshold,
      });

      lastScrollY = currentScrollY;
    };

    // 初始化
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrollState;
}
