import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import Button from "../components/Button";

export default function Admin({ mainUrl }) {
    const getData = (url) =>
        axios.get(url).then((res) => res.data);
    const { data: products, isLoading, mutate } = useSWR(
        mainUrl,
        getData,
    );

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    function goToProductPage(id) {
        navigate(`/products/${id}`);
    }
    function goToAddProducts() {
        navigate("addProducts");
    }
    function goToUpdateProducts(id) {
        navigate(`updateProducts/${id}`);
    }
    function goToDeleteProducts(id) {
        axios.delete(mainUrl + `/${id}`)
            .then(() => {
                mutate();
                alert("Data Berhasil Terhapus");
            })
            .catch((err) => alert(err));
    }


    const tabel = "border-4 border-solid border-amber-500";
    return isLoading ? (
        "Wait"
    ) : (
        <div>
            <div className="grid place-content-center text-[15px]  pt-[5rem]">
                <div className="py-2">
                    <Button onClick={goToAddProducts}>
                        Add Product
                    </Button>
                </div>

                <table
                    className={`table-auto ${tabel} w-[56rem]`}
                >
                    <thead>
                        <tr className="bg-amber-200">
                            {Object.keys(products?.[0]).map(
                                (head) => (
                                    <th
                                        key={head}
                                        className={`border-4 ${tabel} border-black`}
                                    >
                                        {head.toUpperCase()}
                                    </th>
                                ),
                            )}
                            <th
                                className={`border-4 ${tabel} border-black`}
                            >
                                FUNGSI
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((item) => (
                            <tr
                                key={item.id}
                                className={`text-center ${tabel} h-[8rem]`}
                            >
                                <td
                                    className={`text-center ${tabel}`}
                                >
                                    <span
                                        className="cursor-pointer"
                                        onClick={() =>
                                            goToProductPage(
                                                item.id,
                                            )
                                        }
                                    >
                                        {item.id}
                                    </span>
                                </td>
                                <td
                                    className={`text-center ${tabel}`}
                                >
                                    <span
                                        className="cursor-pointer"
                                        onClick={() =>
                                            goToProductPage(
                                                item.id,
                                            )
                                        }
                                    >
                                        {item.nama}
                                    </span>
                                </td>
                                <td
                                    className={`text-center ${tabel}`}
                                >
                                    Rp.{item.harga}
                                </td>
                                <td
                                    className={`text-center ${tabel}`}
                                >
                                    {
                                        <img
                                            src={
                                                item
                                                    .gambar[0]
                                            }
                                            alt=""
                                            className="h-[7rem] mx-auto cursor-pointer rounded-xl"
                                        />
                                   
                                    }
                                </td>
                                <td
                                    className={`text-center ${tabel}`}
                                >
                                    {item.deskripsi.length > 10 ? item.deskripsi.substring(0, 10) + "..." : item.deskripsi}
                                </td>
                                <td
                                    className={`flex flex-row place-content-center items-center gap-x-5 border-2 h-[8rem]`}
                                >
                                    <Button
                                        onClick={() =>
                                            goToUpdateProducts(
                                                item.id,
                                            )
                                        }
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            goToDeleteProducts(
                                                item.id,
                                            )
                                        }
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
