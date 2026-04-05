"use client";

import Stat from "../public/assets/subhero1/medium/stats_new.svg";
import StatSm from "../public/assets/subhero1/small/stats_new.svg";
import Image from "next/image";

export default function Stats() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-white border border-black text-white">

      {/* YouTube Video */}
      <div className="w-full aspect-[16/10] md:aspect-[16/7] px-6 md:px-20 lg:px-32 xl:px-40 pt-8 pb-2 md:pt-20 md:pb-3 lg:pt-18 lg:pb-0">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/_8ZoQDBC448?loop=1&playlist=_8ZoQDBC448&controls=1&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Medium Screens */}
      <div className="hidden md:flex">
        {/* <a
          href="https://2024.ethmumbai.in/"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <Image
          src={Stat}
          alt=""
          className="
            object-cover w-full h-full
            px-6 py-12     
            md:px-20 md:pt-8 md:pb-16   
            lg:px-32 lg:pt-12 lg:pb-24  
            xl:px-40 xl:pt-14 xl:pb-32  
          "
        />
      </div>

      {/* Small Screens */}
      <div className="flex md:hidden">
        {/* <a
          href="https://2024.ethmumbai.in/"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <Image
          src={StatSm}
          alt=""
          className="
      object-cover w-full h-full
       py-10  px-5 scale-100       
     
    "
        />
        {/* </a> */}
      </div>
    </section>
  );
}