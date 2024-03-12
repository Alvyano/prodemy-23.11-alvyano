import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProducts from "../administrator/AddProducts";
import Admin from "../administrator/Admin";
import DeleteProducts from "../administrator/DeleteProducts";
import UpdateProducts from "../administrator/UpdateProducts";

export default function AdminRoute({ mainUrl }) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Admin mainUrl={mainUrl} />} />
                <Route
                    path="/addProducts"
                    element={<AddProducts mainUrl={mainUrl} />}
                />
                <Route
                    path="/updateProducts/:id"
                    element={<UpdateProducts mainUrl={mainUrl} />}
                />
                <Route
                    path="/deleteProducts/:id"
                    element={<DeleteProducts mainUrl={mainUrl} />}
                />
            </Routes>
        </div>
    );
}
