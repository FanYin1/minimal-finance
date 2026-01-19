const highlights = [
  '资金与负债全景诊断，帮助您看清真实综合成本',
  '基于政策和机构公开规则，提供多种资金路径对比建议',
  '一对一顾问服务，全流程解释说明，帮助您减少信息差',
];

const stats = [
  { value: '专业', label: '咨询团队' },
  { value: '透明', label: '服务流程' },
  { value: '严格', label: '信息安全管理', colSpan: true },
];

export function WhyUs() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-black p-12 text-white md:p-24">
          {/* 抽象圆形装饰 */}
          <div className="absolute right-0 top-0 -mr-32 -mt-32 h-[500px] w-[500px] rounded-full bg-gray-800 opacity-50 blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            {/* 左侧内容 */}
            <div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">为什么选择我们？</h2>
              <p className="mb-10 text-lg font-light leading-relaxed text-gray-400">
                在复杂的金融市场中，我们提供专业的信息咨询服务，帮助您理清资金需求与债务结构，看懂金融产品的真实成本，做出更明智的决策。
              </p>

              {/* 亮点列表 */}
              <ul className="space-y-6">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gray-600">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 右侧数据卡片 */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`rounded-3xl border border-gray-800 bg-gray-900 p-8 ${
                    stat.colSpan ? 'col-span-2' : ''
                  }`}
                >
                  <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
