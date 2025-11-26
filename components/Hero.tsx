"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"

import Bus from "../app/assets/hero/bus-img.png"
import Road from "../app/assets/hero/road-img.png"
import Cityscape from "../app/assets/hero/cityscape-img.png"

import Balloon from "../app/assets/hero/balloon.png"
import Cloud1 from "../app/assets/hero/cloud1.png"
import Cloud2 from "../app/assets/hero/cloud2.png"
import Plane from "../app/assets/hero/plane.png"

export default function Hero() {
  return (
    <section
      className="
    relative flex flex-col items-center
    min-h-screen
    bg-[#E2231A] border border-black text-white
    overflow-hidden
  "
    >
      {/* Accent overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute left-[10%] top-[20%] -translate-y-1/3 w-[18rem] h-[18rem] bg-[#0A0A0A] blur-[4rem] rounded-full" />
        <div className="absolute right-[15%] top-[15%] w-[7rem] h-[6rem] bg-[#0A0A0A] blur-[2rem] rounded-full" />
      </div>

      {/* MAIN CONTENT */}
      <div
        className="
      relative z-10 flex flex-col items-center text-center
      w-full px-4
      pt-[7rem] sm:pt-[8rem] md:pt-[7rem] lg:pt-[7rem]
      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%]
      flex-shrink-0
    "
      >
        {/* --- HEADLINE --- */}
        <h1
          className="
        font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
        text-[3.4rem] sm:text-[4.4rem] md:text-[4.6rem] lg:text-[6rem]
        leading-[1.05]
      "
        >
          ETHMUMBAI
        </h1>

        <p className="mt-[1rem] font-semibold text-lg sm:text-xl md:text-2xl text-gray-100">
          BEST Conference & Hackathon
        </p>

        <div className="mt-[1rem] flex items-center gap-2 text-md sm:text-lg md:text-xl text-gray-100">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>12–15 March 2026</span>
        </div>

        {/* --- BUTTONS --- */}
        <div
          className="
        mt-[1.5rem] flex flex-col sm:flex-row
        items-center gap-5 sm:gap-4
        w-full sm:w-auto
      "
        >
          <button className="bg-white border border-white text-[#E2231A] font-semibold text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded-[14px] hover:bg-gray-300 transition-all sm:w-auto">
            Apply to Hack
          </button>

          <button className="bg-white text-[#E2231A] font-semibold text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded-[14px] hover:bg-gray-300 transition-all sm:w-auto">
            Buy Tickets
          </button>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 w-full z-[6] pointer-events-none">

  {/* Wrapper that scales down on desktop and scales up on mobile */}
  {/* ROAD */}
{/* === ROAD === */}
<div className="absolute bottom-0 left-0 w-full">
  <Image
    src={Road || "/placeholder.svg"}
    alt="Road"
    className="
      w-full h-auto block
      transform origin-bottom
      md:scale-[1]
      sm:scale-[1.08]
      xs:scale-[1.14]
    "
  />
</div>

{/* === BUS (animated) === */}
<div
  className="
    absolute left-0 w-full flex justify-center
    bottom-[12%] sm:bottom-[14%] xs:bottom-[16%]
    pointer-events-none
  "
>
  <Image
    src={Bus || "/placeholder.svg"}
    alt="Bus"
    className="
      w-auto h-auto
      transform origin-bottom
      bus-enter-animation     /* <-- the animation */
    "
  />
</div>







        {/* FLOATING ELEMENTS */}
        <Image
          src={Balloon || "/placeholder.svg"}
          alt="Balloon"
          className="absolute left-[15%] sm:left-[20%] md:left-[26%] top-[45%] sm:top-[48%] md:top-[49%] z-[5] w-8 sm:w-10 md:w-12 h-auto"
        />
        <Image
          src={Cloud2 || "/placeholder.svg"}
          alt="Cloud"
          className="absolute left-[8%] sm:left-[12%] md:left-[16%] top-[48%] sm:top-[50%] md:top-[50%] z-[5] w-10 sm:w-12 md:w-14 h-auto"
        />
        <Image
          src={Cloud1 || "/placeholder.svg"}
          alt="Cloud"
          className="absolute right-[12%] sm:right-[16%] md:right-[24%] top-[42%] sm:top-[44%] md:top-[45%] z-[5] w-10 sm:w-12 md:w-14 h-auto"
        />
        <Image
          src={Plane || "/placeholder.svg"}
          alt="Plane"
          className="absolute right-[6%] sm:right-[8%] md:right-[12%] top-[40%] sm:top-[42%] md:top-[44%] z-[5] w-10 sm:w-12 md:w-16 h-auto"
        />
      </div>

    </section>

  )
}
