import type { Metadata } from 'next';
import { ComplianceNotice } from '@/components/ui/ComplianceNotice';

export const metadata: Metadata = {
  title: '个人资金规划与信贷评估 | 浦汇咨询',
  description: '基于公积金、社保、收入和现有负债，评估个人信贷可行性，提供材料梳理与产品解读',
};

const products = [
  {
    icon: '🏠',
    title: '公积金贷',
    description: '有公积金即可申请，额度高达50万，利率优惠',
    rate: '3.6% 起',
    amount: '50万',
  },
  {
    icon: '💼',
    title: '社保贷',
    description: '缴纳社保满6个月即可，审批快速便捷',
    rate: '4.2% 起',
    amount: '30万',
  },
  {
    icon: '💳',
    title: '保单贷',
    description: '寿险保单抵押，无需退保即可获取资金',
    rate: '4.5% 起',
    amount: '20万',
  },
  {
    icon: '📱',
    title: '消费贷',
    description: '日常消费周转，最快10分钟放款',
    rate: '5.0% 起',
    amount: '20万',
  },
];

const advantages = [
  { title: '全面评估', desc: '基于收入、负债、资产的全面分析' },
  { title: '产品解读', desc: '帮助您看懂产品条款和真实成本' },
  { title: '材料梳理', desc: '提供申请材料清单与优化建议' },
  { title: '专属咨询', desc: '1对1 顾问服务，解答您的所有疑问' },
];

export default function PersonalLoanPage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero 区块 */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            个人信贷
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            看清成本
            <br />
            明智决策
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            基于您的个人资质，提供信贷可行性评估、产品对比分析和材料梳理建议，帮助您看懂真实成本，做出更合理的选择。
          </p>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black transition-colors">
                    <span className="text-2xl group-hover:grayscale group-hover:brightness-200">
                      {product.icon}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-600">{product.highlight}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 优势 */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的优势</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {advantages.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <div className="w-3 h-3 bg-black rounded-full" />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合规声明 */}
      <ComplianceNotice />
    </main>
  );
}
