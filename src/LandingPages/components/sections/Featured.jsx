import React, { useState } from 'react';
import ProductCard from '../product/ProductCard';
import productsData from '../data/productsData';

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
        return newIndex < 0 ? totalProducts - itemsPerView : newIndex;
      });
      setIsAnimating(false);
    }, 300);
  };
  
  // Calcul de la translation pour l'animation
  const translateX = `translateX(-${currentIndex * (100 / itemsPerView)}%)`;

  return (
    <section className='flex flex-col gap-[24px]'>
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
      
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-[16px] transition-transform duration-300 ease-in-out"
          style={{ transform: translateX }}
        >
          {duplicatedProducts.map((product, index) => ( // <-- Utilisez duplicatedProducts ici
            <div
              key={`${product.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <ProductCard
                productId={product.id}
                imageUrl={product.image}
                alt={product.alt}
                productName={product.name}
                category={product.category}
                className='w-full'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;