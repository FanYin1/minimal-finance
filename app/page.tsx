import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { ComplianceNotice } from '@/components/ui/ComplianceNotice';

export default function HomePage() {
  return (
    <>
      {/* Hero 区块 */}
      <Hero />

      {/* 服务内容 */}
      <Services />

      {/* 合规声明 */}
      <ComplianceNotice />

      {/* 为什么选择我们 */}
      <WhyUs />
    </>
  );
}
