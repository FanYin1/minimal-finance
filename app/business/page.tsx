import type { Metadata } from 'next';
import { ComplianceNotice } from '@/components/ui/ComplianceNotice';

export const metadata: Metadata = {
  title: '企业融资规划服务 | 浦汇咨询',
  description:
    '为中小企业提供融资规划与路径设计服务，基于税务、发票等数据评估融资可行性，提供材料准备与优化建议',
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
    <main className="pb-20 pt-24">
      {/* Hero 区块 */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
            企业融资
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            为企业提供
            <br />
            融资规划服务
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-500 md:text-xl">
            我们基于企业经营数据，提供融资路径设计与可行性分析，帮助中小企业看清融资选择，优化申请材料，提高与持牌金融机构的沟通效率。
          </p>
        </div>
      </section>

      {/* 特点区块 */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务优势 */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[40px] bg-black p-12 text-white md:p-20">
            <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
              <div>
                <div className="mb-2 text-4xl font-bold md:text-5xl">专业</div>
                <div className="text-sm text-gray-400">融资规划团队</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold md:text-5xl">全面</div>
                <div className="text-sm text-gray-400">数据评估与分析</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold md:text-5xl">透明</div>
                <div className="text-sm text-gray-400">咨询服务流程</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务适用范围 */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">服务适用范围</h2>
            <p className="text-gray-500">符合以下条件的企业可获得我们的融资规划咨询服务</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {requirements.map((item, index) => (
                <div key={index} className="flex items-center gap-4 rounded-2xl bg-gray-50 p-5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
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
