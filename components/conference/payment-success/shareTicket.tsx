"use client";

import { RightArrowIcon } from "@/icons/conference/rightArrow";

interface Participant {
  name: string;
  email: string;
  ticketCode: string;
}

interface ShareTicketsGridProps {
  ticketType: string;
  participants: Participant[];
}

export default function ShareTicketsGrid({
  ticketType,
  participants,
}: ShareTicketsGridProps) {
  if (!participants?.length) return null;

  const buyer = participants[0];
  const stacked = participants.slice(1);

  // Bottom → Top order
  const tickets = [...stacked, buyer];

  const STAIR_OFFSET = 14;

  const getImageUrl = (name: string) => {
    const firstName = name.split(" ")[0];
    return `${process.env.NEXT_PUBLIC_API_URL}/t/visual/${ticketType}?firstName=${encodeURIComponent(
      firstName
    )}`;
  };

  const tweetText = encodeURIComponent(`I'm attending @ethmumbai 2026 🥳
\n\nBEST Ethereum Conference in Mumbai on 12th March 2026 with 50 speakers & 500 participants. See you there!`);

  const downloadAllTickets = async () => {
    try {
      for (const p of participants) {
        const imageUrl = getImageUrl(p.name);
        const res = await fetch(imageUrl, { mode: "cors" });
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `ethmumbai-ticket-${p.ticketCode}.png`;
        document.body.appendChild(link);
        link.click();
        link.remove();

        window.URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error("Failed to download tickets:", err);
    }
  };

  return (
    <section className="w-full bg-[#F9FAFB] flex justify-center px-4 py-6">
      <div className="w-full max-w-[832px] flex flex-col gap-6">
        <div className="w-full bg-white rounded-[14px] border border-gray-200 p-6 flex flex-col gap-6">

          {/* Ticket Stack */}
          <div className="flex justify-center pt-4">
            <div className="relative w-full max-w-[480px] h-[300px]">
              {tickets.map((p, index) => {
                const depth = index;

                return (
                  <div
                    key={p.ticketCode}
                    className="absolute inset-0 border border-black bg-white shadow-lg"
                    style={{
                      transform: `translate(${depth * STAIR_OFFSET}px, ${
                        depth * STAIR_OFFSET
                      }px)`,
                      zIndex: depth,
                    }}
                  >
                    <img
                      src={getImageUrl(p.name)}
                      alt={`Ticket for ${p.name}`}
                      className="h-full w-full object-cover"
                    />

                    {/* Download ALL button only on top card */}
                    {index === tickets.length - 1 && (
                      <button
                        onClick={downloadAllTickets}
                        className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/60 text-gray-300 backdrop-blur hover:bg-black/80 hover:text-white transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Share Buttons */}
          <div className="flex justify-center pt-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${tweetText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center w-[120px] justify-center gap-2 rounded-lg bg-[#E2231A] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#1A8CD8] transition"
            >
              Share on X
            </a>
          </div>
        </div>

        {/* Footer actions */}
        <div className="w-full flex flex-col sm:flex-row gap-4">
          <a href="/" className="flex-1">
            <div className="h-[50px] border border-gray-200 rounded-[14px] flex items-center justify-center bg-white text-sm font-medium">
              Back to Home
            </div>
          </a>
          <a href="/tickets" className="flex-1">
            <div className="h-[50px] bg-[#E2231A] rounded-[14px] flex items-center justify-center gap-2 text-white text-sm font-medium">
              Buy more tickets
              <RightArrowIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
