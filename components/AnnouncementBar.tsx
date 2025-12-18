"use client";

const TEXT = "🚨 SPECIAL PRICE TICKETS LIVE FOR THE CONFERENCE — BOOK NOW 🔥";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] h-10 bg-[#E2231A] text-white overflow-hidden flex items-center">
      
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-red-600 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-red-600 to-transparent z-10" />

      {/* Marquee wrapper */}
      <div className="flex w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          
          {/* Track 1 */}
          <span className="mx-8 text-sm sm:text-base font-extrabold uppercase tracking-wide">
            {TEXT}
          </span>

          {/* Track 2 (duplicate for seamless loop) */}
          <span className="mx-8 text-sm sm:text-base font-extrabold uppercase tracking-wide">
            {TEXT}
          </span>

          <span className="mx-8 text-sm sm:text-base font-extrabold uppercase tracking-wide">
            {TEXT}
          </span>

          <span className="mx-8 text-sm sm:text-base font-extrabold uppercase tracking-wide">
            {TEXT}
          </span>

        </div>
      </div>
    </div>
  );
}
