import React from "react";

const CategoryImage = ({ category }) => {
  // تصاویر واقعی برای هر دسته‌بندی
  const categoryImages = {
    "smart-vacuum": "/shop/product-pic1.jpg",
    "smartwatches": "/shop/product-pic2.jpg", 
    "smart-glasses": "/shop/product-pic3.jpg",
    "smart-ring": "/shop/product-pic4.jpg",
    "game-controllers": "/shop/product-pic5.jpg",
    "wireless-headphones": "/shop/product-pic6.jpg",
    "laptop": "/shop/product-pic10.png",
    "tablet": "/shop/product-pic11.png"
  };

  const imageSrc = categoryImages[category.slug] || "/shop/product-pic1.jpg";

  return (
    <img
      src={imageSrc}
      alt={category.name}
      className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
      onError={(e) => {
        e.target.src = '/shop/product-pic1.jpg'; // fallback image
      }}
    />
  );
};

export default CategoryImage;
