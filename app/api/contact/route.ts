import { NextRequest, NextResponse } from 'next/server';
import { isValidEmail, isValidPhone } from '@/lib/utils';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // 验证必填字段
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        {
          code: 400,
          message: '请填写必填字段：姓名、邮箱、留言内容',
          data: null,
        },
        { status: 400 }
      );
    }

    // 验证邮箱格式
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        {
          code: 400,
          message: '请输入有效的邮箱地址',
          data: null,
        },
        { status: 400 }
      );
    }

    // 验证手机号格式（如果提供）
    if (body.phone && !isValidPhone(body.phone)) {
      return NextResponse.json(
        {
          code: 400,
          message: '请输入有效的手机号码',
          data: null,
        },
        { status: 400 }
      );
    }

    // TODO: 在这里处理表单数据
    // 例如：发送邮件、保存到数据库等
    console.log('Contact form submission:', body);

    // 模拟处理延迟
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        code: 200,
        message: '提交成功，我们会尽快与您联系',
        data: {
          id: `contact_${Date.now()}`,
          submittedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        code: 500,
        message: '服务器错误，请稍后重试',
        data: null,
      },
      { status: 500 }
    );
  }
}
