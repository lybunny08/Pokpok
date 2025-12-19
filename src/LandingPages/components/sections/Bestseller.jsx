import React from 'react';
import ProductCard from '../ui/ProductCard';
import red from '../../../assets/products/red.png';
import bleu from '../../../assets/products/blue.png';
import grey from '../../../assets/products/grey.png';

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

function Products() {
  return (
    <div className='flex flex-col gap-[24px]'>
      <div className='flex flex-row justify-between items-end'>
        <h2 className='text-[24px] font-medium '>Bestseller</h2>
        <span>Shop all</span>
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

export default Products;