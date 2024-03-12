import { createSlice } from "@reduxjs/toolkit";


function isExistId(arrayDataCart, id) {
    for (const obj of arrayDataCart) {
        if (obj.id == id) {
            return true;
        }
    }
    return false;
}

function addBarang(arrayDataCart, payload) {
    const obj = {...payload };
    const isExist = isExistId(arrayDataCart, obj.id);
    if (isExist) {
        alert("Produk Ini Sudah Di Tambahkan!");
        return arrayDataCart;
    }

    arrayDataCart.push(obj);
    alert(`Produk ${obj?.nama} Berhasil Ditambahkan!`);
    return arrayDataCart;
}

function removeBarang(arrayDataCart, payload) {
    const index = payload;
    arrayDataCart.splice(index, 1);
    return arrayDataCart;
}

function quantityBarang(arrayDataCart, payload) {
    const { index, counter } = payload;
    const data = arrayDataCart[index];
    if ((data.qty >= 1) && (data.qty <= data.stok)) {
        if (counter == 1) {
            data.qty += 1;
        } else {
            data.qty -= 1;
        }
        data.qty = data.qty == 0 ? 1 : data.qty;
        data.qty = data.qty >= data.stok ? data.stok : data.qty;
    }
    return arrayDataCart;
}

export const Slice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addBarangToCart: (arrayDataCart, { payload }) => {
            addBarang(arrayDataCart, payload);
        },
        removeBarangFromCart: (arrayDataCart, { payload }) => {
            removeBarang(arrayDataCart, payload);
        },
        editQuantityBarangFromCart: (arrayDataCart, { payload }) => {
            quantityBarang(arrayDataCart, payload);
        }
    }
})

export const { addBarangToCart, removeBarangFromCart, editQuantityBarangFromCart } = Slice.actions;

export default Slice.reducer;