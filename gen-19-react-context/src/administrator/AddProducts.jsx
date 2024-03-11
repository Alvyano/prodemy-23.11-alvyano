import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import * as yup from "yup";
import FormAddProducts from "./FormAddProducts";

function AddProducts({ mainUrl }) {

    const title = "Form Menambahkan Produk";

    const getAllProducts = (url) => axios.get(url).then(({ data }) => data).then((err) => err);
    const { data: database, isLoading } = useSWR(mainUrl, getAllProducts);

    const schema = yup.object().shape({
        nama: yup.string().required("Periksa Kembali"),
        harga: yup.number().positive().integer().required("Periksa Kembali"),
        deskripsi: yup
            .string()
            .required("Periksa Kembali")
    });

    const {
        register,
        handleSubmit,
        unregister,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [linkgambar, setlinkgambar] = useState("");

    const [gambarBaru, setGambarBaru] = useState([
        new NewAddGbr(1, ""),
    ]);

    useEffect(() => {
        setGambarBaru(gambarBaru);
        setlinkgambar(linkgambar);
    }, [gambarBaru, linkgambar]);

    function NewAddGbr(id, src) {
        this.id = id;
        this.src = src;
    };

    const onSubmitForm = (data) => {

        

        console.log("Data Form", data);
        const { nama, harga, deskripsi, ...objGambar } =
            data;

        function empty(value) {
            if (value === "") {
                return;
            }
            return value;
        }

        const arrayGambar = Object.values(objGambar).filter(empty);

        const dataBaru = {
            id: String(parseInt(database[database.length - 1].id) + 1),
            nama,
            harga: String(harga),
            deskripsi,
            gambar: arrayGambar,
        };

        const schemaCekGambar = yup.object().shape({
            gambar: yup.array().min(1).of(yup.string().url()).required()
        })

        schemaCekGambar.validate(dataBaru)
            .then((data) => {
                axios.post(mainUrl, data)
                    .then((res) => {
                        console.log(res);
                        alert("Data Berhasil Ditambahkan");
                    })
                    .catch((err) => console.log(err))
            })
            .catch(() => {
                alert("Periksa Kembali");
            });
    };


    function pratinjauGambar(val, id) {
        setlinkgambar(val);
        gambarBaru.forEach((item) => {
            item.id == id
                ? (item.src = linkgambar)
                : (item.src = item.src);
        });
    }

    function hapusGambar(id) {
        if (gambarBaru.length == 1) {
            return;
        }
        unregister(`gambar_${id}`);
        return setGambarBaru(
            gambarBaru.filter((a) => a.id !== id),
        );
    }

    function tambahGambar() {
        if (gambarBaru.length >= 3) {
            return;
        }
        return setGambarBaru([
            ...gambarBaru,
            new NewAddGbr(
                gambarBaru[gambarBaru.length - 1].id + 1,
                linkgambar,
            ),
        ]);
    }

    return (
        isLoading ? "Wait" :
            <div className="grid grid-flow-row justify-center ">
                <h1 className="text-5xl mt-[1rem] mb-[8px] flex justify-center">
                    {title}
                </h1>
                <div className="flex flex-row gap-x-5 w-[55rem]">
                    <div className="">
                        <FormAddProducts
                            register={register}
                            handleSubmit={handleSubmit}
                            onSubmitForm={onSubmitForm}
                            gambarBaru={gambarBaru}
                            tambahGambar={tambahGambar}
                            hapusGambar={hapusGambar}
                            pratinjauGambar={pratinjauGambar}
                            errors={errors}
                        />
                    </div>
                    <div className="w-1/3 flex place-items-center justify-center flex-col gap-y-2">
                        {gambarBaru.map((item) => (
                            <img
                                key={item.id}
                                src={item.src}
                                alt=""
                                className="rounded-xl w-5/6"
                            />
                        ))}
                    </div>
                </div>
            </div>
    );
}

export default AddProducts;
