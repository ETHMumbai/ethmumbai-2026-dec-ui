// BuyerInfo.tsx
"use client";

import { BuyerInfo as BuyerInfoType, Participant } from "./types";

interface BuyerInfoProps {
  buyerInfo: BuyerInfoType;
  handleBuyerChange: (field: keyof BuyerInfoType, value: any) => void;
  handleBuyerAddressChange: (
    field: keyof BuyerInfoType["address"],
    value: string
  ) => void;
  participants: Participant[];
  handleParticipantChange: (
    index: number,
    field: keyof Participant,
    value: string
  ) => void;
}

const BuyerInfo: React.FC<BuyerInfoProps> = ({
  buyerInfo,
  handleBuyerChange,
  handleBuyerAddressChange,
  participants,
  handleParticipantChange,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 className="text-lg text-[#0A0A0A] font-regular">
        Checkout Details
      </h2><br/>

      {/* ---------------- Buyer Info ---------------- */}
      <p className="text-md text-[#0A0A0A] mb-4">Buyer Information</p>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <input
          type="text"
          placeholder="First Name *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.firstName}
          onChange={(e) =>
            handleBuyerChange("firstName", e.target.value)
          }
        />
        <input
          type="text"
          placeholder="Last Name *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.lastName}
          onChange={(e) =>
            handleBuyerChange("lastName", e.target.value)
          }
        />
        <input
          type="email"
          placeholder="Email *"
          className="border bg-[#F3F3F5] rounded-lg p-2 md:col-span-2"
          value={buyerInfo.email}
          onChange={(e) =>
            handleBuyerChange("email", e.target.value)
          }
        />
      </div>

      {/* ---------------- Address ---------------- */}
      <hr className="my-6" />
      <p className="text-md text-[#0A0A0A] mb-4">Billing Address</p>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Street Address *"
          className="border bg-[#F3F3F5] rounded-lg p-2 md:col-span-3"
          value={buyerInfo.address.line1}
          onChange={(e) =>
            handleBuyerAddressChange("line1", e.target.value)
          }
        />
        <input
          type="text"
          placeholder="City *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.address.city}
          onChange={(e) =>
            handleBuyerAddressChange("city", e.target.value)
          }
        />
        <input
          type="text"
          placeholder="State *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.address.state}
          onChange={(e) =>
            handleBuyerAddressChange("state", e.target.value)
          }
        />
        <input
          type="text"
          placeholder="PIN Code *"
          className="border bg-[#F3F3F5] rounded-lg p-2"
          value={buyerInfo.address.postalCode}
          onChange={(e) =>
            handleBuyerAddressChange("postalCode", e.target.value)
          }
        />
      </div>

      {/* ---------------- Participants ---------------- */}
      <hr className="my-6" />

      {participants.map((p, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-md mb-4">
            Participant  #{i + 1}
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              className="border bg-[#F3F3F5] rounded-lg p-2"
              value={p.firstName}
              onChange={(e) =>
                handleParticipantChange(
                  i,
                  "firstName",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="border bg-[#F3F3F5] rounded-lg p-2"
              value={p.lastName}
              onChange={(e) =>
                handleParticipantChange(
                  i,
                  "lastName",
                  e.target.value
                )
              }
            />
            <input
              type="email"
              placeholder="Email *"
              className="border bg-[#F3F3F5] rounded-lg p-2"
              value={p.email}
              onChange={(e) =>
                handleParticipantChange(
                  i,
                  "email",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Organisation"
              className="border bg-[#F3F3F5] rounded-lg p-2 "
              value={p.organisation || ""}
              onChange={(e) =>
                handleParticipantChange(
                  i,
                  "organisation",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyerInfo;
