'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="px-4 text-center">
        {/* 404 图形 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
        </div>

        {/* 标题 */}
        <h2 className="mb-4 text-3xl font-bold text-gray-900">页面未找到</h2>

        {/* 描述 */}
        <p className="mx-auto mb-8 max-w-md text-gray-600">
          抱歉，您访问的页面不存在或已被移除。 请检查网址是否正确，或返回首页继续浏览。
        </p>

        {/* 按钮 */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="mr-2 h-5 w-5" />
            返回首页
          </Link>
          <button onClick={() => window.history.back()} className="btn-outline">
            <ArrowLeft className="mr-2 h-5 w-5" />
            返回上页
          </button>
        </div>
      </div>
    </div>
  );
}
