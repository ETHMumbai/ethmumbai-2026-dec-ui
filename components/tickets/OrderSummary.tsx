"use client";

import { useEffect, useState } from "react";
import { Ticket } from "./types";
import { fetchActiveTicket } from "../../lib/tickets";

interface OrderSummaryProps {
  quantity: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ quantity }) => {
  const [ticket, setTicket] = useState<Ticket | null>(null);

  async function loadTicket() {
      const activeTicket = await fetchActiveTicket();
      setTicket(activeTicket);
    }

  useEffect(() => {
    loadTicket();
    const interval = setInterval(loadTicket, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!ticket) {
    return <div>Loading order summary...</div>;
  }

  const originalPrice = ticket.discount?.originalPrice ?? ticket.fiat;
  const discountAmount = ticket.discount?.amount ?? 0;
  const discountedPrice = ticket.fiat; // price after discount
  const total = discountedPrice * quantity;

  const cryptoPrice = ticket.crypto;
  const totalCrypto = (cryptoPrice * quantity).toFixed(2);

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-regular mb-4">Order Summary</h2>

        <div className="flex justify-between text-sm mb-2">
          <span>Ticket Type</span>
          <span>Regular</span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span>Original Price per ticket</span>
          <span>₹{originalPrice} (${(originalPrice / 90).toFixed(2)})</span>
        </div>

        <div className="flex justify-between text-sm mb-2 text-green-600">
          <span>
            Discounted Price per ticket ({ticket.discount?.percentage ?? 0}% OFF)
          </span>
          <span>
            ₹{discountedPrice} (${(discountedPrice / 90).toFixed(2)})
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
            ₹{total} (${(total / 90).toFixed(2)})
          </span>
        </div>
      </div>

      {discountAmount > 0 && (
        <div className="flex items-center gap-2 rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-green-700">
          <span className="text-lg">😍</span>
          <span className="text-sm font-medium">
            You're saving ₹{discountAmount * quantity} by buying tickets at a discount!
          </span>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
