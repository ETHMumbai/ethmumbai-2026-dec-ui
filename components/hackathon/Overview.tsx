"use client";

import Image from "next/image";
import Link from "next/link";
import Conference from "../../public/assets/hackathon/hackathon.png";

export default function Hero() {
    return (
        <section className="relative flex justify-center overflow-hidden bg-white text-black py-10 px-6">
            <div className="max-w-7xl w-full py-10 grid grid-cols-1 md:grid-cols-2  gap-16 md:gap-20 text-center md:text-left items-start md:items-center sm:items-center lg:items-start">

                {/* LEFT TEXT CONTENT */}
                <div className="max-w-[480px] pt-2 md:pt-4 mx-auto md:mx-0">
                    <h2 className="text-4xl font-[MPlusRounded1c] sm:text-5xl font-bold leading-tight tracking-tight">
                        Code the Future <br /> ETHMumbai Hackathon
                    </h2>

                    <p className="text-lg text-gray-800 leading-relaxed">
                        Unlock your creative potential and build the next generation 
                        of decentralized solutions at ETHMumbai Hackathon, 
                        a 40-hour marathon for global builders and innovators. 
                    </p>

                    <p className="text-lg text-gray-800 leading-relaxed">
                        Teams and solo hackers tackle real-world challenges in 
                        privacy, DeFi, and social tracks, supported by 
                        hands-on mentorship and world-class workshops.
                    </p>

                    <p className="text-lg text-gray-800 leading-relaxed">
                        The event culminates in high-energy demos, prize ceremonies, 
                        and opportunities to win grants, accelerate your project, and 
                        join a passionate Web3 developer community making a worldwide impact.
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
