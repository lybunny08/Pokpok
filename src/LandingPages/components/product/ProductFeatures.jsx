import React from 'react';

function ProductFeatures() {
  return (
    <div className='pt-6 border-t border-gray-200'>
      <div className='space-y-3'>
        <FeatureItem text="Livraison gratuite" />
        <FeatureItem text="Retours gratuits sous 30 jours" />
      </div>
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className='flex items-center gap-2'>
      <CheckIcon />
      <span className='text-sm'>{text}</span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg 
      className='size-5 text-gray-500' 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default ProductFeatures;