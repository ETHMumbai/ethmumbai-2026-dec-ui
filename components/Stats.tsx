"use client";

import Stop from "../public/assets/subhero1/medium/stop.svg";
import StopSm from "../public/assets/subhero1/small/stop.svg";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-white border border-black text-white">
      <div className="hidden md:flex">
        <Image
          src={Stop}
          alt=""
          className="
      object-cover w-full h-full
      px-6 py-10          /* mobile */
   
      md:px-20 md:py-16   /* tablets */
      lg:px-32 lg:py-24   /* laptops */
      xl:px-40 xl:py-32   /* large screens */
    "
        />
        <div
          className="
      absolute inset-0 
      flex items-center justify-center
  "
        >
          {/* 3-column responsive box */}
          <div
            className="
        grid grid-cols-3 gap-[25%]
        text-white
        p-6 pb-0  rounded-xl
        w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%]
      "
          >
            <div className="text-center md:text-6xl md:ml-3 lg:text-7xl lg:-ml-3 xl:text-8xl 2xl:text-8xl font-bold 2xl:-ml-5">
              204
            </div>
            <div className="text-center md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-bold">
              64
            </div>
            <div className="text-center md:text-6xl md:-ml-14 lg:text-7xl lg:-ml-11 xl:text-8xl 2xl:text-8xl font-bold xl:-ml-18 2xl:-ml-10">
              $29K
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden">
        <Image
          src={StopSm}
          alt=""
          className="
      object-cover w-full h-full
      px-6 py-10          /* mobile */
      sm:px-12 sm:py-10   /* small screens */
  
    "
        />
        <div className="absolute inset-0 flex items-center justify-center -left-[20%]">
          {/* 3-row responsive box */}
          <div
            className="
        grid grid-rows-3 sm:gap-15 gap-15 max-[400px]:gap-12
        w-[32%] min-[500px]:w-[28%] min-[500px]:text-5xl min-[500px]:gap-16 sm:w-[25%] 
         text-white
        p-6 rounded-xl
      "
          >
            <div className="text-right sm:text-5xl text-4xl font-bold rounded-md ">
              204
            </div>
            <div className="text-right sm:text-5xl text-4xl font-bold rounded-md">
              64
            </div>
            <div className="text-right sm:text-5xl text-4xl font-bold rounded-md">
              $29K
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
