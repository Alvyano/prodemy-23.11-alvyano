import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ProductAll from "../pages/ProductAll";
import CartPage from "../pages/CartPage";
import Homepage from "../pages/Homepage";
import Product from "../pages/Product";

export default function CustomerRoute() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<ProductAll />} />
                <Route
                    path="/products/:id"
                    element={<Product />}
                />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
        </div>
    );
}
