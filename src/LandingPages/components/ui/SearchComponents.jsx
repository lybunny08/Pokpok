import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productsData from '../data/productsData';
import SearchResult from './SearchResult';

function SearchComponents({ onClose }) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

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

  // Filtre les produits quand la requête change
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.trim().toLowerCase();
    const filtered = productsData.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q))
    );

    setResults(filtered.slice(0, 8)); // limiter les résultats
  }, [query]);

  return (
    <div className="px-[16px] py-[24px] h-full w-[400px] bg-white shadow-xl flex flex-col gap-[12px] ">
      {/* Barre de recherche */}
      <div>
        <div className="flex items-center gap-3 pb-4 border-b border-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input 
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text" 
            placeholder="What are you looking for?"
            className="w-full outline-none text-[15px] placeholder-gray-400"
            aria-label="Search products"
          />

          {/* Clear text button */}
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setResults([]);
                if (inputRef.current) inputRef.current.focus();
              }}
              className="text-sm text-gray-500 hover:text-gray-700 ml-2"
              aria-label="Clear search"
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {query.trim() ? (
          results.length ? (
            <div className="flex flex-col gap-3">
              {results.map((product) => (
                <SearchResult
                  key={product.id}
                  product={product}
                  onSelect={(p) => {
                    // Fermer le panneau et naviguer vers la page produit
                    if (onClose) onClose();
                    navigate(`/product/${p.id}`);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-gray-500 text-sm py-4">No product found for «{query}» .</div>
          )
        ) : (
          <div className="text-gray-500 text-sm py-4"></div>
        )}
      </div>
    </div>
  );
}

export default SearchComponents;