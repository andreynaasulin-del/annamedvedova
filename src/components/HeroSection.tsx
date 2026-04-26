'use client';
import { useTranslation } from '@/components/LanguageProvider';
import { btnDesktop, btnMobile } from '@/lib/imagePaths';

export default function HeroSection() {
  const { lang, tr } = useTranslation();

  const titleParts = tr('hero_title').split(/\s+/);
  const titleHead = titleParts[0] ?? '';
  const titleTail = titleParts.slice(1).join(' ');

  return (
    <section id="s1" className="section">
      {/* Layered bg — shared across desktop and mobile so the HTML text
          overlay is the only copy of the hero text (selectable, translatable). */}
      <div className="s1-bg-layer" aria-hidden="true" />
      <div className="s1-detail-layer" aria-hidden="true" />
      <div className="s1-darken" aria-hidden="true" />

      <div className="s1-text-layer">
        <p className="hero-tagline">
          <span className="hero-tagline__line">{tr('hero_tagline_1')}</span>
          <span className="hero-tagline__line">{tr('hero_tagline_2')}</span>
          <span className="hero-tagline__line">{tr('hero_tagline_3')}</span>
        </p>
        <h1 className="hero-title-v2 hero-title-row-1">
          <span className="hero-title-head">{titleHead}</span>
          {titleTail && <> <span className="hero-title-tail">{titleTail}</span></>}
        </h1>
        <div className="hero-glow-line-v2" aria-hidden="true" />
        <h1 className="hero-title-v2 hero-title-row-2">{tr('hero_title_2')}</h1>
        <h2 className="hero-subtitle-v2">{tr('hero_subtitle')}</h2>
      </div>

      <a href="#s11" className="s1-btn-overlay" onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <img className="desktop-only" src={btnDesktop(1, lang)} alt="" draggable={false} />
        <img className="mobile-only" src={btnMobile(1, lang)} alt="" draggable={false} />
      </a>
    </section>
  );
}
