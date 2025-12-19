"use client";

const TEXT = "50 tickets available at the special price of ₹99! Buy now 🤩";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] h-10 bg-[#FFD600] text-black flex items-center justify-center overflow-hidden">
      
      {/* Centered text */}
      <div className="flex items-center justify-center whitespace-nowrap">
        <span className="text-sm sm:text-base font-extrabold uppercase tracking-wide">
          {TEXT}
        </span>
      </div>

    </div>
  );
}
