"use client";

import Image from "next/image";
import { teamMembers } from "../lib/teamData";

const COLS_LG = 8;

export default function Speakers() {
  const total = teamMembers.length;
  const remainder = total % COLS_LG;
  const lastRowStartIndex = remainder === 0 ? total : total - remainder;

  return (
    <section
      id="conference-speakers"
      className="w-full bg-white py-10 px-4 sm:px-6 lg:px-8"
    >
      <p className="text-center text-black text-sm font-medium mb-2">Built With Love By</p>
      <h2 className="text-black text-4xl pb-3 sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-8">
        ETHMumbai Mitra Mandal
      </h2>

      <div className="flex justify-center">
        <div
          className="
            px-4 sm:px-8 lg:px-12
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-8
            justify-items-center
            gap-6 sm:gap-8 md:gap-10
            mb-12
            mx-auto
            max-w-[1600px]
          "
        >
          {/* ================= MOBILE + TABLET ================= */}
          <div className="contents lg:hidden">
            {teamMembers.map((member, index) => (
              <SpeakerCard key={index} member={member} />
            ))}
          </div>

          {/* ================= DESKTOP FULL ROWS ================= */}
          <div className="hidden lg:contents">
            {teamMembers
              .slice(0, lastRowStartIndex)
              .map((member, index) => (
                <SpeakerCard key={index} member={member} />
              ))}
          </div>

          {/* ================= DESKTOP CENTERED LAST ROW ================= */}
          {remainder !== 0 && (
            <div
              className="
                hidden lg:grid
                lg:col-span-8
                grid-flow-col
                auto-cols-max
                justify-center
                gap-6 sm:gap-8 md:gap-10
              "
            >
              {teamMembers
                .slice(lastRowStartIndex)
                .map((member, index) => (
                  <SpeakerCard key={index} member={member} />
                ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="https://docs.fileverse.io/0xe59f51d0fd360e0dc5c73f17d2cfaf314244bbb8/0#key=e-MSDsPvPh4H92CVFBCrivuIo6kqqsDT31ZcdqwBEcW3baeCn_vL4-F55ca08Tkc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center">
          <button className="bg-[#D63A2F] text-white text-lg md:text-xl px-10 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg">
            About Us
          </button>
        </div>
      </a>
    </section>
  );
}

function SpeakerCard({ member }: { member: any }) {
  return (
    <div className="flex flex-col items-center w-[150px] sm:w-40 lg:w-[150px]">
      <div className="relative w-[150px] sm:w-40 lg:w-[150px] mb-3 pt-1 group">
        {member.xLink ? (
          <a
            href={member.xLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group"
          >
            <SpeakerImage member={member} />
          </a>
        ) : (
          <div className="cursor-default group">
            <SpeakerImage member={member} />
          </div>
        )}
      </div>

      <h3 className="text-[16px] leading-6 tracking-[-0.31px] text-[#0A0A0A] text-center mb-1">
        {member.name}
      </h3>
    </div>
  );
}

function SpeakerImage({ member }: { member: any }) {
  return (
    <div
      className={`
        w-[150px] h-[150px]
        sm:w-40 sm:h-40
        lg:w-[150px] lg:h-[150px]
        rounded-4xl
        border-[5px] border-[#EBEBEB]
        ${member.bgColor ?? "bg-[#E2231A]"}
        overflow-visible
        relative
      `}
    >
      <Image
        src={member.image}
        alt={member.name}
        width={150}
        height={185}
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 object-cover rounded-3xl ${
          member.imageScale || "h-[118%]"
        }`}
        style={{
          width: member.imageScale ?? "112%",
          objectPosition: "center 30%",
          borderBottomLeftRadius: "28px",
        }}
      />
    </div>
  );
}
