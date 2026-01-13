"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Send } from "lucide-react";
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
  return (
    <div className="bg-white rounded-3xl
  px-6 py-6
  sm:px-10 sm:py-8
  lg:px-14 lg:py-12
  flex flex-col items-center text-center shadow-xl
  w-full max-w-[560px] mx-auto">
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


      {/* Button */}
      <a
        href={venue.directionLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-[#00A859] text-white px-8 py-4 rounded-full cursor-pointer font-medium flex items-center gap-3 text-lg hover:bg-[#00914d] transition">
          <Send className="w-5 h-5" />
          Get Directions
        </button>
      </a>
    </div>
  );
};

const Venue = () => {
  return (
    <section className="w-full bg-[#00A859] py-14">
      {/* Title */}
      <h2 className="text-center text-white text-5xl font-[MPlusRounded1c] font-medium tracking-tighter mb-12">
        Venue
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <VenueCard title="Conference" venue={conferenceVenue} />
        <VenueCard title="Hackathon" venue={hackathonVenue} />
      </div>
    </section>
  );
};

export default Venue;
