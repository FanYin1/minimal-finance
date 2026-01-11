import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

      {/* 装饰圆形 */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 标题 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            准备好开启数字化转型之旅了吗？
          </h2>

          {/* 描述 */}
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            让我们的专业团队为您提供免费咨询，共同探讨最适合您企业的解决方案
          </p>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
            >
              免费咨询
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:400-888-8888"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              400-888-8888
            </a>
          </div>

          {/* 信任标识 */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-primary-100 text-sm mb-4">已服务超过 500+ 企业客户</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              {/* 客户 Logo 占位 */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-24 h-8 bg-white/20 rounded flex items-center justify-center"
                >
                  <span className="text-white text-xs">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
