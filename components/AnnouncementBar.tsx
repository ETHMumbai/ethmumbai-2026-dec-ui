"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface TicketInfo {
  title: string;
  type: string;
  remainingQuantity: number;
  fiat: number;
  discount?: {
    amount: number;
    percentage: number;
    originalPrice: number;
  };
}

export default function AnnouncementBar() {
  const [message, setMessage] = useState<string | null>(null);
  const prevMessageRef = useRef<string | null>(null);

  const getMessage = (ticket: TicketInfo | null) => {
    if (!ticket) return null;

    switch (ticket.fiat) {
      case 1499:
        if (ticket.remainingQuantity > 0 && ticket.discount) {
          return `${ticket.remainingQuantity} tickets are available at ${ticket.discount.percentage}% OFF.`;
        }
        return '';

      case 1999:
        if (ticket.remainingQuantity > 0 && ticket.discount) {
          return `${ticket.remainingQuantity} tickets are available at ${ticket.discount.percentage}% OFF.`;
        }
        return '';

      case 2499:
        if (ticket.remainingQuantity > 0) {
          return `Last ${ticket.remainingQuantity} tickets are left for ETHMumbai Conference.`;
        }
        return '';

      default:
        return '';
    }
  };

  const fetchTicket = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/t/current`,
        { cache: "no-store" }
      );

      const data: TicketInfo | null = await res.json();
      const nextMessage = getMessage(data);

      if (prevMessageRef.current !== nextMessage) {
        prevMessageRef.current = nextMessage;
        setMessage(nextMessage);
      }
    } catch (err) {
      console.error("Ticket fetch failed", err);
    }
  };

  useEffect(() => {
    fetchTicket(); // initial
    const interval = setInterval(fetchTicket, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!message) return '';

  return (
    <div className="fixed top-0 left-0 h-10 w-full z-[60] bg-[#FFD600] text-black px-3 py-2 flex items-center justify-center text-center">
      <span className="text-[12px] sm:text-sm md:text-base font-bold tracking-wide leading-tight sm:whitespace-nowrap">
        {message}
        <Link
          href="/tickets"
          className="ml-1 underline underline-offset-2 hover:opacity-80 transition"
        >
          Buy now
        </Link>{" "}
        🥳
      </span>
    </div>
  );
}
