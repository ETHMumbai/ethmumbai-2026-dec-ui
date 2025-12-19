"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";

/* Daimo */
export const DaimoPayButtonCustom = dynamic(
  () => import("@daimo/pay").then((m) => m.DaimoPayButton.Custom),
  { ssr: false }
);

interface PaymentButtonsProps {
  payId: string;
  quantity: number; // 👈 add this
  loadingINR: boolean;
  loadingCrypto: boolean;
  handlePayWithCrypto: (e: React.MouseEvent) => void;
  handlePayWithRazorpay: () => void;
}

/**
 * A payId is considered valid ONLY if:
 * - it exists
 * - it's not empty
 * - it's not "0x"
 */
const isValidPayId = (payId: string) =>
  typeof payId === "string" && payId.length > 2 && payId !== "0x";

const PaymentButtons: React.FC<PaymentButtonsProps> = ({
  payId,
  quantity,
  loadingINR,
  loadingCrypto,
  handlePayWithCrypto,
  handlePayWithRazorpay,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  // 🚫 Hide buttons completely if quantity < 1
  if (quantity < 1) {
    return null;
  }

  const hasValidPayId = isValidPayId(payId);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-4 mt-6">
      {/* ================= Crypto ================= */}
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

        <DaimoPayButtonCustom
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
          closeOnSuccess
        >
          {({ show }) => (
            <button
              onClick={show}
              disabled={loading}
              className="cursor-pointer w-full md:w-auto items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50"
            >
              <div className="inline-flex items-center gap-2">
                <span>Pay with</span>
                <span>Crypto</span>
              </div>
            </button>
          )}
        </DaimoPayButtonCustom>
      </div>

      {/* ================= INR ================= */}
      <div className="w-full md:w-auto">
        <button
          disabled={true}
          onClick={handlePayWithRazorpay}
          className="w-full md:w-auto inline-flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 whitespace-nowrap"
        >
          {loadingINR ? "Creating INR order…" : "Pay with INR"}
        </button>
      </div>
    </div>
  );
};

export default PaymentButtons;
