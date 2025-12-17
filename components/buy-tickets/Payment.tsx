"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

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

/* Daimo */
const DaimoPayButton = dynamic(
  () => import("@daimo/pay").then((m) => m.DaimoPayButton),
  { ssr: false }
);

/* Config */
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

/* Razorpay Loader */
const loadRazorpay = () =>
  new Promise<boolean>((resolve) => {
    if (document.querySelector("#razorpay-sdk")) return resolve(true);
    const script = document.createElement("script");
    script.id = "razorpay-sdk";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      console.log("[Razorpay] SDK loaded successfully");
      resolve(true);
    };
    script.onerror = () => {
      console.error("[Razorpay] SDK failed to load");
      resolve(false);
    };
    document.body.appendChild(script);
  });

/* Payment Page */
const Payment = () => {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [ticketType] = useState<TicketType>("earlybird");
  const [visualTicketType, setVisualTicketType] = useState<TicketType>("earlybird");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [payId, setPayId] = useState("");

  /* -------- Buyer -------- */
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

  /* -------- Participants -------- */
  const [participants, setParticipants] = useState<Participant[]>([
    {
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
      isBuyer: true,
    },
  ]);

  /* Quantity sync */
  const handleQuantityChange = (type: "inc" | "dec") => {
    setQuantity((prev) => {
      const next = type === "inc" ? prev + 1 : Math.max(1, prev - 1);
      console.log(`[Quantity] Changing from ${prev} to ${next}`);

      setParticipants((curr) => {
        const diff = next - curr.length;
        console.log(`[Participants] Current length: ${curr.length}, diff: ${diff}`);
        if (diff > 0) {
          const newParticipants = [
            ...curr,
            ...Array.from({ length: diff }, () => ({
              firstName: "",
              lastName: "",
              email: "",
              organisation: "",
              isBuyer: false,
            })),
          ];
          console.log("[Participants] Added new participant placeholders", newParticipants);
          return newParticipants;
        }
        return curr.slice(0, next);
      });

      return next;
    });
  };

  /* Handlers */
  const handleBuyerChange = (field: string, value: string) => {
    console.log(`[Buyer] Updating field ${field} => ${value}`);
    if (field.startsWith("address.")) {
      const key = field.split(".")[1];
      setBuyerInfo((p) => ({
        ...p,
        address: { ...p.address, [key]: value },
      }));
    } else {
      setBuyerInfo((p) => ({ ...p, [field]: value }));
    }
  };

  const handleBuyerAddressChange = (
    field: keyof BuyerInfoType["address"],
    value: string
  ) => {
    console.log(`[Buyer Address] ${field} => ${value}`);
    setBuyerInfo((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  const handleParticipantChange = (
    index: number,
    field: string,
    value: string
  ) => {
    console.log(`[Participant] Index ${index}, ${field} => ${value}`);
    setParticipants((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  /* Payload Builder */
  const buildPayload = () => {
    const payload = {
      ticketType,
      quantity,
      buyer: buyerInfo,
      participants: participants.map((p, i) => ({
        ...p,
        isBuyer: i === 0,
      })),
    };
    console.log("[Payload] Built payload:", payload);
    return payload;
  };

  /* Razorpay (INR) */
  const handlePayWithRazorpay = async () => {
    if (loading) return;
    const loaded = await loadRazorpay();
    if (!loaded) return alert("Razorpay failed to load");

    try {
      setLoading(true);
      console.log("[Payment] Creating Razorpay order...");

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });

      const data = await res.json();
      console.log("[Payment] Razorpay order response:", data);

      const rzp = new (window as any).Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount * 100,
        currency: data.currency,
        order_id: data.razorpayOrderId,
        name: "ETHMumbai",
        handler: async (resp: any) => {
          console.log("[Payment] Razorpay payment response:", resp);
          try {
            const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(resp),
            });
            const verifyData = await verifyRes.json();
            console.log("[Payment] Verification response:", verifyData);
          } catch (err) {
            console.error("[Payment] Verification failed:", err);
          }
          // router.push("/conference/payment-success");
        },
        prefill: {
          name: `${buyerInfo.firstName} ${buyerInfo.lastName}`,
          email: buyerInfo.email,
        },
      });

      console.log("[Payment] Opening Razorpay modal");
      rzp.open();
    } catch (err) {
      console.error("[Payment] Razorpay error:", err);
      alert("Payment failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  /* Daimo (Crypto) */
  const handlePayWithCrypto = async (e: React.MouseEvent) => {
    if (loading || payId) return;
    e.stopPropagation();

    try {
      setLoading(true);
      console.log("[Payment] Creating Daimo order...");

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });

      const data = await res.json();
      console.log("[Payment] Daimo order response:", data);
      setPayId(data.paymentId);
    } catch (err) {
      console.error("[Payment] Daimo payment error:", err);
      alert("Crypto payment failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  /* Auto-open Daimo */
  useEffect(() => {
    if (!payId) return;
    console.log("[Payment] Auto-opening Daimo pay button");
    requestAnimationFrame(() => {
      wrapperRef.current?.querySelector("button")?.click();
    });
  }, [payId]);

  /* UI */
  const paymentButtonsProps: any = {
    loading,
    payId,
    handlePayWithRazorpay,
    handlePayWithCrypto,
  };

  return (
    <section className="w-full bg-white text-black">
      <div className="px-6 lg:px-20 py-8">
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
          handleBuyerAddressChange={handleBuyerAddressChange}
          participants={participants}
          handleParticipantChange={handleParticipantChange}
        />

        <OrderSummary
          ticketType={ticketType}
          quantity={quantity}
          ticketPrices={ticketPrices}
        />

        <PaymentButtons {...paymentButtonsProps} />

        <div ref={wrapperRef} className="hidden">
          <DaimoPayButton payId={payId} />
        </div>
      </div>
    </section>
  );
};

export default Payment;
