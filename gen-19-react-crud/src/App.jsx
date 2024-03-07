import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./route/AdminRoute";
import CustomerRoute from "./route/CustomerRoute";

function App() {
    const mainUrl = "http://localhost:3000/products";
    return (
        <div className="p-2 text-black bg-contain bg-no-repeat bg-amber-50 min-h-screen">
            <Routes>
                <Route
                    path="/*"
                    element={<CustomerRoute mainUrl={mainUrl} />}
                />
                <Route
                    path="/admin/*"
                    element={<AdminRoute mainUrl={mainUrl} />}
                />
            </Routes>
        </div>
    );
}

export default App;
