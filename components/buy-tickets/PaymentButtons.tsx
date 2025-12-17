"use client";

import Image from "next/image";
import { DaimoPayButton } from "@daimo/pay";
import Daimo from "../../public/assets/tickets/daimo.svg";

interface PaymentButtonsProps {
  loading: boolean;
  handlePayWithRazorpay: () => void;
  payId?: string;
  handlePayWithCrypto?: (e: React.MouseEvent) => void;
}

const PaymentButtons: React.FC<PaymentButtonsProps> = ({
  loading,
  handlePayWithRazorpay,
  payId = "",
  handlePayWithCrypto,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-4 mt-6">
      {/* Razorpay Button */}
      <button
        onClick={handlePayWithRazorpay}
        disabled={loading}
        className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#E2231A] text-white rounded-lg hover:bg-[#C51F16] disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
      >
        {loading ? "Processing..." : "Pay with Razorpay"}
      </button>

      {/* Daimo Button */}
      <div
        onClick={handlePayWithCrypto}
        style={{ position: "relative", display: "inline-block" }}
        className="w-full md:w-auto"
        aria-busy={loading && !payId}
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
          onPaymentCompleted={() => console.log("Daimo payment completed")}
        >
          {({ show }) => (
            <button
              onClick={show}
              disabled={loading}
              className="w-full md:w-auto inline-flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 whitespace-nowrap"
            >
              <div className="inline-flex items-center gap-2">
                <span>Pay with</span>
                <Image src={Daimo} alt="Daimo Pay" width={20} height={20} />
                <span>Daimo Pay</span>
              </div>
            </button>
          )}
        </DaimoPayButton.Custom>
      </div>
    </div>
  );
};

export default PaymentButtons;