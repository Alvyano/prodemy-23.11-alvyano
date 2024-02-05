import React from 'react';
import ProductCard from './components/ProductCard';

function App() {
  const handleBuyClick = (namaProduk) => {
    alert(`Anda telah membeli ${namaProduk}`);
  };

  const produk = {
    nama: "Kopi Susu Gula Aren",
    harga: 18_000,
    imageUrl: "https://flash-coffee.com/id/wp-content/uploads/sites/13/2023/06/AREN-FRAPPE-600x375.png",
    deskripsi: "Nikmati pengalaman kopi yang unik dengan Kopi Susu Gula Aren kami. Minuman ini dibuat dengan hati-hati menggunakan biji kopi pilihan yang dipanggang secara sempurna untuk menghasilkan rasa kopi yang kaya dan mendalam. Susu yang digunakan memberikan kelembutan dan kekentalan yang sempurna, menciptakan harmoni cita rasa yang memanjakan lidah. Sentuhan istimewa dari gula aren memberikan tambahan kelezatan dengan kelembutan rasa manis alami. Gula aren tidak hanya memberikan manis yang lezat, tetapi juga memberikan sentuhan eksotis dan kaya nutrisi."
  };

  return (
    <div className="container mx-auto p-8 mt-8 bg-white">
      <ProductCard
        nama={produk.nama}
        harga={produk.harga}
        imageUrl={produk.imageUrl}
        deskripsi={produk.deskripsi}
        onBuyClick={handleBuyClick}
      />

      
    </div>
  );
}

export default App;
