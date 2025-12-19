import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import red from '../../../assets/products/red.png';
import bleu from '../../../assets/products/blue.png';
import grey from '../../../assets/products/grey.png';

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
  },
  {
    id: 5,
    image: bleu,
    name: 'Eye Repair 2',
    category: 'Body'
  },
  {
    id: 6,
    image: bleu,
    name: 'Eye Repair 3',
    category: 'Body'
  },
  {
    id: 7,
    image: red,
    name: 'Hair Mask',
    category: 'Hair'
  },
  {
    id: 8,
    image: grey,
    name: 'Face Cream',
    category: 'Skin'
  }
];

function Featured() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerView = 4;
  const totalProducts = productsData.length;
  
  // Dupliquer les produits pour l'effet infini fluide
  const duplicatedProducts = [...productsData, ...productsData.slice(0, itemsPerView)];
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        // VOTRE LOGIQUE SIMPLE ET CLAIRE
        return newIndex >= totalProducts - itemsPerView + 1 ? 0 : newIndex;
      });
      setIsAnimating(false);
    }, 300);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(prev => {
        const newIndex = prev - 1;
        // VOTRE LOGIQUE SIMPLE ET CLAIRE
        return newIndex < 0 ? totalProducts - itemsPerView : newIndex;
      });
      setIsAnimating(false);
    }, 300);
  };
  
  // Calcul de la translation pour l'animation
  const translateX = `translateX(-${currentIndex * (100 / itemsPerView)}%)`;

  return (
    <div className='flex flex-col gap-[24px]'>
      <div className='flex flex-row justify-between items-end'>
        <h2 className='text-[24px] font-medium'>Featured</h2>
        <div className='flex flex-row gap-[8px]'>
          <button 
            onClick={prevSlide}
            disabled={isAnimating}
            className='bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label="Previous products"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            disabled={isAnimating}
            className='bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label="Next products"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Slider avec animation */}
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-[16px] transition-transform duration-300 ease-in-out"
          style={{
            transform: translateX,
          }}
        >
          {duplicatedProducts.map((product, index) => (
            <div 
              key={`${product.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <ProductCard
                imageUrl={product.image}
                productName={product.name}
                category={product.category}
                className='w-full'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;