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
    <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-lg">
      <h3 className="text-3xl font-medium mb-4">{title}</h3>

      <div className="w-full rounded-2xl overflow-hidden mb-6">
        <Image
          src={venue.image}
          alt={venue.name}
          width={600}
          height={400}
          className="object-cover w-full h-auto"
          priority
        />
      </div>

      <h4 className="text-2xl font-medium mb-2">
        {venue.name.split(" ").slice(0, 3).join(" ")}
        <br />
        {venue.name.split(" ").slice(3).join(" ")}
      </h4>

      <div className="flex items-start gap-2 text-gray-700 mb-6">
        <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {venue.address}
        </p>
      </div>

      <a
        href={venue.directionLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-[#00A859] text-white px-6 py-3 rounded-full cursor-pointer font-medium flex items-center gap-2 hover:bg-[#00914d] transition">
          <Send className="w-4 h-4" />
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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <VenueCard title="Conference" venue={conferenceVenue} />
        <VenueCard title="Hackathon" venue={hackathonVenue} />
      </div>
    </section>
  );
};

export default Venue;
