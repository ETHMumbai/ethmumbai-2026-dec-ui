"use client";
import ETHMumbaiFooterLogo from "../public/assets/ethmumbai-logo-white.svg";
import Image from "next/image";

import TwitterLogo from "../public/assets/x-logo.png";
import TwitterWhite from "../public/assets/x-white.png";
import FarcasterLogo from "../public/assets/farcaster-logo.png";
import FarcasterWhite from "../public/assets/farcaster-white.png";
import TelegramLogo from "../public/assets/telegram-logo.png";
import TelegramWhite from "../public/assets/telegram-white.png";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#E2231A] pt-5 px-6 sm:px-8 lg:px-12 text-[14px] leading-6 ">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6 w-full py-4">
        {/* 1/2 width on desktop */}
        <div className="sm:w-1/2 w-full text-white p-4 font-medium">
          Subscribe to Newsletter
          {/* <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-6 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md bg-white text-black w-full sm:flex-1"
            />

            <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded-md w-full sm:w-auto hover:shadow-xl hover:text-black transition">
              Subscribe
            </button>
          </div> */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 items-stretch">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 p-2 rounded-md bg-white text-black"
            />

            <button className="flex-none w-36 bg-white text-red-600 font-semibold px-4 py-2 rounded-md hover:shadow-xl hover:text-black transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* 1/4 width on desktop */}
        <div className="sm:w-1/4 w-full lg:ml-30 p-4 text-white font-medium">
          <p className="font-medium">About Us</p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://x.com/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#E2231A] text-white font-normal w-fit
"
            >
              Luma
            </a>

            <a
              href="https://x.com/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#E2231A] text-white font-normal w-fit"
            >
              Media Kit
            </a>

            <a
              href="https://x.com/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#E2231A] text-white font-normal w-fit"
            >
              ETHMumbai 2024
            </a>
          </div>
        </div>

        {/* 1/4 width on desktop */}
        <div className="sm:w-1/4 w-full lg:ml-30 p-4 text-white font-medium">
          <p className="font-medium">Join Us</p>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="https://tally.so/r/nGW5Bz"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#E2231A] text-white font-normal w-fit
"
            >
              Apply to Speak
            </a>

            <a
              href="https://x.com/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#E2231A] text-white font-normal w-fit"
            >
              Apply to Sponsor
            </a>

            <a
              href="https://x.com/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#E2231A] text-white font-normal w-fit"
            >
              Apply to Hack
            </a>
            <a
              href="https://x.com/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#E2231A] text-white font-normal w-fit"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 border-t flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 pb-10">
        {/* Left — Logo + trademark */}
        <div className="flex flex-row gap-3 items-center">
          <Image
            src={ETHMumbaiFooterLogo}
            alt="Twitter"
            width={20}
            height={20}
            className="block"
          />
          <p className="text-medium text-white text-[14px] leading-6">
            © 2026 ETHMumbai. All rights reserved.
          </p>
        </div>

        {/* Right — Social icons */}
        <div className="flex gap-5">
          <a
            href="https://x.com/ethmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-[#E2231A] border-2 border-transparent flex items-center justify-center  transition-all duration-300 ease-in-out"
          >
            <Image
              src={TwitterWhite}
              alt="Twitter"
              width={20}
              height={20}
              className="block"
            />
          </a>

          <a
            href="https://farcaster.xyz/ethmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-[#E2231A] border-2 border-transparent flex items-center justify-center  transition-all duration-300 ease-in-out"
          >
            <Image
              src={FarcasterWhite}
              alt="Twitter"
              width={20}
              height={20}
              className="block"
            />
          </a>

          <a
            href="https://t.me/ethmumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 bg-[#E2231A] border-2 border-transparent flex items-center justify-center  transition-all duration-300 ease-in-out"
          >
            <Image
              src={TelegramWhite}
              alt="Twitter"
              width={20}
              height={20}
              className="block"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
