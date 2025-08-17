import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/ui/MainContainer";
import BreadcrumbBox from "../components/ui/BreadcrumbBox";
import OrderSummary from "../components/checkout/OrderSummary";
import BillingDetails from "../components/checkout/BillingDetails";
import PaymentSection from "../components/checkout/PaymentSection";
import EmptyCartState from "../components/checkout/EmptyCartState";

export default function Checkout() {
  const { items, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  if (items.length === 0) {
    return <EmptyCartState />;
  }

  return (
    <div className="min-h-screen bg-[#fefefe] py-8">
      <MainContainer>       
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <BillingDetails />
          <OrderSummary 
            items={items} 
            getTotalPrice={getTotalPrice} 
            formatPrice={formatPrice} 
          />
        </div>

        <PaymentSection />
      </MainContainer>
    </div>
  );
}
