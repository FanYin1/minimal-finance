const highlights = [
  '银行级数据加密，隐私绝对安全',
  '不成功不收费，透明无隐形消费',
  '1对1 专属顾问，全程跟踪服务',
];

const stats = [
  { value: '50+', label: '合作机构' },
  { value: '98%', label: '审批通过率' },
  { value: '10亿+', label: '累计协助放款', colSpan: true },
];

export function WhyUs() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black text-white rounded-[40px] p-12 md:p-24 relative overflow-hidden">
          {/* 抽象圆形装饰 */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-800 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* 左侧内容 */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                为什么选择我们？
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                在复杂的金融市场中，我们坚持做最简单的事：为您匹配最适合的资金方，节省您的时间与成本。
              </p>

              {/* 亮点列表 */}
              <ul className="space-y-6">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
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
                  className={`bg-gray-900 p-8 rounded-3xl border border-gray-800 ${
                    stat.colSpan ? 'col-span-2' : ''
                  }`}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
