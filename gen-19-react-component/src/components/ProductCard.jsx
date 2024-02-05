import React from 'react';

function ProductCard({ nama, harga, imageUrl, deskripsi, onBuyClick }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <img src={imageUrl} alt={nama} className="w-full h-auto rounded-lg" />
      <h3 className="text-xl font-semibold text-gray-800 mt-2">{nama}</h3>
      <p className="text-gray-700 mt-4">{deskripsi}</p>
      <p className="text-gray-700">Rp. {harga}</p>
      <button
        className="bg-gray-800 text-white px-6 py-2 rounded-full mx-auto mt-4 block hover:bg-gray-700 focus:outline-none focus:shadow-outline"
        onClick={() => onBuyClick(nama)}
      >
        Beli
      </button>
      
    </div>
  );
}

export default ProductCard;
