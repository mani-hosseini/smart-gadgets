import { useState, useMemo } from 'react';
import { products } from '../components/shop/productsData';
import { WARRANTIES } from '../constants/productConstants';

export const useProductDetails = (productId) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedWarranty, setSelectedWarranty] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(() => {
    return products.find(p => p.id === parseInt(productId));
  }, [productId]);

  const finalPrice = useMemo(() => {
    if (!product) return 0;
    const warrantyPrice = WARRANTIES.find(w => w.id === selectedWarranty)?.price || 0;
    return product.price + warrantyPrice;
  }, [product, selectedWarranty]);

  const productImages = useMemo(() => {
    if (!product) return [];
    return [
      product.image,
      '/shop/product-pic10.png',
      '/shop/product-pic11.png',
      '/shop/product-pic12.png'
    ];
  }, [product]);

  return {
    product,
    selectedColor,
    setSelectedColor,
    selectedWarranty,
    setSelectedWarranty,
    quantity,
    setQuantity,
    finalPrice,
    productImages
  };
};
