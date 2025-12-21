import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../components/data/productsData';
import Breadcrumb from '../components/product/Breadcrumb';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductDetails from '../components/product/ProductDetails';

function ProductPageInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  // Récupérer le produit correspondant à l'ID
  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleGoHome = () => {
    navigate('/');
  };

  // Si le produit n'est pas trouvé
  if (!product) {
    return <ProductNotFound id={id} />;
  }

  return (
    <div className='pt-[62px] lg:pt-[100px] px-4 md:px-8 lg:px-16 min-h-screen'>
      {/* Fil d'Ariane */}
      <Breadcrumb 
        productName={product.name} 
        onHomeClick={handleGoHome} 
      />

      {/* Contenu principal */}
      <div className='flex flex-col lg:flex-row justify-center gap-8 lg:gap-16'>
        {/* Galerie d'images */}
        <ProductImageGallery images={[product.image, product.image, product.image, product.image]} />
        
        {/* Informations du produit */}
        <ProductInfo product={product} />
      </div>

      {/* Section détails supplémentaires */}
      <ProductDetails />
    </div>
  );
}

// Composant pour le cas "produit non trouvé"
function ProductNotFound({ id }) {
  return (
    <div className='pt-[150px] flex justify-center items-center min-h-screen'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold mb-4'>Produit non trouvé</h1>
        <p className='text-gray-600'>Le produit avec l'ID {id} n'existe pas.</p>
      </div>
    </div>
  );
}

export default ProductPageInfo;