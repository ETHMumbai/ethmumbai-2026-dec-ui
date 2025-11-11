"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import TwitterLogo from "../public/assets/x-logo.png";
import TwitterWhite from "../public/assets/x-white.png";
import FarcasterLogo from "../public/assets/farcaster-logo.png";
import FarcasterWhite from "../public/assets/farcaster-white.png";
import TelegramLogo from "../public/assets/telegram-logo.png";
import TelegramWhite from "../public/assets/telegram-white.png";
import EthMumbaiLogo from "../public/assets/ethmumbai-logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-[4.25rem] bg-white/80 border-b border-gray-200 backdrop-blur-md z-50 box-border">
      <div className="mx-auto flex items-center justify-between h-full px-4 sm:px-6 md:px-8">
        {/* Logo Section */}
        
          <Image
            src={EthMumbaiLogo}
            alt="ETHMumbai Logo"
            width={128}
            height={40}
            
          />
          
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium text-gray-800">
          <a href="#about" className="hover:text-black transition">
            Conference
          </a>
          <a href="#schedule" className="hover:text-black transition">
            Hackathon
          </a>
          <a href="#sponsors" className="hover:text-black transition">
            Buy Tickets
          </a>
        </div>

        {/* Right Section — Socials */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <div className="flex flex-row items-center gap-3 sm:gap-4">
            {/* Twitter */}
            <a
              href="https://x.com/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
                border-2 border-transparent transition-all duration-300 ease-in-out
                hover:bg-white hover:border-[#E2231A]"
            >
              <Image
                src={TwitterWhite}
                alt="Twitter"
                width={20}
                height={20}
                className="block group-hover:hidden"
              />
              <Image
                src={TwitterLogo}
                alt="Twitter"
                width={20}
                height={20}
                className="hidden group-hover:block"
              />
            </a>

            {/* Farcaster */}
            <a
              href="https://farcaster.xyz/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
                border-2 border-transparent transition-all duration-300 ease-in-out
                hover:bg-white hover:border-[#E2231A]"
            >
              <Image
                src={FarcasterWhite}
                alt="Farcaster"
                width={20}
                height={20}
                className="block group-hover:hidden"
              />
              <Image
                src={FarcasterLogo}
                alt="Farcaster"
                width={20}
                height={20}
                className="hidden group-hover:block"
              />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/ethmumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 bg-[#E2231A] rounded-full flex items-center justify-center shadow-md 
                border-2 border-transparent transition-all duration-300 ease-in-out
                hover:bg-white hover:border-[#E2231A]"
            >
              <Image
                src={TelegramWhite}
                alt="Telegram"
                width={20}
                height={20}
                className="block group-hover:hidden"
              />
              <Image
                src={TelegramLogo}
                alt="Telegram"
                width={20}
                height={20}
                className="hidden group-hover:block"
              />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-black"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="flex flex-col space-y-3 p-4 text-gray-800 text-sm font-medium">
            <a href="#about" className="hover:text-black transition">
              Conference
            </a>
            <a href="#schedule" className="hover:text-black transition">
              Hackathon
            </a>
            <a href="#sponsors" className="hover:text-black transition">
              Buy Tickets
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
