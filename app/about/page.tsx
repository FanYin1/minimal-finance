import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们 | 浦汇网',
  description: '浦汇网是专业的贷款信息咨询平台，致力于为个人和企业提供最优质的金融信息服务',
};

const values = [
  {
    icon: '🎯',
    title: '专业专注',
    description: '深耕金融咨询领域，只做我们擅长的事',
  },
  {
    icon: '🤝',
    title: '诚信为本',
    description: '不成功不收费，透明公开无隐形消费',
  },
  {
    icon: '⚡',
    title: '高效服务',
    description: '简化流程，让资金流动回归简单',
  },
  {
    icon: '🛡️',
    title: '安全可靠',
    description: '银行级数据加密，保护您的隐私安全',
  },
];

const milestones = [
  { year: '2018', event: '公司成立，开启金融咨询服务' },
  { year: '2019', event: '合作机构突破20家' },
  { year: '2020', event: '累计服务客户超10000人' },
  { year: '2021', event: '获得金融科技创新奖' },
  { year: '2022', event: '累计协助放款突破10亿' },
  { year: '2023', event: '合作机构突破50家' },
];

export default function AboutPage() {
  return (
    <main className="pb-20 pt-24">
      {/* Hero 区块 */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
            关于我们
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            让资金流动
            <br />
            回归简单
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-500 md:text-xl">
            浦汇网是专业的贷款信息咨询平台，我们致力于连接资金需求方与优质金融机构，
            为您提供最高效、最适合的金融解决方案。
          </p>
        </div>
      </section>

      {/* 公司介绍 */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">我们是谁</h2>
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  浦汇网成立于2018年，是一家专注于金融信息咨询服务的科技公司。
                  我们通过整合银行、消费金融公司、信托等多家持牌金融机构资源，
                  为个人和企业客户提供专业的融资咨询服务。
                </p>
                <p>
                  我们的团队由资深金融从业者和技术专家组成，深刻理解客户的资金需求，
                  能够快速匹配最适合的金融产品，帮助客户节省时间和成本。
                </p>
                <p>
                  我们坚持"不成功不收费"的服务理念，已累计协助超过50000名客户
                  成功获得融资，赢得了良好的市场口碑。
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-black p-12 text-white">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="mb-2 text-4xl font-bold">50+</div>
                  <div className="text-sm text-gray-400">合作金融机构</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">50000+</div>
                  <div className="text-sm text-gray-400">服务客户</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">10亿+</div>
                  <div className="text-sm text-gray-400">累计放款</div>
                </div>
                <div>
                  <div className="mb-2 text-4xl font-bold">98%</div>
                  <div className="text-sm text-gray-400">客户满意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">核心价值观</h2>
            <p className="text-gray-500">我们始终坚守的服务理念</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 text-center transition-all duration-300 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">发展历程</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {milestones.map((item, index) => (
                <div key={item.year} className="flex items-center gap-6 rounded-2xl bg-white p-4">
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                    <span className="text-xl font-bold">{item.year}</span>
                  </div>
                  <p className="text-lg text-gray-700">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
