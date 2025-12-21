import React from 'react';

function ProductDetails() {
  return (
    <div className='mt-16 border-t border-gray-200 pt-8'>
      <h2 className='text-xl font-bold mb-6'>Détails du produit</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <FeaturesList />
        <UsageInstructions />
      </div>
    </div>
  );
}

function FeaturesList() {
  const features = [
    'Ingrédients naturels',
    'Testé dermatologiquement',
    'Sans parabènes',
    'Vegan et cruelty-free'
  ];

  return (
    <div>
      <h3 className='font-medium mb-3'>Caractéristiques</h3>
      <ul className='list-disc pl-5 space-y-2 text-gray-700'>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

function UsageInstructions() {
  return (
    <div>
      <h3 className='font-medium mb-3'>Conseils d'utilisation</h3>
      <p className='text-gray-700'>
        Appliquer une petite quantité sur une peau propre et sèche. 
        Masser délicatement jusqu'à absorption complète. 
        Utiliser matin et soir pour de meilleurs résultats.
      </p>
    </div>
  );
}

export default ProductDetails;