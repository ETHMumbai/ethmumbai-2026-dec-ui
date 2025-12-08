// PaymentButtons.tsx
"use client";

import Image from "next/image";
import { DaimoPayButton } from "@daimo/pay";
import Daimo from "../../public/assets/tickets/daimo.svg";

interface PaymentButtonsProps {
  payId: string;
  loading: boolean;
  handlePayWithCrypto: (e: React.MouseEvent) => void;
}

const PaymentButtons: React.FC<PaymentButtonsProps> = ({
  payId,
  loading,
  handlePayWithCrypto,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-4 mt-6">
      <div
        onClick={handlePayWithCrypto}
        style={{ position: "relative", display: "inline-block" }}
        className="w-full md:w-auto"
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
          onPaymentCompleted={() => console.log("Payment completed")}
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

      <div className="inline-block w-full md:w-auto">
        <button
          disabled={true}
          className="w-full md:w-auto inline-flex items-center justify-center px-4 py-3 bg-gray-400 text-white rounded-lg disabled:opacity-50 whitespace-nowrap"
        >
          INR Payment Coming soon...
        </button>
      </div>
    </div>
  );
};

export default PaymentButtons;
