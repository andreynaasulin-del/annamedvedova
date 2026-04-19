'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import { bgMobile, btnDesktop } from '@/lib/imagePaths';
import SeoText from '@/components/SeoText';

export default function HeroSection() {
  const { lang } = useTranslation();

  return (
    <section id="s1" className="section">
      <SeoText section="s1" />
      <div className="s10-bg desktop-only">
        <Image src="/images/blocks-s1/bg.png" alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority quality={90} />
        <Image src="/images/blocks-s1/detail.png" alt="" fill className="s1-detail-anim" style={{ objectFit: "cover", objectPosition: "center center" }} priority quality={90} />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(1, lang)} alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority quality={90} />
      </div>
      <a href="#s11" className="s1-btn-overlay" onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <img src={btnDesktop(1, lang)} alt="" draggable={false} />
      </a>
    </section>
  );
}
