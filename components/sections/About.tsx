import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  '10年以上行业深耕经验',
  '服务超过500家企业客户',
  '100+资深技术专家团队',
  '覆盖金融、制造、零售等多个行业',
];

export function About() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 左侧图片区 */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* 图片占位 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">P</span>
                  </div>
                  <p className="text-primary-600">公司形象图片</p>
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary-100 rounded-2xl -z-10" />

            {/* 数据卡片 */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">
                  年专注<br />企业服务
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容区 */}
          <div className="space-y-8">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                关于我们
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                专业可靠的<span className="text-gradient">企业合作伙伴</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Puhui 成立于2015年，是一家专注于企业数字化转型的科技服务公司。
              我们致力于通过先进的技术和专业的服务，帮助企业实现业务创新和效率提升。
            </p>

            <p className="text-gray-600 leading-relaxed">
              多年来，我们已成功服务超过500家企业客户，覆盖金融、制造、零售、
              医疗等多个行业，积累了丰富的项目经验和行业洞察。
            </p>

            {/* 亮点列表 */}
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* 按钮 */}
            <Link href="/about" className="btn-primary inline-flex group">
              了解更多
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
