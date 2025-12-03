"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-[#E2231A] border border-black text-white">

     {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 mt-2
                      py-[7rem] sm:py-[9rem] md:py-[6rem] lg:py-[7rem]
                      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] gap-3 flex-shrink-0">
        <h1 className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
                       text-[3rem] sm:text-[4.8rem] md:text-[4rem] lg:text-[5rem] leading-[1.05]">
          Conference
        </h1>
 
        <p className="mt-[1rem] font-medium text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100">
          10 hours of learning, building, and connecting with the Ethereum community
        </p>

      </div>
    </section>
  );
}
