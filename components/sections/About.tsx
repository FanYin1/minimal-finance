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
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* 左侧图片区 */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {/* 图片占位 */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-600">
                    <span className="text-3xl font-bold text-white">P</span>
                  </div>
                  <p className="text-primary-600">公司形象图片</p>
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-2xl bg-secondary-100" />

            {/* 数据卡片 */}
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold text-primary-600">10+</div>
                <div className="text-sm text-gray-600">
                  年专注
                  <br />
                  企业服务
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容区 */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                关于我们
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                专业可靠的<span className="text-gradient">企业合作伙伴</span>
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-gray-600">
              Puhui 成立于2015年，是一家专注于企业数字化转型的科技服务公司。
              我们致力于通过先进的技术和专业的服务，帮助企业实现业务创新和效率提升。
            </p>

            <p className="leading-relaxed text-gray-600">
              多年来，我们已成功服务超过500家企业客户，覆盖金融、制造、零售、
              医疗等多个行业，积累了丰富的项目经验和行业洞察。
            </p>

            {/* 亮点列表 */}
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-500" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* 按钮 */}
            <Link href="/about" className="btn-primary group inline-flex">
              了解更多
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
