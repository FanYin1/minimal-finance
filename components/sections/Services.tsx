const services = [
  {
    icon: '🏢',
    title: '企业融资',
    description:
      '专为中小企业设计。基于税务、发票数据，提供无抵押信用贷款，解决经营周转难题。',
    highlight: { label: '最高额度', value: '500 万' },
  },
  {
    icon: '👤',
    title: '个人信贷',
    description:
      '纯信用、无抵押。依据公积金、社保等个人资质申请，极速审批，灵活还款。',
    highlight: { label: '最低利率', value: '3.6% 起' },
  },
  {
    icon: '⚖️',
    title: '债务优化',
    description:
      '停止以贷养贷。科学规划债务结构，降低月供压力，帮您重塑信用生活。',
    highlight: { label: '平均减负', value: '40%' },
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="minimal-card group">
              {/* 图标 */}
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-black transition-colors duration-500">
                <span className="text-xl group-hover:grayscale group-hover:brightness-200">
                  {service.icon}
                </span>
              </div>

              {/* 标题 */}
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>

              {/* 描述 */}
              <p className="text-gray-500 leading-relaxed mb-8 font-light">
                {service.description}
              </p>

              {/* 底部高亮 */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{service.highlight.label}</span>
                  <span className="font-bold text-lg">{service.highlight.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
