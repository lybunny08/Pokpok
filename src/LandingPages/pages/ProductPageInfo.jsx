import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../components/data/productsData';

function ProductPageInfo() {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Récupérer le produit correspondant à l'ID
  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  // Si le produit n'est pas trouvé
  if (!product) {
    return (
      <div className='pt-[150px] flex justify-center items-center min-h-screen'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold mb-4'>Produit non trouvé</h1>
          <p className='text-gray-600'>Le produit avec l'ID {id} n'existe pas.</p>
        </div>
      </div>
    );
  }

  // Images pour la galerie
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className='pt-[100px] px-4 md:px-8 lg:px-16 min-h-screen'>
      {/* Fil d'Ariane */}
      <div className='mb-8 text-sm text-gray-600'>
        <span className='hover:text-black cursor-pointer'>Accueil</span>
        <span className='mx-2'>/</span>
        <span className='hover:text-black cursor-pointer'>Produits</span>
        <span className='mx-2'>/</span>
        <span className='text-black font-medium'>{product.name}</span>
      </div>

      <div className='flex flex-col lg:flex-row justify-center gap-8 lg:gap-16'>
        {/* Galerie d'images */}
        <div className='flex flex-row lg:flex-row-reverse gap-4'>
          {/* Image principale */}
          <div className='relative'>
            <div 
              className='w-full lg:w-[450px] h-[400px] lg:h-[600px] rounded-lg bg-gray-200 flex items-center justify-center'
              style={{
                backgroundImage: `url(${productImages[selectedImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
            </div>
          </div>
          
          {/* Miniatures */}
          <div className='flex lg:flex-col gap-2'>
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative group ${selectedImageIndex === index ? 'p-[2px]' : ''}`}
              >
                {/* Border personnalisé qui suit la forme */}
                <div
                  className={`
                    absolute inset-0 rounded-lg transition-all duration-200
                    ${selectedImageIndex === index 
                      ? 'border-2 border-black' 
                      : 'border border-transparent group-hover:border-gray-300'
                    }
                  `}
                />
                
                {/* Image */}
                <div 
                  className={`
                    w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-gray-200
                    ${selectedImageIndex === index ? 'border-2 border-transparent' : ''}
                  `}
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Informations du produit */}
        <div className='lg:w-[400px] flex flex-col gap-6 relative'>
          <div className='flex flex-row justify-between items-start'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm uppercase text-gray-500 tracking-wider'>
                {product.category}
              </span>
              <h1 className='text-3xl font-bold'>{product.name}</h1>
              
              {/* Prix */}
              <div className='flex items-center gap-2'>
                <span className='text-2xl font-bold'>${product.price?.toFixed(2) || '29.99'}</span>
                {product.originalPrice && (
                  <span className='text-lg text-gray-500 line-through'>
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            
            {/* Bouton Like */}
            <button
              onClick={handleLikeClick}
              aria-label={isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                fill={isLiked ? "#A30000" : "none"} 
                viewBox="0 0 24 24" 
                strokeWidth={isLiked ? 0 : 1.5} 
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

          {/* Description */}
          <div className='border-t border-b border-gray-200 py-6'>
            <p className='text-gray-700 text-[14px] leading-relaxed'>
              {product.description || 'Description du produit non disponible.'}
            </p>
          </div>

          {/* Options */}
          <div className='space-y-4'>
            {/* Quantité et bouton */}
            <div className='flex flex-col sm:flex-row gap-3 items-start sm:items-center'>
              <div className='flex items-center border border-gray-300 rounded-lg w-32'>
                <button className='px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-l-lg transition-colors'>-</button>
                <span className='flex-1 text-center py-2'>1</span>
                <button className='px-3 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-r-lg transition-colors'>+</button>
              </div>
              <button className='flex-1 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium text-center'>
                Ajouter au panier
              </button>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className='pt-6 border-t border-gray-200'>
            <div className='space-y-3'>
              <div className='flex items-center gap-2'>
                <svg className='size-5 text-gray-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className='text-sm'>Livraison gratuite</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='size-5 text-gray-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className='text-sm'>Retours gratuits sous 30 jours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section détails supplémentaires */}
      <div className='mt-16 border-t border-gray-200 pt-8'>
        <h2 className='text-xl font-bold mb-6'>Détails du produit</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <h3 className='font-medium mb-3'>Caractéristiques</h3>
            <ul className='list-disc pl-5 space-y-2 text-gray-700'>
              <li>Ingrédients naturels</li>
              <li>Testé dermatologiquement</li>
              <li>Sans parabènes</li>
              <li>Vegan et cruelty-free</li>
            </ul>
          </div>
          <div>
            <h3 className='font-medium mb-3'>Conseils d'utilisation</h3>
            <p className='text-gray-700'>
              Appliquer une petite quantité sur une peau propre et sèche. 
              Masser délicatement jusqu'à absorption complète. 
              Utiliser matin et soir pour de meilleurs résultats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageInfo;