'use client';

import { Modal } from './Modal';

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const processSteps = [
  {
    step: 1,
    title: '在线咨询',
    description: '填写基本信息，专属顾问1对1沟通了解您的需求',
    icon: '📋',
  },
  {
    step: 2,
    title: '方案定制',
    description: '根据您的资质条件，匹配最优产品方案',
    icon: '📊',
  },
  {
    step: 3,
    title: '资料准备',
    description: '协助整理所需材料，线上提交审批',
    icon: '📑',
  },
  {
    step: 4,
    title: '快速审批',
    description: '对接金融机构，最快当天出审批结果',
    icon: '⚡',
  },
  {
    step: 5,
    title: '签约放款',
    description: '审批通过后签署合同，资金快速到账',
    icon: '✅',
  },
];

export function ProcessModal({ isOpen, onClose }: ProcessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="服务流程" size="lg">
      <div className="space-y-1">
        {processSteps.map((item, index) => (
          <div key={item.step} className="relative">
            {/* 连接线 */}
            {index < processSteps.length - 1 && (
              <div className="absolute left-6 top-14 h-8 w-0.5 bg-gray-200" />
            )}

            <div className="flex items-start gap-5 rounded-2xl p-4 transition-colors hover:bg-gray-50">
              {/* 图标 */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                <span className="text-xl">{item.icon}</span>
              </div>

              {/* 内容 */}
              <div className="flex-1 pt-1">
                <div className="mb-1 flex items-center gap-3">
                  <span className="text-xs font-medium text-gray-400">STEP {item.step}</span>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 底部提示 */}
      <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-center">
        <p className="text-sm text-gray-500">全程透明，不成功不收费</p>
      </div>
    </Modal>
  );
}
