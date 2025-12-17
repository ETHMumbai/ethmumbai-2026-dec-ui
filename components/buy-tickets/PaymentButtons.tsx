"use client";

import Image from "next/image";
import { DaimoPayButton } from "@daimo/pay";
import Daimo from "../../public/assets/tickets/daimo.svg";

interface PaymentButtonsProps {
  payId: string;
  loadingINR: boolean;
  loadingCrypto: boolean;
  handlePayWithCrypto: (e: React.MouseEvent) => void;
  handlePayWithRazorpay: () => void;
}

const PaymentButtons: React.FC<PaymentButtonsProps> = ({
  payId,
  loadingINR,
  loadingCrypto,
  handlePayWithCrypto,
  handlePayWithRazorpay,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-4 mt-6">
      {/* Crypto Button */}
      <div
        onClick={handlePayWithCrypto}
        style={{ position: "relative", display: "inline-block" }}
        className="w-full md:w-auto"
        aria-busy={loadingCrypto}
      >
        {loadingCrypto && !payId && (
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
            Creating crypto order…
          </div>
        )}

        <DaimoPayButton.Custom
          payId={payId}
          onPaymentCompleted={() => console.log("[Crypto] Payment completed")}
        >
          {({ show }) => (
            <button
              onClick={show}
              disabled={loadingCrypto}
              className="w-full md:w-auto inline-flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 whitespace-nowrap"
            >
              <div className="inline-flex items-center gap-2">
                <span>Pay with Crypto</span>
              </div>
            </button>
          )}
        </DaimoPayButton.Custom>
      </div>

      {/* INR Button */}
      <div className="inline-block w-full md:w-auto">
        <button
          disabled={loadingINR}
          onClick={() => {
            console.log("[INR] Pay button clicked");
            handlePayWithRazorpay();
          }}
          className="w-full md:w-auto inline-flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 whitespace-nowrap"
        >
          {loadingINR ? "Creating INR order…" : "Pay with INR"}
        </button>
      </div>
    </div>
  );
};

export default PaymentButtons;
