import React from 'react';
import ProductCard from '../../components/ProductCard';
import red from '../../assets/products/red.png';
import bleu from '../../assets/products/blue.png';
import grey from '../../assets/products/grey.png';

// Tableau de données des produits
const productsData = [
  {
    id: 1,
    image: red,
    name: 'Hair hydrator',
    category: 'Hair'
  },
  {
    id: 2,
    image: bleu,
    name: 'Eye Serum',
    category: 'Body'
  },
  {
    id: 3,
    image: grey,
    name: 'Face Toner',
    category: 'Skin'
  },
  {
    id: 4,
    image: bleu,
    name: 'Eye Repair',
    category: 'Body'
  }
];

function Featured() {
  return (
    <div className='flex flex-col gap-[24px]'>
      <div className='flex flex-row justify-between items-end'>
        <h2 className='text-[24px] font-medium '>Featured</h2>
        <div className='flex flex-row gap-[8px]'>
          <button className='bg-gray-200 p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className='bg-gray-200 p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      <div className='h-full grid grid-cols-4 gap-[16px]'>
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.image}
            productName={product.name}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Featured;