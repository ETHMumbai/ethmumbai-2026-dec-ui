"use client";

import Stat from "../public/assets/subhero1/medium/stats_new.svg";
import StatSm from "../public/assets/subhero1/small/stats_new.svg";
import Image from "next/image";

export default function AfterMovie() {
  return (
    <section className="relative bg-[#FFFFFF] flex flex-col justify-center overflow-hidden text-white">

      {/* YouTube Video */}
      <div className="w-full aspect-[16/10] md:aspect-[16/7] px-6 md:px-20 lg:px-32 xl:px-40 pt-8 pb-2 md:pt-20 md:pb-3 lg:pt-18 lg:pb-10 xl:pt-14 xl:pb-16 pb-8">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/_8ZoQDBC448?loop=1&playlist=_8ZoQDBC448&controls=1&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        />
      </div>
    </section>
  );
}