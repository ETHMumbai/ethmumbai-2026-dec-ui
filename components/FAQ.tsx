"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { generalFAQ, conferenceFAQ, hackathonFAQ } from "../lib/faqContent"; // import your data

interface AccordionProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isActive,
  onClick,
}) => {
  return (
    <div className="w-full text-left items-center justify-between px-3 py-1 sm:px-4 sm:py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[14px] text-[#0A0A0A] font-medium text-[14px]">
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-between p-4 text-left cursor-pointer focus:outline-none ${
          isActive ? "font-semibold text-[15px]" : ""
        }`}
      >
        {title}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isActive ? "rotate-180 transform" : ""
          }`}
        />
      </button>

      <div
        className={`${
          isActive ? "grid-rows-[1fr] px-4 pb-2" : "grid-rows-[0fr]"
        } grid transition-all duration-200`}
      >
        <p className="overflow-hidden text-gray-700 font-medium">{content}</p>
      </div>
    </div>
  );
};

interface FAQProps {
  type?: "general" | "conference" | "hackathon";
}

const FAQ: React.FC<FAQProps> = ({ type = "general" }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  // Select data based on type prop
  const data =
    type === "conference"
      ? conferenceFAQ
      : type === "hackathon"
      ? hackathonFAQ
      : generalFAQ;

  return (
    <section className="relative items-start justify-center bg-[#FFD600] py-16 px-4">
      <div className="mb-5">
        <h2 className="font-['MPlusRounded1c'] font-medium text-3xl sm:text-[48px] leading-9 sm:leading-12 tracking-[-1px] text-center text-[#0A0A0A] mb-10">
          FAQs
        </h2>
      </div>

      <div className="mx-auto my-6 max-w-[832px] space-y-5">
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isActive={activeIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
