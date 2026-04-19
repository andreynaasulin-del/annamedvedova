'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import SeoText from '@/components/SeoText';
import { bgDesktop, bgMobile } from '@/lib/imagePaths';

export default function UnitySection() {
  const { lang } = useTranslation();

  return (
    <section id="s10" className="section">
      <SeoText section="s10" />
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(10, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} quality={90} />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(10, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} quality={90} />
      </div>
    </section>
  );
}
