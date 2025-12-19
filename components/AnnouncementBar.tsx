"use client";

import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 h-10 w-full z-[60] bg-[#FFD600] text-black px-3 py-2">
      <div className="flex items-center justify-center text-center">
        <span className="text-[12px] sm:text-sm md:text-base font-bold  tracking-wide leading-tight sm:whitespace-nowrap">
          50 tickets available at the special price of ₹99!{" "}
          <Link
            href="/buy-tickets"
            className="underline underline-offset-2 hover:opacity-80 transition"
          >
            Buy now
          </Link>
           🤩
        </span>
      </div>
    </div>
  );
}
