export const getProductFeatures = (product) => {
  if (!product) return [];
  
  // اگر محصول ویژگی‌های خاصی داره، از اونها استفاده کن
  if (product.features && product.features.length > 0) {
    return product.features;
  }
  
  const featureMap = {
    "گوشی هوشمند": [
      "پردازنده: A17 Pro",
      "نمایشگر: 6.7 اینچ Super Retina XDR",
      "دوربین: 48MP + 12MP + 12MP",
      "باتری: تا 29 ساعت"
    ],
    "هدفون": [
      "نوع: بی‌سیم",
      "قابلیت: حذف نویز",
      "باتری: تا 20 ساعت",
      "اتصال: بلوتوث 5.0"
    ],
    "ساعت هوشمند": [
      "نوع: ورزشی",
      "باتری: تا 7 روز",
      "مقاومت: IP68",
      "سنسور: ضربان قلب"
    ],
    "لپ‌تاپ": [
      "پردازنده: M3 Pro",
      "نمایشگر: 14 اینچ Liquid Retina XDR",
      "رم: 16GB Unified",
      "هارد: 512GB SSD"
    ],
    "تبلت": [
      "نمایشگر: AMOLED",
      "قلم: S Pen",
      "باتری: تا 12 ساعت",
      "اندازه: 11 اینچ"
    ],
    "دوربین": [
      "سنسور: Full-Frame",
      "فیلم‌برداری: 4K",
      "اتصال: Wi-Fi",
      "نمایشگر: LCD"
    ],
    "اسپیکر": [
      "نوع: قابل حمل",
      "باتری: تا 20 ساعت",
      "مقاومت: IP67",
      "اتصال: بلوتوث 5.1"
    ],
    "default": [
      "کیفیت: بالا",
      "برند: معتبر",
      "گارانتی: 18 ماهه",
      "ارسال: سریع"
    ]
  };
  
  return featureMap[product.category] || featureMap.default;
};
