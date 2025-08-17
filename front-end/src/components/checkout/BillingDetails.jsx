import React from "react";

export default function BillingDetails() {
  return (
    <div className="lg:col-span-3">
      <div className="bg-[#f6f5ff] rounded-2xl p-6">
        <h3 className="text-xl font-bold text-[#4f37f3] text-right mb-6">جزئیات صورتحساب</h3>
        
        <form className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-right mb-2">
                نام <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="نام"
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 text-right mb-2">
                نام خانوادگی <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="نام خانوادگی"
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-right mb-2">
              نام شرکت (اختیاری)
            </label>
            <input
              type="text"
              placeholder="نام شرکت"
              className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-right mb-2">
              کشور / منطقه <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent">
              <option value="iran">ایران</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 text-right mb-2">
                استان <span className="text-red-500">*</span>
              </label>
              <select className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent">
                <option value="">یک گزینه انتخاب نمائید...</option>
                <option value="tehran">تهران</option>
                <option value="isfahan">اصفهان</option>
                <option value="shiraz">شیراز</option>
                <option value="mashhad">مشهد</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 text-right mb-2">
                شهر <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="شهر"
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-right mb-2">
              آدرس خیابان <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="نام خیابان و پلاک خانه"
              className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 text-right mb-2">
              آپارتمان، مجتمع، واحد و... (اختیاری)
            </label>
            <input
              type="text"
              placeholder="آپارتمان، مجتمع، واحد و..."
              className="w-full h-12 bg-gray-50 border border-gray-200 rounded-lg px-4 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
            />
          </div>

          {/* Description Section - Moved to the end */}
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 text-right mb-2">توضیحات سفارش</h4>
            <textarea
              placeholder="توضیحات اضافی برای سفارش خود بنویسید (اختیاری)"
              className="w-full h-20 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-right text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-none"
              rows="3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
