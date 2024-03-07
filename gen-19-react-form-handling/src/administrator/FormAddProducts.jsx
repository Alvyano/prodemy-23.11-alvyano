import React from "react";
import Button from "../components/Button";
import InputText from "../components/InputText";

export default function FormAddProducts({
    handleSubmit,
    register,
    onSubmitForm,
    gambarBaru,
    tambahGambar,
    hapusGambar,
    pratinjauGambar,
    errors,
}) {
    return (
        <div className="relative border-4 border-amber-500 h-[56rem] p-2 rounded-2xl">
            <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="flex flex-col relative"
            >
                <div>
                    <div className="relative grid pb-5">
                        <label
                            htmlFor="Nama"
                            className="px-5 text-amber-500 font-bold text-xl"
                        >
                            Nama Barang:
                        </label>
                        <InputText
                            register={register}
                            placeholder={"Nama Barang"}
                            id={"nama"}
                        />
                        <p className="absolute top-[4.5rem] left-3 text-xs font-bold text-red-400">
                            {errors.nama?.message}
                        </p>
                    </div>
                    <div className="relative grid pb-5">
                        <label
                            htmlFor="Harga"
                            className="px-5  text-xl"
                        >
                            Harga Barang:
                        </label>
                        <InputText
                            register={register}
                            placeholder={"Harga Barang"}
                            id={"harga"}
                        />
                        <p className="absolute top-[4.5rem] left-3 text-xs font-bold text-red-400">
                            {errors.harga?.message}
                        </p>
                    </div>
                    <div>
                        <div className="realtive grid pb-3">
                            <label
                                htmlFor="Deskripsi"
                                className="px-5  text-xl"
                            >
                                Deskripsi Barang:
                            </label>
                            <InputText
                                register={register}
                                placeholder={
                                    "Deskripsi Barang"
                                }
                                id={"deskripsi"}
                                className="h-[10rem] w-[30rem]"
                            />
                            <p className="absolute top-[23.5rem] left-3 text-xs font-bold text-red-400">
                                {errors.deskripsi?.message}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="grid gap-y-2">
                        <label
                            htmlFor="Gambar"
                            className="px-5  text-xl"
                        >
                            Gambar Barang:
                        </label>
                        {gambarBaru.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-row gap-x-3"
                            >
                                <InputText
                                    register={register}
                                    className="border-[2px] border-black rounded-xl px-2 py-2 w-[30rem] "
                                    placeholder={
                                        "Gambar Barang"
                                    }
                                    id={`gambar_${item.id}`}
                                    onChange={(e) =>
                                        pratinjauGambar(
                                            e.target.value,
                                            item.id,
                                        )
                                    }
                                />
                                <Button
                                    type="button"
                                    onClick={() =>
                                        hapusGambar(item.id)
                                    }
                                >
                                    Hapus
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-[40rem]">
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
            <div className="absolute top-[25.5rem] left-[12rem]">
                <Button onClick={() => tambahGambar()}>
                    Tambah Gambar
                </Button>
            </div>
        </div>
    );
}
