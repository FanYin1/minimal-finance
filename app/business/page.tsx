import type { Metadata } from 'next';
import { ComplianceNotice } from '@/components/ui/ComplianceNotice';

export const metadata: Metadata = {
  title: '企业融资规划服务 | 浦汇咨询',
  description: '为中小企业提供融资规划与路径设计服务，基于税务、发票等数据评估融资可行性，提供材料准备与优化建议',
};

const features = [
  {
    icon: '📊',
    title: '税务数据评估',
    description: '基于企业纳税记录，评估融资可行性与风险，提供路径建议',
  },
  {
    icon: '📄',
    title: '发票流水分析',
    description: '依托发票数据进行经营情况评估，设计融资方案',
  },
  {
    icon: '🏢',
    title: '融资路径设计',
    description: '针对企业情况，提供多种融资渠道对比与分析',
  },
  {
    icon: '⚡',
    title: '材料优化建议',
    description: '提供申请材料清单与优化建议，提高沟通效率',
  },
];

const requirements = [
  '企业成立并持续经营中',
  '有纳税记录或发票流水可供分析',
  '企业法人愿意提供相关资料',
  '有明确的融资需求与规划',
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
            为企业提供
            <br />
            融资规划服务
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            我们基于企业经营数据，提供融资路径设计与可行性分析，帮助中小企业看清融资选择，优化申请材料，提高与持牌金融机构的沟通效率。
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

      {/* 服务优势 */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black text-white rounded-[40px] p-12 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">专业</div>
                <div className="text-gray-400 text-sm">融资规划团队</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">全面</div>
                <div className="text-gray-400 text-sm">数据评估与分析</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">透明</div>
                <div className="text-gray-400 text-sm">咨询服务流程</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务适用范围 */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">服务适用范围</h2>
            <p className="text-gray-500">
              符合以下条件的企业可获得我们的融资规划咨询服务
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

      {/* 合规声明 */}
      <ComplianceNotice />
    </main>
  );
}
