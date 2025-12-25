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
      { time: "10:00", title: "Check - in" },
      { time: "12:00", title: "Lunch"},
      { time: "14:00", title: "Opening Ceremony" },
      { time: "15:00", title: "Hackathon Starts" },
      { time: "16:00", title: "Workshop" },
      { time: "20:00", title: "Dinner" },
      { time: "00:00", title: "Late Hight Snack" },
    ],
  },
  {
    day: "Day 2",
    items: [
      { time: "12:00", title: "Lunch" },
      { time: "20:00", title: "Dinner" },
      { time: "00:00", title: "Late Hight Snack" },
    ],
  },
  {
    day: "Day 3",
    items: [
      { time: "08:00", title: "Submissions" },
      { time: "10:00", title: "Judging Starts" },
      { time: "12:00", title: "Lunch" },
      { time: "16:00", title: "Closing Ceremony" },
    ],
  },
];
