// Prends les 4 premiers produits qui se vends le mieux
import React from 'react';
import ProductCard from '../ui/ProductCard';
import productsData from '../data/productsData';

function Products() {
  // Prendre seulement les 4 premiers produits
  const displayedProducts = productsData.slice(0, 4);

  return (
    <section className='flex flex-col gap-[24px]'>
      <div className='flex flex-row justify-between items-end'>
        <h2 className='text-[24px] font-medium'>Bestseller</h2>
        <span className='text-gray-600 hover:text-black cursor-pointer transition-colors'>
          Shop all
        </span>
      </div>
      <div className='h-full grid grid-cols-2 md:grid-cols-4 gap-[16px]'>
        {displayedProducts.map((product) => (
          <ProductCard
            productId={product.id}
            key={product.id}
            imageUrl={product.image}
            alt={product.alt}
            productName={product.name}
            category={product.category}
            className='w-full'
          />
        ))}
      </div>
    </section>
  );
}

export default Products;