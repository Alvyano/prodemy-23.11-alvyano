import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import ProductCart from '../components/ProductCart';
import { editQuantityBarangFromCart, removeBarangFromCart } from '../store/actions/cartAction';



function dataCartIsNotExist() {
    return (
        <span className='grid place-content-center text-5xl h-[39rem]'>
            SILAHKAN CEK PRODUK KAMI
        </span>
    )
}

export default function CartPage() {

    const { dataCart } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    let totalPrice = 0;
    dataCart?.forEach(item => totalPrice += (item.harga * item.qty));

    function hapusDatacart(index) {
        dispatch(removeBarangFromCart(index));
    }

    function handleQuantity(index, count) {
        const sendData = {
            index: index,
            counter: count
        }
        dispatch(editQuantityBarangFromCart(sendData));
    }


    const isDataCartExist = ((dataCart == undefined) || (dataCart.length == 0));
    return (isDataCartExist ? dataCartIsNotExist() :
    <div className='my-20 mx-[10rem] min-h-[10rem] flex'>
    <div className='m-5 h-full w-full flex bg-amber-300'>
        <div className=' w-full'>
                    {
                        dataCart?.map((item, index) => (
                            <div key={item.id}>
                                <div className='relative grid place-items-center place-content-between m-2 border-2 border-amber-500 rounded-2xl bg-white'>
                                    <ProductCart id={item.id} title={item.nama} src={item.gambar[0]} harga={item.harga} qty={item.qty} />
                                    <div className='absolute bottom-5 right-5'>
                                        <Button onClick={() => hapusDatacart(index)}>Hapus</Button>
                                    </div>
                                    <div className='absolute bottom-[0.75rem] left-[11rem]'>
                                        <button className='border-2 rounded-lg bg-amber-300 w-7 text-sm hover:bg-amber-500' onClick={() => handleQuantity(index, +1)}>+</button>
                                        <button className='border-2 rounded-lg bg-gray-300 w-7 text-sm hover:bg-gray-500' onClick={() => handleQuantity(index, -1)}>-</button>
                                    </div>
                                    <div className='absolute text-xl bottom-1 right-[15rem]'>
                                        Harga:Rp{(item.harga * item.qty)}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex w-1/4 text-2xl  border-10 border-amber-300 text-center text-amber-500 font-bold bg-white rounded-xl shadow-lg p-7'>
                Total Harga: Rp.{totalPrice}
            </div>
        </div>
    )
}
