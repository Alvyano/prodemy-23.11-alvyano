import React from "react";
import { Route, Routes } from "react-router-dom";
import { CheckoutProvider } from "./context/Cart";
import AdminRoute from "./route/AdminRoute";
import CustomerRoute from "./route/CustomerRoute";

function App() {

    return (
        <div className="p-2 text-black bg-contain bg-no-repeat bg-amber-50 min-h-screen">
            <Routes>
                <Route
                    path="/*"
                    element={
                        <CheckoutProvider>
                            <CustomerRoute />
                        </CheckoutProvider>
                    }
                />
                <Route
                    path="/admin/*"
                    element={<AdminRoute />}
                />
            </Routes>
        </div>
    );
}

export default App;
