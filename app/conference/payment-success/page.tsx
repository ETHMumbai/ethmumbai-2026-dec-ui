"use client";

import Hero from "@/components/conference/payment-success/Hero";
import OrderInfo from "@/components/conference/payment-success/OrderInfo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PaymentSuccess() {
    return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col">
        <Hero />
        <OrderInfo/>
        <Footer />
      </main>
    </div>
  );
}