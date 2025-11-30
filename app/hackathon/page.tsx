"use client";

import Hero from "@/components/hackathon/Hero";
import Navbar from "@/components/Navbar";
import Overview from "@/components/hackathon/Overview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Speakers from "@/components/conference/Speakers";
import Sponsors from "@/components/conference/Sponsors";
import Venue from "@/components/conference/Venue";
import Agenda from "@/components/hackathon/Agenda";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Overview />
        <Speakers/>
        <Sponsors />
        {/* <Venue type="hackathon" /> */}
        <Agenda />
        <FAQ type="hackathon" />
        <Footer />
      </main>
    </div>
  );
}
