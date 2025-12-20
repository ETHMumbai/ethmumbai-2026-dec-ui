// TicketSelection.tsx
"use client";

import Image from "next/image";
import { TicketOption } from "./types";

interface TicketSelectionProps {
  visualTicketType: "earlybird" | "standard"; // mobile toggle only
  setVisualTicketType: (type: "earlybird" | "standard") => void;
  quantity: number;
  handleQuantityChange: (type: "inc" | "dec") => void;
  ticketOptions: TicketOption[];
}

const TicketSelection: React.FC<TicketSelectionProps> = ({
  visualTicketType,
  setVisualTicketType,
  quantity,
  handleQuantityChange,
  ticketOptions,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">
      {/* Desktop */}
      <div className="hidden sm:grid sm:grid-cols-2 gap-4">
        {ticketOptions.map(({ type, desktopImage, label, comingSoon }) => (
          <div
            key={type}
            className={`
              relative border rounded-xl p-4 transition
              ${type === "earlybird"
                ? "border-black cursor-pointer"
                : "border-gray-300 opacity-50 cursor-not-allowed"}
            `}
          >
            {/* Special Price – EarlyBird */}
            {/* {type === "earlybird" && (
              <div className="absolute top-2 right-2 bg-[#E2231A] text-white text-xs px-2 py-1 rounded-full">
                Special Price
              </div>
            )} */}

            {/* Coming Soon */}
            {comingSoon && (
              <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                Coming Soon
              </div>
            )}

            <Image
              src={desktopImage}
              alt={label}
              width={856}
              height={274}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}

      </div>


      {/* Mobile */}
      <div className="flex sm:hidden gap-4">
        {ticketOptions.map(({ type, mobileImage, label }) => (
          <div
            key={type}
            onClick={() => setVisualTicketType(type as "earlybird" | "standard")}
            className={`
              relative border rounded-xl p-2 cursor-pointer flex-1 transition
              ${visualTicketType === type ? "border-black" : "border-gray-300"}
            `}
          >
            <Image
              src={mobileImage}
              alt={label}
              width={150}
              height={250}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Extra mobile image */}
      <div className="block sm:hidden mt-4">
        <Image
          src={
            visualTicketType === "earlybird"
              ? "/assets/tickets/earlybird-sm.svg"
              : "/assets/tickets/standard-sm.svg"
          }
          alt={visualTicketType === "earlybird" ? "EarlyBird Extra" : "Standard Extra"}
          width={300}
          height={150}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Quantity */}
      <div className="flex items-center bg-[#F9FAFB] rounded-lg py-2 justify-between mt-6">
        <h3 className="px-2 font-regular">Quantity</h3>

        <div className="flex items-center space-x-3">
          {/* Minus button: show only if quantity > 1 (won’t show at 0 or 1) */}
          {(
            <button
              onClick={() => handleQuantityChange("dec")}
              disabled={quantity <= 1}
              className={`px-3 py-1 border rounded-lg ${quantity <= 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
                }`}
            >
              −
            </button>
          )}
          {/* <div className="flex items-center space-x-3"> */}
          {/* Quantity display */}
          {/* <span>1</span> */}

          {/* Plus button (disabled) */}
          {/* <button
            disabled
            className="px-3 py-1 border rounded-lg cursor-not-allowed opacity-50"
          >
            +
          </button> */}
          {/* </div> */}

          <span>{quantity}</span>

          {/* Plus button */}
          <button
            onClick={() => handleQuantityChange("inc")}
            disabled={quantity >= 4}
            className={`px-3 py-1 border rounded-lg ${quantity >= 4
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer"
              }`}
          >
            +
          </button>
        </div>
      </div>

    </div>
  );
};

export default TicketSelection;
