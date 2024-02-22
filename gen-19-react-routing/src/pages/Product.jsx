import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';
import dataku from '../data/data';

function Product() {
    
    const params = useParams();
    
    const dataProduk = dataku.find((item) => item.id == params.id);

    const dataProductCard = [];
    for (const data of dataku) {
        if (data != dataProduk) {
            dataProductCard.push(data);
        }
    }

    return (
    <div>
        <div>
            <ProductDetail {...dataProduk}/>
        </div>
        <div className='pt-5 text-center text-4xl font-bold text-amber-800'>
                Product Lainnya :
        </div>
        <div className='flex place-content-center flex-row items-center mb-10 gap-x-5 py-5'>
            {dataProductCard.map((dataProduk) => (
                <div key={dataProduk.id}>
                    <ProductCard title={dataProduk.nama} src={dataProduk.gambar[0]} price={`$${dataProduk.harga}`} id={dataProduk.id}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Product;