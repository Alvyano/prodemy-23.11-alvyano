import React from 'react'
import LineNavbar from '../components/LineNavbar'

function Footer() {
  return (
    <section>
      <LineNavbar/>
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/2">
          <h1 className=" font-semibold text-xl pb-4">ITTS Coffee</h1>
          <p className=" text-sm">
          Selamat datang di ITTS Coffee, tempat di mana kopi bukan sekadar minuman, tetapi sebuah pengalaman rasa yang memukau. Setiap biji kopi yang kami pilih secara teliti berasal dari perkebunan terbaik, memastikan kualitas terbaik dalam setiap sajian. 
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              ITTSCOFFEE@email.com
            </a>
            <a
              className=" hover:text-backgroundColor transition-all cursor-pointer"
              href="/"
            >
              0813-5857-0522
            </a>
          </nav>
        </div>
      </div>
      <div>
      </div>
    </section>
  )
}

export default Footer