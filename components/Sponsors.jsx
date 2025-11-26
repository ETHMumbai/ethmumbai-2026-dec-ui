"use client";

import React from "react";
import Image from "next/image";

const sponsors = [
  { logo: "/assets/sponsors/arweave.svg", name: "Arweave" },
  { logo: "/assets/sponsors/avail.svg", name: "Avail" },
  { logo: "/assets/sponsors/esp.svg", name: "ESP" },
  { logo: "/assets/sponsors/polygon.svg", name: "Polygon" },

  { logo: "/assets/sponsors/arweave.svg", name: "Arweave" },
  { logo: "/assets/sponsors/avail.svg", name: "Avail" },
  { logo: "/assets/sponsors/esp.svg", name: "ESP" },
  { logo: "/assets/sponsors/polygon.svg", name: "Polygon" },

  { logo: "/assets/sponsors/arweave.svg", name: "Arweave" },
  { logo: "/assets/sponsors/avail.svg", name: "Avail" },
];

export default function Sponsors() {
  return (
    <section className="bg-[#3FA9F5] w-full py-10">
      {/* Title */}
      <div className="flex pb-14 items-center justify-center w-full">
        <h2 className="text-white text-5xl md:text-6xl font-[MPlusRounded1c] font-medium">
          Past Sponsors
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1600px] mx-auto px-[6vw] md:px-[8vw] xl:px-[10vw] 2xl:px-[12vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16 justify-items-center">
        {sponsors.map((s, i) => (
          <div
            key={i}
            className={`
              relative
              w-full
              max-w-[320px]
              aspect-[2.4/1]
              rounded-[10px]
              overflow-hidden
              ${i === 8 ? "lg:col-start-2" : ""}  
              ${i === 9 ? "lg:col-start-3" : ""} 
              bg-[url('/assets/sponsors/sponsors-card.png')]
              bg-cover
              bg-center
            `}
          >
            {/* Logo and name on top */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 z-10 px-6">
              <Image
                src={s.logo}
                alt={s.name}
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-black text-2xl font-medium">{s.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="https://tally.so/r/3NkdGb"
        target="_blank"
        rel="noopener noreferrer"
        >
        <div className="flex justify-center mt-16">
            <button className="bg-[#D63A2F] text-white text-lg md:text-xl px-10 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg">
                Become a Sponsor
            </button>
        </div>
      </a>
    </section>
  );
}
