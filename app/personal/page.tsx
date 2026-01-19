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
    <main className="pb-20 pt-24">
      {/* Hero 区块 */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
            个人信贷
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            看清成本
            <br />
            明智决策
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-500 md:text-xl">
            基于您的个人资质，提供信贷可行性评估、产品对比分析和材料梳理建议，帮助您看懂真实成本，做出更合理的选择。
          </p>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-colors group-hover:bg-black">
                    <span className="text-2xl group-hover:brightness-200 group-hover:grayscale">
                      {product.icon}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-600">{product.highlight}</div>
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold">{product.title}</h3>
                <p className="leading-relaxed text-gray-500">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 优势 */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">我们的优势</h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <div className="h-3 w-3 rounded-full bg-black" />
                </div>
                <h4 className="mb-2 font-bold">{item.title}</h4>
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
