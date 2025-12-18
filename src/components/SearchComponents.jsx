import React, { useEffect, useRef } from 'react';

function SearchComponents({ onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus automatique avec un petit délai pour l'animation
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
    
    // Fermer avec Escape
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="px-[16px] py-[24px] h-full w-[400px] bg-white shadow-xl flex flex-col gap-[24px] ">
      {/* En-tête */}
      {/* <button
          onClick={onClose}
          className="flex justify-end items-end"
          aria-label="Close search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button> */}

      {/* Barre de recherche */}
      <div>
        <div className="flex items-center gap-3 pb-4 border-b border-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input 
            ref={inputRef}
            type="text" 
            placeholder="What are you looking for?"
            className="w-full outline-none text-[15px] placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchComponents;