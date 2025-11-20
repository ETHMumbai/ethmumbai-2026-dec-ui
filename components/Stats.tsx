"use client";

import StatsImage from "../public/assets/subhero1/stats.svg";
import Icon from "../public/assets/ethmumbai-logo-icon.svg";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-white border border-black text-white">
      <Image
        src={StatsImage}
        alt=""
        className="
      object-cover w-full h-full
      px-6 py-10          /* mobile */
      sm:px-12 sm:py-10   /* small screens */
      md:px-20 md:py-16   /* tablets */
      lg:px-32 lg:py-24   /* laptops */
      xl:px-40 xl:py-32   /* large screens */
    "
      />
      <Image
        src={Icon}
        alt=""
        className=" h-[38%] w-1/4 left-[1%] top-[3%]
       absolute z-10
      px-6 py-10          /* mobile */
      sm:px-12 sm:py-10   /* small screens */
      md:px-20 md:w-1/3 md:h-[40%] md:py-16   /* tablets */
      lg:px-32 lg:py-24   /* laptops */
      xl:px-40 xl:py-32   /* large screens */
    "
      />
      <Image
        src={Icon}
        alt=""
        className=" h-[38%] w-1/4 right-[1%] top-[3%]
       absolute z-10
      px-6 py-10          /* mobile */
      sm:px-12 sm:py-10   /* small screens */
      md:px-20 md:w-1/3 md:h-[40%] md:py-16   /* tablets */
      lg:px-32 lg:py-24   /* laptops */
      xl:px-40 xl:py-32   /* large screens */
    "
      />
    </section>
  );
}
