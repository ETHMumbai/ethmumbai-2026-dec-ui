// OrderSummary.tsx
"use client";

import { TicketType } from "./types";

interface OrderSummaryProps {
  ticketType: TicketType | null; // allow null if no ticket selected
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
  const pricePerTicket = ticketType ? ticketPrices[ticketType] : 0;
  const total = pricePerTicket * quantity;

  const pricePerTicketUSD = ticketType ? ticketPricesUSD[ticketType] : 0;
  const totalUSD = (pricePerTicketUSD * quantity).toFixed(2);

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-lg font-regular mb-4">Order Summary</h2>

      <div className="flex justify-between text-sm mb-2">
        <span>Ticket Type</span>
        <span>
          {ticketType
            ? ticketType === "earlybird"
              ? "Early Bird"
              : "Standard"
            : "—"}
        </span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Price per ticket</span>
        <span>
          {/* ₹{pricePerTicket} (${pricePerTicketUSD}) */}
          ₹999
        </span>
      </div>

      <div className="flex justify-between text-sm mb-2 text-green-500">
        <span>Discounted Price</span>
        <span>{/* ₹{pricePerTicket} (${pricePerTicketUSD}) */}- ₹900</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>New Price per ticket</span>
        <span>
          ₹{pricePerTicket} (${pricePerTicketUSD})
        </span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Quantity</span>
        <span>{quantity}</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total</span>
        <span>
          ₹{total} (${totalUSD})
        </span>
        {/* <span></span> */}
      </div>
    </div>
  );
};

export default OrderSummary;
