import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../data';

export default function Products() {
  const { category_name } = useParams();

  // Burada kategori adına göre ilgili ürünleri bulabilirsiniz
  const category = Data.find((item) => item.category_name === category_name);

  if (!category) {
    return <p>Ürün bulunamadı.</p>;
  }

  // İlgili kategoriye ait ürünleri listelemek için category.products kullanılabilir

  return (
    <div className=''>
      <h2 className='text-center font-bold text-3xl sm:text-4xl bg-red-500 text-white'>{category.category_name}</h2>
      <div className='flex mx-auto p-2 flex-col'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
          {category.category_products.map((product, index) => (
            <div key={index} className='bg-gray-200 p-4 rounded-lg'>
              <h2 className='font-bold text-xl'>{product.name}</h2>
              <p className='text-gray-600'>{product.description}</p>
              <div className='flex justify-between mt-2'>
                <span className='font-bold'>{product.price}TL</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
