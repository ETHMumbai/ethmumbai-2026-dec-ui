"use client";
import Image from "next/image";
import { agendaData } from "@/lib/conferenceAgendaData";

export default function Agenda() {
  const LABEL_STYLES: Record<
    "DeFi" | "Privacy" | "AI",
    { bg: string; text: string; border: string }
  > = {
    DeFi: {
      bg: "bg-[#FFF7CC]",     
      text: "text-[#B38600]", 
      border: "border-[#E6C200]",
    },
    Privacy: {
      bg: "bg-[#F3E8FF]",
      text: "text-[#6B21A8]",
      border: "border-[#6B21A8]",
    },
    AI: {
      bg: "bg-[#ECFDF5]",
      text: "text-[#047857]",
      border: "border-[#047857]",
    },
  };

  return (
    <section className="w-full bg-white py-16">
      {/* TITLE */}
      <div className="flex justify-center items-center mb-10">
        <h2 className="font-['MPlusRounded1c'] font-medium text-3xl sm:text-[48px] tracking-[-1px] text-center text-[#0A0A0A] mb-10">
          Agenda
        </h2>

        <button className="ml-4 bg-[#3FA9F5] text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-80 transition">
          + Add to Calendar
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-4">
        {agendaData.map((item, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-[14px] shadow-sm px-8 py-7 flex flex-col justify-between
              ${item.isFullWidth ? "md:col-span-2" : ""}
            `}
          >
            {/* TOP */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {/* TIME + DURATION */}
                <span className="bg-[#E2231A] text-white text-xs font-semibold px-4 py-1 rounded-full">
                  {item.time} — {item.duration}
                </span>

                {/* STAGE TAG */}
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.stage === "MAIN_STAGE"
                    ? "border-black text-black bg-gray-200"
                    : "border-[#3FA9F5] text-[#3FA9F5] bg-[#E6F4FF]"
                    }`}
                >
                  {item.stage === "MAIN_STAGE" ? "MAIN STAGE" : "COMMUNITY STAGE"}
                </span>

                {/* LABELS */}
                {item.label && item.label.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    {item.label.map((label, idx) => {
                      const style = LABEL_STYLES[label];

                      return (
                        <span
                          key={idx}
                          className={`text-xs font-semibold px-3 py-1 rounded-full border ${style.bg} ${style.text} ${style.border}`}
                        >
                          {label}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* TYPE */}
                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {item.type}
                </span>
              </div>


              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-6 leading-snug">
                {item.title}
              </h3>

              {/* SPEAKERS */}
              {item.speakers && item.speakers.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {item.speakers.map((speaker, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      {/* AVATARS (OVERLAPPED) */}
                      <div className="flex items-center">
                        {/* Speaker Image (SQUARE) */}
                        {speaker.image ? (
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            width={56}
                            height={56}
                            className="rounded-lg object-cover"
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-lg bg-gray-200" />
                        )}

                        {/* Project Logo (ROUND, OVERLAPPED) */}
                        {item.speakerProjectsImage?.[idx] && (
                          <div className="-ml-3 w-12 h-12 rounded-full flex items-center justify-center border-2 border-white">
                            <Image
                              src={item.speakerProjectsImage[idx]}
                              alt="Project Logo"
                              width={52}
                              height={52}
                              className="object-contain rounded-full"
                            />
                          </div>
                        )}
                      </div>

                      {/* NAME + META */}
                      <div className="leading-tight">
                        <p className="text-lg font-semibold text-black">
                          {speaker.name}
                        </p>

                        {(speaker.company || speaker.role) && (
                          <p className="text-sm text-gray-600">
                            {speaker.company && (
                              <span className="font-medium text-black">
                                {speaker.company}
                              </span>
                            )}
                            {speaker.company && speaker.role && " "}
                            {speaker.role && (
                              <span className="text-gray-400">
                                {speaker.role}
                              </span>
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* OPTIONAL BOTTOM PROJECT ICON */}

          </div>
        ))}
      </div>
    </section>
  );
}
