'use client';
import Image from "next/image";

export default function AnnaSection() {
  return (
    <section id="s7" className="section">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s7-full.png"
          alt="О мастере — Анна Медведева"
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
