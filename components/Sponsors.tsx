"use client";

import React from "react";
import Image from "next/image";
import { currentSponsors, SponsorTier } from "@/lib/sponsorsData";

/* ---------- TIER STYLES ---------- */
const tierStyles: Record<
  SponsorTier,
  { card: string; imagePadding: string; cols: string; gap: string }
> = {
  one: {
    card: "w-[300px] sm:w-[360px] md:w-[420px] aspect-[2.8/1]",
    imagePadding: "p-8 sm:p-10",
    cols: "grid-cols-1 lg:grid-cols-1",
    gap: "gap-10",
  },
  two: {
    card: "w-[260px] sm:w-[320px] md:w-[360px] aspect-[2.6/1]",
    imagePadding: "p-6 sm:p-8",
    cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2",
    gap: "gap-8",
  },
  three: {
    card: "w-full max-w-[280px] aspect-[2.4/1]",
    imagePadding: "p-5 sm:p-6",
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    gap: "gap-6",
  },
  four: {
    card: "w-full max-w-[200px] aspect-[2.1/1]",
    imagePadding: "p-4",
    cols: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4",
    gap: "gap-4",
  },

};


export default function Sponsors() {
  /* ---------- GROUP BY TIER ---------- */
  const sponsorsByTier: Record<SponsorTier, typeof currentSponsors> = {
    one: [],
    two: [],
    three: [],
    four: [],
  };

  currentSponsors.forEach((s) => {
    const tier = (s.tier ?? "three") as SponsorTier;
    sponsorsByTier[tier].push(s);
  });

  return (
    <section className="bg-[#3FA9F5] w-full py-10">
      {/* Centered Container */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24">

        {/* Title */}
        <div className="flex justify-center pb-14">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium">
            Sponsors
          </h2>
        </div>

        {/* TIERS */}
        <div className="flex flex-col space-y-14">
          {(Object.keys(sponsorsByTier) as SponsorTier[]).map((tier) => {
            const sponsors = sponsorsByTier[tier];
            const styles = tierStyles[tier];

            if (!sponsors.length) return null;

            return (
              <div key={tier}>
                <div
                  className={`
  grid
  ${styles.cols}
  ${styles.gap}
  justify-items-center
`}

                >
                  {sponsors.map((s, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        s.twitter && window.open(s.twitter, "_blank")
                      }
                      className={`
                        relative
                        ${styles.card}
                        rounded-[10px]
                        overflow-hidden
                        cursor-pointer
                        bg-[url('/assets/sponsors/sponsors-card.png')]
                        bg-cover
                        bg-center
                        hover:scale-105
                        transition-transform duration-200
                      `}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={s.logo}
                          alt={s.name}
                          fill
                          className={`object-contain ${styles.imagePadding}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="https://tally.so/r/3NkdGb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#D63A2F] text-white cursor-pointer text-lg md:text-xl px-10 py-3 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg">
              Become a Sponsor
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
