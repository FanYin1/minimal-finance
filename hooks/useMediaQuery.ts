'use client';

import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '@/lib/constants';

type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * 响应式媒体查询 Hook
 * @param query - CSS 媒体查询字符串 或 断点名称
 */
export function useMediaQuery(query: string | Breakpoint): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // 如果是断点名称，转换为媒体查询
    let mediaQuery = query;
    if (query in BREAKPOINTS) {
      mediaQuery = `(min-width: ${BREAKPOINTS[query as Breakpoint]}px)`;
    }

    const media = window.matchMedia(mediaQuery);
    
    // 初始化
    setMatches(media.matches);

    // 监听变化
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    media.addEventListener('change', listener);
    
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

/**
 * 常用响应式断点 Hooks
 */
export function useIsMobile(): boolean {
  return !useMediaQuery('md');
}

export function useIsTablet(): boolean {
  const isMd = useMediaQuery('md');
  const isLg = useMediaQuery('lg');
  return isMd && !isLg;
}

export function useIsDesktop(): boolean {
  return useMediaQuery('lg');
}
