"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Overview from "@/components/Overview";
import Sponsors from "@/components/Sponsors";
import Partners from "@/components/Partners";
import AnnouncementBar from "@/components/AnnouncementBar";
import Speakers from "@/components/Speakers";
import ClosingCTA from "@/components/ClosingCTA";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      {/* <AnnouncementBar /> */}
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Stats />
        <Overview />
        <Speakers/>
        <Sponsors />
        <Partners />
        <FAQ type="general"/>
        {/* <ClosingCTA /> */}
        <Footer />
      </main>
    </div>
  );
}
