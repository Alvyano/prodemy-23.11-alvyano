import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProducts from "../administrator/AddProducts";
import Admin from "../administrator/Admin";
import Delete from "../administrator/Delete";
import Update from "../administrator/Update";

export default function AdminRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Admin />} />
                <Route
                    path="/addProducts"
                    element={<AddProducts />}
                />
                <Route
                    path="/update/:id"
                    element={<Update />}
                />
                <Route
                    path="/delete/:id"
                    element={<Delete />}
                />
            </Routes>
        </div>
    );
}
