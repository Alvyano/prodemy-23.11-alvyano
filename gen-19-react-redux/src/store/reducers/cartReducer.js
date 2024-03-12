import { ADD_BARANG_TO_CART, EDIT_QUANTITY_BARANG_FROM_CART, REMOVE_BARANG_FROM_CART } from "../types";

let arrayDataCart = [];

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
        alert("Produk Ini Sudah Berada Di Cart!");
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

const cartReducer = (state = arrayDataCart, action) => {

    const payload = action.payload;
    arrayDataCart = [...arrayDataCart];

    switch (action.type) {
        case ADD_BARANG_TO_CART:
            arrayDataCart = addBarang(arrayDataCart, payload);
            return { dataCart: arrayDataCart };

        case REMOVE_BARANG_FROM_CART:
            arrayDataCart = removeBarang(arrayDataCart, payload);
            return { dataCart: arrayDataCart };

        case EDIT_QUANTITY_BARANG_FROM_CART:
            arrayDataCart = quantityBarang(arrayDataCart, payload);
            return { dataCart: arrayDataCart };

        default:
            return state;
    }
};

export default cartReducer;