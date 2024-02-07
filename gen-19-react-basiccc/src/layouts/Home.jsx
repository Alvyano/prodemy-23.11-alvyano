import React from "react";
import img from "../assets/img/home.png";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#f7f5f5] to-[#fcf1e3] ">
      <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-3xl text-center lg:text-start leading-tight">
          Cappucino
        </h1>
        <p className="text-justify">
        Rasakan kehangatan dan kelezatan dalam setiap tegukan cappuccino kami! Dibuat dengan cinta dan keterampilan tinggi, cappuccino kami menggabungkan sempurna antara espresso penuh aroma, susu yang lembut, dan busa yang kental.
        </p>

        <div className=" flex flex-row gap-6">
          <Button title="Buy" />
          <Button title="MORE MENU" />
        </div>
      </div>

      <div className="relative">
        <img src={img} alt="img" />

        <div className=" absolute bg-white px-8 py-2 top-5 right-0 rounded-full">
          <h2 className=" font-semibold">18K</h2>
        </div>

        <div className=" absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full">
          <h2 className=" font-medium">Cappuccino</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;