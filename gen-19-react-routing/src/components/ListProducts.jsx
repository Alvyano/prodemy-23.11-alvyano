import React from 'react';
import dataku from '../data/data';
import ProductCard from './ProductCard';

function ListProducts() {
    return (
        <div className='flex place-content-center flex-col items-center pt-5'>
            <div className='pt-5 text-4xl font-bold text-amber-800 '>
                Product ITTS Coffee
            </div>
            <div className='py-10 grid items-center justify-center gap-5 grid-cols-3'>
                {dataku.map((data) => (
                    <div key={data.id}>
                        <ProductCard title={data.nama} src={data.gambar[0]} price={`$${data.harga}`} id={data.id} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListProducts;