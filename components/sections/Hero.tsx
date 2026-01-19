'use client';

import { useState } from 'react';
import { ConsultModal } from '@/components/ui/ConsultModal';
import { ProcessModal } from '@/components/ui/ProcessModal';

export function Hero() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* 顶部标签 */}
            <p className="text-sm font-medium tracking-widest text-gray-500 mb-6 uppercase">
              Professional Financial & Debt Advisory Services
            </p>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-8xl text-text-main mb-8">
              个人与企业
              <br />
              资金规划服务
            </h1>

            {/* 描述 */}
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              我们基于您的收入、负债和经营情况，提供资金规划、融资路径设计和债务管理等信息咨询服务，帮助您看清成本与风险，理顺资金安排。<br/>
              <span className="text-sm text-gray-400 mt-2 block">本平台不直接放贷，不提供担保服务，所有贷款申请及审批由持牌金融机构独立完成。</span>
            </p>

            {/* 按钮组 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="btn-minimal"
              >
                开始咨询
              </button>
              <button
                onClick={() => setIsProcessOpen(true)}
                className="btn-outline-minimal"
              >
                了解流程
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 咨询弹窗 */}
      <ConsultModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />

      {/* 流程弹窗 */}
      <ProcessModal
        isOpen={isProcessOpen}
        onClose={() => setIsProcessOpen(false)}
      />
    </>
  );
}
