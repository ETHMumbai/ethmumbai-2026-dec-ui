import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// export const metadata: Metadata = {
//   title: "ETHMumbai 2026",
//   description: "BEST Conference & Hackathon in Mumbai. 12 – 15 March 2026 in Mumbai",
// };
export const metadata: Metadata = {
  title: "ETHMumbai 2026",
  description:
    "BEST Conference & Hackathon in Mumbai. 12 – 15 March 2026 in Mumbai",

  openGraph: {
    title: "ETHMumbai 2026",
    description:
      "BEST Conference & Hackathon in Mumbai. 12 – 15 March 2026 in Mumbai",
    url: "https://ethmumbai.in",
    siteName: "ETHMumbai",
    images: [
      {
        url: "https://ethmumbai.in/favicon.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ETHMumbai 2026",
    description:
      "BEST Conference & Hackathon in Mumbai. 12 – 15 March 2026 in Mumbai",
    images: [
      {
        url: "https://ethmumbai.in/favicon.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} 
      ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
