'use client';
import Image from "next/image";

export default function ProgramsSection() {
  return (
    <section id="s11" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s11-full.jpg" alt="Эволюция состояния" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s11.jpg" alt="Эволюция состояния" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>

      {/* Real "Перейти" buttons over each card */}
      <div className="s11-btns-wrap">
        <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-real-btn">Перейти</a>
        <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-real-btn">Перейти</a>
        <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-real-btn">Перейти</a>
      </div>
    </section>
  );
}
