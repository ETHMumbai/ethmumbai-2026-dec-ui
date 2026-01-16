import { Ticket } from "../components/tickets/types";

export async function fetchActiveTicket(): Promise<Ticket | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/t/current`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error(
        "Failed to fetch active ticket:",
        await res.text()
      );
      return null;
    }

    const data = await res.json();

    if (!data || data.message) {
      return null;
    }

    return data as Ticket;
  } catch (err) {
    console.error("Error fetching active ticket:", err);
    return null;
  }
}
