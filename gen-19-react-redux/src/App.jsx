import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./route/AdminRoute";
import CustomerRoute from "./route/CustomerRoute";
import store from "./store";

function App() {

    return (
        <div className="p-2 text-black bg-contain bg-no-repeat bg-amber-50 min-h-screen">
            <Routes>
                <Route
                    path="/*"
                    element={
                        <Provider store={store}>
                            <CustomerRoute />
                        </Provider>
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
