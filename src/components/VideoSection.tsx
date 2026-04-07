'use client';
import Image from "next/image";

export default function VideoSection() {
  return (
    <section id="s6" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s6-full.jpg" alt="Видео" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s6.jpg" alt="Видео" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>

      {/* Real "Метод" button */}
      <div className="s6-cta-wrap">
        <button
          className="btn-site s6-cta-btn"
          onClick={() => document.querySelector('#s3')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Метод
        </button>
      </div>
    </section>
  );
}
