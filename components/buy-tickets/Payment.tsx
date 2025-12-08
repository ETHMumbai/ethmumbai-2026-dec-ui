// Payment.tsx
"use client";

import { useState, useRef } from "react";
import axios from "axios";

import { TicketOption, TicketType, Participant } from "./types";
import TicketSelection from "./TicketSelection";
import BuyerInfo from "./BuyerInfo";
import OrderSummary from "./OrderSummary";
import PaymentButtons from "./PaymentButtons";

const ticketPrices: Record<TicketType, number> = {
  earlybird: 999,
  standard: 1999,
};

const ticketOptions: TicketOption[] = [
  {
    type: "earlybird",
    label: "EarlyBird",
    price: 999,
    desktopImage: "/assets/tickets/earlybird-list.svg",
    mobileImage: "/assets/tickets/earlybird-sm-vertical.svg",
    comingSoon: false,
  },
  {
    type: "standard",
    label: "Standard",
    price: 1999,
    desktopImage: "/assets/tickets/standard-list.svg",
    mobileImage: "/assets/tickets/standard-sm-vertical.svg",
    comingSoon: true,
  },
];

const Payment: React.FC = () => {
  // Backend fixed ticket type
  const [ticketType] = useState<TicketType>("earlybird");

  // Mobile visual toggle
  const [visualTicketType, setVisualTicketType] = useState<"earlybird" | "standard">("earlybird");

  const [quantity, setQuantity] = useState(1);
  const [buyerInfo, setBuyerInfo] = useState({ name: "", email: "", phone: "" });
  const [participants, setParticipants] = useState<Participant[]>([{ name: "", email: "" }]);
  const [loading, setLoading] = useState(false);
  const [payId, setPayId] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleQuantityChange = (type: "inc" | "dec") => {
    setQuantity((prevQty) => {
      const newQuantity = type === "inc" ? prevQty + 1 : Math.max(1, prevQty - 1);
      setParticipants((prev) => {
        const diff = newQuantity - prev.length;
        if (diff > 0) return [...prev, ...Array.from({ length: diff }, () => ({ name: "", email: "" }))];
        if (diff < 0) return prev.slice(0, newQuantity);
        return prev;
      });
      return newQuantity;
    });
  };

  const handleBuyerChange = (field: string, value: string) => {
    setBuyerInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleParticipantChange = (index: number, field: string, value: string) => {
    const updated = [...participants];
    updated[index][field as keyof Participant] = value;
    setParticipants(updated);
  };

  const handlePayWithCrypto = async (e: React.MouseEvent) => {
    if (loading || payId) return;
    e.stopPropagation();
    try {
      setLoading(true);
      const payload = { ticketType, buyerName: buyerInfo.name, buyerEmail: buyerInfo.email, buyerPhone: buyerInfo.phone, participants, quantity };
      const { data } = await axios.post("http://localhost:3000/payments/create-order", payload);
      setPayId(data.paymentId);
    } catch (error) {
      console.error(error);
      alert("Failed to initiate crypto payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white text-black">
      <div className="w-full py-8">
        <div className="w-full px-6 md:px-18 lg:px-20 overflow-x-hidden">
          <TicketSelection
            visualTicketType={visualTicketType}
            setVisualTicketType={setVisualTicketType}
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
            ticketOptions={ticketOptions}
          />

          <BuyerInfo
            buyerInfo={buyerInfo}
            handleBuyerChange={handleBuyerChange}
            participants={participants}
            handleParticipantChange={handleParticipantChange}
          />

          <OrderSummary ticketType={ticketType} quantity={quantity} ticketPrices={ticketPrices} />

          <PaymentButtons payId={payId} loading={loading} handlePayWithCrypto={handlePayWithCrypto} />
        </div>
      </div>
    </section>
  );
};

export default Payment;
