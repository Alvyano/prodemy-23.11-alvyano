import axios from 'axios';
import useSWR from 'swr';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductDetail from '../components/ProductDetail';


function Product() {
    
    const params = useParams();

    const getProducts = (url) => axios.get(url).then((res) => res.data);
    const { data : allData } = useSWR(`http://localhost:3000/products`, getProducts);

    //console.log(allData);
    //console.log(allData[0]);

    //allData?.map((item) => console.log(item.id));
    
    const dataProductCard2 = [];
    allData?.forEach(element => {
        if (params.id != parseInt(element.id)) {
            dataProductCard2.push(element);
        }
    }
    );

    return (
    <div>
        <div>
            <ProductDetail id={params.id}/>
        </div>
        <div className='pt-5 text-center text-4xl font-bold text-amber-800'>
                Product Lainnya :
        </div>
        <div className='flex place-content-center flex-row items-center mb-10 gap-x-5 py-5'>
            {dataProductCard2?.map((dataProduk) => (
                <div key={dataProduk.id}>
                    <ProductCard title={dataProduk.nama} src={dataProduk.gambar[0]} price={`$${dataProduk.harga}`} id={dataProduk.id}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Product;