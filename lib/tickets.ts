// lib/tickets.ts
export async function fetchTicketCount(): Promise<number> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/t/ticketCount`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch ticket count");
  }

  const data = await res.json();
  return data.ticketCount;
}
