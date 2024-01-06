import React, { useState } from "react";
import { Link } from "react-router-dom";
import Data from "../data";
import Shopinfo from "../components/AboutShop/Shopinfo";

export default function Menu() {

  return (
    <>
      <Shopinfo />
      <h2 className='text-center text-5xl font-extrabold text-black/45 mt-4'>Menü</h2>
      <div className=' mx-auto grid grid-cols-2  md:grid-cols-3 max-w-[400px] sm:max-w-[1300px] mt-10 gap-2 sm:gap-4 md:gap-20'>
        {Data.length > 0 ? (
          Data.map((categoryItem, index) => (
            <div className='mx-auto flex flex-col items-center p-2  mt-2 ' key={index}>
              <Link to={`/category/${categoryItem.category_name.replace()}`}>
                <div className='flex flex-col  items-center mb-4'>
                  <img  src={categoryItem.category_image} alt={categoryItem.category_name} className=' rounded object-cover md:w-[650px] mr-2' />
                  <h2 className='text-black font-bold text-xl whitespace-nowrap sm:text-4xl'>{categoryItem.category_name}</h2>
                </div>
              </Link>
              <table className='table-auto mt-4'>
                <thead>
                </thead>
                <tbody className=''>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <p className='text-center text-xl mt-4'>Ürün bulunamadı.</p>
        )}
      </div>
    </>
  );
}
