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
  const pricePerTicket = ticketType ? ticketPrices[ticketType] : 0;
  const total = pricePerTicket * quantity;

  const pricePerTicketUSD = ticketType ? ticketPricesUSD[ticketType] : 0;
  const totalUSD = (pricePerTicketUSD * quantity).toFixed(2);

  const isEarlyBird = ticketType === "earlybird";

  return (
    <div className="space-y-4">
      {/* Order Summary Card */}
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

        {/* <div className="flex justify-between text-sm mb-2">
          <span>Price per ticket</span>
          <span className="line-through text-gray-400">₹999</span>
        </div> */}

        {/* {isEarlyBird && (
          <div className="flex justify-between text-sm mb-2 text-green-600">
            <span>Discount</span>
            <span>- ₹{900 * quantity}</span>
          </div>
        )} */}

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
      {/* {isEarlyBird && (
        <div className="flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-700">
          <span className="text-lg">🎉</span>
          <span className="text-sm font-medium">
            You're saving ₹{900 * quantity} with Early Bird - Special Price.
          </span>
        </div>
      )} */}
    </div>
  );
};

export default OrderSummary;
