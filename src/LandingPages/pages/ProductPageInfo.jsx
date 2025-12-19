// pages/ProductPageInfo.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductPageInfo() {
  const { id } = useParams();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Détails du produit ID: {id}
      </h1>
      {/* Affichez ici les détails du produit */}
      <p>Voici les informations détaillées du produit...</p>
    </div>
  );
}

export default ProductPageInfo;