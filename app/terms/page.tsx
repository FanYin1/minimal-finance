import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '服务条款 | 浦汇网',
  description: '浦汇网服务条款与用户协议',
};

export default function TermsPage() {
  return (
    <main className="pb-20 pt-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">服务条款</h1>
        <p className="mb-8 text-gray-500">最后更新日期：2026年1月11日</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-xl font-bold">1. 服务说明</h2>
            <p className="leading-relaxed text-gray-600">
              浦汇网是一家贷款信息咨询平台，为用户提供金融产品信息咨询服务。
              我们本身不是放贷机构，不直接发放贷款。我们通过整合多家合作金融机构的产品信息，
              帮助用户了解和对比不同的贷款方案。
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">2. 用户资格</h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              使用我们的服务，您需要满足以下条件：
            </p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>年满18周岁的中国公民</li>
              <li>具有完全民事行为能力</li>
              <li>提供真实、准确的个人信息</li>
              <li>同意本服务条款和隐私条例</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">3. 服务内容</h2>
            <p className="mb-4 leading-relaxed text-gray-600">我们提供的服务包括但不限于：</p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>贷款产品信息咨询</li>
              <li>资质评估与产品推荐</li>
              <li>申请材料指导</li>
              <li>申请流程协助</li>
              <li>后续跟踪服务</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">4. 重要声明</h2>
            <div className="rounded-2xl border border-yellow-100 bg-yellow-50 p-6 text-gray-700">
              <ul className="space-y-3">
                <li>• 浦汇网是贷款信息咨询平台，不是放贷机构</li>
                <li>• 产品信息来自合作金融机构，仅供参考</li>
                <li>• 我们可能从成功推荐中获取佣金</li>
                <li>• 贷款需谨慎，请根据自身能力合理借贷</li>
                <li>• 最终贷款审批由金融机构决定，我们不承诺审批结果</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">5. 用户责任</h2>
            <p className="mb-4 leading-relaxed text-gray-600">使用我们的服务时，您同意：</p>
            <ul className="list-inside list-disc space-y-2 text-gray-600">
              <li>提供真实、完整、准确的个人信息</li>
              <li>及时更新您的信息以保持准确性</li>
              <li>不从事任何违法或欺诈行为</li>
              <li>不滥用我们的服务</li>
              <li>妥善保管您的账户信息</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">6. 费用说明</h2>
            <p className="leading-relaxed text-gray-600">
              我们的咨询服务采用"不成功不收费"模式。只有在您成功获得贷款后，
              我们才会收取一定比例的服务费用。具体费用标准将在服务前向您明确说明。
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">7. 免责条款</h2>
            <p className="leading-relaxed text-gray-600">以下情况我们不承担责任：</p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
              <li>因用户提供虚假信息导致的任何损失</li>
              <li>金融机构的审批决定</li>
              <li>不可抗力因素导致的服务中断</li>
              <li>用户违反本条款导致的任何后果</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">8. 知识产权</h2>
            <p className="leading-relaxed text-gray-600">
              我们网站的所有内容，包括但不限于文字、图片、标识、设计等，
              均为我们或相关权利人的知识产权，受法律保护。未经授权不得使用。
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">9. 条款修改</h2>
            <p className="leading-relaxed text-gray-600">
              我们保留随时修改本服务条款的权利。修改后的条款将在网站公布，
              继续使用我们的服务即视为接受修改后的条款。
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">10. 争议解决</h2>
            <p className="leading-relaxed text-gray-600">
              本条款的解释和执行适用中华人民共和国法律。 因本服务产生的争议，双方应友好协商解决；
              协商不成的，可向我们所在地有管辖权的人民法院提起诉讼。
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-bold">11. 联系我们</h2>
            <p className="leading-relaxed text-gray-600">
              如您对本服务条款有任何疑问，请联系我们：
            </p>
            <p className="mt-4 text-gray-600">
              电话：400-888-8888
              <br />
              邮箱：service@puhui.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
