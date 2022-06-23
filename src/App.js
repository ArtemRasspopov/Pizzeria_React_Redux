import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
