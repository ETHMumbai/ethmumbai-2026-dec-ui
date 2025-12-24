"use client";

import { TicketType } from "./types";

interface OrderSummaryProps {
  ticketType: TicketType | null;
  quantity: number;
  ticketPrices: Record<TicketType, number>;
  ticketPricesUSD: Record<TicketType, number>;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  ticketType,
  quantity,
  ticketPrices,
  ticketPricesUSD,
}) => {
  const pricePerTicket = ticketType && ticketPrices[ticketType] ? ticketPrices[ticketType] : 0;
  const total = pricePerTicket * quantity;

  const pricePerTicketUSD =
    ticketType && ticketPricesUSD[ticketType] ? ticketPricesUSD[ticketType] : 0;
  const totalUSD = (pricePerTicketUSD * quantity).toFixed(2);

  // Human-readable label
  const ticketLabel =
    ticketType === "earlybird"
      ? "Early Bird"
      : ticketType === "standard"
      ? "Standard"
      : ticketType === "christmas"
      ? "Christmas"
      : "—";

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-regular mb-4">Order Summary</h2>

        <div className="flex justify-between text-sm mb-2">
          <span>Ticket Type</span>
          <span>{ticketLabel}</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Price per ticket</span>
          <span>
            ₹{pricePerTicket} (${pricePerTicketUSD})
          </span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Quantity</span>
          <span>{quantity}</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>
            ₹{total} (${totalUSD})
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
