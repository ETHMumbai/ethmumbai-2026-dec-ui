"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";

/* Daimo */
export const DaimoPayButtonCustom = dynamic(
  () => import("@daimo/pay").then((m) => m.DaimoPayButton.Custom),
  { ssr: false }
);

interface PaymentButtonsProps {
  orderId: string;
  payId: string;
  quantity: number;
  loadingINR: boolean;
  loadingCrypto: boolean;
  checkoutValid: boolean;
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
  orderId,
  payId,
  quantity,
  loadingINR,
  loadingCrypto,
  checkoutValid,
  handlePayWithCrypto,
  handlePayWithRazorpay,
}) => {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  if (quantity < 1) {
    return null;
  }

  const hasValidPayId = isValidPayId(payId);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-4 mt-6">
      {/* ================= Crypto ================= */}
      <div
        ref={wrapperRef}
        onClick={checkoutValid ? handlePayWithCrypto : undefined}
        style={{ position: "relative", display: "inline-block", cursor: checkoutValid ? "pointer" : "not-allowed" }}
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
          payId={checkoutValid ? payId : ""}
          redirectReturnUrl="http://localhost:3000/conference/payment-success"
          //onOpen to be changed to onPaymentStarted

          // onOpen={()=> <Spinner/>}
          onPaymentCompleted={async () => {
            try {
              setLoading(true);

              const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/payments/verify`,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    paymentType: "DAIMO",
                    paymentId: payId,
                  }),
                }
              );

              if (!res.ok) {
                throw new Error("Payment verification failed");
              }

              const data = await res.json();
              console.log("Verify response:", data);

              // ✅ backend-confirmed success
              if (data.status === "payment_completed") {
                console.log(orderId);
                router.replace(`conference/payment-success?orderId=${orderId}`);
              }
            } catch (err) {
              console.error("Error verifying Daimo payment:", err);
            } finally {
              setLoading(false);
            }
          }}
          closeOnSuccess
        >
          {({ show }) => (
            <button
              onClick={() => {
                if (!checkoutValid) {
                  // Show errors for required fields instead of opening payment
                  document
                    .querySelector(".input-error")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                  return;
                }

                if (loading) return;

                show(); // Only called when checkout is valid
              }}
              className={`w-full px-4 bg-black text-white py-3 rounded-lg
                ${
                  checkoutValid && !loading
                    ? "hover:bg-gray-800 cursor-pointer"
                    : "opacity-50 cursor-pointer"
                }`}
            >
              <span>Pay with Crypto</span>
            </button>
          )}
        </DaimoPayButtonCustom>

      </div>

      {/* ================= INR ================= */}
      <div className="w-full md:w-auto">
        <button
          // disabled={loadingINR}
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
