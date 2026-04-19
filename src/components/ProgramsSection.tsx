'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import SeoText from '@/components/SeoText';
import { bgDesktop, bgMobile, btnDesktop } from '@/lib/imagePaths';

export default function ProgramsSection() {
  const { lang } = useTranslation();

  return (
    <section id="s11" className="section">
      <SeoText section="s11" />
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(11, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(11, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-1">
        <img src={btnDesktop(11, lang)} alt="" draggable={false} />
      </a>
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-2">
        <img src={btnDesktop(11, lang)} alt="" draggable={false} />
      </a>
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-3">
        <img src={btnDesktop(11, lang)} alt="" draggable={false} />
      </a>
    </section>
  );
}
