'use client';
import Image from "next/image";

export default function RIFeaturesSection() {
  return (
    <section id="s5" className="section">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s5-full.png"
          alt="Reality Intelligence — ключевые особенности"
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
