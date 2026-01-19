import type { Metadata } from 'next';
import { ComplianceNotice } from '@/components/ui/ComplianceNotice';

export const metadata: Metadata = {
  title: '债务管理与还款规划咨询 | 浦汇咨询',
  description: '对多头负债进行结构梳理和成本测算，设计合规还款方案，帮助识别风险条款',
};

const services = [
  {
    icon: '📉',
    title: '负债结构梳理',
    description: '对多头负债进行全面梳理和成本测算，帮助您看清真实债务情况',
  },
  {
    icon: '🔄',
    title: '还款方案设计',
    description: '设计多种合规前提下的还款节奏与顺序建议',
  },
  {
    icon: '📈',
    title: '合同条款解读',
    description: '帮助识别合同中的高成本条款和潜在风险',
  },
  {
    icon: '🛡️',
    title: '风险防范提醒',
    description: '提醒防范违法催收等行为，提供投诉渠道信息',
  },
];

const process = [
  { step: 1, title: '债务诊断', desc: '全面评估您的债务状况' },
  { step: 2, title: '方案制定', desc: '定制个性化优化方案' },
  { step: 3, title: '协商沟通', desc: '与债权方协商还款计划' },
  { step: 4, title: '执行监督', desc: '跟踪执行，确保效果' },
];

export default function DebtOptimizationPage() {
  return (
    <main className="pb-20 pt-24">
      {/* Hero 区块 */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
            债务优化
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            梳理负债
            <br />
            科学规划
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-500 md:text-xl">
            我们帮助您全面梳理债务结构，测算真实成本，设计合理的还款方案，帮助您逐步恢复健康的财务状况。
          </p>
        </div>
      </section>

      {/* 服务优势 */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[40px] bg-gradient-to-br from-gray-900 to-black p-12 text-white md:p-20">
            <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
              <div>
                <div className="mb-3 text-5xl font-bold md:text-6xl">科学</div>
                <div className="text-gray-400">债务梳理与分析</div>
              </div>
              <div>
                <div className="mb-3 text-5xl font-bold md:text-6xl">专业</div>
                <div className="text-gray-400">还款方案设计</div>
              </div>
              <div>
                <div className="mb-3 text-5xl font-bold md:text-6xl">严格</div>
                <div className="text-gray-400">隐私保护机制</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务内容 */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">服务内容</h2>
            <p className="text-gray-500">专业团队，为您提供全方位的债务解决方案</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
                  <span className="text-xl">{service.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">服务流程</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {process.map((item, index) => (
                <div key={item.step} className="relative text-center">
                  {/* 连接线 */}
                  {index < process.length - 1 && (
                    <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-gray-200 md:block" />
                  )}
                  <div className="relative z-10">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-xl font-bold text-white">
                      {item.step}
                    </div>
                    <h4 className="mb-2 font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题提示 */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-3xl border border-yellow-100 bg-yellow-50 p-8">
            <h3 className="mb-4 text-xl font-bold">⚠️ 温馨提示</h3>
            <p className="leading-relaxed text-gray-600">
              债务优化不是逃避债务，而是通过合法、合规的方式，与债权方协商更合理的还款方案。
              请保持良好的还款意愿，我们将全力协助您走出困境。
            </p>
          </div>
        </div>
      </section>

      {/* 合规声明 */}
      <ComplianceNotice />
    </main>
  );
}
