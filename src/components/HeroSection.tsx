'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function HeroSection() {
  const { tr } = useTranslation();

  return (
    <section id="s1" className="section">
      <div className="section-bg-img">
        <Image
          src="/images/backgrounds/bg-s1-new.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Tagline */}
      <div className="hero-tagline">
        {tr('hero_tagline_1')}<br />
        {tr('hero_tagline_2')}<br />
        {tr('hero_tagline_3')}
      </div>

      {/* Title */}
      <h1 className="hero-title">
        {tr('hero_title')}
      </h1>

      {/* Glow line */}
      <div className="hero-glow-line" />

      {/* Subtitle */}
      <p className="hero-subtitle">
        {tr('hero_subtitle')}
      </p>

      {/* CTA Button */}
      <a
        href="#s11"
        className="hero-cta-btn"
        onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}
      >
        {tr('nav_btn')}
      </a>
    </section>
  );
}
