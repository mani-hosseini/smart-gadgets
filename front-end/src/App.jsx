import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Account from "./pages/account";
import MyAccount from "./pages/my-account";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import MainContainer from "./components/ui/MainContainer";
import ScrollToTop from "./components/ui/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BlogPost from "./pages/BlogPost";
import ProductDetails from "./components/shop/ProductDetails";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <BrowserRouter>
            <ScrollToTop />
            <MainContainer>
              <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/my-account/*" element={<MyAccount />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </main>
            </MainContainer>
            <Footer />
            <ToastContainer rtl position="top-center" />
          </BrowserRouter>
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
