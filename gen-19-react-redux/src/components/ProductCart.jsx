
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCart({ title, src, harga, id, qty }) {

    const navigate = useNavigate();
    const goToProduct = (id) => {
        navigate(`/products/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className='flex gap-x-10' onClick={() => goToProduct(id)}>
            <img src={src} alt="" className='w-[10rem] rounded-2xl' />
            <div className='flex flex-col gap-y-5'>
                <span className='text-3xl'>{title}</span>
                <span>Rp.{harga}</span>
                <span className='text-sm ml-10'>qty: {qty}</span>
            </div>
        </div>
    )
}
