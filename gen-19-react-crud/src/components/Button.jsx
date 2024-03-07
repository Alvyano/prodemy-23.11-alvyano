import React from 'react';

export default function Button(props) {
  const { children, className = "bg-white hover:bg-amber-400 text-black hover:text-white hover:border-gray-800" } = props;
  return (
    <div {...props} className={`${className} flex gap-x-2 place-content-center items-center text-sm px-2 py-1.5 rounded-2xl border-solid border-gray-400 border hover:scale-105 ease-in duration-100 cursor-pointer`}>
      {children}
    </div>
  );
}
