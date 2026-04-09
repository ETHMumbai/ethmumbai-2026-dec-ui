// "use client";

// type Tweet = {
//   name: string;
//   username: string;
//   content: string;
//   avatar: string;
//   link?: string;
// };

// const tweets: Tweet[] = [
//   {
//     name: "Akash",
//     username: "akashxyz",
//     content: "This event was insane 🔥 Learned more in 1 day than weeks online.",
//     avatar: "/avatars/akash.jpg",
//     link: "https://twitter.com/",
//   },
//   {
//     name: "Mitansh Jain",
//     username: "mitansh",
//     content: "Met some incredible builders here. Energy was unmatched 🚀",
//     avatar: "/avatars/mitansh.jpg",
//     link: "https://twitter.com/",
//   },
//   {
//     name: "Mohammed Patla",
//     username: "patla",
//     content: "Workshops were super practical. Loved the vibe 💯",
//     avatar: "/avatars/mohammed.jpg",
//   },
//   {
//     name: "Raj Parab",
//     username: "rajparab",
//     content: "Best community event I’ve attended this year 🙌 Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌",
//     avatar: "/avatars/raj.jpg",
//   },
//   {
//     name: "Raj Parab",
//     username: "rajparab",
//     content: "Best community event I’ve attended this year 🙌 Best community event I’ve attended this year 🙌Best community event I’ve attended this year 🙌Best community event I’ve attended thi",
//     avatar: "/avatars/raj.jpg",
//   },
// ];

// function TweetCard({ tweet }: { tweet: Tweet }) {
//   return (
//     <div className="w-[320px] min-w-[320px] bg-[#fafafa] rounded-2xl p-5 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-3">
//         <img
//           src={tweet.avatar}
//           alt={tweet.name}
//           className="w-10 h-10 rounded-full object-cover"
//         />

//         <div className="flex flex-col leading-tight">
//           <p className="font-semibold text-sm">{tweet.name}</p>
//           <p className="text-xs text-gray-500">@{tweet.username}</p>
//         </div>
//       </div>

//       {/* Content */}
//       <p className="text-sm text-gray-800 leading-relaxed mb-3">
//         {tweet.content}
//       </p>

//       {/* Footer */}
//       {tweet.link && (
//         <a
//           href={tweet.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-xs text-blue-500 hover:underline"
//         >
//           View on X →
//         </a>
//       )}
//     </div>
//   );
// }

// export default function Tweets() {
//   return (
//     <section className="w-full py-16 bg-white">
      
//       {/* Heading */}
//       <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-12 tracking-tight">
//         What People Are Saying
//       </h2>

//       {/* Center container */}
//       <div className="flex justify-center px-6 sm:px-12 lg:px-20">
        
//         {/* Grid */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             md:grid-cols-3
//             gap-8
//             max-w-[1100px]
//             w-full
//             justify-items-center
//           "
//         >
//           {tweets.map((tweet, index) => (
//             <TweetCard key={index} tweet={tweet} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";

// declare global {
//   interface Window {
//     twttr: any;
//   }
// }


// const tweetLinks = [
//       "https://twitter.com/Interior/status/463440424141459456",
//   "https://twitter.com/TwitterDev/status/1354143047324299264",
//     "https://x.com/jigyasa_0203/status/2038543014050812383",
//     "https://x.com/abhixh/status/2037437764241928679",
//     "https://x.com/BitGo/status/2037378675424014529",
//     "https://x.com/TheDhawalS/status/2035722290969653424",
//     "https://x.com/CantonFdn/status/2034551337330065728",
//     "https://x.com/OrnellaWeb3/status/2034315458820649031",
//     "https://x.com/0xaniketsharma/status/2033251679106408602",
//     "https://x.com/ThisisVanshika/status/2032140677312909399",
//     "https://x.com/NodeOpsHQ/status/2032358076238741690",
//     "https://x.com/satyaki44/status/2032332206971232413",
//     "https://x.com/kunalvg/status/2032138140157419572",
//     "https://x.com/nainasachdev11/status/2032138667922440376"
// ];

// export default function Tweets() {
//   useEffect(() => {
//     // Load Twitter script once
//     if (window.twttr) {
//       window.twttr.widgets.load();
//     } else {
//       const script = document.createElement("script");
//       script.src = "https://platform.twitter.com/widgets.js";
//       script.async = true;
//       script.onload = () => window.twttr.widgets.load();
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <section className="w-full py-16  bg-[#00A859]">
      
//       {/* Heading */}
//       <h2 className="text-4xl text-white sm:text-5xl font-semibold text-center mb-12 tracking-tight">
//         What People Are Saying
//       </h2>

//       {/* Center container with more X padding */}
//       <div className="flex justify-center px-6 sm:px-12 lg:px-20">
        
//         {/* 3x3 Grid */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             md:grid-cols-3
//             gap-8
//             max-w-[1100px]
//             w-full
//             justify-items-center
//           "
//         >
//           {tweetLinks.map((link, index) => (
//             <div key={index} className="w-[300px]">
//               <blockquote className="twitter-tweet">
//                 <a href={link}></a>
//               </blockquote>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// "use client";

// const tweetIds = [
//   "2038543014050812383",
//   "2037437764241928679",
//   "2037378675424014529",
//   "2035722290969653424",
//   "2034551337330065728",
//   "2034315458820649031",
//   "2033251679106408602",
//   "2032140677312909399",
//   "2032358076238741690",
//   "2032332206971232413",
//   "2032138140157419572",
//   "2032138667922440376"
// ];

// export default function Tweets() {
//   return (
//     <section className="w-full py-16  bg-[#00A859]">
//       <h2 className="text-4xl text-white sm:text-5xl font-semibold text-center mb-12 tracking-tight">
//         What People Are Saying
//       </h2>

//       <div className="flex justify-center px-6 sm:px-12 lg:px-20">
//         <div
//           className="
//             grid
//             grid-cols-1
//             sm:grid-cols-2
//             md:grid-cols-3
//             gap-8
//             max-w-[1100px]
//             w-full
//             justify-items-center
//           "
//         >
//           {tweetIds.map((id, index) => (
//             <div key={index} className="">
//               <iframe
//                 src={`https://platform.twitter.com/embed/Tweet.html?id=${id}`}
//                 width="100%"
//                 height="auto"
//                 style={{ border: "none", scrollbarWidth: "none" }}
//                 scrolling="no"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }   

// "use client";

// import { useEffect, useRef, useState } from "react";

// const tweetIds = [
//   "2038543014050812383",
//   "2037437764241928679",
//   "2037378675424014529",
//   "2035722290969653424",
//   "2034551337330065728",
//   "2034315458820649031",
//   "2033251679106408602",
//   "2032140677312909399",
//   "2032358076238741690",
//   "2032332206971232413",
//   "2032138140157419572",
//   "2032138667922440376",
// ];

// function TweetEmbed({ id }: { id: string }) {
//   const iframeRef = useRef<HTMLIFrameElement>(null);
//   const [height, setHeight] = useState(300);

//   useEffect(() => {
//     const handler = (e: MessageEvent) => {
//       try {
//         // Twitter posts resize messages as JSON strings
//         const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
//         if (
//           data?.["twttr.embed"] &&
//           data["twttr.embed"].method === "twttr.private.resize" &&
//           iframeRef.current
//         ) {
//           const newHeight = data["twttr.embed"].params?.[0]?.height;
//           if (newHeight && newHeight > 0) {
//             setHeight(newHeight);
//           }
//         }
//       } catch {
//         // ignore non-JSON messages
//       }
//     };

//     window.addEventListener("message", handler);
//     return () => window.removeEventListener("message", handler);
//   }, []);

//   return (
//     <iframe
//       ref={iframeRef}
//       src={`https://platform.twitter.com/embed/Tweet.html?id=${id}&theme=light&dnt=true`}
//       width="100%"
//       height={height}
//       style={{
//         border: "none",
//         overflow: "hidden",
//         display: "block",
//         borderRadius: "12px",
//       }}
//       scrolling="no"
//       frameBorder="0"
//       allowFullScreen
//     />
//   );
// }

// export default function Tweets() {
//   return (
//     <section className="w-full py-16 bg-[#00A859]">
//       <h2 className="text-4xl text-white sm:text-5xl font-semibold text-center mb-12 tracking-tight">
//         What People Are Saying
//       </h2>

//       <div className="flex justify-center px-6 sm:px-12 lg:px-20">
//         <div
//           className="
//             columns-1
//             sm:columns-2
//             md:columns-3
//             gap-6
//             max-w-[1100px]
//             w-full
//           "
//         >
//           {tweetIds.map((id) => (
//             <div key={id} className="break-inside-avoid mb-6">
//               <TweetEmbed id={id} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const tweetIds = [
  "2038543014050812383",
  "2037437764241928679",
  "2037378675424014529",
  "2035722290969653424",
  "2034551337330065728",
  "2034315458820649031",
  "2033251679106408602",
  "2032140677312909399",
  "2032358076238741690",
  "2032332206971232413",
  "2032138140157419572",
  "2032138667922440376",
];

const GAP = 24;

function getColumnCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
}

function TweetEmbed({
  id,
  onResize,
  cardRef,
}: {
  id: string;
  onResize: (id: string, height: number) => void;
  cardRef: (el: HTMLDivElement | null) => void;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (
          data?.["twttr.embed"]?.method === "twttr.private.resize" &&
          iframeRef.current
        ) {
          const newHeight = data["twttr.embed"].params?.[0]?.height;
          if (newHeight > 0) {
            iframeRef.current.style.height = `${newHeight}px`;
            onResize(id, newHeight);
          }
        }
      } catch {
        // ignore
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [id, onResize]);

  return (
    <div ref={cardRef} style={{ width: "100%" }}>
      <iframe
        ref={iframeRef}
        src={`https://platform.twitter.com/embed/Tweet.html?id=${id}&theme=light&dnt=true`}
        width="100%"
        height={300}
        style={{
          border: "none",
          overflow: "hidden",
          display: "block",
          borderRadius: "12px",
          transition: "height 0.2s ease",
        }}
        scrolling="no"
        frameBorder="0"
      />
    </div>
  );
}

export default function Tweets() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heights = useRef<number[]>(tweetIds.map(() => 300));
  const [containerHeight, setContainerHeight] = useState(0);

  const runMasonry = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cols = getColumnCount();
    const totalWidth = container.offsetWidth;
    const colWidth = (totalWidth - GAP * (cols - 1)) / cols;
    const colHeights = Array(cols).fill(0);

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (colWidth + GAP);
      const y = colHeights[col];

      card.style.position = "absolute";
      card.style.width = `${colWidth}px`;
      card.style.transform = `translate(${x}px, ${y}px)`;
      card.style.transition = "transform 0.3s ease";

      colHeights[col] += heights.current[i] + GAP;
    });

    setContainerHeight(Math.max(...colHeights));
  }, []);

  const handleResize = useCallback(
    (id: string, height: number) => {
      const index = tweetIds.indexOf(id);
      if (index !== -1) {
        heights.current[index] = height;
        runMasonry();
      }
    },
    [runMasonry]
  );

  useEffect(() => {
    runMasonry();
    window.addEventListener("resize", runMasonry);
    return () => window.removeEventListener("resize", runMasonry);
  }, [runMasonry]);

  return (
    <section className="w-full py-16 bg-[#00A859]">
      <h2 className="text-4xl text-white sm:text-5xl font-semibold text-center mb-12 tracking-tight">
        What People Are Saying
      </h2>

      <div className="flex justify-center px-6 sm:px-12 lg:px-20">
        <div
          ref={containerRef}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1100px",
            height: containerHeight > 0 ? `${containerHeight}px` : "auto",
            transition: "height 0.3s ease",
          }}
        >
          {tweetIds.map((id, index) => (
            <TweetEmbed
              key={id}
              id={id}
              onResize={handleResize}
              cardRef={(el) => {
                cardRefs.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}