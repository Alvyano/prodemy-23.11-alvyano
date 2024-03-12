import axios from "axios";
import React from "react";
import useSWR from "swr";
import ProductCard from "./ProductCard";

function ListProducts() {
    const getProducts = (url) => axios.get(url).then((res) => res.data);
    const { data: allData } = useSWR(`http://localhost:3000/products`, getProducts);

    return (
        <div className='flex place-content-center flex-col items-center pt-5'>
        <div className='pt-5 text-4xl font-bold text-amber-800 '>
          Product ITTS Coffee
        </div>
            <div className="py-10 grid items-center justify-center gap-5 grid-cols-3">
                {allData?.map((data) => (
                    <div key={data.id}>
                        <ProductCard
                            title={data.nama}
                            src={data.gambar[0]}
                            price={`Rp.${data.harga}`}
                            id={data.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListProducts;
