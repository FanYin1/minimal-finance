export function ComplianceNotice() {
  return (
    <section className="bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
              !
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-lg font-bold text-gray-900">【重要声明】</h3>
              <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                <p>
                  上海辰永翊信息服务有限公司仅提供资金规划、债务管理和相关信息咨询服务，
                  <strong className="text-gray-900">
                    不直接发放贷款、不提供任何形式的担保服务
                  </strong>
                  。
                </p>
                <p>
                  任何贷款申请、审批及放款，均由持牌金融机构根据其内部风控标准独立决定。本平台不对贷款审批结果、额度、利率、放款速度作出任何承诺或保证。
                </p>
                <p>
                  本网站展示内容不构成对任何金融产品的推荐或收益承诺，请您根据自身情况谨慎选择并自行承担风险。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
