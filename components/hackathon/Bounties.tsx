"use client";

import React from "react";
import Image from "next/image";
// import { conferenceSponsors } from "../../lib/sponsorsData";
import { bounties, bountyIcons } from "@/lib/bounties";

export default function Sponsors() {
  return (
    <section className="bg-[#3FA9F5] w-full py-10">
      {/* Title */}
      <div className="flex pb-6 items-center justify-center w-full">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium text-center mb-8">
          Past Bounties
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-[1600px] mx-auto px-[6vw] md:px-[8vw] xl:px-[10vw] 2xl:px-[12vw] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-x-14 gap-y-16 justify-items-center">
        {bountyIcons.map((s, i) => (
          <div
            key={i}
            className={`
              relative
              w-full
              max-w-[390px]
              aspect-[2.32/1]
              rounded-[10px]
              overflow-hidden
              cursor-pointer
              hover:scale-105
              transition-all duration-200
              group
              ${i === 8 ? "lg:col-start-3" : ""}  
              ${i === 9 ? "lg:col-start-1" : ""} 
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
            <div className="absolute inset-0 z-10 flex items-center px-6 gap-2 md:gap-3">
              <div className="relative w-[100px] h-[100px] shrink-0 md:w-[90px] md:h-[90px] ">
                <Image
                  src={s.logo}
                  alt={s.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="flex flex-col justify-center text-left md:text-2xl lg:text-2xl lg:gap-0.2 text-xl ">
                <span className=" font-semibold leading-tight">{s.name}</span>

                {s.amount && (
                  <span className="text-lg lg:text-lg md:text-sm opacity-80 mt-1">
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
          <button className="bg-[#D63A2F] text-white text-lg md:text-xl px-10 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg">
            Become a Sponsor
          </button>
        </div>
      </a> */}
    </section>
  );
}
