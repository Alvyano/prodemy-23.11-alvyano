import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import ProductCard from './ProductCard';

function ListProducts() {
  const getProducts = (url) => axios.get(url).then((res) => res.data);
  const { data: allData, error, isLoading } = useSWR(`http://localhost:3000/products`, getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error </div>;
  }

  console.log(allData);
  console.log(allData && allData.length > 0 ? allData[0] : null);

  return (
    <div className='flex place-content-center flex-col items-center pt-5'>
      <div className='pt-5 text-4xl font-bold text-amber-800 '>
        Product ITTS Coffee
      </div>
      <div className='py-10 grid items-center justify-center gap-5 grid-cols-3'>
        {allData?.map((data) => (
          <div key={data.id}>
            <ProductCard title={data.nama} src={data.gambar[0]} price={`$${data.harga}`} id={data.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProducts;
