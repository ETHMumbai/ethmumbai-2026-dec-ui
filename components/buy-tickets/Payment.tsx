"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { DaimoPayButton } from "@daimo/pay";
import axios from "axios";
import Daimo from "../../public/assets/tickets/daimo.svg";
import Razorpay from "../../public/assets/tickets/razorpay.svg";

const Payment: React.FC = () => {
  const [ticketType, setTicketType] = useState<"earlybird" | "standard">(
    "earlybird"
  );
  const [quantity, setQuantity] = useState(1);
  const [buyerInfo, setBuyerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [participants, setParticipants] = useState<
    { name: string; email: string }[]
  >([{ name: "", email: "" }]);
  const [loading, setLoading] = useState(false);

  const ticketPrices = {
    earlybird: 999,
    standard: 1999,
  };

  const [payId, setPayId] = useState<string>("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleQuantityChange = (type: "inc" | "dec") => {
    setQuantity((prevQty) => {
      const newQuantity =
        type === "inc" ? prevQty + 1 : Math.max(1, prevQty - 1);

      setParticipants((prevParticipants) => {
        const diff = newQuantity - prevParticipants.length;
        if (diff > 0) {
          return [
            ...prevParticipants,
            ...Array.from({ length: diff }, () => ({ name: "", email: "" })),
          ];
        } else if (diff < 0) {
          return prevParticipants.slice(0, newQuantity);
        }
        return prevParticipants;
      });

      return newQuantity;
    });
  };

  const total = ticketPrices[ticketType] * quantity;

  const handleBuyerChange = (field: string, value: string) => {
    setBuyerInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleParticipantChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...participants];
    updated[index][field as "name" | "email"] = value;
    setParticipants(updated);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const existingScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );
      if (existingScript) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayWithINR = async () => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Failed to load Razorpay SDK. Please check your network.");
      return;
    }

    try {
      setLoading(true);

      const ticketTypeToSend = ticketType;

      const payload = {
        ticketType: ticketTypeToSend,
        buyerName: buyerInfo.name,
        buyerEmail: buyerInfo.email,
        buyerPhone: buyerInfo.phone,
        participants: participants.map((p, i) => ({
          ...p,
          isBuyer: i === 0,
        })),
        quantity,
      };

      const { data } = await axios.post(
        "http://localhost:3000/payments/order",
        payload
      );

      const options = {
        key: "rzp_test_RZlakbieFC6xU8",
        amount: data.amount * 100,
        currency: data.currency,
        name: "ETHMumbai",
        description: "Conference Ticket Purchase",
        order_id: data.razorpayOrderId,
        handler: async (response: any) => {
          try {
            await axios.post("http://localhost:3000/payments/verify", {
              paymentType: "RAZORPAY",
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            alert("✅ Payment Successful!");
          } catch (err) {
            console.error("Verification failed", err);
            alert("❌ Payment verification failed!");
          }
        },
        prefill: {
          name: buyerInfo.name,
          email: buyerInfo.email,
          contact: buyerInfo.phone,
        },
        theme: { color: "#000000" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment initialization failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePayWithCrypto = async (e: React.MouseEvent) => {
    if (loading || payId) return;

    e.stopPropagation();
    try {
      setLoading(true);
      const ticketTypeToSend = ticketType;

      const payload = {
        ticketType: ticketTypeToSend,
        buyerName: buyerInfo.name,
        buyerEmail: buyerInfo.email,
        buyerPhone: buyerInfo.phone,
        participants,
        quantity,
      };

      const { data } = await axios.post(
        "http://localhost:3000/payments/create-order",
        payload
      );

      setPayId(data.paymentId);
    } catch (error) {
      console.error("Crypto payment error:", error);
      alert("Failed to initiate crypto payment.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!payId) return;

    const id = requestAnimationFrame(() => {
      const btn = wrapperRef.current?.querySelector("button");
      btn?.click();
    });

    return () => cancelAnimationFrame(id);
  }, [payId]);

  return (
    <section className="w-full bg-white text-black">
      <div className="w-full py-8">
        <div className="w-full px-6 md:px-8 lg:px-10 overflow-x-hidden">
          {/* Ticket Type */}
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <div className="grid gap-4">
              {[
                {
                  type: "earlybird",
                  label: "EarlyBird",
                  price: 999,
                  image: "/assets/tickets/earlybird-list.svg",
                  desc: "Available until Dec 31, 2025",
                  comingSoon: false,
                },
                {
                  type: "standard",
                  label: "Standard",
                  price: 1999,
                  image: "/assets/tickets/standard-list.svg",
                  desc: "Standard pricing",
                  comingSoon: true,
                },
              ].map(({ type, image, label, desc, comingSoon }) => (
                <div
                  key={type}
                  onClick={() =>
                    !comingSoon && setTicketType(type as "earlybird" | "standard")
                  }
                  className={`
                    relative border rounded-xl p-6 cursor-pointer transition
                    ${ticketType === type && !comingSoon ? "border-black" : "border-gray-300"}
                    ${comingSoon ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                >
                  {/* Coming Soon Badge */}
                  {comingSoon && (
                    <div className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                      Coming Soon
                    </div>
                  )}

                  {/* IMAGE (goes last now) */}
                  <div className="mt-6">
                    <Image
                      src={image}
                      alt={label}
                      width={856}
                      height={274}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}

            </div>

            {/* Quantity */}
            <div className="flex items-center bg-[#F9FAFB] rounded-lg py-2 justify-between mt-6">
              <h3 className="px-2 font-regular">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange("dec")}
                  className="px-3 py-1 border rounded-lg cursor-pointer"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("inc")}
                  className="px-3 py-1 border rounded-lg cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>


          {/* Buyer Info */}
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h2 className="text-lg text-[#0A0A0A] font-regular">Checkout Details</h2>
            <p className="text-lg text-[#717182] font-regular mb-4">Please fill in your information</p>
            <p className="text-lg text-[#0A0A0A] font-regular mb-4">Buyer Information</p>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="border bg-[#F3F3F5] rounded-lg p-2"
                value={buyerInfo.name}
                onChange={(e) => handleBuyerChange("name", e.target.value)}
              />
              <input
                type="email"
                placeholder="Email *"
                className="border bg-[#F3F3F5] rounded-lg p-2"
                value={buyerInfo.email}
                onChange={(e) => handleBuyerChange("email", e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border bg-[#F3F3F5] rounded-lg p-2 md:col-span-2"
                value={buyerInfo.phone}
                onChange={(e) => handleBuyerChange("phone", e.target.value)}
              />
            </div>
            <hr className="my-6" />
            <p className="text-lg text-[#0A0A0A] font-regular mb-4">Billing Address</p>
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Street Address *"
                className="border bg-[#F3F3F5] rounded-lg p-2 md:col-span-3"
                value={buyerInfo.name}
                onChange={(e) => handleBuyerChange("street-address", e.target.value)}
              />
              <input
                type="email"
                placeholder="City *"
                className="border bg-[#F3F3F5] rounded-lg p-2"
                value={buyerInfo.email}
                onChange={(e) => handleBuyerChange("city", e.target.value)}
              />
              <input
                type="text"
                placeholder="State *"
                className="border bg-[#F3F3F5] rounded-lg p-2 "
                value={buyerInfo.phone}
                onChange={(e) => handleBuyerChange("state", e.target.value)}
              />
              <input
                type="number"
                placeholder="PIN Code *"
                className="border bg-[#F3F3F5] rounded-lg p-2 "
                value={buyerInfo.phone}
                onChange={(e) => handleBuyerChange("pincode", e.target.value)}
              />
            </div>
            <hr className="my-6" />
            <p className="text-lg text-[#0A0A0A] font-regular mb-4">Participant Information</p>
         
          {/* </div> */}

          {/* Participant Info */}
          {participants.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl mb-6">
              <h2 className="text-lg font-regular mb-4">
                Participant {i + 1}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="border bg-[#F3F3F5] rounded-lg p-2"
                  value={p.name}
                  onChange={(e) =>
                    handleParticipantChange(i, "name", e.target.value)
                  }
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="border bg-[#F3F3F5] rounded-lg p-2"
                  value={p.email}
                  onChange={(e) =>
                    handleParticipantChange(i, "email", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </div>
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-refular mb-4">Order Summary</h2>
            <div className="flex justify-between text-sm mb-2">
              <span>Ticket Type</span>
              <span>
                {ticketType === "earlybird" ? "Early Bird" : "Standard"}
              </span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Price per ticket</span>
              <span>₹{ticketPrices[ticketType]}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Quantity</span>
              <span>{quantity}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            {/* Payment Buttons */}
            <div className="grid md:grid-cols-2 gap-3">
              <button
                disabled={true}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:bg-gray-500 disabled:text-gray-200"
              >
                INR Payment Coming soon...
              </button>

              <div
                ref={wrapperRef}
                onClick={handlePayWithCrypto}
                style={{ position: "relative", display: "inline-block" }}
                aria-busy={loading}
              >
                {loading && !payId && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "grid",
                      placeItems: "center",
                      fontSize: 14,
                      background: "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(2px)",
                      zIndex: 10,
                      pointerEvents: "none",
                    }}
                  >
                    Creating order…
                  </div>
                )}

                <DaimoPayButton.Custom
                  payId={payId}
                  onPaymentCompleted={(e) => {
                    console.log(e);
                    console.log("Payment completed");
                    fetch("http://localhost:3000/payments/verify", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        paymentType: "DAIMO",
                        paymentId: payId,
                      }),
                    }).catch(console.error);
                  }}
                >
                  {({ show }) => (
                    <button
                      onClick={show}
                      disabled={loading}
                      className="cursor-pointer w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
                    >
                      <div className="inline-flex items-center gap-2">
                        <span>Pay with</span>
                        <Image
                          src={Daimo}
                          alt="Daimo Pay"
                          width={20}
                          height={20}
                        />
                        <span>Daimo Pay</span>
                      </div>
                    </button>
                  )}
                </DaimoPayButton.Custom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
