import React from 'react';

function QuantitySelector({ quantity, onDecrease, onIncrease }) {
  return (
    <div className='flex items-center border border-gray-300 rounded-full lg:w-32 overflow-hidden '>
      <button 
        onClick={onDecrease}
        className='px-6 py-3 lg:px-3 lg:py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-l-lg transition-colors bg-transparent border-none cursor-pointer'
        aria-label="Diminuer la quantité"
      >
        -
      </button>
      <span className='flex-1 text-center py-2' aria-live="polite">
        {quantity}
      </span>
      <button 
        onClick={onIncrease}
        className='px-6 py-3 lg:px-3 lg:py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-r-lg transition-colors bg-transparent border-none cursor-pointer'
        aria-label="Augmenter la quantité"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;