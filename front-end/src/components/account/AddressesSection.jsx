import React from "react";

export default function AddressesSection({ onAddShipping, onAddBilling }) {
  return (
    <div className="bg-[#f5f4ff] rounded-2xl md:p-6 flex flex-col gap-6 w-full">
      <div className="text-gray-600 text-sm text-right mb-4">
        آدرس‌های زیر به طور پیش‌فرض در صفحه پرداخت مورد استفاده قرار می‌گیرند.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="text-lg font-bold  mb-2">آدرس حمل و نقل</div>
          <div className="bg-white rounded-xl p-6 flex flex-col items-start gap-2">
            <button
              className="text-indigo-600 hover:underline font-medium text-sm mb-1"
              onClick={onAddShipping}
            >
              افزودن آدرس حمل و نقل
            </button>
            <div className="text-gray-500 text-xs ">
              شما هنوز این آدرس را ثبت نکرده‌اید.
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg font-bold  mb-2">آدرس صورتحساب</div>
          <div className="bg-white rounded-xl p-6 flex flex-col items-start gap-2">
            <button
              className="text-indigo-600 hover:underline font-medium text-sm mb-1"
              onClick={onAddBilling}
            >
              افزودن آدرس صورتحساب
            </button>
            <div className="text-gray-500 text-xs ">
              شما هنوز این آدرس را ثبت نکرده‌اید.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 