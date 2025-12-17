"use client";

import { BuyerInfo as BuyerInfoType, Participant } from "./types";

interface BuyerInfoProps {
  buyerInfo: BuyerInfoType;
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
          placeholder="First Name *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.firstName}
          onChange={(e) => handleBuyerChange("firstName", e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.lastName}
          onChange={(e) => handleBuyerChange("lastName", e.target.value)}
        />
        <input
          type="email"
          placeholder="Email *"
          className="border bg-[#F3F3F5] rounded-lg p-2 md:col-span-2"
          value={buyerInfo.email}
          onChange={(e) => handleBuyerChange("email", e.target.value)}
        />
      </div>

      <hr className="my-6" />
      <p className="text-lg text-[#0A0A0A] font-regular mb-4">Billing Address</p>
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Street Address *"
          className="border bg-[#F3F3F5] rounded-lg p-2 md:col-span-3"
          value={buyerInfo.address.line1}
          onChange={(e) => handleBuyerChange("address.line1", e.target.value)}
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="border bg-[#F3F3F5] rounded-lg p-2 md:col-span-3"
          value={buyerInfo.address.line2}
          onChange={(e) => handleBuyerChange("address.line2", e.target.value)}
        />
        <input
          type="text"
          placeholder="City *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.address.city}
          onChange={(e) => handleBuyerChange("address.city", e.target.value)}
        />
        <input
          type="text"
          placeholder="State *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.address.state}
          onChange={(e) => handleBuyerChange("address.state", e.target.value)}
        />
        <input
          type="text"
          placeholder="PIN Code *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.address.postalCode}
          onChange={(e) => handleBuyerChange("address.postalCode", e.target.value)}
        />
        <input
          type="text"
          placeholder="Country *"
          className="border bg-[#F3F3F5] rounded-lg p-2 md:col-span-3"
          value={buyerInfo.address.country}
          onChange={(e) => handleBuyerChange("address.country", e.target.value)}
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
              placeholder="First Name *"
              className="border bg-[#F3F3F5] rounded-lg p-2"
              value={p.firstName}
              onChange={(e) => handleParticipantChange(i, "firstName", e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="border bg-[#F3F3F5] rounded-lg p-2"
              value={p.lastName}
              onChange={(e) => handleParticipantChange(i, "lastName", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email *"
              className="border bg-[#F3F3F5] rounded-lg p-2"
              value={p.email}
              onChange={(e) => handleParticipantChange(i, "email", e.target.value)}
            />
            <input
              type="text"
              placeholder="Organisation *"
              className="border bg-[#F3F3F5] rounded-lg p-2"
              value={p.organisation}
              onChange={(e) => handleParticipantChange(i, "organisation", e.target.value)}
            />
            <div className="flex items-center gap-2 md:col-span-2">
              <input
                type="checkbox"
                id={`isBuyer-${i}`}
                checked={p.isBuyer}
                onChange={(e) => handleParticipantChange(i, "isBuyer", e.target.checked ? "true" : "false")}
                className="w-4 h-4"
              />
              <label htmlFor={`isBuyer-${i}`} className="text-sm text-[#4A5565]">
                This participant is the buyer
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyerInfo;