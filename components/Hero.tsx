"use client";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#E2231A] border border-black text-white">
      {/* Accent overlay container */}
      <div className="absolute w-[1084px] h-[827px] opacity-10 rounded-none pointer-events-none">
        {/* First blur layer */}
        <div className="absolute left-[80px] top-[80px] w-[288px] h-[288px] bg-[#0A0A0A] blur-[64px] rounded-full" />
        {/* Second blur layer */}
        <div className="absolute left-[899px] top-[114px] w-[106px] h-[93px] bg-[#0A0A0A] blur-[32px] rounded-full" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl px-6">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight drop-shadow-md">
          ETHMumbai
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-100">
          BEST Conference & Hackathon
        </p>
        <p className="mt-4 text-md md:text-lg text-gray-100">
            12-15 March 2026
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#get-tickets"
            className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
          >
            Get Tickets
          </a>
        </div>
      </div>
    </section>
  );
}
