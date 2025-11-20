"use client";

import Interior from "../public/assets/subhero2/interior.svg";
import Laptop from "../public/assets/subhero2/laptop.svg";
import Handle from "../public/assets/subhero2/handle.svg";
import Screws from "../public/assets/subhero2/screws.svg";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="relative flex overflow-hidden bg-[#3FA9F5] border border-black text-white">
      <Image
        src={Interior}
        alt=""
        className="
      object-cover object-left
      w-full h-full
      relative z-0 scale-x-[1.05] scale-y-[1.05]
    "
      />
      <Image
        src={Laptop}
        alt=""
        className="
       
      w-full h-full
      absolute z-10 scale-x-[1.07]
    "
      />
      <Image
        src={Handle}
        alt=""
        className="
       
       
      absolute z-10  object-center   /* POSITION RELATIVE TO THE LAPTOP */
      -top-[5%]    /* move up/down */
      left-[25%]     /* center horizontally */
      md:scale-x-[1.5] md:scale-y-[1.5] md:top-[3%]

      scale-x-[0.9] scale-y-[0.9] 
    
    "
      />
      <Image
        src={Handle}
        alt=""
        className="
             
      absolute z-10  object-center   /* POSITION RELATIVE TO THE LAPTOP */
      -top-[5%]      /* move up/down */
      left-[72%]     /* center horizontally */
      md:scale-x-[1.5] md:scale-y-[1.5] md:top-[3%]

      scale-x-[0.9] scale-y-[0.9] 
    
    "
      />

      <div className="bg-[#E53931] absolute z-10 top-[28%] left-[15%] p-5 w-[22%] h-[35%] rounded-[14px] ">
        <h2 className="flex p-3 pb-0 font-bold text-3xl">Conference</h2>
        <p className="px-3 pb-0 font-sm text-sm">March 12</p>
        <ul className="p-3 pt-5 font-medium text-lg space-y-2 ">
          <li>Opening Ceremony</li>
          <li>Keynote Speeches</li>
          <li>Team Formation</li>
          <li>Workshops</li>
        </ul>

        <Image
          src={Screws}
          alt=""
          className="      
      absolute z-20 object-center 
      top-[5%]   right-[20%]
    "
        />
      </div>

      <div
        className="
      absolute
      z-10
      top-1/2 left-[51%] 
    -translate-x-1/2 -translate-y-1/2 "
      >
        <h2 className="p-3 pb-0 font-bold text-3xl text-center items-center justify-center">
          2 Days of
          <br /> Innovation
        </h2>
      </div>

      <div
        className="bg-[#E53931] absolute z-10 top-[28%] right-[15%] p-2 xl:p-5 w-[22%] h-[35%] rounded-[14px]   
 "
      >
        <h2 className="p-3 pb-0 font-bold text-3xl">Hackathon</h2>
        <p className="px-3 pb-0 font-sm text-sm">March 12</p>
        <ul className="p-3 pt-5 font-medium text-lg space-y-2">
          <li>Opening Ceremony</li>
          <li>Keynote Speeches</li>
          <li>Team Formation</li>
          <li>Workshops</li>
        </ul>

        <Image
          src={Screws}
          alt=""
          className="      
      absolute z-20 object-center
      top-[5%] right-[15%] scale-x-[-1]
    "
        />
      </div>
      <button className="bg-white absolute z-10 top-[70%] left-[18%] p-2 text-center text-[#E53931] w-[15%]  rounded-[14px] cursor-pointer">
        <h2 className=" font-medium text-xl">Conference</h2>
      </button>
      <button className="bg-white absolute z-10 top-[70%] right-[18%] p-2 text-center text-[#E53931] w-[15%]  rounded-[14px] cursor-pointer ">
        <h2 className=" font-medium text-xl">Hackathon</h2>
      </button>
      <></>
    </section>
  );
}
