import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/cart.jsx";
import Home from "./pages/home.jsx";
import Kalkulator from "./pages/kalkulator.jsx";
import NotFound from "./pages/NotFound.jsx";
import Pencarian from "./pages/pencarian.jsx";
import Product from "./pages/product.jsx";
import Products from "./pages/products.jsx";

export const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pencarian" element={<Pencarian />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/kalkulator" element={<Kalkulator />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
