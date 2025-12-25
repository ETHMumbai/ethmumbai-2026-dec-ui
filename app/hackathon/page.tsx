"use client";

import Hero from "@/components/hackathon/Hero";
import Navbar from "@/components/Navbar";
import Overview from "@/components/hackathon/Overview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Speakers from "@/components/conference/Speakers";
import Sponsors from "@/components/conference/Sponsors";
import Venue from "@/components/conference/Venue";
import Icons from "@/components/hackathon/Icons";
import Tacks from "@/components/hackathon/Tracks";
import Agenda from "@/components/hackathon/Agenda";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      <AnnouncementBar />
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <Overview />
        <Icons
          icons={[
            { src: "/assets/hackathon/clock.svg", title: "48 Hours" },
            { src: "/assets/hackathon/trophy.svg", title: "$50K+ Prizes" },
            { src: "/assets/hackathon/guy.svg", title: "300 Hackers" },
          ]}
        />
        <Tacks />
        <Sponsors />
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
