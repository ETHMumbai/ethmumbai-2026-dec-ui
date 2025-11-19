"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const Footer = () => {
  return (
    <section className="relative min-h-screen items-start justify-center bg-[#E2231A] py-16 px-4">
      Footer
    </section>
  );
};

export default Footer;
