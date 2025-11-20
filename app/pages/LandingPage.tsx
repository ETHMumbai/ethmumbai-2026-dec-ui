"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Overview from "@/components/Overview";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Stats />
        <Overview />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
