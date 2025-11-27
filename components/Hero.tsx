"use client";

import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden bg-[#E2231A] border border-black text-white">
      {/* Accent overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute left-[10%] top-[20%] -translate-y-1/3 
                     w-[18rem] h-[18rem] bg-[#0A0A0A] blur-[4rem] rounded-full"
        />
        <div
          className="absolute right-[15%] top-[15%] 
                     w-[7rem] h-[6rem] bg-[#0A0A0A] blur-[2rem] rounded-full"
        />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[4rem] sm:mt-[5rem] md:mt-[6rem] lg:mt-[7.5rem]">
        <h1
          className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
                     text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-none"
        >
          ETHMUMBAI
        </h1>

        <p className="mt-[1.3rem] font-semibold text-2xl text-gray-100">
          BEST Conference & Hackathon
        </p>

        <div className="mt-[1.2rem] flex items-center gap-2 text-xl font-medium text-gray-100">
          <Calendar className="w-5 h-5" />
          <span>12–15 March 2026</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-[1.5rem] flex items-center gap-4">
          <button
            className="bg-white text-[#E2231A] font-semibold text-base px-6 py-3
                       rounded-[14px] hover:bg-gray-300 cursor-pointer transition-all duration-200"
          >
            Apply to Speak
          </button>

          <button
            className="bg-white border border-white text-[#E2231A]
                       font-semibold text-base px-6 py-3 rounded-[14px]
                       hover:bg-gray-300 cursor-pointer transition-all duration-200"
          >
            Apply to Sponsor
          </button>
        </div>
      </div>

      {/* Cityscape and Road Layers */}
      <img
        src="/assets/hero/road.png"
        alt="Road graphic"
        className="absolute bottom-[-2.5rem] left-0 w-full h-auto z-[5] pointer-events-none select-none"
      />

      <img
        src="/assets/hero/cityscape.png"
        alt="Cityscape"
        className="absolute bottom-[-2.5rem] left-0 w-full h-auto z-[4] pointer-events-none select-none"
      />

      {/* Bus Layer — enters diagonally, scales, and stops */}
      <img
        src="/assets/hero/bus.png"
        alt="Bus graphic"
        className="absolute top-[5.8rem] left-1/2 -translate-x-1/2 
                   w-auto h-auto z-[6] pointer-events-none select-none
                   animate-[busEnter_8s_ease-out_forwards]"
      />

      {/* Floating Elements */}
      <img
        src="/assets/hero/balloon.png"
        alt="Balloon"
        className="absolute left-[26%] top-[49%] w-auto h-auto z-[5] pointer-events-none select-none"
      />

      <img
        src="/assets/hero/cloud2.png"
        alt="Cloud"
        className="absolute left-[16%] top-[50%] w-auto h-auto z-[5] pointer-events-none select-none"
      />

      <img
        src="/assets/hero/cloud1.png"
        alt="Cloud"
        className="absolute right-[24%] top-[45%] w-auto h-auto z-[5] pointer-events-none select-none"
      />

      <img
        src="/assets/hero/plane.png"
        alt="Plane"
        className="absolute right-[12%] top-[44%] w-auto h-auto z-[5] pointer-events-none select-none"
      />
    </section>
  );
}
