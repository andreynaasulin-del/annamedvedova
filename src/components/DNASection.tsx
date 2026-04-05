'use client';
import Image from "next/image";

export default function DNASection() {
  return (
    <section id="s8" className="section">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s8-full.png"
          alt="DNA — честно, глубоко, красиво, структурно"
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
