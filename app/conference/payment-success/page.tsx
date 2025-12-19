"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/conference/payment-success/Hero";
import OrderInfo from "@/components/conference/payment-success/OrderInfo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!orderId) {
    setLoading(false);
    return;
  }

  fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/internal/orders/success/${orderId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        setOrderData(data.order);
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error("Failed to load order:", err);
      setLoading(false);
    });
}, [orderId]);


  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E2231A] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Not Found</h2>
          <p className="text-gray-600 mb-4">We couldn't find your order. Please check the URL.</p>
          <a 
            href="/buy-tickets" 
            className="inline-block px-6 py-3 bg-[#E2231A] text-white rounded-lg hover:bg-[#C51F16]"
          >
            Buy Tickets
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-black font-sans">
      <Navbar />
      <main className="flex min-h-screen w-full flex-col bg-black font-sans">
        <Hero />
        <OrderInfo orderData={orderData} />
      </main>
      <Footer />
    </div>
  );
}