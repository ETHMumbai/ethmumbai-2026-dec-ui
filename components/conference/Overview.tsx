"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Conference from "../../public/assets/conference/conference.svg";

export default function Hero() {
    return (
        <section className="relative flex justify-center overflow-hidden bg-white text-black py-10 px-6">
            <div className="max-w-7xl w-full py-10 grid grid-cols-1 md:grid-cols-2  gap-16 md:gap-20 text-center md:text-left items-start md:items-center sm:items-center lg:items-start">

                {/* LEFT TEXT CONTENT */}
                <div className="max-w-[480px] pt-2 md:pt-4 mx-2 md:mx-2">
                    <h2 className="text-4xl font-[MPlusRounded1c] sm:text-5xl font-bold leading-tight tracking-tight">
                        BEST Conference in Mumbai
                    </h2>

                    <div className="mt-[1.2rem] mb-[1.2rem] flex items-center gap-2 text-md sm:text-lg md:text-xl text-black">
                        <Calendar className="w-5 h-5" />
                        <span>12 – 15 March 2026</span>
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        ETHMumbai Conference is India’s premier Ethereum and Web3 gathering,
                        designed to spark innovation and accelerate decentralized progress.
                    </p>

                    <p className="text-lg text-gray-800 mt-2 leading-relaxed">
                        Attendees experience four dynamic days of keynote presentations,
                        technical workshops, and interactive panels led by top minds in blockchain,
                        DeFi, privacy, and social applications.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-[1.5rem] sm:mt-[2rem] flex flex-col sm:flex-row items-center gap-5 sm:gap-4 w-full sm:w-auto">
                    <Link
                        href="/buy-tickets"
                    >
                        <button
                        className="bg-[#D63A2F] border border-white text-white
                                    font-semibold text-base px-6 py-3 rounded-[14px]
                                    hover:opacity-90 hover:scale-105 hover:shadow-lg 
                                    cursor-pointer transition-all duration-200"
                        >
                        Buy Tickets
                        </button>
                    </Link>
                    </div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div
                    className="
                        flex justify-center md:justify-end
                        mt-10 md:mt-7 
                        pt-2 sm:pt-6 md:pt-14
                    "
                >
                    <Image
                        src={Conference}
                        alt="ETHMumbai Conference"
                        width={700}
                        height={550}
                        className="
                            w-full h-auto

                            /* MOBILE HEIGHT FIX */
                            max-w-[260px] max-h-[220px]

                            /* SMALL SCREEN / LARGE PHONES */
                            sm:max-w-[340px] sm:max-h-[300px]

                            /* TABLET */
                            md:max-w-[500px] md:max-h-[420px]

                            /* DESKTOP */
                            lg:max-w-[600px] lg:max-h-[500px]

                            /* SCALE */
                            scale-[1.4] sm:scale-[1.4] md:scale-[1.3] lg:scale-[1.3]
                        "
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
