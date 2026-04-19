'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import SeoText from '@/components/SeoText';
import { bgDesktop, bgMobile, btnDesktop } from '@/lib/imagePaths';

export default function AnnaSection() {
  const { lang } = useTranslation();

  return (
    <section id="s7" className="section">
      <SeoText section="s7" />
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(7, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} quality={90} />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(7, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} quality={90} />
      </div>
      <a href="/about" className="s7-btn-overlay s7-btn-about">
        <img src={btnDesktop(7, lang, 'about')} alt="" draggable={false} />
      </a>
      <a href="/consultation" className="s7-btn-overlay s7-btn-consult">
        <img src={btnDesktop(7, lang, 'consult')} alt="" draggable={false} />
      </a>
    </section>
  );
}
