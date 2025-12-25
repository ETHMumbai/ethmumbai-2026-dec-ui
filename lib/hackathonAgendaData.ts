// lib/agendaData.ts

export interface AgendaEntry {
  time: string;
  title: string;
  speaker?: string;
  subtitle?: string;
}

export interface AgendaDay {
  day: string; // "Day 1"
  items: AgendaEntry[];
}

export const hackathonAgenda: AgendaDay[] = [
  {
    day: "Day 1",
    items: [
      { time: "09:00", title: "Registration & Breakfast" },
      { time: "10:00", title: "Opening Ceremony & Keynote", speaker: "Vitalik Buterin" },
      { time: "11:30", title: "The State of Ethereum 2025", subtitle: "Ethereum Foundation" },
      { time: "12:30", title: "Lunch & Networking" },
      { time: "14:00", title: "Workshop: Building on Layer 2" },
      { time: "15:30", title: "Panel: DeFi in Emerging Markets" },
      { time: "17:00", title: "Team Formation & Networking" },
      { time: "18:30", title: "Welcome Party" },
    ],
  },
  {
    day: "Day 2",
    items: [
      { time: "09:00", title: "Breakfast & Check-in" },
      { time: "10:00", title: "Hacking Begins" },
      { time: "13:00", title: "Lunch Break" },
      { time: "15:00", title: "Mentor Sessions" },
      { time: "18:30", title: "Dinner" },
      { time: "20:00", title: "Late-Night Hacking" },
    ],
  },
  {
    day: "Day 3",
    items: [
      { time: "09:00", title: "Breakfast" },
      { time: "10:00", title: "Hacking Ends" },
      { time: "11:00", title: "Project Submissions" },
      { time: "12:00", title: "Judging Round 1" },
      { time: "15:00", title: "Final Presentations" },
      { time: "17:00", title: "Award Ceremony" },
    ],
  },
];
