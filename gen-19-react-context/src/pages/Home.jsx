import React from "react";
import ListProducts from "../components/ListProducts";
import MainPage from "../layouts/MainPage";

function Home() {
    return (
        <div>
            <MainPage />
            <ListProducts />
        </div>
    );
}

export default Home;
