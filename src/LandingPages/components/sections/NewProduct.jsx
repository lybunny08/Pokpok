import React from 'react';
import ProductCard from '../ui/ProductCard';
import productsData from '../data/productsData'; // Import depuis le fichier centralisé
import hairnews from '../../../assets/Hairnews.png';

function NewProduct() {
  // Récupérer seulement le produit avec id: 1
  const product = productsData.find(p => p.id === 1);
  
  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className='flex flex-col md:flex-row md:ml-[-45px] gap-[40px] md:gap-[100px] items-center'>
      <div 
        className='w-[650px] h-[340px] md:h-[500px] bg-[#bababa] rounded-lg'
        style={{
          backgroundImage: `url(${hairnews})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} 
      />
      
      <ProductCard 
        className='w-full md:w-[250px]'
        productId={product.id} // Ajout de l'ID pour la navigation
        imageUrl={product.image}
        productName={product.name}
        category={product.category}
      />
    </div>
  );
}

export default NewProduct;