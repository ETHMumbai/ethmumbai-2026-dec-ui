"use client";

import Image from "next/image";
import { speakers } from "../lib/speakersData";

export default function Speakers() {
  return (
    <section className="w-full bg-[#FFD600] py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[48px] text-center font-medium leading-12 tracking-[-1px text-[#0A0A0A] mb-16 font-[MPlusRounded1c]">
        {" "}
        Past Speakers and Judges
      </h2>

      {/* Speakers Grid */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-20 lg:gap-20 mb-12 mx-auto">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[150px] sm:w-40 lg:w-[150px]"
          >
            {/* Wrapper with padding for overflow */}
            <div className="relative w-[150px] sm:w-40 lg:w-[150px] mb-3 pt-6 group">
              {/* Red background container */}
              <a
                href={speaker.xLink}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  speaker.xLink ? "cursor-pointer" : "pointer-events-none"
                }
              >
                <div className="w-[150px] h-[150px] sm:w-40 sm:h-40 lg:w-[150px] lg:h-[150px] rounded-4xl border-[5px] border-[#EBEBEB] bg-[#E2231A] overflow-visible relative">
                  {/* Image */}
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={150}
                    height={185}
                    className={`absolute bottom-0 left-[50%] -translate-x-1/2 object-cover rounded-3xl ${
                      speaker.imageScale || "h-[118%]"
                    }`}
                    style={{
                      width: "112%",
                      objectPosition: "center 30%",
                      borderBottomLeftRadius: "28px",
                    }}
                  />

                  {/* Clipping wrapper for hover effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                    {/* Black gradient overlay - slides up to cover half the image on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10" />
                  </div>
                </div>
              </a>
            </div>

            {/* Speaker Info */}
            <h3
              className="text-[16px] font-normal leading-6 tracking-[-0.31px] text-[#0A0A0A] text-center mb-1"
              style={{ fontFamily: "Inter" }}
            >
              {speaker.name}
            </h3>
            <p
              className="text-[14px] font-normal leading-5 tracking-[-0.015px] text-[#575757] text-center"
              style={{ fontFamily: "Inter" }}
            >
              {speaker.role}
            </p>
          </div>
        ))}
      </div>

      {/* Apply to Speak Button */}
      <div className="flex justify-center">
        <a
          href="https://tally.so/r/nGW5Bz"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#E2231A] text-[#FFFFFF] font-medium text-[18px] leading-7 tracking-[-0.44px] rounded-xl inline-block hover:bg-[#C01F15] transition-colors duration-200"
          style={{ fontFamily: "Inter" }}
        >
          Apply to Speak
        </a>
      </div>
    </section>
  );
}
