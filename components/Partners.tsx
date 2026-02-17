"use client";

import React from "react";
import Image from "next/image";
import { log } from "console";

const partners = [
  {
    logo: "/assets/partners/Daimo Pay.svg",
    name: "DaimoPay",
    twitter: "https://x.com/daimopay",
  },
  {
    logo: "/assets/partners/Dev3Pack.svg",
    name: "Dev3Pack",
    twitter: "https://x.com/dev3pack",
  },
  {
    logo: "/assets/partners/Devcon India.svg",
    name: "Devcon",
    twitter: "https://x.com/EFDevcon",
  },
  {
    logo: "/assets/partners/Devfolio.svg",
    name: "Devfolio",
    twitter: "https://x.com/devfolio",
  },
  {
    logo: "/assets/partners/ETH Belgrade.svg",
    name: "ETHBelgrade",
    twitter: "https://x.com/ethbelgrade",
  },
  {
    logo: "/assets/partners/ETHCluj.svg",
    name: "ETHCluj",
    twitter: "https://x.com/ETHCluj",
  },
  {
    logo: "/assets/partners/ethereum nigeria.svg",
    name: "Ethereum Nigeria",
    twitter: "https://x.com/EthereumNigeria",
  },
  {
    logo: "/assets/partners/eth lagos.svg",
    name: "ETH Lagos",
    twitter: "https://x.com/EthereumLagos",
  },
  {
    logo: "/assets/partners/ETHRome.svg",
    name: "ETHRome",
    twitter: "https://x.com/ETHRome",
  },
  {
    logo: "/assets/partners/fileverse.svg",
    name: "Fileverse",
    twitter: "https://x.com/fileverse",
  },
  {
    logo: "/assets/partners/future creative lab.svg",
    name: "Future Creative Lab",
    twitter: "https://x.com/kundhiya",
  },
  {
    logo: "/assets/partners/NapulETH.svg",
    name: "NapulETH",
    twitter: "https://x.com/NapulETH",
  },
  {
    logo: "/assets/partners/POAP.svg",
    name: "POAP",
    twitter: "https://x.com/poapxyz",
  },
  {
    logo: "/assets/partners/se7en.svg",
    name: "Seven & Co",
    twitter: "https://x.com/sevennco",
  },
  // {
  //   logo: "/assets/partners/ETHRome.svg",
  //   name: "SheFi India",
  //   twitter: "https://x.com/shefiindia",
  // },
  {
    logo: "/assets/partners/Vidarbha DAO.svg",
    name: "Vidarbha DAO",
    twitter: "https://x.com/VidarbhaDao",
  },
  {
    logo: "/assets/partners/Web3 Events.svg",
    name: "Web3 Events",
    twitter: "https://x.com/web3_events",
  },
  {
    logo: "/assets/partners/web3 mumbai.svg",
    name: "Web3 Mumbai",
    twitter: "https://x.com/weareWeb3Mumbai",
  },
  {
    logo: "/assets/partners/web3privacy.svg",
    name: "Web3Privacy",
    twitter: "https://x.com/web3privacy",
  },
];

export default function Partners() {
  const total = partners.length;
  const remainder = total % 5;
  const lastRowStartIndex = remainder === 0 ? total : total - remainder;

  return (
    <section className="bg-white w-full pt-10 pb-15">
      {/* Title */}
      <div className="flex pb-6 items-center justify-center w-full">
        <h2 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-[MPlusRounded1c] tracking-tighter font-medium text-center mb-8">
          Friends of ETHMumbai
        </h2>
      </div>

      {/* Grid */}
      <div
        className="
          max-w-[1600px] mx-auto
          px-3 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-x-10 gap-y-10
        "
      >
        {partners.map((p, i) => {
          const isLastRow = i >= lastRowStartIndex;

          return (
            <div
              key={i}
              onClick={() => p.twitter && window.open(p.twitter, "_blank")}
              className={`
                relative
                h-[107px]
                flex items-center justify-center
                px-6
                w-full
                bg-[#F9FAFB]
                border-[2.8px] border-[#E5E7EB]
                rounded-[29px]
                cursor-pointer
                transition-transform duration-200 hover:scale-105
                ${
                  isLastRow && remainder === 3
                    ? i === lastRowStartIndex
                      ? "lg:col-start-2"
                      : ""
                    : ""
                }
              `}
            >
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain p-5"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}