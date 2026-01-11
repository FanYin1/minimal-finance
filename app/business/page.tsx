import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '企业融资 | 浦汇网',
  description: '专为中小企业设计的融资解决方案，基于税务、发票数据，提供无抵押信用贷款，最高额度500万',
};

const features = [
  {
    icon: '📊',
    title: '税贷融资',
    description: '基于企业纳税记录，无需抵押担保，最高可贷500万',
  },
  {
    icon: '📄',
    title: '发票融资',
    description: '依托发票数据评估，快速获取经营周转资金',
  },
  {
    icon: '🏢',
    title: '经营贷款',
    description: '针对持续经营企业，提供长期稳定的资金支持',
  },
  {
    icon: '⚡',
    title: '极速审批',
    description: '线上提交资料，最快24小时内出审批结果',
  },
];

const requirements = [
  '企业成立满1年以上',
  '有正常的纳税记录或发票流水',
  '企业法人征信良好',
  '有实际经营场所',
];

export default function BusinessFinancePage() {
  return (
    <main className="pt-24 pb-20">
      {/* Hero 区块 */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            企业融资
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            为企业注入
            <br />
            发展动力
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            我们深耕企业金融服务多年，为中小企业提供便捷、高效的融资解决方案，助力企业稳健发展。
          </p>
        </div>
      </section>

      {/* 特点区块 */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心数据 */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-[40px] p-12 md:p-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500万</div>
                <div className="text-gray-400 text-sm">最高额度</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">3.6%</div>
                <div className="text-gray-400 text-sm">年化利率起</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24h</div>
                <div className="text-gray-400 text-sm">最快放款</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-gray-400 text-sm">审批通过率</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 申请条件 */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">申请条件</h2>
            <p className="text-gray-500">
              满足以下基本条件即可申请企业融资
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl"
                >
                  <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
