import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '个人信贷 | 浦汇网',
  description: '纯信用无抵押个人贷款，依据公积金、社保等个人资质申请，极速审批，灵活还款，最低利率3.6%起',
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
  { title: '无需抵押', desc: '纯信用贷款，无需任何抵押物' },
  { title: '极速审批', desc: '线上提交，最快10分钟出结果' },
  { title: '灵活还款', desc: '等额本息、先息后本任选' },
  { title: '专属服务', desc: '1对1顾问全程跟踪服务' },
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
            借款更简单
            <br />
            生活更自在
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            无需抵押，极速放款。我们根据您的个人资质，为您匹配最优的贷款方案。
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
                    <div className="text-2xl font-bold">{product.amount}</div>
                    <div className="text-sm text-gray-400">最高额度</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-400">年化利率</span>
                  <span className="text-lg font-bold ml-2">{product.rate}</span>
                </div>
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
    </main>
  );
}
