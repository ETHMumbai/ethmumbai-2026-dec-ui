// BuyerInfo.tsx
"use client";

import { Participant } from "./types";

interface BuyerInfoProps {
  buyerInfo: { name: string; email: string; phone: string };
  handleBuyerChange: (field: string, value: string) => void;
  participants: Participant[];
  handleParticipantChange: (index: number, field: string, value: string) => void;
}

const BuyerInfo: React.FC<BuyerInfoProps> = ({
  buyerInfo,
  handleBuyerChange,
  participants,
  handleParticipantChange,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 className="text-lg text-[#0A0A0A] font-regular">Checkout Details</h2>
      <p className="text-lg text-[#717182] font-regular mb-4">Please fill in your information</p>
      <p className="text-lg text-[#0A0A0A] font-regular mb-4">Buyer Information</p>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
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

      {/* Participant Info */}
      {participants.map((p, i) => (
        <div key={i} className="bg-white rounded-2xl mb-6 mt-4">
          <h2 className="text-lg font-regular mb-4">Participant {i + 1}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name *"
              className="border bg-[#F3F3F5] rounded-lg p-2"
              value={p.name}
              onChange={(e) => handleParticipantChange(i, "name", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email *"
              className="border bg-[#F3F3F5] rounded-lg p-2"
              value={p.email}
              onChange={(e) => handleParticipantChange(i, "email", e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyerInfo;
