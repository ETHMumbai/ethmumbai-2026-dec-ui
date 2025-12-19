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

/* Payment Page */
const Payment = () => {
  const router = useRouter();

  /* ---------------- Ticket ---------------- */
  const [ticketType] = useState<TicketType>("earlybird");
  const [visualTicketType, setVisualTicketType] =
    useState<TicketType>("earlybird");
  const [quantity, setQuantity] = useState(1);

  /* ---------------- Payment ---------------- */
  const [loadingINR, setLoadingINR] = useState(false);
  const [loadingCrypto, setLoadingCrypto] = useState(false);
  const [payId, setPayId] = useState<string | null>(null);

  /* ---------------- Errors ---------------- */
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  /* ---------------- Buyer ---------------- */
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

  /* ---------------- Participants ---------------- */
  const [participants, setParticipants] = useState<Participant[]>([
    {
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
      isBuyer: true,
    },
  ]);

  /* ---------------- Load Razorpay Script ---------------- */
  useEffect(() => {
    loadRazorpay();
  }, []);

  /* ---------------- Quantity Sync ---------------- */
  const handleQuantityChange = (type: "inc" | "dec") => {
    setQuantity((prev) => {
      const next = type === "inc" ? prev + 1 : Math.max(1, prev - 1);

      setParticipants((curr) => {
        const diff = next - curr.length;
        if (diff > 0) {
          return [
            ...curr,
            ...Array.from({ length: diff }, () => ({
              firstName: "",
              lastName: "",
              email: "",
              organisation: "",
              isBuyer: false,
            })),
          ];
        }
        return curr.slice(0, next);
      });

      return next;
    });
  };

  /* ---------------- Buyer Handlers ---------------- */
  const handleBuyerChange = (field: string, value: string) => {
    if (field.startsWith("address.")) {
      const key = field.split(".")[1];
      setBuyerInfo((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else {
      setBuyerInfo((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleBuyerAddressChange = (
    field: keyof BuyerInfoType["address"],
    value: string
  ) => {
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
    setParticipants((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  /* ---------------- Validation ---------------- */
  const validateCheckout = () => {
    const e: Record<string, boolean> = {};

    if (!buyerInfo.firstName) e.firstName = true;
    if (!buyerInfo.lastName) e.lastName = true;
    if (!buyerInfo.email) e.email = true;

    if (!buyerInfo.address.line1) e["address.line1"] = true;
    if (!buyerInfo.address.city) e["address.city"] = true;
    if (!buyerInfo.address.state) e["address.state"] = true;
    if (!buyerInfo.address.country) e["address.country"] = true;
    if (!buyerInfo.address.postalCode) e["address.postalCode"] = true;

    participants.forEach((p, i) => {
      if (!p.firstName) e[`participant.${i}.firstName`] = true;
      if (!p.lastName) e[`participant.${i}.lastName`] = true;
      if (!p.email) e[`participant.${i}.email`] = true;
    });

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- Payload ---------------- */
  const buildPayload = () => ({
    ticketType,
    quantity,
    buyer: buyerInfo,
    participants: participants.map((p, i) => ({
      ...p,
      isBuyer: i === 0,
    })),
  });

  /* ---------------- INR / Razorpay ---------------- */
  const handlePayWithRazorpay = async () => {
    if (!validateCheckout()) {
      document
        .querySelector(".input-error")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    try {
      setLoadingINR(true);

      // Create order
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload()),
        }
      );

      const order = await response.json();
      console.log("Order created:", order);

      // Open Razorpay
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
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
            setLoadingINR(false);
          }
        },
        modal: {
          ondismiss: function () {
            setLoadingINR(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Failed to create order. Please try again.");
      setLoadingINR(false);
    }
  };

  /* ---------------- Crypto ---------------- */
  const handlePayWithCrypto = async (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!validateCheckout()) {
      document
        .querySelector(".input-error")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (loadingCrypto || payId) return;

    setLoadingCrypto(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/create-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload()),
        }
      );

      const data = await res.json();
      setPayId(data.paymentId);
    } catch (err) {
      console.error("[Crypto] Failed:", err);
      alert("Crypto payment failed");
    } finally {
      setLoadingCrypto(false);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <section className="w-full bg-white text-black">
      <div className="px-8 sm:px-12 md:px-18 lg:px-36 xl:px-50 py-12">
        <TicketSelection
          visualTicketType={visualTicketType}
          setVisualTicketType={setVisualTicketType}
          quantity={quantity}
          handleQuantityChange={handleQuantityChange}
          ticketOptions={ticketOptions}
        />

        <BuyerInfo
          buyerInfo={buyerInfo}
          participants={participants}
          errors={errors}
          handleBuyerChange={handleBuyerChange}
          handleBuyerAddressChange={handleBuyerAddressChange}
          handleParticipantChange={handleParticipantChange}
        />

        <OrderSummary
          ticketType={ticketType}
          quantity={quantity}
          ticketPrices={ticketPrices}
        />

        <PaymentButtons
          payId={payId ?? ""}
          loadingINR={loadingINR}
          loadingCrypto={loadingCrypto}
          handlePayWithRazorpay={handlePayWithRazorpay}
          handlePayWithCrypto={handlePayWithCrypto}
        />
      </div>
    </section>
  );
};

export default Payment;