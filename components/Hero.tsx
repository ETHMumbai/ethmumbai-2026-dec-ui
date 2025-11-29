"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Bus from "../public/assets/hero/bus-cropped.svg";
import Road from "../public/assets/hero/road-cropped.svg";
import Cityscape from "../public/assets/hero/cityscape-cropped.svg";

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
      <div className="relative z-10 flex flex-col items-center w-full px-4
                      pt-[8rem] sm:pt-[8rem] md:pt-[6rem] lg:pt-[7rem]
                      max-w-[95%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%] flex-shrink-0">
        <h1 className="font-[MPlusRounded1c] font-extrabold tracking-[-0.05em]
                       text-[4rem] sm:text-[5.8rem] md:text-[5rem] lg:text-[6rem] leading-[1.05]">
          ETHMUMBAI
        </h1>

        <p className="mt-[1rem] font-semibold text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-100">
          BEST Conference & Hackathon
        </p>

        <div className="mt-[1.2rem] flex items-center gap-2 text-md sm:text-lg md:text-xl text-gray-100">
          <Calendar className="w-5 h-5" />
          <span>12 – 15 March 2026</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-[1.5rem] sm:mt-[2rem] flex flex-col sm:flex-row items-center gap-5 sm:gap-4 w-full sm:w-auto">
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
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          bottom:
            screenType === "mobile"
              ? "70px" // mobile
              : screenType === "tablet"
                ? "20px" // tablet
                : "0px", // desktop
        }}
      >
        <div className="relative w-full ">
          {/* Cityscape Image */}
          <Image
            src={Cityscape}
            alt="Cityscape"
            priority    
            width={2000} 
            height={600}
            className="w-full h-auto block origin-bottom transition-transform duration-300"
            style={{
              transform:
                screenType === "mobile"
                  ? "scale(2) translateY(-40px)" // mobile
                  : screenType === "tablet"
                    ? "scale(1.6) translateY(-40px)" // tablet
                    : "scale(1) translateY(0px)", // desktop
            }}
          />

          {/* Road Image */}
          <Image src={Road} alt="Road"
            priority     
            width={2000} 
            height={600}
            className="
              w-full h-auto block
              scale-[2]           /* mobile */
              sm:scale-[1.6]      /* small screens */
              md:scale-[1.3]      /* tablet / iPad */
              lg:scale-[1]        /* desktop */
              origin-bottom
              lg:-translate-y-1
              md:-translate-y-1
              sm:-translate-y-1
              -translate-y-1
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
              rotate: 0,
            }}
            animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 3.5, ease: "easeOut", delay: 0 }}
          >
            <Image
              src={Bus}
              alt="Bus"
              className="
                w-auto h-auto
                scale-[1.6]       /* mobile */
                sm:scale-[1.4]    /* small screens / tablet */
                md:scale-[1]    /* tablet */
                lg:scale-[0.82]   /* desktop */
                xl:scale-[0.62]   /* large desktop */
                origin-bottom
                transition-transform duration-300
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <img
        ref={balloonRef}
        src="/assets/hero/balloon.png"
        alt="Balloon"
        className="fixed top-0 left-0 w-auto h-auto z-[50] pointer-events-none select-none"
        draggable={false}
      />

      <motion.img
        src="/assets/hero/plane.png"
        alt="Plane"
        className="absolute w-auto h-auto z-[5] pointer-events-none select-none"
        style={{
          right:
            screenType === "mobile"
              ? "1vw"
              : screenType === "tablet"
                ? "1vw"
                : "7vw",
          width:
            screenType === "mobile"
              ? "45vw"
              : screenType === "tablet"
                ? "30vw"
                : "20vw",
        }}
        initial={{
          y:
            screenType === "mobile"
              ? "70vh" // start below final
              : screenType === "tablet"
                ? "55vh"
                : "50vh",
          x: -80, // start slightly left
          opacity: 0,
        }}
        animate={{
          y:
            screenType === "mobile"
              ? "50vh" // final position
              : screenType === "tablet"
                ? "45vh"
                : "42vh",
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 4, ease: "easeOut" }}
      />



      {/* Cloud 2 */}
      <motion.img
        src="/assets/hero/cloud2.png"
        alt="Cloud"
        className="absolute w-auto h-auto z-[5] pointer-events-none select-none"
        style={
          screenType === "mobile"
            ? { left: "5vw", top: "50vh", width: "35vw" }
            : screenType === "tablet"
              ? { left: "8vw", top: "45vh", width: "25vw" }
              : { left: "16vw", top: "44vh", width: "18vw" }
        }
        animate={{ translateX: [0, 10, 0] }} // use translateX instead of x
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cloud 1 */}
      <motion.img
        src="/assets/hero/cloud1.png"
        alt="Cloud"
        className="absolute w-auto h-auto sm:z-[5] pointer-events-none select-none"
        style={
          screenType === "mobile"
            ? { right: "5vw", top: "58vh", width: "35vw" }
            : screenType === "tablet"
              ? { right: "18vw", top: "48vh", width: "30vw" }
              : { right: "25vw", top: "48vh", width: "15vw" }
        }
        animate={{ translateX: [0, -10, 0] }} // move in opposite direction
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
