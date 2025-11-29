"use client";

import Image from "next/image";
import Link from "next/link";
import Conference from "../../public/assets/conference/conference.svg";

export default function Hero() {
    return (
        <section className="relative flex justify-center overflow-hidden bg-white text-black py-10 px-6">
            <div className="
                max-w-7xl w-full 
                grid grid-cols-1 md:grid-cols-2 
                gap-16 md:gap-20 
                text-justify md:text-left 
                items-start md:items-center sm:items-center lg:items-start
            ">

                {/* LEFT TEXT CONTENT */}
                <div className="max-w-[480px] pt-2 md:pt-4">
                    <h2 className="text-4xl font-[MPlusRounded1c] sm:text-5xl font-bold leading-tight tracking-tight">
                        Web3 <br /> Visionaries Unite
                    </h2>

                    <p className="text-lg text-gray-800 leading-relaxed">
                        ETHMumbai Conference is India’s premier Ethereum and Web3 gathering,
                        designed to spark innovation and accelerate decentralized progress.
                    </p>

                    <p className="text-lg text-gray-800 leading-relaxed">
                        Attendees experience four dynamic days of keynote presentations,
                        technical workshops, and interactive panels led by top minds in blockchain,
                        DeFi, privacy, and social applications.
                    </p>

                    <p className="text-lg text-gray-800 leading-relaxed">
                        Whether you’re a developer, entrepreneur, or enthusiast, the conference empowers
                        you to learn from thought leaders, discover new trends, and make critical
                        connections to shape the future of the Ethereum ecosystem.
                    </p>
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

                            /* SCALE (adjust per screen) */
                            scale-[1.4] sm:scale-[1.4] md:scale-[1.3] lg:scale-[1.3]
                        "
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
