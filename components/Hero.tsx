"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Bus from "../public/assets/hero/bus-cropped.png";
import Road from "../public/assets/hero/road-cropped.png";
import Cityscape from "../app/assets/hero/cityscape-img.png";

import Balloon from "../public/assets/hero/balloon.png";
import Cloud1 from "../public/assets/hero/cloud1.png";
import Cloud2 from "../public/assets/hero/cloud2.png";
import Plane from "../public/assets/hero/plane.png";

export default function Hero() {
  const balloonRef = useRef<HTMLImageElement | null>(null);
  const [screenType, setScreenType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenType('mobile');
      else if (width < 1024) setScreenType('tablet');
      else setScreenType('desktop');
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Balloon Follow Logic
  useEffect(() => {
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const speed = 0.06; // smooth delayed follow

    const animate = () => {
      x += (targetX - x) * speed;
      y += (targetY - y) * speed;

      if (balloonRef.current) {
        balloonRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      requestAnimationFrame(animate);
    };
    animate();

    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;

      if (e instanceof TouchEvent) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // keeps balloon away from cursor
      targetX = clientX - 40;
      targetY = clientY - 80;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  // Animation start and bottom positions based on screen type
  const getBusInitialX = () => {
    if (screenType === 'mobile') return 'calc(80vw + 100%)';
    if (screenType === 'tablet') return 'calc(60vw + 100%)';
    return 'calc(50vw + 100%)';
  };
  const getBusInitialY = () => {
    if (screenType === 'mobile') return -110;
    if (screenType === 'tablet') return 50;
    return 40; // desktop
  };

  const getBusInitialScale = () => {
    if (screenType === 'mobile') return 0.2;
    if (screenType === 'tablet') return 0.2;  
    return 0.1;
  };

  const getBusBottom = () => {
    if (screenType === 'mobile') return '60px';
    if (screenType === 'tablet') return '60px'; 
    return '80px';
  };


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
      <div className="relative z-10 flex flex-col items-center w-full px-4 pt-[7rem] sm:pt-[8rem] md:pt-[7rem] lg:pt-[7rem] max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] flex-shrink-0">
        <h1
          className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
                     text-[3.4rem] sm:text-[4.4rem] md:text-[4.6rem] lg:text-[6rem] leading-[1.05]"
        >
          ETHMUMBAI
        </h1>

        <p className="mt-[1rem] font-semibold text-lg sm:text-xl md:text-2xl text-gray-100">
          BEST Conference & Hackathon
        </p>

        <div className="mt-[1.2rem] flex items-center gap-2 text-md sm:text-lg md:text-xl text-gray-100">
          <Calendar className="w-5 h-5" />
          <span>12–15 March 2026</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-[1.5rem] flex flex-col sm:flex-row items-center gap-5 sm:gap-4 w-full sm:w-auto">
          <a
            href="https://tally.so/r/nGW5Bz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-white border border-white text-[#E2231A]
                        font-semibold text-base px-6 py-3 rounded-[14px]
                        hover:bg-gray-300 cursor-pointer transition-all duration-200"
            >
              Apply to Sponsor
            </button>
          </a>

          <a
            href="https://tally.so/r/3NkdGb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-white border border-white text-[#E2231A] font-semibold text-base px-6 py-3
                        rounded-[14px] hover:bg-gray-300 cursor-pointer transition-all duration-200"
            >
              Apply to Speak
            </button>

          </a>
        </div>
      </div>

      {/* Road + Bus */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none ">
        <div className="relative w-full ">

          {/* Road Image */}
          <Image src={Road} alt="Road"
            className="
              w-full h-auto block
              scale-[2]           /* mobile */
              sm:scale-[1.6]      /* small screens */
              md:scale-[1.3]      /* tablet / iPad */
              lg:scale-[1]        /* desktop */
              origin-bottom
              lg:-translate-y-1
              md:-translate-y-2
              sm:-translate-y-1
              -translate-y-3
              transition-transform duration-300
            "
          />

          {/* Bus with animation */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ bottom: getBusBottom() }}
            initial={{
              x: getBusInitialX(),
              y: getBusInitialY(),
              scale: getBusInitialScale(),
              opacity: 0.8,
              rotate: 0
            }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 3.5, ease: 'easeOut', delay: 0 }}
          >
            <Image
              src={Bus}
              alt="Bus"
              className="
                w-auto h-auto
                scale-[1.3]       /* mobile */
                sm:scale-[1.4]    /* small screens / tablet */
                md:scale-[1.1]    /* tablet */
                lg:scale-[0.92]   /* desktop */
                xl:scale-[0.62]   /* large desktop */
                origin-bottom
                transition-transform duration-300
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <img ref={balloonRef} src="/assets/hero/balloon.png" alt="Balloon" className="fixed top-0 left-0 w-auto h-auto z-[50] pointer-events-none select-none" draggable={false} />
      <img src="/assets/hero/cloud2.png" alt="Cloud" className="absolute left-[16%] top-[50%] w-auto h-auto z-[5] pointer-events-none select-none" />
      <img src="/assets/hero/cloud1.png" alt="Cloud" className="absolute right-[24%] top-[45%] w-auto h-auto z-[5] pointer-events-none select-none" />
      <img src="/assets/hero/plane.png" alt="Plane" className="absolute right-[12%] top-[44%] w-auto h-auto z-[5] pointer-events-none select-none" />
    </section>
  );
}