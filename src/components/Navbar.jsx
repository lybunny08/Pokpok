import React, { useState, useRef, useEffect } from 'react';
import DropDownNav from './Absolutenav/Drop_down_nav';
import SearchComponents from './SearchComponents';
import gsap from 'gsap';

function Navbar() {
  const [activeNav, setActiveNav] = useState(null);
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const closeTimeoutRef = useRef(null);
  const overlayRef = useRef(null);
  const searchOverlayRef = useRef(null); // Nouveau ref pour l'overlay de recherche
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const searchRef = useRef(null);

  // 👉 Désactiver le scroll quand la recherche est ouverte
  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSearch]);

  // 👉 Gérer scroll pour changer bg
  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY <= 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 👉 Ouvrir/fermer la recherche
  const handleSearchClick = () => {
    const newShowSearch = !showSearch;
    setShowSearch(newShowSearch);
    
    // Fermer le dropdown si ouvert
    if (activeNav) {
      setActiveNav(null);
      setShowNav(false);
    }

    // Animer l'overlay de recherche
    if (searchOverlayRef.current) {
      if (newShowSearch) {
        gsap.to(searchOverlayRef.current, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(searchOverlayRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.2,
          ease: 'power2.in',
        });
      }
    }
  };

  // 👉 Fermer la recherche en cliquant sur l'overlay
  const handleOverlayClick = (e) => {
    if (e.target === searchOverlayRef.current) {
      handleSearchClick();
    }
  };

  // 👉 Hover sur un item qui a dropdown
  const handleMouseEnter = (navType) => {
    clearTimeout(closeTimeoutRef.current);
    setActiveNav(navType);
    setShowNav(true);

    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  // 👉 Animation d'entrée/sortie pour la recherche
  useEffect(() => {
    if (searchRef.current) {
      if (showSearch) {
        // Animation d'entrée de droite à gauche
        gsap.fromTo(
          searchRef.current,
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
          }
        );
      } else {
        // Animation de sortie de gauche à droite
        gsap.to(searchRef.current, {
          x: 100,
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
        });
      }
    }
  }, [showSearch]);

  // 👉 Fermer si on sort complètement du nav + dropdown
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        closeTimeoutRef.current = setTimeout(() => {
          setActiveNav(null);
          setShowNav(false);
          if (overlayRef.current) {
            gsap.to(overlayRef.current, {
              opacity: 0,
              pointerEvents: 'none',
              duration: 0.2,
              ease: 'power2.in',
            });
          }
        }, 100);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const hasDropdownOpen = activeNav !== null;
  const navbarBg = isTop && !hasDropdownOpen && !showSearch ? "bg-transparent" : "bg-white";
  const textColor = isTop && !hasDropdownOpen && !showSearch ? "text-white" : "text-black";

  return (
    <>
      <div
        ref={navbarRef}
        className={`w-full fixed top-0 left-0 z-30 transition-colors duration-300 ${navbarBg}`}
      >
        {/* Contenu interne avec padding */}
        <div className="flex justify-between items-center my-[8px] mx-[30px] px-[8px] relative">
          <p className={`font-medium text-[29px] ${textColor}`}>Elyanne</p>
          <div className={`flex flex-row text-[14px] w-2/3 items-center font-medium justify-between ${textColor}`} style={{ letterSpacing: '0.4px' }}>
            <div className="flex flex-row gap-[24px]">
              <a
                onMouseEnter={() => handleMouseEnter('products')}
                className={`cursor-pointer nav-item-underline ${activeNav === 'products' ? 'text-black' : textColor}`}
              >
                Products
              </a>
              <a
                onMouseEnter={() => handleMouseEnter('about')}
                className={`cursor-pointer nav-item-underline ${activeNav === 'about' ? 'text-black' : textColor}`}
              >
                About
              </a>
              <a onMouseEnter={() => setActiveNav(null)} className="cursor-pointer nav-item-underline">Gallery</a>
              <a onMouseEnter={() => setActiveNav(null)} className="cursor-pointer nav-item-underline">Journal</a>
              <a onMouseEnter={() => setActiveNav(null)} className="cursor-pointer nav-item-underline">FAQ</a>
            </div>
            <div className="flex flex-row gap-[24px]">
              <p 
                className="cursor-pointer nav-item-underline"
                onClick={handleSearchClick}
              >
                Search
              </p>
              <p className="cursor-pointer nav-item-underline">Favorites</p>
              <p className="cursor-pointer nav-item-underline">Account</p>
              <p className="cursor-pointer nav-item-underline">Bag (0)</p>
            </div>
          </div>
        </div>

        {/* Dropdown en position absolue */}
        {showNav && activeNav && (
          <div
            ref={dropdownRef}
            className="absolute left-0 w-full z-40"
            style={{ top: "100%" }}
          >
            <DropDownNav activeNav={activeNav} />
          </div>
        )}
      </div>

      {/* Overlay pour le dropdown */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/30 z-40 pointer-events-none opacity-0"
      />

      {/* Overlay pour la recherche (s'ouvre avec la recherche) */}
      <div
        ref={searchOverlayRef}
        className="fixed inset-0 bg-black/30 z-49 pointer-events-none opacity-0"
        onClick={handleOverlayClick}
      />

      {/* Composant Search avec animation */}
      {showSearch && (
        <div 
          ref={searchRef}
          className="fixed top-0 right-0 h-full z-50"
        >
          <SearchComponents onClose={handleSearchClick} />
        </div>
      )}
    </>
  );
}

export default Navbar;