'use client';
import Image from "next/image";

export default function ArchetypesSection() {
  return (
    <section id="s9" className="section">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s9-full.png"
          alt="Основные архетипы RI — структурная магия"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
