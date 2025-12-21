import React from 'react';

function AddToCartButton() {
  return (
    <button className='flex-1 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium text-center border-none cursor-pointer'>
      Ajouter au panier
    </button>
  );
}

export default AddToCartButton;