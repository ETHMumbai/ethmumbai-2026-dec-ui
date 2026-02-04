"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Send, ChevronDown } from "lucide-react";
import {
  conferenceVenue,
  hackathonVenue,
  VenueData,
} from "../lib/venueData";

const VenueCard = ({
  title,
  venue,
}: {
  title: string;
  venue: VenueData;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-3xl
      px-6 py-6
      sm:px-10 sm:py-8
      lg:px-14 lg:py-12
      flex flex-col items-center text-center shadow-xl
      w-full max-w-[560px] mx-auto"
    >
      {/* Title */}
      <h3 className="text-4xl font-medium mb-6">{title}</h3>

      {/* Image */}
      <div className="w-full mb-8">
        <div className="rounded-2xl overflow-hidden relative aspect-[16/9]">
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Venue Name */}
      <h4 className="text-2xl font-medium mb-4 leading-snug">
        {venue.name.split(" ").slice(0, 3).join(" ")}
        <br />
        {venue.name.split(" ").slice(3).join(" ")}
      </h4>

      {/* Address */}
      <div className="flex items-start text-gray-700 mb-8 gap-1 max-w-[360px]">
        <MapPin className="w-5 h-5 flex-shrink-0" />
        <p className="text-base leading-relaxed text-center">
          {venue.address}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Mumbai - {venue.pincode}
        </p>
      </div>

      {/* Get Directions */}
      <a
        href={venue.directionLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-3"
      >
        <button className="bg-[#00A859] text-white px-8 py-4 rounded-full cursor-pointer font-medium flex items-center gap-3 text-lg hover:bg-[#00914d] transition">
          <Send className="w-5 h-5" />
          Get Directions
        </button>
      </a>

      {/* Show More (only when collapsed) */}
      {!expanded && venue.details?.length && (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-2 text-[#00A859] font-medium text-sm mt-2"
        >
          Show more
          <ChevronDown className="w-4 h-4" />
        </button>
      )}

      {/* Expandable Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${expanded ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"}`}
      >
        

        {/* Bullet Points */}
        {venue.details && (
          <ul className="text-gray-700 text-base space-y-3 text-left max-w-[420px] mx-auto">
            {venue.details.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#00A859] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Show Less (only when expanded) */}
        <button
          onClick={() => setExpanded(false)}
          className="mt-6 flex items-center gap-2 text-[#00A859] font-medium text-sm mx-auto"
        >
          Show less
          <ChevronDown className="w-4 h-4 rotate-180" />
        </button>
      </div>

    </div>
  );
};

const Venue = () => {
  return (
    <section className="w-full bg-[#00A859] py-10">
      {/* Title */}
      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl tracking-tighter font-[MPlusRounded1c] font-medium text-center mb-8">
        Venue
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <VenueCard title="Conference" venue={conferenceVenue} />
        <VenueCard title="Hackathon" venue={hackathonVenue} />
      </div>
    </section>
  );
};

export default Venue;
