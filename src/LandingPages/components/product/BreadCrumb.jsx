import React from 'react';

function Breadcrumb({ productName, onHomeClick }) {
  return (
    <div className='mb-4 lg:mb-8 text-sm text-gray-600'>
      <button 
        onClick={onHomeClick} 
        className='hover:text-black cursor-pointer bg-transparent border-none p-0'
      >
        Accueil
      </button>
      <span className='mx-2'>/</span>
      <span className='hover:text-black cursor-pointer'>Produits</span>
      <span className='mx-2'>/</span>
      <span className='text-black font-medium'>{productName}</span>
    </div>
  );
}

export default Breadcrumb;