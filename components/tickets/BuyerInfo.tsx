"use client";

// @ts-ignore - no type definitions for 'country-list'
import { getNames } from "country-list";
import { BuyerInfo as BuyerInfoType, Participant } from "./types";

interface BuyerInfoProps {
  buyerInfo: BuyerInfoType;
  participants: Participant[];
  errors: Record<string, boolean>;
  handleBuyerChange: (field: keyof BuyerInfoType, value: any) => void;
  handleBuyerAddressChange: (
    field: keyof BuyerInfoType["address"],
    value: string
  ) => void;
  handleParticipantChange: (
    index: number,
    field: keyof Participant,
    value: string
  ) => void;
}

const errorClass = "input-error";

const BuyerInfo: React.FC<BuyerInfoProps> = ({
  buyerInfo,
  participants,
  errors,
  handleBuyerChange,
  handleBuyerAddressChange,
  handleParticipantChange,
}) => {
  const err = (key: string) => errors[key];

  const addressFields: {
    field: keyof BuyerInfoType["address"];
    label: string;
    required: boolean;
  }[] = [
    { field: "line1", label: "Address Line 1 *", required: true },
    { field: "line2", label: "Address Line 2", required: false },
    { field: "city", label: "City *", required: true },
    { field: "state", label: "State *", required: true },
    { field: "country", label: "Country *", required: true },
    { field: "postalCode", label: "PIN Code *", required: true },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 className="text-lg text-[#0A0A0A] font-regular">
        Checkout Details
      </h2>

      {/* ================= Buyer Info ================= */}
      <p className="text-md text-[#0A0A0A] mt-4 mb-2">Buyer Information</p>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <input
            placeholder="First Name *"
            className={`border bg-[#F3F3F5] rounded-lg p-2 w-full ${err("firstName") ? errorClass : ""}`}
            value={buyerInfo.firstName}
            onChange={(e) => handleBuyerChange("firstName", e.target.value)}
          />
          {err("firstName") && (
            <p className="text-xs text-red-500 mt-1">Required</p>
          )}
        </div>

        <div>
          <input
            placeholder="Last Name"
            className="border bg-[#F3F3F5] rounded-lg p-2 w-full"
            value={buyerInfo.lastName}
            onChange={(e) => handleBuyerChange("lastName", e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email *"
            className={`border bg-[#F3F3F5] rounded-lg p-2 w-full ${err("email") ? errorClass : ""}`}
            value={buyerInfo.email}
            onChange={(e) => handleBuyerChange("email", e.target.value)}
          />
          {err("email") && (
            <p className="text-xs text-red-500 mt-1">Required</p>
          )}
        </div>

        <div>
          <input
            placeholder="Organisation / University"
            className="border bg-[#F3F3F5] rounded-lg p-2 w-full"
            value={buyerInfo.organisation || ""}
            onChange={(e) => handleBuyerChange("organisation", e.target.value)}
          />
        </div>
      </div>

      {/* ================= Address ================= */}
      <hr className="my-6" />
      <p className="text-md text-[#0A0A0A] mb-2">Billing Address</p>

      <div className="grid md:grid-cols-3 gap-4">
        {addressFields.map(({ field, label, required }) => (
          <div key={field}>
            {field === "country" ? (
              <select
                className={`border bg-[#F3F3F5] rounded-lg p-2 w-full ${required && err(`address.${field}`) ? errorClass : ""}`}
                value={buyerInfo.address.country}
                onChange={(e) => handleBuyerAddressChange(field, e.target.value)}
              >
                <option value="">Select Country *</option>
                {getNames().map((c:string) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            ) : (
              <input
                placeholder={label}
                className={`border bg-[#F3F3F5] rounded-lg p-2 w-full ${required && err(`address.${field}`) ? errorClass : ""}`}
                value={buyerInfo.address[field]}
                onChange={(e) => handleBuyerAddressChange(field, e.target.value)}
              />
            )}
            {required && err(`address.${field}`) && (
              <p className="text-xs text-red-500 mt-1">Required</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerInfo;
