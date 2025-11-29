import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ETHMumbai 2026",
  description: "BEST Conference & Hackathon in Mumbai. 12 – 15 March 2026 in Mumbai",
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
