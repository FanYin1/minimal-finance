'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        {/* 404 图形 */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
        </div>

        {/* 标题 */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          页面未找到
        </h2>

        {/* 描述 */}
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          抱歉，您访问的页面不存在或已被移除。
          请检查网址是否正确，或返回首页继续浏览。
        </p>

        {/* 按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-5 h-5 mr-2" />
            返回首页
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回上页
          </button>
        </div>
      </div>
    </div>
  );
}
