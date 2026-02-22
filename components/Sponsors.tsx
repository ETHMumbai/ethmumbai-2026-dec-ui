"use client";

import React from "react";
import Image from "next/image";
import { currentSponsors, SponsorTier } from "@/lib/sponsorsData";

/* ---------- TIER STYLES (SIZE SHRINKS PER TIER) ---------- */
const tierStyles: Record<
  SponsorTier,
  { card: string; imagePadding: string }
> = {
  one: {
    card: "w-full max-w-[340px] sm:max-w-[420px] aspect-[2.8/1]",
    imagePadding: "p-8 sm:p-10",
  },
  two: {
    card: "w-full max-w-[260px] sm:max-w-[320px] aspect-[2.6/1]",
    imagePadding: "p-6 sm:p-8",
  },
  three: {
    card: "w-full max-w-[210px] sm:max-w-[270px] aspect-[2.3/1]",
    imagePadding: "p-6 sm:p-7",
  },
  four: {
    card: "w-full max-w-[170px] sm:max-w-[210px] aspect-[2.1/1]",
    imagePadding: "p-5 sm:p-7",
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
      {/* Title */}
      <div className="flex justify-center pb-10">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium">
          Sponsors
        </h2>
      </div>

      {/* TIERS */}
      <div className="flex flex-col items-center space-y-12 md:space-y-14">
        {(Object.keys(sponsorsByTier) as SponsorTier[]).map((tier) => {
          const sponsors = sponsorsByTier[tier];
          const styles = tierStyles[tier];

          if (!sponsors.length) return null;

          return (
            <div
              key={tier}
              className="w-full max-w-[1400px] px-6 sm:px-12 lg:px-24"
            >
              <div
                className={`
                  flex flex-col items-center gap-6

                  sm:grid
                  sm:justify-items-center
                  ${
                    tier === "one"
                      ? "sm:grid-cols-1"
                      : tier === "two"
                      ? "sm:grid-cols-2"
                      : tier === "three"
                      ? "sm:grid-cols-2"
                      : "sm:grid-cols-3"
                  }

                  lg:flex
                  lg:flex-row
                  lg:items-center
                  lg:justify-center

                  ${
                    tier === "one"
                      ? "lg:gap-16"
                      : tier === "two"
                      ? "lg:gap-12"
                      : tier === "three"
                      ? "lg:gap-8"
                      : "lg:gap-6"
                  }
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
      <div className="flex justify-center mt-12">
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
    </section>
  );
}
