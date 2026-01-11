import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '债务优化 | 浦汇网',
  description: '停止以贷养贷，科学规划债务结构，降低月供压力，帮您重塑信用生活，平均减负40%',
};

const services = [
  {
    icon: '📉',
    title: '降低月供',
    description: '通过债务重组，有效降低每月还款压力，平均减负40%',
  },
  {
    icon: '🔄',
    title: '债务整合',
    description: '将多笔负债整合为一笔，简化还款流程',
  },
  {
    icon: '📈',
    title: '信用修复',
    description: '科学规划还款，逐步修复个人征信',
  },
  {
    icon: '🛡️',
    title: '法律援助',
    description: '专业法律团队，处理债务纠纷',
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
    <main className="pt-24 pb-20">
      {/* Hero 区块 */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            债务优化
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            轻装前行
            <br />
            重塑信用生活
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            停止以贷养贷的恶性循环。我们帮您科学规划债务结构，降低还款压力，重建健康的财务状况。
          </p>
        </div>
      </section>

      {/* 核心数据 */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-[40px] p-12 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-3">40%</div>
                <div className="text-gray-400">平均月供减负</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-3">5000+</div>
                <div className="text-gray-400">成功案例</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-3">100%</div>
                <div className="text-gray-400">隐私保护</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务内容 */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">服务内容</h2>
            <p className="text-gray-500">专业团队，为您提供全方位的债务解决方案</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务流程 */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">服务流程</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <div key={item.step} className="relative text-center">
                  {/* 连接线 */}
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
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
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-yellow-50 border border-yellow-100 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-4">⚠️ 温馨提示</h3>
            <p className="text-gray-600 leading-relaxed">
              债务优化不是逃避债务，而是通过合法、合规的方式，与债权方协商更合理的还款方案。
              请保持良好的还款意愿，我们将全力协助您走出困境。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
