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
    <main className="pt-24 pb-20">
      {/* Hero 区块 */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            关于我们
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            让资金流动
            <br />
            回归简单
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            浦汇网是专业的贷款信息咨询平台，我们致力于连接资金需求方与优质金融机构，
            为您提供最高效、最适合的金融解决方案。
          </p>
        </div>
      </section>

      {/* 公司介绍 */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                我们是谁
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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
            <div className="bg-black rounded-3xl p-12 text-white">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-gray-400 text-sm">合作金融机构</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50000+</div>
                  <div className="text-gray-400 text-sm">服务客户</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10亿+</div>
                  <div className="text-gray-400 text-sm">累计放款</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-gray-400 text-sm">客户满意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心价值观</h2>
            <p className="text-gray-500">我们始终坚守的服务理念</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">发展历程</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className="flex items-center gap-6 p-4 bg-white rounded-2xl"
                >
                  <div className="w-20 h-20 bg-black text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold">{item.year}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
