"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
        <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        
        <Hero />
      </main>
    </div>
  );
}
    