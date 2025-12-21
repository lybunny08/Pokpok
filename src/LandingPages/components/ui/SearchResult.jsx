import React from 'react';

function SearchResult({ product, onSelect }) {
  if (!product) return null;

  return (
    <button
      type="button"
      onClick={() => onSelect && onSelect(product)}
      className="w-full text-left flex items-start justify-start gap-4 p-2 hover:bg-gray-100"
    >
      <img src={product.image} alt={product.alt} className="h-[80px] w-[80px] object-cover rounded-md" />
      <div className="flex-1">
        <div className="font-medium text-sm">{product.name}</div>
        <div className="text-xs text-gray-500">{product.category}</div>
        <div className="text-sm font-semibold mt-1">${product.price?.toFixed(2)}</div>
      </div>
    </button>
  );
}

export default SearchResult;