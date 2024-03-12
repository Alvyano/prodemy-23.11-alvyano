import { ADD_BARANG_TO_CART, EDIT_QUANTITY_BARANG_FROM_CART, REMOVE_BARANG_FROM_CART } from "../types";

const addBarangToCart = (payload) => ({
    type: ADD_BARANG_TO_CART,
    payload
});

const removeBarangFromCart = (payload) => ({
    type: REMOVE_BARANG_FROM_CART,
    payload
});

const editQuantityBarangFromCart = (payload) => ({
    type: EDIT_QUANTITY_BARANG_FROM_CART,
    payload
});

export { addBarangToCart, editQuantityBarangFromCart, removeBarangFromCart };