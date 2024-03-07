import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormAddProducts from "./FormAddProducts";

function AddProducts() {

    const schema = yup.object().shape({
        nama: yup.string().required("Periksa Lagi"),
        harga: yup.number().positive().integer().required("Periksa Lagi"),
        deskripsi: yup
            .string()
            .required("Periksa Lagi")
    });

    const {
        register,
        handleSubmit,
        unregister,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [linkGbr, setLinkGbr] = useState("");

    const [gambarBaru, setGambarBaru] = useState([
        new NewAddGbr(1, ""),
    ]);

    useEffect(() => {
        setGambarBaru(gambarBaru);
        setLinkGbr(linkGbr);
    }, [gambarBaru, linkGbr]);

    function NewAddGbr(id, src) {
        this.id = id;
        this.src = src;
    };

    const onSubmitForm = (data) => {

        console.log("Data Form", data);
        const { nama, harga, deskripsi, ...objGambar } =
            data;
        console.log(objGambar);

        function empty(value) {
            if (value === "") {
                return;
            }
            return value;
        }

        const arrayGambar = Object.values(objGambar).filter(empty);

        const dataBaru = {
            id: 1,
            nama,
            harga,
            deskripsi,
            gambar: arrayGambar,
        };

        const schemaCekGambar = yup.object().shape({
            gambar: yup.array().min(1).of(yup.string().url()).required()
        })

        schemaCekGambar.validate(dataBaru)
            .then((data) =>
                console.log("Data Siap Kirim11: ", data)
            )
            .catch(() => {
                alert("Input Gambar Masih Keliru");
            });

        const newVal = schemaCekGambar.isValidSync(dataBaru);
        console.log("Data Dibawah: ", newVal);
    };


    function pratinjauGambar(val, id) {
        setLinkGbr(val);
        gambarBaru.forEach((item) => {
            item.id == id
                ? (item.src = linkGbr)
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
                linkGbr,
            ),
        ]);
    }

    return (
        <div className="grid grid-flow-row justify-center ">
            <h1 className="text-3xl text-amber-400 mt-[5rem] mb-[2rem] flex justify-left font-bold">
                 Menambahkan Produk
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
