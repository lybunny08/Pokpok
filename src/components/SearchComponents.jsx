import React, { useEffect, useRef } from 'react';

function SearchComponents({ onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="h-full w-[400px] bg-white shadow-xl flex flex-col items-end gap-[16px] py-[8px] px-[16px]">
      {/* Bouton de fermeture */}
      <button
        onClick={onClose}
        className="self-end p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Barre de recherche */}
      <div className='flex flex-row items-end gap-[8px] w-full border-b border-gray-300 pb-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input 
          ref={inputRef}
          type="text" 
          placeholder="What are you looking for?"
          className='w-full outline-none text-[14px]'
        />
      </div>
    </div>
  );
}

export default SearchComponents;