'use client';

import { useState } from 'react';
import { ConsultModal } from '@/components/ui/ConsultModal';
import { ProcessModal } from '@/components/ui/ProcessModal';

export function Hero() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  return (
    <>
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            {/* 顶部标签 */}
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-gray-500">
              Professional Financial & Debt Advisory Services
            </p>

            {/* 主标题 */}
            <h1 className="mb-8 text-5xl text-text-main md:text-8xl">
              个人与企业
              <br />
              资金规划服务
            </h1>

            {/* 描述 */}
            <p className="mx-auto mb-12 max-w-2xl text-lg font-light leading-relaxed text-gray-500 md:text-xl">
              我们基于您的收入、负债和经营情况，提供资金规划、融资路径设计和债务管理等信息咨询服务，帮助您看清成本与风险，理顺资金安排。
              <br />
              <span className="mt-2 block text-sm text-gray-400">
                本平台不直接放贷，不提供担保服务，所有贷款申请及审批由持牌金融机构独立完成。
              </span>
            </p>

            {/* 按钮组 */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <button onClick={() => setIsConsultOpen(true)} className="btn-minimal">
                开始咨询
              </button>
              <button onClick={() => setIsProcessOpen(true)} className="btn-outline-minimal">
                了解流程
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 咨询弹窗 */}
      <ConsultModal isOpen={isConsultOpen} onClose={() => setIsConsultOpen(false)} />

      {/* 流程弹窗 */}
      <ProcessModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />
    </>
  );
}
