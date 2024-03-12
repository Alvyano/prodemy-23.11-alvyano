import axios from "axios";
import React from "react";
import useSWR from "swr";
import ProductCard from "../components/ProductCard";

export default function ProductAll() {

    const getProducts = (url) => axios.get(url).then((res) => res.data);
    const { data: dataku, isLoading } = useSWR(`http://localhost:3000/products`, getProducts);

    return (isLoading ? "Mohon Ditunggu" :
        <div className="grid grid-cols-4 place-content-center gap-5 py-[7rem] px-32">
            {dataku.map((item) => (
                <div key={item.id} className="grid w-fit">
                    <ProductCard
                        title={item.nama}
                        src={item.gambar[0]}
                        price={`Rp${item.harga}`}
                        id={item.id}
                    />
                </div>
            ))}
        </div>
    );
}
