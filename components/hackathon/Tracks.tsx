"use client";

import Image from "next/image";

export default function Tracks() {
  return (
    <>
      <section className="relative w-full bg-[#FFD600] pt-10 pb-36 overflow-hidden hidden md:block">
        {/* Title */}
        <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-8">
          Tracks
        </h2>

        {/* SVG decorative layer */}
        <div className="absolute inset-x-0 top-[80px] bottom-0 pointer-events-none scale-[1.1] ">
          <Image
            src="/assets/hackathon/tracksPoint.svg"
            alt=""
            fill
            priority
            className="object-contain object-top"
          />
        </div>

        {/* Cards layer */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-2 gap-y-20 gap-x-12">
          {/* Privacy (centered, NOT full width) */}
          <div className="flex col-span-2 justify-center">
            <div className=" w-[600px] max-w-full">
              <TrackCard
                label="Privacy"
                text="Deep dive into privacy-preserving technologies, zero-knowledge proofs, and secure decentralized systems."
                icon="/assets/hackathon/privacy.svg"
              />
            </div>
          </div>

          {/* DeFi */}
          <TrackCard
            label="DeFi"
            text="Explore Layer 2 solutions, rollups, and next-generation scaling technologies."
            icon="/assets/hackathon/defi.svg"
          />

          {/* AI */}
          <TrackCard
            label="AI"
            text="Digital ownership, gaming economies, autonomous agents, and creative AI applications."
            icon="/assets/hackathon/ai.svg"
          />
        </div>

      </section>

      {/* ===================== */}
      {/* MOBILE (below md)     */}
      {/* ===================== */}
      <section className="relative w-full bg-[#FFD600] pt-10 pb-24 overflow-hidden md:hidden">
        {/* Title */}
        <h2 className="text-black text-4xl font-[MPlusRounded1c] tracking-tight text-center mb-12">
          Tracks
        </h2>

        {/* Mobile SVG */}
        <div className="absolute inset-x-0 top-[200px] bottom-0 pointer-events-none">
          <Image
            src="/assets/hackathon/tracks-sm.svg"
            alt=""
            fill
            priority
            className="object-contain object-top"
          />
        </div>

        {/* Cards stacked */}
        {/* Cards stacked – zig-zag on mobile */}
<div className="relative max-w-md mx-auto flex flex-col gap-20 px-4">
  {/* Privacy — LEFT */}
  <div className="self-start w-[90%]">
    <TrackCard
      label="Privacy"
      text="Deep dive into privacy-preserving technologies, zero-knowledge proofs, and secure decentralized systems."
      icon="/assets/hackathon/privacy.svg"
    />
  </div>

  {/* DeFi — RIGHT */}
  <div className="self-end w-[90%]">
    <TrackCard
      label="DeFi"
      text="Explore Layer 2 solutions, rollups, and next-generation scaling technologies."
      icon="/assets/hackathon/defi.svg"
    />
  </div>

  {/* AI — LEFT */}
  <div className="self-start w-[90%]">
    <TrackCard
      label="AI"
      text="Digital ownership, gaming economies, autonomous agents, and creative AI applications."
      icon="/assets/hackathon/ai.svg"
    />
  </div>
</div>

      </section>
    </>
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
    <div
      className="
        relative w-full bg-[#E2231A] rounded-[20px]
        p-5 md:p-8
        flex items-center gap-5 md:gap-8
        min-h-[140px] md:min-h-[180px]
        shadow-lg
      "
    >
      {/* Text */}
      <div className="flex-1">
        <span
          className="
            inline-block bg-white text-[#E23A2B]
            text-xs md:text-sm
            font-medium px-5 md:px-8 py-1
            rounded-full mb-3 md:mb-4
          "
        >
          {label}
        </span>

        <p className="text-white text-sm md:text-lg leading-relaxed">
          {text}
        </p>
      </div>

      {/* Icon */}
      <div
        className="
          relative
          w-[80px] h-[80px]
          md:w-[120px] md:h-[120px]
          shrink-0
        "
      >
        <Image src={icon} alt={label} fill className="object-contain" />
      </div>
    </div>
  );
}
