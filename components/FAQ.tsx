"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <div className="w-full text-left items-center justify-between px-3 py-1 sm:px-4 sm:py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[14px] text-[#0A0A0A]  font-medium text-[14px]">
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-between p-4 text-left cursor-pointer focus:outline-hidden ${isActive ? "font-semibold text-[15px]" : ""}`}
      >
        {title}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${isActive ? "rotate-180 transform" : ""}`}
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

const accordionData = [
  {
    title: "What is ETHMumbai?",
    content:
      "ETHMumbai is a 1-day conference and a 3-day hackathon focused on Ethereum.",
  },
  {
    title: "When and where is ETHMumbai 2026 happening?",
    content:
      "The answer is right there! ETHMumbai is happening in Mumbai from 12-15 March 2026. ",
  },
  {
    title: "Can I attend both the conference and the hackathon?",
    content: "Yes, you can — and we encourage you to. ",
  },
  {
    title: "Who can attend ETHMumbai 2026?",
    content:
      "Anyone and everyone who is interested in the Ethereum ecosystem is welcome to attend the conference and hackathon. ",
  },
  {
    title: "What are the tracks?",
    content:
      "Both the conference and the hackathon feature three tracks: DeFi, Privacy, and AI.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative items-start justify-center bg-[#FFD600] py-16 px-4">
      <div className="mb-5">
        <h2
          className="font-['MPlusRounded1c'] font-medium text-3xl sm:text-[48px] leading-9 sm:leading-12 tracking-[-1px] text-center text-[#0A0A0A] mb-10"
          role="heading"
          aria-level={2}
        >
          FAQs
        </h2>
      </div>
      <div className="mx-auto my-6 max-w-[832px] space-y-5">
        {accordionData.map((item, index) => (
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
