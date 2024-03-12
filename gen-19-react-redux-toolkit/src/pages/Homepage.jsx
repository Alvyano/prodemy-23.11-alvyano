import React from "react";
import ListProducts from "../components/ListProducts";
import MainPage from "../layouts/MainPage";

function Homepage() {
    return (
        <div>
            <MainPage />
            <ListProducts />
        </div>
    );
}

export default Homepage;
