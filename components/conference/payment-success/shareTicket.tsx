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

  const gridClass =
    participants.length > 3
      ? "grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
      : `grid-cols-${participants.length} md:grid-cols-${participants.length}`;

  return (
    <section className="w-full bg-[#F9FAFB] flex justify-center px-4 py-6">
      <div className="w-full max-w-[832px] flex flex-col gap-6">
        {/* Card container */}
        <div className="w-full bg-white rounded-[14px] border border-gray-200 p-6 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-lg text-[#0A0A0A] font-semibold">
              Share your tickets on X
            </h2>
            <span className="text-sm text-black">
              Each participant can download and share their own ticket.
            </span>
          </div>

          {/* Grid */}
          <div className={`grid ${gridClass} gap-6 justify-items-center`}>
            {participants.map((p, index) => {
              const firstName = p.name.split(" ")[0];
              const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}/t/visual/{ticketType}?firstName=${encodeURIComponent(
                firstName,
              )}`;
              const tweetText = encodeURIComponent(
                `Just got my ticket for ETHMumbai 🚀\nSee you in Mumbai!\n\n@ethmumbai`,
              );

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl w-full max-w-[360px] px-4 flex flex-col border border-gray-200 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {/* Header */}
                  <div className="px-4 pt-4 pb-3">
                    <p className="text-black font-medium">{p.name}</p>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                    <img
                      src={imageUrl}
                      alt={`Ticket for ${p.name}`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Download Button */}
                    {/* <a
                      href={imageUrl}
                      download={`ethmumbai-ticket-${p.ticketCode}.png`}
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
                    </a> */}
                    {/* Download Button */}
                    <button
                      onClick={async () => {
                        try {
                          const res = await fetch(imageUrl, { mode: "cors" });
                          const blob = await res.blob();
                          const url = window.URL.createObjectURL(blob);
                          const link = document.createElement("a");
                          link.href = url;
                          link.download = `ethmumbai-ticket-${p.name}.png`;
                          document.body.appendChild(link);
                          link.click();
                          link.remove();
                          window.URL.revokeObjectURL(url);
                        } catch (err) {
                          console.error("Failed to download ticket:", err);
                        }
                      }}
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
                  </div>

                  {/* Share Button */}
                  <div className="p-4 mt-auto">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${tweetText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full rounded-lg bg-[#1D9BF0] px-4 py-2 text-center text-sm font-medium text-white hover:bg-[#1A8CD8]"
                    >
                      Share
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <p className="mt-4 text-xs text-gray-500 text-center">
            X doesn’t allow auto-attaching images. Download the image first,
            then upload it in the post.
          </p>
        </div>

        {/* Back to home + view conference schedule */}
        <div className="w-full flex flex-col sm:flex-row gap-4 mt-4 mb-6">
          <a href="/" className="flex-1 no-underline">
            <div className="w-full h-[50px] border border-gray-200 rounded-[14px] flex items-center justify-center text-[#0A0A0A] font-medium text-[14px] bg-white">
              Back to Home
            </div>
          </a>
          <a href="/tickets" className="flex-1 no-underline">
            <div className="w-full h-[50px] bg-[#E2231A] rounded-[14px] flex items-center justify-center gap-2 text-white text-[14px] font-medium">
              <span className="leading-[20px] tracking-[-0.15px]">
                Buy more tickets
              </span>
              <RightArrowIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
