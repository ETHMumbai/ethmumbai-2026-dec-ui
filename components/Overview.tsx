"use client";

import Interior from "../public/assets/subhero2/medium/interior.svg";
import Laptop from "../public/assets/subhero2/medium/laptop.svg";
import Handle from "../public/assets/subhero2/medium/handle.svg";
import Screws from "../public/assets/subhero2/medium/screws.svg";

import InteriorSm from "../public/assets/subhero2/small/interior.svg";
import LaptopSm from "../public/assets/subhero2/small/laptop.svg";
import Image from "next/image";
import { Box } from "./Box";

export default function Overview() {
  return (
    <section className=" bg-[#3FA9F5] border border-black text-white">
      {/* Medium */}
      <div className="hidden relative md:flex overflow-hidden">
        {/* Interior */}
        <Image
          src={Interior}
          alt=""
          className="object-cover object-left w-full h-full relative z-0 scale-x-[1.05] scale-y-[1.05]"
        />

        {/* Laptop Man */}
        <Image
          src={Laptop}
          alt=""
          className="w-full h-full absolute z-10 scale-x-[1.07]"
        />

        {/* Handles */}
        <Image
          src={Handle}
          alt=""
          className="
      absolute z-10  object-center   
      -top-[5%] 
      left-[25%]
      md:scale-x-[1] md:scale-y-[1] md:-top-[1%]
      lg:scale-x-[1.5] lg:scale-y-[1.5] lg:top-[3%]
      scale-x-[0.9] scale-y-[0.9] 
    
    "
        />
        <Image
          src={Handle}
          alt=""
          className="
             
      absolute z-10  object-center  
      -top-[5%]     
      left-[72%]     
      md:scale-x-[1] md:scale-y-[1] md:-top-[1%]
      lg:scale-x-[1.5] lg:scale-y-[1.5] lg:top-[3%]

      scale-x-[0.9] scale-y-[0.9] 
    
    "
        />

        {/* Cards */}

        {/* Conference */}
        <div className="bg-[#E53931] absolute z-10 top-[28%] left-[20%] xl:p-3 md:p-4 w-[22%] h-[35%] rounded-[14px]">
          <Image
            src={Screws}
            fill
            alt=""
            className=" absolute z-20 object-center
       scale-x-[0.95] scale-y-[0.95] 
    "
          />

          <h2 className=" xl:pb-0 xl:text-3xl xl:p-3 font-bold text-2xl ">
            Conference
          </h2>
          <p className="xl:px-3 xl:text-sm lg:pb-3 pb-0 font-light text-xs">
            March 12
          </p>
          <ul className="xl:p-3 xl:pt-2 xl:text-xl xl:space-y-2 lg:text-sm pt-1 font-light  text-xs space-y-1 ">
            <li>Opening Ceremony</li>
            <li>Keynote Speeches</li>
            <li>Team Formation</li>
            <li>Workshops</li>
          </ul>
        </div>

        {/* 4 Days of Innovation */}
        <div
          className="
      absolute
      z-10
      top-1/2 left-[51%] 
    -translate-x-1/2 -translate-y-1/2 "
        >
          <h2 className="p-3 pb-0 font-bold md:text-2xl lg:text-3xl text-center items-center justify-center mx-auto">
            4 Days of
            <br /> Innovation
          </h2>
        </div>

        {/* Hackathon */}
        <div className="bg-[#E53931] absolute z-10 top-[28%] right-[18%] xl:p-3 md:p-4 w-[22%] h-[35%] rounded-[14px]">
          <Image
            src={Screws}
            fill
            alt=""
            className=" absolute z-20 object-center
       scale-x-[-0.95] scale-y-[0.95] 
    "
          />

          <h2 className=" xl:pb-0 xl:text-3xl xl:p-3 font-bold text-2xl ">
            Hackathon
          </h2>
          <p className="xl:px-3 xl:text-sm lg:pb-3 pb-0 font-light text-xs">
            March 12
          </p>
          <ul className="xl:p-3 xl:pt-2 xl:text-xl xl:space-y-2 lg:text-sm pt-1 font-light  text-xs space-y-1 ">
            <li>Opening Ceremony</li>
            <li>Keynote Speeches</li>
            <li>Team Formation</li>
            <li>Workshops</li>
          </ul>
        </div>

        {/* <button className="bg-white absolute z-10 top-[70%] left-[18%] p-2 text-center text-[#E53931] w-[15%]  rounded-[14px] cursor-pointer">
        <h2 className=" font-medium text-xl">Conference</h2>
      </button>
      <button className="bg-white absolute z-10 top-[70%] right-[18%] p-2 text-center text-[#E53931] w-[15%]  rounded-[14px] cursor-pointer ">
        <h2 className=" font-medium text-xl">Hackathon</h2>
      </button> */}
        <></>
      </div>

      {/* Small */}
      <div className="md:hidden overflow-hidden flex ">
        <Image
          src={InteriorSm}
          alt=""
          className="object-cover object-left w-full h-full relative z-0 scale-x-[1.05] scale-y-[1.09]
    "
        />

        {/* 4 Days of Innovation */}
        <div className="absolute items-start justify-center py-10 sm:py-16 px-4  left-[32%] sm:left-[40%]">
          <h2
            className="font-bold sm:text-2xl text-xl leading-7 tracking-[1px] text-center text-[#ffffff] "
            role="heading"
            aria-level={2}
          >
            4 days of <br />
            Innovation
          </h2>
        </div>

        {/* Cards */}
        <div className="absolute items-center justify-center bg-amber-200 w-full flex translate-y-50">
          <div className="absolute flex flex-col gap-4 min-sm:translate-y-50 translate-y-35 w-[50%]">
            {/* Conference */}
            <Box className="relative flex-1 w-full p-6 bg-[#E53931] text-white rounded-xl">
              <Image
                src={Screws}
                fill
                alt=""
                className="z-20 object-center p-2 "
              />

              <h2 className=" pb-0  font-bold text-2xl ">Conference</h2>
              <p className=" font-light pb-2 text-xs">March 12</p>
              <ul className="pt-1 font-light  text-xs space-y-1 ">
                <li>Opening Ceremony</li>
                <li>Keynote Speeches</li>
                <li>Team Formation</li>
                <li>Workshops</li>
              </ul>
            </Box>

            {/* Hackathon */}
            <Box className="relative flex-1 p-6 bg-[#E53931] text-white rounded-xl">
              <Image
                src={Screws}
                fill
                alt=""
                className="z-20 object-center p-2"
              />

              <h2 className=" pb-0  font-bold text-2xl ">Hackathon</h2>
              <p className=" font-light pb-2 text-xs">March 12</p>
              <ul className="pt-1 font-light  text-xs space-y-1 ">
                <li>Opening Ceremony</li>
                <li>Keynote Speeches</li>
                <li>Team Formation</li>
                <li>Workshops</li>
              </ul>
            </Box>
          </div>
        </div>

        {/* Conference */}
        {/* <div className="bg-[#E53931] absolute z-10 w-[50%] h-[35%] sm:w-[50%] sm:h-[50%] left-[25%] translate-y-52 sm:left-[25%] sm:translate-y-60 p-6 rounded-[14px]">
          <Image
            src={Screws}
            fill
            alt=""
            className=" absolute z-20 object-center
       scale-x-[0.95] scale-y-[0.95] 
    "
          />

          <h2 className=" pb-0  font-bold text-2xl ">Conference</h2>
          <p className=" font-light pb-2 text-xs">March 12</p>
          <ul className="pt-1 font-light  text-xs space-y-1 ">
            <li>Opening Ceremony</li>
            <li>Keynote Speeches</li>
            <li>Team Formation</li>
            <li>Workshops</li>
          </ul>
        </div> */}

        {/* Hackathon */}
        {/* <div className="bg-[#E53931] absolute z-10 w-[50%] h-[35%] sm:w-[50%] sm:h-[50%] left-[25%] translate-y-140 sm:left-[25%] sm:translate-y-155 p-8 rounded-[14px]">
          <Image
            src={Screws}
            fill
            alt=""
            className=" absolute z-20 object-center
       scale-x-[0.95] scale-y-[0.95] 
    "
          />

          <h2 className=" pb-0  font-bold text-2xl ">Hackathon</h2>
          <p className=" font-light pb-2 text-xs">March 12</p>
          <ul className="pt-1 font-light  text-xs space-y-1 ">
            <li>Opening Ceremony</li>
            <li>Keynote Speeches</li>
            <li>Team Formation</li>
            <li>Workshops</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}
