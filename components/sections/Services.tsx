const services = [
  {
    icon: '🏢',
    title: '企业融资规划服务',
    description:
      '基于企业税务、发票等公开或授权数据，评估融资可行性与风险。为中小企业提供融资路径设计与方案建议，提供材料准备清单与优化建议，便于企业与持牌金融机构沟通。',
    highlight: { label: '服务对象', value: '中小企业' },
  },
  {
    icon: '👤',
    title: '个人资金规划与信贷评估',
    description:
      '基于公积金、社保、收入和现有负债，评估个人信贷可行性。对不同类型的合规信贷产品进行信息解读，帮助梳理申请材料，提高与持牌金融机构沟通效率。',
    highlight: { label: '服务内容', value: '评估与咨询' },
  },
  {
    icon: '⚖️',
    title: '债务管理与还款规划咨询',
    description:
      '对您当前的多头负债进行结构梳理和成本测算，设计多种合规前提下的还款节奏与顺序建议。帮助识别合同中的高成本条款和潜在风险，提醒防范违法暴力催收等行为。',
    highlight: { label: '服务方式', value: '科学规划' },
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="minimal-card group">
              {/* 图标 */}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 transition-colors duration-500 group-hover:bg-black">
                <span className="text-xl group-hover:brightness-200 group-hover:grayscale">
                  {service.icon}
                </span>
              </div>

              {/* 标题 */}
              <h2 className="mb-4 text-2xl font-bold">{service.title}</h2>

              {/* 描述 */}
              <p className="mb-8 font-light leading-relaxed text-gray-500">{service.description}</p>

              {/* 底部高亮 */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{service.highlight.label}</span>
                  <span className="text-lg font-bold">{service.highlight.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
