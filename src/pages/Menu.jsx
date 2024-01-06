import React, { useState } from "react";
import Data from "../data";
import Shopinfo from "../components/AboutShop/Shopinfo";

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterSearch = () => {
    return Data.filter((categoryItem) => {
      if (searchTerm === '') {
        return true;
      } else {
        return (
          categoryItem.category_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          categoryItem.category_products.some(
            (menuItem) =>
              menuItem.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    });
  };

  const filteredData = filterSearch();

  return (
    <>
    <Shopinfo/>
      <h2 className='text-center text-5xl font-extrabold text-black/45 mt-4'>Menü</h2>
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder='Search'
          value={searchTerm}
          onChange={handleSearch}
          className='border  border-gray-300 rounded px-3 py-2 mt-4'
        />
      </div>
      <div className='flex-wrap mx-auto flex p-3 justify-between max-w-[800px] mt-10 gap-20'>
        {filteredData.length > 0 ? (
          filteredData.map((categoryItem, index) => (
            <div className='mx-auto' key={index}>
              <h2 className='text-black font-bold text-4xl'>{categoryItem.category_name}</h2>
              <div className='border border-b border-red-500 mt-2 w-24 '></div>
              <table className='table-auto mt-4'>
                <thead>
                  <tr>
                    <th className='px-4 py-2 text-lg'>Name</th>
                    <th className='px-4 py-2 text-lg'>Price</th>
                  </tr>
                </thead>
                <tbody className=''>
                  {categoryItem.category_products.map((menuItem, idx) => (
                    <tr className='border-b-2 border-gray-200' key={idx}>
                      <td className='px-4 text-xl py-2'>{menuItem.name}</td>
                      <td className='px-4 py-2 text-lg'>{menuItem.price} TL</td>
                    </tr>
                  ))}
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
