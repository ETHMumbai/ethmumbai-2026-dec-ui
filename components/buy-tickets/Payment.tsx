"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  TicketOption,
  TicketType,
  Participant,
  BuyerInfo as BuyerInfoType,
} from "./types";
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

// Load Razorpay script
const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const Payment: React.FC = () => {
  const router = useRouter();
  const [ticketType] = useState<TicketType>("earlybird");
  const [visualTicketType, setVisualTicketType] = useState<
    "earlybird" | "standard"
  >("earlybird");
  const [quantity, setQuantity] = useState(1);

  const [buyerInfo, setBuyerInfo] = useState<BuyerInfoType>({
    firstName: "",
    lastName: "",
    email: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "India",
      postalCode: "",
    },
  });

  const [participants, setParticipants] = useState<Participant[]>([
    { firstName: "", lastName: "", email: "", organisation: "", isBuyer: true },
  ]);

  const [loading, setLoading] = useState(false);
  const [payId, setPayId] = useState("");

  // Load Razorpay script on mount
  useEffect(() => {
    loadRazorpay();
  }, []);

  const handleQuantityChange = (type: "inc" | "dec") => {
    setQuantity((prevQty) => {
      const newQuantity =
        type === "inc" ? prevQty + 1 : Math.max(1, prevQty - 1);
      setParticipants((prev) => {
        const diff = newQuantity - prev.length;
        if (diff > 0) {
          return [
            ...prev,
            ...Array.from({ length: diff }, () => ({
              firstName: "",
              lastName: "",
              email: "",
              organisation: "",
              isBuyer: false,
            })),
          ];
        }
        if (diff < 0) return prev.slice(0, newQuantity);
        return prev;
      });
      return newQuantity;
    });
  };

  const handleBuyerChange = (field: string, value: string) => {
    if (field.startsWith("address.")) {
      const addressField = field.split(".")[1];
      setBuyerInfo((prev) => ({
        ...prev,
        address: { ...prev.address, [addressField]: value },
      }));
    } else {
      setBuyerInfo((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleParticipantChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...participants];
    if (field === "isBuyer") {
      updated[index] = { ...updated[index], isBuyer: value === "true" };
    } else {
      updated[index] = { ...updated[index], [field]: value };
    }
    setParticipants(updated);
  };

  const handlePayWithRazorpay = async () => {
    if (loading) return;

    try {
      setLoading(true);

      // Create order
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ticketType,
            quantity,
            buyer: buyerInfo,
            participants,
          }),
        }
      );

      const order = await response.json();
      console.log("Order created:", order);

      // Open Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount * 100,
        currency: order.currency,
        order_id: order.razorpayOrderId,
        name: "ETHMumbai 2026",
        description: `${
          ticketType === "earlybird" ? "Early Bird" : "Standard"
        } Ticket`,
        theme: { color: "#E2231A" },
        handler: async function (response: any) {
          try {
            // Verify payment
            const verifyResponse = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/payments/verify`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              }
            );

            const result = await verifyResponse.json();
            console.log("Verification result:", result);

            if (result.success) {
              // Redirect to success page
              router.push(
                `/conference/payment-success?orderId=${result.orderId}`
              );
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (error) {
            console.error("Verification error:", error);
            alert("Payment verification failed. Please contact support.");
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Failed to create order. Please try again.");
      setLoading(false);
    }
  };

  const handlePayWithCrypto = async (e: React.MouseEvent) => {
    if (loading || payId) return;
    e.stopPropagation();

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/create-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ticketType,
            quantity,
            buyer: buyerInfo,
            participants,
          }),
        }
      );

      const data = await response.json();
      setPayId(data.paymentId);
    } catch (error) {
      console.error("Failed to create Daimo order:", error);
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

          <OrderSummary
            ticketType={ticketType}
            quantity={quantity}
            ticketPrices={ticketPrices}
          />

          <PaymentButtons
            loading={loading}
            handlePayWithRazorpay={handlePayWithRazorpay}
            payId={payId}
            handlePayWithCrypto={handlePayWithCrypto}
          />
        </div>
      </div>
    </section>
  );
};

export default Payment;
