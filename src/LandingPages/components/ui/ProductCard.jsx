// components/ProductCard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  imageUrl,
  alt = '',
  productName,
  category,
  categoryColor = '#bababa',
  height = 'h-[220px] md:h-[320px]',
  className = '',
  initialLiked = false,
  productId // Nouvelle prop pour l'ID du produit
}) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const navigate = useNavigate(); // Hook pour la navigation

  const handleLikeClick = (e) => {
    e.stopPropagation(); // Empêche le déclenchement du clic sur la carte produit
    setIsLiked(!isLiked);
  };

  const handleCardClick = () => {
    // Navigation vers la page de détails du produit
    navigate(`/product/${productId}`);
  };

  return (
    <div 
      className={`flex flex-col gap-[6px] ${className} cursor-pointer`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div
        className={`flex items-start justify-end p-4 w-full rounded-xl bg-cover bg-center bg-no-repeat relative ${height}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: categoryColor,
          height: height
        }}
        aria-hidden="true"
      >
        {/* Bouton like */}
        <button
          onClick={handleLikeClick}
          aria-label={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill={isLiked ? "#A30000" : "none"} 
            viewBox="0 0 24 24" 
            strokeWidth={isLiked ? 0 : 0.5} 
            stroke={isLiked ? "#A30000" : "currentColor"} 
            className="size-6 transition-all duration-200"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" 
            />
          </svg>
        </button>
      </div>
      <span className='font-medium text-[14px]'>{productName}</span>
      <span className='uppercase text-[12px] text-gray-500'>{category}</span>
    </div>
  );
};

export default ProductCard;