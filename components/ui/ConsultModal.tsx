'use client';

import { useState } from 'react';
import { Modal } from './Modal';
import { cn } from '@/lib/utils';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const consultTypes = [
  { value: 'business', label: '企业融资' },
  { value: 'personal', label: '个人信贷' },
  { value: 'debt', label: '债务优化' },
];

export function ConsultModal({ isOpen, onClose }: ConsultModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consultType: '',
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '请输入手机号';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入正确的手机号';
    }

    if (!formData.consultType) {
      newErrors.consultType = '请选择咨询内容';
    }

    if (!formData.agreed) {
      newErrors.agreed = '请阅读并同意相关条款';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // 模拟 API 提交
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({ name: '', phone: '', consultType: '', agreed: false });
      }, 2000);
    } catch (error) {
      console.error('提交失败', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setErrors({});
    setSubmitSuccess(false);
  };

  if (submitSuccess) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <div className="py-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-2xl font-bold">提交成功</h3>
          <p className="text-gray-500">我们的专属顾问将在24小时内与您联系</p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="开始咨询" size="md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 姓名 */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">姓名</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="请输入您的姓名"
            className={cn(
              'w-full rounded-xl border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-black/5',
              errors.name ? 'border-red-500' : 'border-gray-200 focus:border-black'
            )}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* 手机号 */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">手机号</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="请输入您的手机号"
            className={cn(
              'w-full rounded-xl border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-black/5',
              errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-black'
            )}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* 咨询内容 */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">咨询内容</label>
          <div className="grid grid-cols-3 gap-3">
            {consultTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => setFormData({ ...formData, consultType: type.value })}
                className={cn(
                  'rounded-xl border px-4 py-3 text-sm font-medium transition-all',
                  formData.consultType === type.value
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 hover:border-gray-400'
                )}
              >
                {type.label}
              </button>
            ))}
          </div>
          {errors.consultType && <p className="mt-1 text-sm text-red-500">{errors.consultType}</p>}
        </div>

        {/* 同意条款 */}
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={formData.agreed}
              onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
            />
            <span className="text-sm leading-relaxed text-gray-600">
              我已阅读并同意
              <a
                href="/privacy"
                target="_blank"
                className="mx-1 font-medium text-black hover:underline"
              >
                《隐私条例》
              </a>
              与
              <a
                href="/terms"
                target="_blank"
                className="mx-1 font-medium text-black hover:underline"
              >
                《服务条款》
              </a>
            </span>
          </label>
          {errors.agreed && <p className="mt-1 text-sm text-red-500">{errors.agreed}</p>}
        </div>

        {/* 提交按钮 */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'w-full rounded-full bg-black py-4 font-medium text-white transition-all',
            isSubmitting
              ? 'cursor-not-allowed opacity-50'
              : 'hover:scale-[1.02] hover:bg-gray-900 hover:shadow-lg'
          )}
        >
          {isSubmitting ? '提交中...' : '提交咨询'}
        </button>
      </form>
    </Modal>
  );
}
