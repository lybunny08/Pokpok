import React, { useState } from 'react';
import LikeButton from '../ui/LikeButton';
import QuantitySelector from '../ui/QuantitySelector';
import AddToCartButton from '../ui/AddToCartButton';
import ProductFeatures from './ProductFeatures';
import ButtonComponents from '../ui/ButtonComponents';

function ProductInfo({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity));
  };

  return (
    <div className='lg:w-[400px] flex flex-col gap-6 relative'>
      {/* En-tête avec catégorie, nom, prix et bouton like */}
      <ProductHeader 
        product={product}
        isLiked={isLiked}
        onLikeClick={handleLikeClick}
      />

      {/* Description */}
      <ProductDescription description={product.description} />

      {/* Options : quantité et ajout au panier */}
      <ProductActions 
        quantity={quantity}
        onQuantityChange={handleQuantityChange}
      />

      {/* Informations supplémentaires */}
      <ProductFeatures />
    </div>
  );
}

// Sous-composant pour l'en-tête
function ProductHeader({ product, isLiked, onLikeClick }) {
  return (
    <div className='flex flex-row justify-between items-start'>
      <div className='flex flex-col gap-2'>
        <span className='text-sm uppercase text-gray-500 tracking-wider'>
          {product.category}
        </span>
        <h1 className='text-3xl font-bold'>{product.name}</h1>
        
        {/* Prix */}
        <ProductPrice 
          price={product.price} 
          originalPrice={product.originalPrice} 
        />
      </div>
      
      {/* Bouton Like */}
      <LikeButton isLiked={isLiked} onClick={onLikeClick} />
    </div>
  );
}

// Sous-composant pour le prix
function ProductPrice({ price, originalPrice }) {
  return (
    <div className='flex items-center gap-2'>
      <span className='text-2xl font-bold'>${price?.toFixed(2) || '29.99'}</span>
      {originalPrice && (
        <span className='text-lg text-gray-500 line-through'>
          ${originalPrice.toFixed(2)}
        </span>
      )}
    </div>
  );
}

// Sous-composant pour la description
function ProductDescription({ description }) {
  return (
    <div className='border-t border-b border-gray-200 py-6'>
      <p className='text-gray-700 text-[14px] leading-relaxed'>
        {description || 'Description du produit non disponible.'}
      </p>
    </div>
  );
}

// Sous-composant pour les actions
function ProductActions({ quantity, onQuantityChange }) {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col sm:flex-row gap-3 sm:items-center'>
        <QuantitySelector 
          quantity={quantity}
          onDecrease={() => onQuantityChange(quantity - 1)}
          onIncrease={() => onQuantityChange(quantity + 1)}
        />
        <ButtonComponents bgColor='black' borderColor='black' textColor='white' text='Add to Card' />
      </div>
    </div>
  );
}

export default ProductInfo;