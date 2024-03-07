import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export default function Update() {
    const params = useParams();

    const getData = (url) =>
        axios.get(url).then((res) => res.data);
    const { data: products, isLoading } = useSWR(
        `http://localhost:3000/products/${params.id}`,
        getData,
    );

    console.log(products);
    return isLoading ? (
        "Mohon Ditunggu"
    ) : (
        <div>
            {" "}
            Update Kopi ITTS COffee
            {products?.nama}
        </div>
    );
}
