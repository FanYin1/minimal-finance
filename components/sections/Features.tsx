import { Zap, Shield, TrendingUp, Users, Globe, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '高效敏捷',
    description: '采用敏捷开发方法论，快速响应需求变化，缩短项目交付周期。',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Shield,
    title: '安全可靠',
    description: '企业级安全架构，多层防护机制，确保数据安全与业务连续性。',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: TrendingUp,
    title: '持续增长',
    description: '数据驱动的增长策略，帮助企业实现可持续的业务增长。',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Users,
    title: '专业团队',
    description: '拥有资深技术专家和行业顾问，提供一站式解决方案。',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Globe,
    title: '全球视野',
    description: '融合国际先进理念与本土实践经验，打造适合企业的方案。',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: Clock,
    title: '7×24服务',
    description: '全天候技术支持与客户服务，确保业务平稳运行。',
    color: 'bg-cyan-100 text-cyan-600',
  },
];

export function Features() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container-custom">
        {/* 标题区 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            我们的优势
          </span>
          <h2 className="section-title mt-4">
            为什么选择 <span className="text-gradient">Puhui</span>
          </h2>
          <p className="section-subtitle mt-4">
            我们以专业的技术能力和丰富的行业经验，为企业提供全方位的数字化解决方案
          </p>
        </div>

        {/* 特性卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card group hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 图标 */}
              <div
                className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              {/* 标题 */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* 描述 */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
