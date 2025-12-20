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
  earlybird: 99,
  standard: 1999,
};

const ticketPricesUSD: Record<TicketType, number> = {
  earlybird: 1.1,
  standard: 24,
};

const ticketOptions: TicketOption[] = [
  {
    type: "earlybird",
    label: "EarlyBird",
    price: 99,
    priceUSD: 1.1,
    desktopImage: "/assets/tickets/earlybird-list.svg",
    mobileImage: "/assets/tickets/earlybird-sm-vertical.svg",
    comingSoon: false,
  },
  {
    type: "standard",
    label: "Standard",
    price: 1999,
    priceUSD: 24,
    desktopImage: "/assets/tickets/standard-list.svg",
    mobileImage: "/assets/tickets/standard-sm-vertical.svg",
    comingSoon: true,
  },
];

/* Razorpay Loader */
const loadRazorpay = () =>
  new Promise<boolean>((resolve) => {
    if (document.querySelector("#razorpay-sdk")) {
      console.log("[Razorpay] SDK already loaded");
      return resolve(true);
    }

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
    console.log("[Razorpay] Loading SDK script appended to document");
  });

/* Payment Page */
const Payment = () => {
  const router = useRouter();

  /* ---------------- Checkout Session ---------------- */
  // const [checkoutSessionId, setCheckoutSessionId] = useState<string | null>(
  //   null
  // );

  // useEffect(() => {
  //   let sessionId = localStorage.getItem("checkoutSessionId");

  //   if (!sessionId) {
  //     sessionId = crypto.randomUUID();
  //     localStorage.setItem("checkoutSessionId", sessionId);
  //     console.log("[Checkout] New checkoutSessionId created:", sessionId);
  //   } else {
  //     console.log("[Checkout] Reusing checkoutSessionId:", sessionId);
  //   }

  //   setCheckoutSessionId(sessionId);
  // }, []);

  /* ---------------- Ticket ---------------- */
  const [ticketType] = useState<TicketType>("earlybird");
  const [visualTicketType, setVisualTicketType] =
    useState<TicketType>("earlybird");
  const [quantity, setQuantity] = useState(0);

  /* ---------------- Payment ---------------- */
  const [loadingINR, setLoadingINR] = useState(false);
  const [loadingCrypto, setLoadingCrypto] = useState(false);
  const [payId, setPayId] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  /* ---------------- Errors ---------------- */
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  /* ---------------- Buyer ---------------- */
  const [buyerInfo, setBuyerInfo] = useState<BuyerInfoType>({
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
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

  useEffect(() => {
    setParticipants((prev) =>
      prev.map((p, index) => ({
        ...p,
        firstName: buyerInfo.firstName,
        lastName: buyerInfo.lastName,
        email: buyerInfo.email,
        organisation: buyerInfo.organisation || "",
        isBuyer: index === 0,
      }))
    );
  }, [
    buyerInfo.firstName,
    buyerInfo.lastName,
    buyerInfo.email,
    buyerInfo.organisation,
  ]);

  const isCheckoutValid = () => {
    if (!buyerInfo.firstName) return false;
    // if (!buyerInfo.lastName) return false;
    if (!buyerInfo.email) return false;

    if (!buyerInfo.address.line1) return false;
    if (!buyerInfo.address.city) return false;
    if (!buyerInfo.address.state) return false;
    if (!buyerInfo.address.country) return false;
    if (!buyerInfo.address.postalCode) return false;

    return true;
  };

  const checkoutValid = isCheckoutValid();

  /* ---------------- Load Razorpay Script ---------------- */
  useEffect(() => {
    loadRazorpay();
  }, []);

  /* ---------------- Quantity Sync ---------------- */
  // const handleQuantityChange = (type: "inc" | "dec") => {
  //   console.log(`[Ticket] Changing quantity, action: ${type}`);
  //   setQuantity((prev) => {
  //     const next = type === "inc" ? prev + 1 : Math.max(1, prev - 1);
  //     console.log(`[Ticket] Quantity updated from ${prev} to ${next}`);

  //     setParticipants((curr) => {
  //       const diff = next - curr.length;
  //       if (diff > 0) {
  //         const newParticipants = [
  //           ...curr,
  //           ...Array.from({ length: diff }, () => ({
  //             firstName: "",
  //             lastName: "",
  //             email: "",
  //             organisation: "",
  //             isBuyer: false,
  //           })),
  //         ];
  //         console.log(`[Participants] Added ${diff} new participant(s)`);
  //         return newParticipants;
  //       }
  //       const removedCount = curr.length - next;
  //       if (removedCount > 0) {
  //         console.log(`[Participants] Removed ${removedCount} participant(s)`);
  //       }
  //       return curr.slice(0, next);
  //     });

  //     return next;
  //   });
  // };

  const handleQuantityChange = (type: "inc" | "dec") => {
    setQuantity((prev) => {
      if (type === "inc") {
        return prev >= 1 ? 1 : 1;
      }

      if (type === "dec") {
        return prev <= 1 ? 1 : prev;
      }

      return prev;
    });
  };

  /* ---------------- Buyer Handlers ---------------- */
  const handleBuyerChange = (field: string, value: string) => {
    console.log(`[Buyer] Updating field: ${field} with value: ${value}`);
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
    console.log(
      `[Buyer] Updating address field: ${field} with value: ${value}`
    );
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
    console.log(
      `[Participant] Updating participant ${index} field: ${field} with value: ${value}`
    );
    setParticipants((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  /* ---------------- Validation ---------------- */
  const validateCheckout = () => {
    console.log("[Validation] Starting checkout validation");
    const e: Record<string, boolean> = {};

    if (!buyerInfo.firstName) e.firstName = true;
    // if (!buyerInfo.lastName) e.lastName = true;
    if (!buyerInfo.email) e.email = true;

    if (!buyerInfo.address.line1) e["address.line1"] = true;
    if (!buyerInfo.address.city) e["address.city"] = true;
    if (!buyerInfo.address.state) e["address.state"] = true;
    if (!buyerInfo.address.country) e["address.country"] = true;
    if (!buyerInfo.address.postalCode) e["address.postalCode"] = true;

    participants.forEach((p, i) => {
      if (!p.firstName) e[`participant.${i}.firstName`] = true;
      // if (!p.lastName) e[`participant.${i}.lastName`] = true;
      if (!p.email) e[`participant.${i}.email`] = true;
    });

    setErrors(e);
    const valid = Object.keys(e).length === 0;
    console.log(
      `[Validation] Checkout validation result: ${valid ? "PASS" : "FAIL"}`
    );
    if (!valid) console.log("[Validation] Errors:", e);
    return valid;
  };

  /* ---------------- Payload ---------------- */
  const buildPayload = () => {
    const payload = {
      // checkoutSessionId,
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

  /* ---------------- INR / Razorpay ---------------- */
  const handlePayWithRazorpay = async () => {
    if (loadingINR) {
      console.log("[Payment] Razorpay already in progress");
      return;
    }
    setLoadingINR(true);
    console.log("[Payment] Starting Razorpay payment flow");

    const loaded = await loadRazorpay();
    if (!loaded) {
      console.error("[Payment] Razorpay SDK failed to load");
      alert("Razorpay failed to load");
      setLoadingINR(false);
      return;
    }

    try {
      console.log("[Payment] Creating Razorpay order...");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/payments/order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload()),
        }
      );
      const data = await res.json();
      console.log("[Payment] Razorpay order response received:", data);

      const rzp = new (window as any).Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount * 100,
        currency: data.currency,
        order_id: data.razorpayOrderId,
        name: "ETHMumbai",
        handler: async (resp: any) => {
          console.log("[Payment] Razorpay response received:", resp);
          try {
            const verifyRes = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/payments/verify`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(resp),
              }
            );
            const verifyData = await verifyRes.json();
            console.log("[Payment] Verification response:", verifyData);

            // if (verifyData.success) {
            //   // localStorage.removeItem("checkoutSessionId");
            //   // console.log("[Checkout] checkoutSessionId cleared after success");
            // }
          } catch (err) {
            console.error("[Payment] Verification failed:", err);
          }
        },
        prefill: {
          name: `${buyerInfo.firstName} ${buyerInfo.lastName}`,
          email: buyerInfo.email,
        },
      });

      console.log("[Payment] Opening Razorpay modal");
      rzp.open();
    } catch (err) {
      console.error("[Payment] Razorpay error occurred:", err);
      alert("Payment failed. Check console.");
    } finally {
      setLoadingINR(false);
      console.log("[Payment] Razorpay payment flow ended");
    }
  };

  /* ---------------- Crypto ---------------- */
  const handlePayWithCrypto = async (e: React.MouseEvent) => {
    e.stopPropagation();

    console.log("[Payment] Starting crypto payment flow");
    if (!validateCheckout()) {
      console.log(
        "[Payment] Checkout validation failed, aborting crypto payment"
      );
      document
        .querySelector(".input-error")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (loadingCrypto) {
      console.log("[Payment] Crypto payment already in progress or completed");
      return;
    }

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
      console.log("[Payment] Crypto order response received:", data);
      setPayId(data.paymentId);
      setOrderId(data.orderId);
    } catch (err) {
      console.error("[Payment] Crypto payment failed:", err);
      alert("Crypto payment failed");
    } finally {
      setLoadingCrypto(false);
      console.log("[Payment] Crypto payment flow ended");
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

        {quantity > 0 && (
          <BuyerInfo
            buyerInfo={buyerInfo}
            participants={participants}
            errors={errors}
            handleBuyerChange={handleBuyerChange}
            handleBuyerAddressChange={handleBuyerAddressChange}
            handleParticipantChange={handleParticipantChange}
          />
        )}

        {quantity > 0 && (
          <OrderSummary
            ticketType={ticketType}
            quantity={quantity}
            ticketPrices={ticketPrices}
            ticketPricesUSD={ticketPricesUSD}
          />
        )}

        <PaymentButtons
          payId={payId ?? ""}
          quantity={quantity}
          loadingINR={loadingINR}
          loadingCrypto={loadingCrypto}
          handlePayWithRazorpay={handlePayWithRazorpay}
          handlePayWithCrypto={handlePayWithCrypto}
          orderId={orderId ?? ""}
          checkoutValid={checkoutValid}
        />
      </div>
    </section>
  );
};

export default Payment;
