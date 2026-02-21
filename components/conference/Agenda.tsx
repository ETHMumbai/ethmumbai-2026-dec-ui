"use client";
import Image from "next/image";
import { agendaData } from "@/lib/conferenceAgendaData";

export default function Agenda() {
  const LABEL_STYLES: Record<
    "DEFI" | "Privacy" | "AI",
    { bg: string; text: string; border: string }
  > = {
    DEFI: {
      bg: "bg-[#FFD600]",
      text: "text-black",
      border: "border-[#FFD600]",
    },
    Privacy: {
      bg: "bg-[#1C1C1C]",
      text: "text-white",
      border: "border-[#1C1C1C]",
    },
    AI: {
      bg: "bg-[#00A859]",
      text: "text-white",
      border: "border-[#00A859]",
    },
  };

  return (
    <section className="w-full bg-white py-10">
      {/* TITLE */}
      <div className="flex justify-center items-center mb-0">
        <h2 className="font-['MPlusRounded1c'] font-medium text-3xl sm:text-[48px] tracking-[-1px] text-center text-[#0A0A0A] mb-8">
          Agenda
        </h2>

        {/* <a
          title="Add to Calendar"
          target="_blank"
          rel="noopener noreferrer"
          href="https://calendar.google.com/calendar/?cid=Y18wYTU4ODdkMWJkNDU4YmY2ZDllNmQ2OWRiODg5OTAzMjAyOTM4OWJhMmY1OWMwNjI5NzZlODlmMGVmODAwZjI4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
        >
          <button className="ml-4 bg-[#3FA9F5] cursor-pointer text-white px-4 py-2 mb-8 rounded-xl text-sm font-medium hover:opacity-80 transition">
            + Add to Calendar
          </button>
        </a> */}
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
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {/* TIME + DURATION */}
                <span className="bg-white border border-black text-black text-xs font-semibold px-4 py-1 rounded-full">
                  {item.time}
                  {(item.type === "TALK" || item.type === "PANEL") && (
                    <> - {item.duration}</>
                  )}
                </span>

                {/* STAGE TAG */}
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${item.stage === "MAIN_STAGE"
                    ? "text-white bg-[#E2231A]"
                    : "text-white bg-[#3FA9F5]"
                    }`}
                >
                  {item.stage === "MAIN_STAGE" ? "DOUBLE DECKER STAGE" : "SINGLE DECKER STAGE"}
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
                <span className="text-xs font-semibold text-black uppercase">
                  
                  {item.type === "TALK"
                    ? "TALK"
                    : item.type === "PANEL"
                    ? "PANEL"
                    : ""}
                </span>
              </div>


              {/* TITLE */}
              <h3 className="text-2xl font-semibold mb-6 leading-snug">
                {item.title}
              </h3>

              {/* SPEAKERS */}
              {item.speakers && item.speakers.length > 0 && (
              <div
                className={
                  item.type === "ANNOUNCEMENT" && item.isFullWidth
                    ? "flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 sm:gap-12 md:gap-20 lg:gap-36 w-full"
                    : item.speakers.length > 1
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
                    : "flex flex-col gap-6"
                }
              >
                  {item.speakers.map((speaker, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      {/* AVATARS (OVERLAPPED) */}
                      <div className="flex items-center">
                        {/* Speaker Image (SQUARE) */}
                        {speaker.image ? (
                          <div
                            className={`w-16 h-16 rounded-lg flex items-center justify-center pointer-events-none origin-top overflow-hidden ${
                              item.type === "ANNOUNCEMENT" ? "bg-white" : "bg-[#DFDFDF]"
                            }`}
                          >                            
                            <Image
                              src={speaker.image}
                              alt={speaker.name}
                              width={56}
                              height={56}
                              className="object-cover transition-transform duration-300 z-0 pointer-events-none"
                              style={{
                                transform: speaker.scale
                                  ? `scale(${parseInt(speaker.scale) / 100})`
                                  : "scale(1)",
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-lg" />
                        )}

                        {/* Project Logo (ROUND, OVERLAPPED) */}
                        <div className="-ml-3 w-12 h-12 flex items-center justify-center">
                        {item.speakerProjectsImage?.[idx] ? (
                          <div className="w-12 h-12 rounded-full bg-white border-2 border-white flex items-center justify-center">
                            <Image
                              src={item.speakerProjectsImage[idx]}
                              alt="Project Logo"
                              width={52}
                              height={52}
                              className="object-contain rounded-full z-10"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12" />
                        )}
                      </div>
                      </div>

                      {/* NAME + META */}
                      <div className="leading-tight">
                        <p className="text-lg font-semibold text-black">
                          <a href={speaker.xLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer transition-all duration-300">{speaker.name}</a>
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
