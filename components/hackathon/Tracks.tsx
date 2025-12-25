"use client";

import Image from "next/image";

export default function Tracks() {
  return (
    <section className="relative w-full bg-[#FFD600] py-18 overflow-hidden hidden md:block">
      {/* Title */}
      <h2 className="text-center text-5xl font-semibold mb-20 font-[MPlusRounded1c] tracking-tighter font-medium">Tracks</h2>

      {/* Decorative dotted path (simple version) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[220px] left-[20%] w-[60%] border-t-4 border-dashed border-[#E2231A]/60" />
      </div>

      {/* Cards container */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 gap-12">
        {/* Privacy (Top Center) */}
        <div className="col-span-2 flex justify-center">
          <TrackCard
            label="Privacy"
            text="Deep dive into decentralized finance protocols and innovations"
            icon="/assets/hackathon/privacy.svg"
          />
        </div>

        {/* DeFi */}
        <TrackCard
          label="DeFi"
          text="Explore Layer 2 solutions, rollups, and scaling technologies"
          icon="/assets/hackathon/defi.svg"
        />

        {/* AI */}
        <TrackCard
          label="AI"
          text="Digital ownership, gaming economies, and creative applications"
          icon="/assets/hackathon/ai.svg"
        />
      </div>
    </section>
  );
}

function TrackCard({
  label,
  text,
  icon,
}: {
  label: string;
  text: string;
  icon: string;
}) {
  return (
    <div className="relative bg-[#E2231A] rounded-[20px] p-8 flex items-center justify-between min-h-[180px] shadow-lg">
      {/* Left content */}
      <div className="max-w-[65%]">
        <span className="inline-block bg-white text-[#E23A2B] text-sm font-medium px-8 py-1 rounded-full mb-4">
          {label}
        </span>
        <p className="text-white text-lg leading-relaxed">{text}</p>
      </div>

      {/* Right icon */}
      <div className="w-[120px] h-[120px] relative">
        <Image
          src={icon}
          alt={label}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
