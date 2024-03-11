import axios from 'axios';
import React, { useContext } from 'react';
import useSWR from 'swr';
import Button from '../components/Button';
import ProductCart from '../components/ProductCart';
import { CheckoutContext } from '../context/Cart';


function getProductAllOnCart(arr) {
    let ProductAll = [];
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    for (const item of arr) {
        const { data } = useSWR(`http://localhost:3000/products/${item.id}`, fetcher);
        ProductAll.push(data)
    }
    return ProductAll;
}

export default function CartPage() {

    const { dataCart, setDataCart } = useContext(CheckoutContext);
  

    const ProductAll = getProductAllOnCart(dataCart)
  

    let totalPrice = 0;
    ProductAll.forEach(item => totalPrice += parseInt(item.harga));
   
    function hapusDatacart(id) {
        setDataCart([...dataCart])
        console.log(dataCart)
    }


    return (
        <div className='my-20 mx-[10rem] min-h-[50rem] flex'>
            <div className='m-2 h-full w-full flex'>
                <div className=' w-full'>
                    {
                        ProductAll?.map((item, index) => (
                            <div key={item.id}>
                                <div className='grid grid-cols-2 place-items-center place-content-between m-2 border-2 border-amber-600 rounded-2xl bg-white'>
                                    <ProductCart title={item.nama} src={item.gambar[0]} harga={item.harga} id={item.id} />
                                    <Button onClick={() => hapusDatacart(item.id)}>Hapus</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
