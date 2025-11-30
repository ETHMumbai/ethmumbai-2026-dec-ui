"use client";

import Hero from "@/components/conference/Hero";
import Navbar from "@/components/Navbar";
import Overview from "@/components/conference/Overview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Speakers from "@/components/conference/Speakers";
import Sponsors from "@/components/conference/Sponsors";
import Venue from "@/components/conference/Venue";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Overview />
        <Speakers/>
        <Sponsors />
        <Venue type="conference" />
        <FAQ type="conference" />
        <Footer />
      </main>
    </div>
  );
}
