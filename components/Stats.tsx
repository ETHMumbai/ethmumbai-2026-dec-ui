"use client";

import Stop from "../public/assets/subhero1/medium/stop.svg";
import StopSm from "../public/assets/subhero1/small/stop.svg";

import Stat from "../public/assets/subhero1/medium/stats.svg";
import StatSm from "../public/assets/subhero1/small/stats.svg";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-white border border-black text-white">
      <div className="hidden md:flex">
        <Image
          src={Stat}
          alt=""
          className="
      object-cover w-full h-full
      px-6 py-10          /* mobile */
   
      md:px-20 md:py-16   /* tablets */
      lg:px-32 lg:py-24   /* laptops */
      xl:px-40 xl:py-32   /* large screens */
    "
        />
      </div>

      <div className="flex md:hidden">
        <Image
          src={StatSm}
          alt=""
          className="
      object-cover w-full h-full
      px-6 py-10          /* mobile */
      sm:px-12 sm:py-10   /* small screens */
  
    "
        />
      </div>
    </section>
  );
}
