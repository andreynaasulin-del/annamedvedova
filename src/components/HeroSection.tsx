'use client';
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="s1" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s1-full.jpg" alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s1.jpg" alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority unoptimized />
      </div>

      {/* Real CTA button */}
      <div className="s1-cta-wrap">
        <button
          className="btn-site s1-cta-btn"
          onClick={() => document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Продукты Академии
        </button>
      </div>
    </section>
  );
}
