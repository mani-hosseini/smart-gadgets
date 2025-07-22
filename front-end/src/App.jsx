import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer/footer";
import MainContainer from "./components/ui/MainContainer";

function App() {
  return (
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
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
        </MainContainer>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
