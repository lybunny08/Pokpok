import React, { useState } from 'react';

function ProductImageGallery({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className='flex flex-col lg:flex-row-reverse gap-4'>
      {/* Image principale */}
      <MainImage image={images[selectedImageIndex]} />
      
      {/* Miniatures */}
      <Thumbnails 
        images={images} 
        selectedIndex={selectedImageIndex}
        onSelect={setSelectedImageIndex}
      />
    </div>
  );
}

// Sous-composant pour l'image principale
function MainImage({ image }) {
  return (
    <div className='relative'>
      <div 
        className='w-full lg:w-[450px] h-[400px] lg:h-[600px] rounded-lg bg-gray-200 flex items-center justify-center'
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}

// Sous-composant pour les miniatures
function Thumbnails({ images, selectedIndex, onSelect }) {
  return (
    <div className='flex lg:flex-col gap-2'>
      {images.map((img, index) => (
        <ThumbnailButton
          key={index}
          image={img}
          isSelected={selectedIndex === index}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}

// Composant pour chaque miniature
function ThumbnailButton({ image, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative group ${isSelected ? 'p-[2px]' : ''}`}
      aria-label={`Voir l'image ${isSelected ? '(actuellement sélectionnée)' : ''}`}
    >
      {/* Border personnalisé */}
      <div
        className={`absolute inset-0 rounded-lg transition-all duration-200
          ${isSelected 
            ? 'border-2 border-black' 
            : 'border border-transparent group-hover:border-gray-300'
          }`}
      />
      
      {/* Image */}
      <div 
        className={`w-19 h-16 lg:w-20 lg:h-20 rounded-lg bg-gray-200
          ${isSelected ? 'border-2 border-transparent' : ''}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </button>
  );
}

export default ProductImageGallery;