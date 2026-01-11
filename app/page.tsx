import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';

export default function HomePage() {
  return (
    <>
      {/* Hero 区块 */}
      <Hero />

      {/* 服务内容 */}
      <Services />

      {/* 为什么选择我们 */}
      <WhyUs />
    </>
  );
}
