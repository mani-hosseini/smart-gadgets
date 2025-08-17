import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmptyCartState() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fefefe] py-8">
      <div className="container mx-auto px-4">
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">سبد خرید شما خالی است</h2>
            <p className="text-gray-600 mb-6">برای ادامه تسویه حساب، ابتدا محصولی به سبد خرید اضافه کنید</p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-[#3b82f6] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2563eb] transition-colors"
            >
              بازگشت به فروشگاه
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
