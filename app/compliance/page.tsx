import { ComplianceNotice } from '@/components/ui/ComplianceNotice';

export default function CompliancePage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">法律与合规说明</h1>
          <p className="text-gray-500 text-lg">
            关于我们的服务性质、合规声明及投诉处理方式
          </p>
        </div>

        {/* 合规声明卡片 */}
        <ComplianceNotice />

        {/* 详细说明部分 */}
        <div className="mt-12 space-y-12">
          {/* 公司主体信息 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">一、公司主体信息</h2>
            <div className="space-y-3 text-gray-600">
              <p><strong className="text-gray-900">公司名称：</strong>上海辰永翊信息服务有限公司</p>
              <p><strong className="text-gray-900">统一社会信用代码：</strong>91310115MADN0D0E4P</p>
              <p><strong className="text-gray-900">经营范围：</strong>信息咨询服务、社会经济咨询服务、财务咨询服务、企业管理咨询、会务服务、数据处理和存储支持服务。</p>
              <p className="text-sm text-gray-500 mt-4">
                （依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）
              </p>
            </div>
          </section>

          {/* 服务性质说明 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">二、服务性质说明</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">我们只做：</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li>资金规划与融资路径设计咨询</li>
                  <li>个人负债与债务结构诊断</li>
                  <li>金融产品合同条款解读</li>
                  <li>风险提示与防范建议</li>
                  <li>申请材料梳理与优化建议</li>
                </ul>
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-gray-900 mb-2">我们不做：</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><strong>不直接放贷：</strong>我们不是金融机构，没有放贷资质</li>
                  <li><strong>不做撮合中介：</strong>不代理任何金融机构签约或收取息费</li>
                  <li><strong>不提供担保：</strong>不为任何贷款提供担保服务</li>
                  <li><strong>不承诺结果：</strong>不对任何利率、额度、审批通过率做承诺</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 合作机构声明 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">三、合作机构声明</h2>
            <div className="space-y-3 text-gray-600">
              <p>
                如本平台涉及向持牌金融机构推荐客户的合作关系，我们承诺：
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>仅与具有合法资质的持牌金融机构合作</li>
                <li>所有贷款申请、审批及放款均由持牌金融机构独立完成</li>
                <li>不以任何形式向借款人收取利息或费用</li>
                <li>合作机构的具体息费标准由其自行披露，我们仅提供信息咨询</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                注：本平台可能从成功推荐中获取服务费，但该费用由金融机构支付，不向用户额外收取。
              </p>
            </div>
          </section>

          {/* 信息安全 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">四、信息安全与隐私保护</h2>
            <div className="space-y-3 text-gray-600">
              <p>
                我们严格遵守《个人信息保护法》《数据安全法》等相关法律法规，采取以下措施保护您的信息安全：
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>采用 SSL 加密传输技术保护数据传输安全</li>
                <li>建立严格的内部权限管理制度</li>
                <li>定期进行安全审计与漏洞扫描</li>
                <li>未经您明确授权，不向第三方提供您的个人信息</li>
              </ul>
              <p className="mt-4">
                详细的隐私政策请查看：<a href="/privacy" className="text-black underline hover:no-underline">隐私条例</a>
              </p>
            </div>
          </section>

          {/* 投诉与纠纷处理 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">五、投诉与纠纷处理</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                如您在使用我们的服务过程中遇到任何问题，或对我们的服务有任何投诉建议，请通过以下方式联系我们：
              </p>
              <div className="bg-gray-50 p-6 rounded-xl space-y-3">
                <p><strong className="text-gray-900">投诉邮箱：</strong>compliance@puhui.com</p>
                <p><strong className="text-gray-900">投诉电话：</strong>400-XXX-XXXX（工作日 9:00-18:00）</p>
                <p><strong className="text-gray-900">公司地址：</strong>上海市浦东新区XXX路XXX号</p>
              </div>
              <p className="mt-4">
                我们承诺：
              </p>
              <ul className="space-y-2 ml-6 list-disc">
                <li>收到投诉后 2 个工作日内响应</li>
                <li>一般投诉在 7 个工作日内给出处理意见</li>
                <li>复杂投诉在 15 个工作日内完成调查并反馈</li>
              </ul>
            </div>
          </section>

          {/* 免责声明 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">六、免责声明</h2>
            <div className="space-y-3 text-gray-600">
              <ul className="space-y-2 ml-6 list-disc">
                <li>本网站提供的所有信息仅供参考，不构成任何投资建议或收益承诺</li>
                <li>任何金融决策应由您根据自身情况谨慎判断，我们不承担因此产生的任何损失</li>
                <li>第三方金融机构的产品条款、费率等信息可能发生变化，具体以该机构实际披露为准</li>
                <li>因不可抗力、网络故障、黑客攻击等原因导致的服务中断或信息泄露，我们不承担责任</li>
              </ul>
            </div>
          </section>

          {/* 法律适用 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">七、法律适用与争议解决</h2>
            <div className="space-y-3 text-gray-600">
              <p>
                本声明及您使用我们服务的行为受中华人民共和国法律管辖。
              </p>
              <p>
                如发生任何争议，双方应首先通过友好协商解决；协商不成的，任何一方均可向公司所在地有管辖权的人民法院提起诉讼。
              </p>
            </div>
          </section>

          {/* 更新说明 */}
          <section className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-500">
              本声明最后更新时间：2026年1月19日
            </p>
            <p className="text-sm text-gray-500 mt-2">
              我们保留在法律允许范围内随时修改本声明的权利，修改后的版本将在本页面公布
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
