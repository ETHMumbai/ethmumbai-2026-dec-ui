"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  // 🔴 CHANGE YOUR TARGET DATE HERE
  const targetDate = new Date("2026-03-13T00:00:00");

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );
      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft(); // initial run
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="flex gap-6 text-center">
      <TimeBox label="Days to the Hackathon" value={timeLeft.days} />
      {/* <TimeBox label="Hours" value={timeLeft.hours} />
      <TimeBox label="Minutes" value={timeLeft.minutes} />
      <TimeBox label="Seconds" value={timeLeft.seconds} /> */}
    </div>
  );
}

// function TimeBox({ value, label }: { value: number; label: string }) {
//   return (
//     <div className="flex flex-row items-center">
//         <div className="text-lg tracking-wide px-2 font-medium">
//         {label}
//       </div>
//       <div className="md:text-4xl font-bold text-xl">
//         {String(value).padStart(2, "0")} 
//       </div>
      
//     </div>
//   );
// }

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
        <span className="text-sm tracking-wide opacity-80">
        Hacking begins in
      </span>
      <span className="md:text-3xl text-xl font-bold flex flex-row items-center">
        {String(value).padStart(2, "0")} <div className="text-sm tracking-wide opacity-80 md:px-2 px-1">
        days
      </div>
      </span>
      {/* <span className="text-sm uppercase tracking-wide opacity-80">
        Days
      </span> */}
    </div>
  );
}
