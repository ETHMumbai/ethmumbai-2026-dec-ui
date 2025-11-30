"use client";

import { useState } from "react";
import { hackathonAgenda } from "../../lib/hackathonAgendaData";

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(0);
  const days = hackathonAgenda;

  return (
    <section className="w-full bg-[#00A859] py-16 px-4">
      {/* TITLE */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-8">
        Agenda
      </h2>

      {/* DAY SWITCHER */}
      <div className="flex justify-center mb-10">
        <div className="bg-[#2E7C42] p-1 rounded-full flex gap-1">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
                ${
                  activeDay === index
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/20"
                }
              `}
            >
              {day.day}
            </button>
          ))}
        </div>
      </div>

      {/* AGENDA LIST */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {days[activeDay].items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 flex items-start gap-6 shadow-sm"
          >
            {/* TIME */}
            <div className="text-lg font-semibold w-20 text-right">{item.time}</div>

            {/* VERTICAL BAR */}
            <div className="w-1 h-full bg-[#45A85A] rounded-full"></div>

            {/* CONTENT */}
            <div className="flex flex-col">
              <p className="text-lg font-medium">{item.title}</p>

              {item.speaker && (
                <p className="text-sm text-gray-600 mt-1">{item.speaker}</p>
              )}

              {item.subtitle && (
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
