// types.ts
export type TicketType = "earlybird" | "standard";

export interface TicketOption {
  type: TicketType;
  label: string;
  price: number;
  desktopImage: string;
  mobileImage: string;
  comingSoon: boolean;
}

export interface Participant {
  name: string;
  email: string;
}
