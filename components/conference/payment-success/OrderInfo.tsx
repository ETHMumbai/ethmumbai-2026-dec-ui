"use client";

import { DownloadIcon } from "@/icons/conference/download";

export default function OrderInfo() {
    return (
        <section className="w-full bg-[#F9FAFB] flex justify-center px-4 py-[60px]">
            <div className="w-full max-w-[1000px] flex flex-col gap-[30px]">
                {/* Order Confirmation Box */}
                <div className="w-full bg-white rounded-[14px] border-2 shadow-2xl border-[#F3F4F6] p-[30px]">
                    {/* Header with Badge */}
                    <div className="flex items-center justify-between mb-[24px]">
                        <h2 className="text-[16px] text-[#0A0A0A]">
                            Order Confirmation
                        </h2>
                        <span className="bg-[#00A63E] text-white text-[12px] font-medium px-[12px] py-[4px] rounded-lg">
                            confirmed
                        </span>
                    </div>

                    {/* Order ID and Transaction ID Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                        {/* Order ID */}
                        <div>
                            <label className="text-[14px] text-[#4A5565] mb-[8px] block">
                                Order ID
                            </label>
                            <div className="bg-[#F3F4F6] rounded-[4px] px-[16px] py-[12px]">
                                <p className="text-[14px] text-black font-medium">
                                    ETHMUM2025-NM1JG90EG
                                </p>
                            </div>
                        </div>

                        {/* Transaction ID */}
                        <div>
                            <label className="text-[14px] text-[#4A5565] mb-[8px] block">
                                Transaction ID
                            </label>
                            <div className="bg-[#F3F4F6] rounded-[4px] px-[16px] py-[12px]">
                                <p className="text-[14px] text-black font-medium">
                                    TXNBKLV490M1KC
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Purchase Details Section */}
                    <div className="mt-[30px] border-t-2 border-gray-100">
                        <h3 className="text-[18px] font-medium text-black mb-[20px] mt-5">
                            Purchase Details
                        </h3>
                        
                        {/* Details Grid */}
                        <div className="space-y-[16px]">
                            {/* Ticket Type */}
                            <div className="flex justify-between items-center">
                                <span className="text-[14px] text-[#4A5565]">Ticket Type</span>
                                <span className="text-[14px] text-black font-medium">Early Bird</span>
                            </div>
                            
                            {/* Quantity */}
                            <div className="flex justify-between items-center">
                                <span className="text-[14px] text-[#4A5565]">Quantity</span>
                                <span className="text-[14px] text-black font-medium">1 ticket</span>
                            </div>
                            
                            {/* Payment Method */}
                            <div className="flex justify-between items-center">
                                <span className="text-[14px] text-[#4A5565]">Payment Method</span>
                                <span className="text-[14px] text-black font-medium">RazorPay</span>
                            </div>
                            
                            {/* Purchase Date */}
                            <div className="flex justify-between items-center">
                                <span className="text-[14px] text-[#4A5565]">Purchase Date</span>
                                <span className="text-[14px] text-black font-medium">4 November 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Total Amount Paid */}
                    <div className="mt-[32px] pt-[24px] border-t-2 border-gray-200">
                        <div className="flex justify-between items-center mb-[24px]">
                            <span className="text-[20px] text-black">Total Amount Paid</span>
                            <span className="text-[24px] font-bold text-[#E2231A]">₹999</span>
                        </div>
                        
                        {/* Download Button */}
                        <button className="w-full bg-[#E2231A] hover:bg-[#C51F16] text-white font-medium text-[18px] py-[14px] px-[24px] rounded-xl flex items-center justify-center gap-4 transition-colors">
                            <DownloadIcon/>
                            Download E-Ticket
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}