import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LikeButton from '../ui/LikeButton';

const ProductCard = ({
  imageUrl,
  alt = 'Product image',
  productName,
  category,
  categoryColor = '#bababa',
  height = 'h-[220px] md:h-[320px]',
  className = '',
  initialLiked = false,
  productId
}) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const navigate = useNavigate();

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleCardClick = () => {
    navigate(`/product/${productId}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <div 
      className={`flex flex-col gap-[6px] ${className} cursor-pointer group`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`View ${productName} details`}
    >
      {/* Conteneur d'image */}
      <div
        className={`relative w-full rounded-xl bg-cover bg-center bg-no-repeat overflow-hidden ${height}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: categoryColor,
        }}
      >
        
        {/* Bouton like positionné en haut à droite */}
        <div 
          className="absolute top-3 right-3 z-10"
          onClick={(e) => e.stopPropagation()} // Empêche le clic sur la carte
        >
          <LikeButton 
            isLiked={isLiked}
            onClick={handleLikeClick}
            size="sm"
            aria-label={`${isLiked ? 'Remove' : 'Add'} ${productName} to favorites`}
          />
        </div>
      </div>

      {/* Informations du produit */}
      <div className='flex flex-row justify-between'>
        <div className="flex flex-col gap-1">
          <span className='font-medium text-[14px] text-gray-900 line-clamp-1'>
            {productName}
          </span>
          <span className='uppercase text-[12px] text-gray-500 tracking-wide'>
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;