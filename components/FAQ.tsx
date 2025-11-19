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
        className="flex w-full items-center justify-between p-4 text-left focus:outline-hidden "
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
      "BEST Conference and HAckathon in Mumbai, from 12th to 15th March 2026.",
  },
  {
    title: "When and where is ETHMumbai 2025?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique massa vel sapien dignissim, vitae posuere dolor interdum. Donec tempor, libero a facilisis mattis, nisl nunc fermentum neque, non vulputate justo ipsum vitae sapien. Integer ac tortor vitae neque.",
  },
  {
    title: "Who can attend ETHMumbai?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique massa vel sapien dignissim, vitae posuere dolor interdum.",
  },
  {
    title: "Who can attend ETHMumbai?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique massa vel sapien dignissim, vitae posuere dolor interdum.",
  },
  {
    title: "Who can attend ETHMumbai?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique massa vel sapien dignissim, vitae posuere dolor interdum.",
  },
  {
    title: "What is included in the hackathon?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique massa vel sapien dignissim, vitae posuere dolor interdum.",
  },
  {
    title: "How much do tickets cost?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique massa vel sapien dignissim, vitae posuere dolor interdum.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative min-h-screen items-start justify-center bg-[#FFD600] py-16 px-4">
      <div className="mb-10">
        <h2
          className="font-['MPlusRounded1c'] font-medium text-3xl sm:text-[48px] leading-9 sm:leading-12 tracking-[-1px] text-center text-[#0A0A0A]"
          role="heading"
          aria-level={2}
        >
          Frequently Asked Questions
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
