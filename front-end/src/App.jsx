import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Account from "./pages/account";
import MyAccount from "./pages/my-account";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import MainContainer from "./components/ui/MainContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
      <MainContainer>
        <Header />
        <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />} />
                <Route path="/my-account/*" element={<MyAccount />} />
            </Routes>
        </main>
        </MainContainer>
          <Footer />
          <ToastContainer rtl position="top-center" />
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;
