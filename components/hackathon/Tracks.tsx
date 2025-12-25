"use client";

import Image from "next/image";

export default function Tracks() {
  return (
    <section className="relative w-full bg-[#FFD600] pt-10 pb-35 overflow-hidden hidden md:block">
      {/* Title */}
      <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-12">
        Tracks
      </h2>
      <Point className="top-[50px] right-[210px]" />

      {/* Dotted paths + pins */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left bottom → Privacy */}
        <div className="absolute top-[190px] left-[410px] w-[720px] border-t-4 border-dashed border-[#E2231A]/60" />
        <div className="absolute top-[97px] left-[1119px] w-[720px] border-t-4 border-dashed border-[#E2231A]/60 rotate-[115deg]" />

        <Pin className="top-[350px] left-[120px]" />

        {/* Privacy → right top */}
        <div className="absolute top-[260px] left-[55%] w-[260px] border-t-4 border-dashed border-[#E2231A]/60 rotate-[15deg]" />
        {/* <Point className="top-[180px] right-[120px]" /> */}

        {/* Bottom center path */}
        <div className="absolute top-[520px] left-[45%] w-[320px] border-t-4 border-dashed border-[#E2231A]/60 rotate-[10deg]" />
        <Point className="top-[615px] left-[55%]" />

        {/* Bottom right pin */}
        <Pin className="bottom-[120px] right-[140px]" />
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 gap-y-20 gap-x-12">
        {/* Privacy */}
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

/* ----------------------------- */
/* Track Card                    */
/* ----------------------------- */
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
      <div className="max-w-[65%]">
        <span className="inline-block bg-white text-[#E23A2B] text-sm font-medium px-8 py-1 rounded-full mb-4">
          {label}
        </span>
        <p className="text-white text-lg leading-relaxed">{text}</p>
      </div>

      <div className="w-[120px] h-[120px] relative">
        <Image src={icon} alt={label} fill className="object-contain" />
      </div>
    </div>
  );
}

/* ----------------------------- */
/* Decorative helpers            */
/* ----------------------------- */

function Pin({ className }: { className: string }) {
  return (
    <div className={`absolute w-[56px] h-[56px] ${className}`}>
      <Image
        src="/assets/hackathon/pin.svg"
        alt="pin"
        fill
        className="object-contain"
      />
    </div>
  );
}

function Point({ className }: { className: string }) {
  return (
    <div className={`absolute w-[48px] h-[48px] ${className}`}>
      <Image
        src="/assets/hackathon/point-a.svg"
        alt="point"
        fill
        className="object-contain"
      />
    </div>
  );
}
