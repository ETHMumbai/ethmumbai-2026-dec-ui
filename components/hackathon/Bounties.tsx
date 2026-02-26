"use client";

import React from "react";
import Image from "next/image";
// import { conferenceSponsors } from "../../lib/sponsorsData";
import { bounties, pastBountyIcons, currentBountyIcons } from "@/lib/bounties";

export default function Bounties() {
  return (
    <section className="bg-[#FFD600] w-full py-10 pb-12">
      {/* Title */}
      <div className="flex pb-6 items-center justify-center w-full">
        <h2 className="text-[#0f0f0f] text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium text-center mb-2">
          Bounties
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1200px] mx-auto px-[5vw] md:px-[5vw] xl:px-[5vw] 2xl:px-[12vw] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-3 justify-items-center">
        {currentBountyIcons.map((s, i) => (
          <div
            key={i}
            className={`
              relative
              w-full
              ${currentBountyIcons.length === 5 && i === 3 ? "lg:col-span-2 lg:col-start-1 lg:row-start-2" : ""}
  ${currentBountyIcons.length === 5 && i === 4 ? "lg:col-span-2 lg:col-start-2 lg:row-start-2" : ""}
            
              max-w-[300px]
              aspect-[2.22/1]
              rounded-[10px]
              overflow-hidden
              cursor-pointer
              hover:scale-105
              transition-all duration-200
              group
           
              bg-[url('/assets/hackathon/bounties/card.png')]
              bg-contain 
              bg-no-repeat
              bg-center
            `}
            onClick={() => s.twitter && window.open(s.twitter, "_blank")}
          >
            {/* Logo and name */}
            {/* <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
              <div className="relative w-[200px] h-[200px]">
                <Image
                  src={s.logo}
                  alt={s.name}
                  fill
                  className="object-contain p-4 pb-0"
                />
              </div>

              <div className="p-0 mb-2 text-lg">{s.amount}</div>
            </div> */}

            {/* Logo and name */}
            <div className="absolute inset-0 z-10 flex items-center xl:px-8 lg:px-8 md:px-8 px-8 gap-5 md:gap-2">
              <div className="relative w-[70px] h-[70px] shrink-0 md:w-[70px] md:h-[70px] lg:w-[70px] lg:h-[70px]">
                <Image
                  src={s.logo}
                  alt={s.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex flex-col justify-center text-left md:text-xl lg:text-xl lg:gap-0.2 text-2xl">
                <span className=" font-semibold leading-tight">{s.name}</span>

                {s.amount && (
                  <span className="text-lg lg:text-sm md:text-sm opacity-80">
                    {s.amount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {/* <a
        href="https://tally.so/r/3NkdGb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center mt-12">
          <button className="bg-[#D63A2F] text-white text-lg md:text-xl px-8 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg">
            Become a Sponsor
          </button>
        </div>
      </a> */}
    </section>
  );
}
