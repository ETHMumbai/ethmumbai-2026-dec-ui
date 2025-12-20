"use client";

// @ts-ignore - no type definitions for 'country-list'
import { getNames } from "country-list";
import { BuyerInfo as BuyerInfoType, Participant } from "./types";
import { useState } from "react";

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
  setErrors: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const errorClass = "input-error";

const EMAIL_REGEX =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const BuyerInfo: React.FC<BuyerInfoProps> = ({
  buyerInfo,
  participants,
  errors,
  handleBuyerChange,
  handleBuyerAddressChange,
  handleParticipantChange,
  setErrors,
}) => {
  const err = (key: string) => errors[key];

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const markTouched = (key: string) =>
    setTouched((prev) => ({ ...prev, [key]: true }));

  const validateEmail = (key: string, value: string) => {
    setErrors((prev) => ({
      ...prev,
      [key]: !EMAIL_REGEX.test(value),
    }));
  };

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
            onChange={(e) =>
              handleBuyerChange("firstName", e.target.value)
            }
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
            onChange={(e) =>
              handleBuyerChange("lastName", e.target.value)
            }
          />
        </div>

        {/* Buyer Email (real-time validation) */}
        <div>
          <input
            type="email"
            placeholder="Email *"
            className={`border bg-[#F3F3F5] rounded-lg p-2 w-full ${
              touched.email && err("email") ? errorClass : ""
            }`}
            value={buyerInfo.email}
            onChange={(e) => {
              const value = e.target.value;
              handleBuyerChange("email", value);

              if (touched.email) {
                validateEmail("email", value);
              }
            }}
            onBlur={() => {
              markTouched("email");
              validateEmail("email", buyerInfo.email);
            }}
          />
          {touched.email && err("email") && (
            <p className="text-xs text-red-500 mt-1">
              Enter a valid email address
            </p>
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

      {/* ================= Participants ================= */}
      <hr className="my-6" />
      {participants.map((p, i) => (
        <div key={i} className="mb-6">
          <h3 className="text-md mb-3">
            Participant #{i + 1}
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Participant First Name (required) */}
          <div>
            <input
              placeholder="First Name *"
              className={`border bg-[#F3F3F5] rounded-lg p-2 w-full ${err(`participant.${i}.firstName`) ? errorClass : ""
              }`}
                value={p.firstName}
                onChange={(e) =>
                handleParticipantChange(i, "firstName", e.target.value)
              }
            />
              {err(`participant.${i}.firstName`) && (
                <p className="text-xs text-red-500 mt-1">Required</p>
              )}
          </div>
          {/* Participant Last Name */}
            <div>
              <input
                placeholder="Last Name"
                className="border bg-[#F3F3F5] rounded-lg p-2 w-full"
                value={p.lastName}
                onChange={(e) =>
                  handleParticipantChange(i, "lastName", e.target.value)
                }
              />
            </div>
            <div>
              <input
                placeholder="Email *"
                className={`border bg-[#F3F3F5] rounded-lg p-2 w-full ${err(`participant.${i}.email`) ? errorClass : ""
                  }`}
                value={p.email}
                onChange={(e) =>
                  handleParticipantChange(i, "email", e.target.value)
                }
              />
              {err(`participant.${i}.email`) && (
                <p className="text-xs text-red-500 mt-1">Required</p>
              )}
            </div>
            {/* Organisation (optional) */}
            <div>
              <input
                placeholder="Organisation / University"
                className="border bg-[#F3F3F5] rounded-lg p-2 w-full"
                value={p.organisation || ""}
                onChange={(e) =>
                  handleParticipantChange(i, "organisation", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyerInfo;
