"use client";

import React from "react";
import Image from "next/image";
import SponsorsCard from "../public/assets/sponsors/sponsors-card.svg";

const sponsors = [
  { logo: "../public/assets/sponsors/arweave.svg", name: "Arweave" },
  { logo: "../public/assets/sponsors/avail.svg", name: "Avail" },
  { logo: "../public/assets/sponsors/esp.svg", name: "Ethereum Support Program" },
  { logo: "../public/assets/sponsors/polygon.svg", name: "Polygon" },

  { logo: "../public/assets/sponsors/arweave.svg", name: "Arweave" },
  { logo: "../public/assets/sponsors/avail.svg", name: "Avail" },
  { logo: "../public/assets/sponsors/esp.svg", name: "Ethereum Support Program" },
  { logo: "../public/assets/sponsors/polygon.svg", name: "Polygon" },

  { logo: "../public/assets/sponsors/arweave.svg", name: "Arweave" },
  { logo: "../public/assets/sponsors/avail.svg", name: "Avail" },
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
        <div
            className="
                max-w-[1600px]
                mx-auto
                +px-[6vw] md:px-[8vw] xl:px-[10vw] 2xl:px-[12vw]
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-4 
                gap-x-14
                gap-y-16 
                justify-items-center
            "
        >
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

                        ${i === 8 ? "lg:col-start-2" : ""}  /* card 9 under col 2 */
                        ${i === 9 ? "lg:col-start-3" : ""}  /* card 10 under col 3 */
                    `}
                >
                    <Image
                        src={SponsorsCard}
                        alt="Sponsor card"
                        fill
                        className="object-cover"
                    />
                </div>
            ))}
        </div>


        {/* CTA Button */}
        <div className="flex justify-center mt-16">
            <button className="bg-[#D63A2F] text-white text-lg md:text-xl px-10 py-3 rounded-xl hover:opacity-90 transition">
            Become a Sponsor
            </button>
        </div>
    </section>
  );
}
