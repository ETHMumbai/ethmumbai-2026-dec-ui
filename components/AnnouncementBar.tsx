"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchTicketCount } from "@/lib/tickets";

export default function AnnouncementBar() {
  const [ticketCount, setTicketCount] = useState<number | null>(null);

  useEffect(() => {
    fetchTicketCount()
      .then(setTicketCount)
      .catch((err) =>
        console.error("Ticket count fetch failed", err)
      );
  }, []);

  if (ticketCount === null) {
    return null; // or a loading spinner
  }
  
  // If ticketCount is 0, we can still show the bar but with a different message  
  return (
    <div className="fixed top-0 left-0 h-10 w-full z-[60] bg-[#FFD600] text-black px-3 py-2">
      <div className="flex items-center justify-center text-center">
        <span className="text-[12px] sm:text-sm md:text-base font-bold tracking-wide leading-tight sm:whitespace-nowrap">
          {ticketCount > 0 ? (
            <>
              {ticketCount} early bird tickets are now available at ₹999.{" "}
              <Link
                href="/tickets"
                className="underline underline-offset-2 hover:opacity-80 transition"
              >
                Buy now
              </Link>{" "}
              🤩
            </>
          ) : (
            <>
              Early bird tickets are sold out.{" "} 🎟️
            </>
          )}
        </span>
      </div>
    </div>
  );
}