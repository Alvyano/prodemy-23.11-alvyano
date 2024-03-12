import React from 'react';
import Button from '../components/Button';
import mainImage from '../assets/main.jpg'; 

function MainPage() {
  return (
    <div className="flex items-center text-xl py-10 text-stone-50 bg-amber-50">
      <div className="relative w-3/4 overflow-hidden">
        <img src={mainImage} alt="Main" className="w-3/4 h-auto rounded-full shadow-lg transform m-8 hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="flex flex-col items-start justify-center w-1/2 mr-12">
        <h1 className="text-4xl text-center font-bold leading-tight text-black mb-4">Welcome ITTS Coffee</h1>
        <div className='text-1xl text-left text-amber-500 mb-6'>
          <p>Nikmati pengalaman unik menikmati kopi berkualitas tinggi sambil merasakan kelezatan hidangan pilihan kami.</p>
        </div>
        <div>
          <Button>
            Buy Product 
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
