import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Home from "../pages/Home";
import Product from "../pages/Product";

export default function CustomerRoute() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/products/:id"
                    element={<Product />}
                />
            </Routes>
            <Footer />
        </div>
    );
}
