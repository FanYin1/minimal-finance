import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

      {/* 装饰圆形 */}
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* 标题 */}
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            准备好开启数字化转型之旅了吗？
          </h2>

          {/* 描述 */}
          <p className="mx-auto mb-10 max-w-2xl text-xl text-primary-100">
            让我们的专业团队为您提供免费咨询，共同探讨最适合您企业的解决方案
          </p>

          {/* 按钮组 */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary-600 transition-colors hover:bg-gray-100"
            >
              免费咨询
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:400-888-8888"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="mr-2 h-5 w-5" />
              400-888-8888
            </a>
          </div>

          {/* 信任标识 */}
          <div className="mt-12 border-t border-white/20 pt-8">
            <p className="mb-4 text-sm text-primary-100">已服务超过 500+ 企业客户</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              {/* 客户 Logo 占位 */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-24 items-center justify-center rounded bg-white/20"
                >
                  <span className="text-xs text-white">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
