"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const balloonRef = useRef<HTMLImageElement | null>(null);
  const [screenType, setScreenType] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenType("mobile");
      else if (width < 1024) setScreenType("tablet");
      else setScreenType("desktop");
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
    if (screenType === "mobile") return "calc(80vw + 100%)";
    if (screenType === "tablet") return "calc(60vw + 100%)";
    return "calc(50vw + 100%)";
  };
  const getBusInitialY = () => {
    if (screenType === "mobile") return -110;
    if (screenType === "tablet") return 50;
    return 40; // desktop
  };

  const getBusInitialScale = () => {
    if (screenType === "mobile") return 0.2;
    if (screenType === "tablet") return 0.2;
    return 0.1;
  };

  const getBusBottom = () => {
    if (screenType === "mobile") return "60px";
    if (screenType === "tablet") return "60px";
    return "80px";
  };

  return (
    <section className="relative flex justify-center overflow-hidden bg-[#E2231A] border border-black text-white">
      {/* Centered content */}
      <div
        className="relative z-10 flex flex-col items-center w-full px-4 mt-2
                      py-[9rem] sm:py-[9rem] md:py-[6rem] lg:py-[7rem]
                      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] gap-3 flex-shrink-0"
      >
        <h1
          className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
                       text-[3rem] sm:text-[4.8rem] md:text-[4rem] lg:text-[5rem] leading-[1.05]"
        >
          Buy Tickets
        </h1>

        <p className="mt-[1rem] font-medium text-center text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100">
          Secure your spot at ETHMumbai 2026
        </p>

        {/* Action Buttons */}
        {/* <div className="mt-[1.5rem] sm:mt-[2rem] flex flex-col sm:flex-row items-center gap-5 sm:gap-4 w-full sm:w-auto">
          <Link href="/buy-tickets">
            <button
              className="bg-white border border-white text-[#E2231A]
                        font-semibold text-base px-6 py-3 rounded-[14px]
                        hover:bg-gray-300 cursor-pointer transition-all duration-200"
            >
              Buy Tickets
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
