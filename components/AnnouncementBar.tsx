"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface TicketInfo {
  title: string;
  type: string;
  remainingQuantity: number;
  fiat: number;
  discount: {
    amount: number;
    percentage: number;
    originalPrice: number;
  };
}

export default function AnnouncementBar() {
  const [ticketInfo, setTicketInfo] = useState<TicketInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchTicket = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/t/current`,
        { cache: "no-store" }
      );
      const data = await res.json();

      if (data?.remainingQuantity > 0) {
        setTicketInfo(data);
      } else {
        setTicketInfo(null);
      }
    } catch (err) {
      console.error("Ticket fetch failed", err);
      setTicketInfo(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTicket();
    const interval = setInterval(fetchTicket, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-10 w-full z-[60] bg-[#FFD600] text-black px-3 py-2 flex items-center justify-center text-center">
      <span className="text-[12px] sm:text-sm md:text-base font-bold tracking-wide leading-tight sm:whitespace-nowrap">
        {ticketInfo
          ? `${ticketInfo.remainingQuantity} tickets are available at ${ticketInfo.discount.percentage}% OFF. `
          : !loading
          ? ""
          : ""}
        {ticketInfo && (
          <Link
            href="/tickets"
            className="underline underline-offset-2 hover:opacity-80 transition ml-1"
          >
            Buy now 🥳
          </Link>
        )}
      </span>
    </div>
  );
}
