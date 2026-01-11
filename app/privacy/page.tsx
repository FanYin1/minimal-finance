import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '隐私条例 | 浦汇网',
  description: '浦汇网隐私保护政策',
};

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">隐私条例</h1>
        <p className="text-gray-500 mb-8">最后更新日期：2026年1月11日</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">1. 引言</h2>
            <p className="text-gray-600 leading-relaxed">
              浦汇网（以下简称"我们"）非常重视用户的隐私保护。本隐私条例旨在向您说明我们如何收集、使用、存储和保护您的个人信息。
              请您在使用我们的服务前仔细阅读本隐私条例。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. 信息收集</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              我们可能收集以下类型的信息：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>个人身份信息：姓名、身份证号、手机号码等</li>
              <li>财务信息：收入情况、负债情况、信用记录等</li>
              <li>设备信息：设备型号、操作系统、IP地址等</li>
              <li>使用信息：浏览记录、点击行为、使用时长等</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. 信息使用</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              我们收集的信息将用于以下目的：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>为您提供贷款咨询服务</li>
              <li>匹配适合您的金融产品</li>
              <li>与合作金融机构共享必要信息以完成服务</li>
              <li>改善我们的服务质量</li>
              <li>遵守法律法规要求</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. 信息存储与保护</h2>
            <p className="text-gray-600 leading-relaxed">
              我们采用银行级加密技术保护您的个人信息。所有敏感数据均经过加密处理，
              并存储在安全的服务器上。我们会定期审查信息安全措施，确保您的数据安全。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. 信息共享</h2>
            <p className="text-gray-600 leading-relaxed">
              除以下情况外，我们不会向第三方共享您的个人信息：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
              <li>获得您的明确同意</li>
              <li>为完成贷款咨询服务而必须与合作金融机构共享</li>
              <li>法律法规要求或政府机关依法要求</li>
              <li>保护我们的合法权益</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. 您的权利</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              您对个人信息享有以下权利：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>查询、访问您的个人信息</li>
              <li>更正或更新您的个人信息</li>
              <li>删除您的个人信息</li>
              <li>撤回授权同意</li>
              <li>注销账户</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. Cookie使用</h2>
            <p className="text-gray-600 leading-relaxed">
              我们的网站使用Cookie技术来改善用户体验、分析网站使用情况。
              您可以通过浏览器设置管理Cookie偏好。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">8. 条例更新</h2>
            <p className="text-gray-600 leading-relaxed">
              我们可能会不时更新本隐私条例。更新后的条例将在本页面发布，
              重大变更时我们会通过适当方式通知您。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">9. 联系我们</h2>
            <p className="text-gray-600 leading-relaxed">
              如您对本隐私条例有任何疑问或需要行使您的权利，请通过以下方式联系我们：
            </p>
            <p className="text-gray-600 mt-4">
              电话：400-888-8888<br />
              邮箱：privacy@puhui.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
