"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Send } from "lucide-react";
import {
  conferenceVenue,
  hackathonVenue,
  VenueData,
} from "../../lib/venueData";

interface VenueProps {
  type: "conference" | "hackathon";
}

const Venue: React.FC<VenueProps> = ({ type }) => {
  const venue: VenueData =
    type === "conference" ? conferenceVenue : hackathonVenue;

  return (
    <section className="w-full bg-[#00A859] py-10">
      <div className="flex pb-2 items-center justify-center w-full mt-[-10px]">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium text-center mb-8">
          Venue
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={venue.image}
            alt={venue.name}
            width={500}
            height={500}
            className="
              w-full h-auto
              max-w-[300px] max-h-[260px]
              sm:max-w-[380px] sm:max-h-[340px]
              md:max-w-[480px] md:max-h-[420px]
              lg:max-w-[550px] lg:max-h-[500px]
              rounded-xl
              object-cover
            "
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center text-center md:text-left">
          {/* Venue Name */}
          <h2 className="text-4xl sm:text-5xl font-medium text-white leading-tight mb-4">
            {(() => {
              const words = venue.name.split(" ");
              const firstPart = words.slice(0, -2).join(" ");
              const lastPart = words.slice(-2).join(" ");

              return (
                <>
                  {firstPart && <span>{firstPart} </span>}
                  <span className="whitespace-nowrap">{lastPart}</span>
                </>
              );
            })()}
          </h2>

          {/* Address */}
          <div className="flex items-start justify-center md:justify-start text-left text-white mb-4 gap-2">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 mt-1" />
            <span className="text-base sm:text-lg md:text-xl leading-relaxed">
              {venue.address}
              <br />
              Mumbai - {venue.pincode}
            </span>
          </div>

          {/* Static Details */}
          {venue.details && (
            <ul className="text-white text-sm sm:text-base space-y-1 mb-4 max-w-[460px] mx-auto md:mx-0 pl-3">
              {venue.details.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Button */}
          <a
            href={venue.directionLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white font-semibold px-6 py-3 mt-2 rounded-[14px] hover:bg-gray-200 hover:text-black transition-all duration-200">
              <Send className="w-5 h-5 inline-block mr-2 -mt-1" />
              Get Directions
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Venue;
