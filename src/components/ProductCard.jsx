// components/ProductCard.jsx
import React from 'react';

const ProductCard = ({
  imageUrl,
  alt = '',
  productName,
  category,
  categoryColor = '#bababa',
  height = '350px',
  className = ''
}) => {
  return (
    <div className={`flex flex-col gap-[8px] ${className}`}>
      <div
        className='w-full rounded-sm bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: categoryColor,
          height: height
        }}
        aria-hidden="true"
      />
      <span>{productName}</span>
      <span className='uppercase text-[12px]'>{category}</span>
    </div>
  );
};

export default ProductCard;