"use client";

import dynamic from "next/dynamic";

/* Daimo */
export const DaimoPayButtonCustom = dynamic(
  () => import("@daimo/pay").then((m) => m.DaimoPayButton.Custom),
  { ssr: false }
);

interface PaymentButtonsProps {
  payId?: string | null;
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
const isValidPayId = (payId?: string | null) =>
  typeof payId === "string" && payId.length > 2 && payId !== "0x";

const PaymentButtons: React.FC<PaymentButtonsProps> = ({
  payId,
  loadingINR,
  loadingCrypto,
  handlePayWithCrypto,
  handlePayWithRazorpay,
}) => {
  const hasValidPayId = isValidPayId(payId);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-4 mt-6">
      {/* ================= Crypto ================= */}
      <div className="w-full md:w-auto relative">
        {/* Loader while creating crypto order */}
        {loadingCrypto && !hasValidPayId && (
          <div className="absolute inset-0 z-10 grid place-items-center text-sm bg-white/60 backdrop-blur-sm">
            Creating crypto order…
          </div>
        )}

        {/* Step 1: Create order */}
        {!hasValidPayId ? (
          <button
            disabled={loadingCrypto}
            onClick={handlePayWithCrypto}
            className="w-full md:w-auto inline-flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 whitespace-nowrap"
          >
            Pay with Crypto
          </button>
        ) : (
          /* Step 2: Open Daimo modal */
          <DaimoPayButtonCustom
            payId={payId!}
            onPaymentCompleted={(event) => {
              console.log("✅ Daimo payment completed", event);

              fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/verify`, {
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
                className="w-full md:w-auto inline-flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 whitespace-nowrap"
              >
                Pay with Crypto
              </button>
            )}
          </DaimoPayButtonCustom>
        )}
      </div>

      {/* ================= INR ================= */}
      <div className="w-full md:w-auto">
        <button
          disabled={loadingINR}
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
