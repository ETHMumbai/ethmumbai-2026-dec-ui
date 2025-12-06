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

    fetch(`http://localhost:3001/internal/orders/success/${orderId}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setOrderData(data.order);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load order:', err);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!orderData) {
    return <div>Order not found</div>;
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