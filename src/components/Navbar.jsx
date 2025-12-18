import React, { useState, useRef, useEffect } from 'react';
import DropDownNav from './Absolutenav/Drop_down_nav';
import SearchComponents from './SearchComponents';
import gsap from 'gsap';

function Navbar() {
  const [activeNav, setActiveNav] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const dropdownOverlayRef = useRef(null);
  const searchOverlayRef = useRef(null);
  const dropdownRef = useRef(null);
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

  // 👉 Définir quels liens ont des dropdowns
  const hasDropdown = (navType) => {
    return ['products', 'about'].includes(navType);
  };

  // 👉 Gestion du hover sur les liens
  const handleNavItemHover = (navType) => {
    setHoveredNavItem(navType);
    
    if (hasDropdown(navType)) {
      // Si c'est un lien avec dropdown, l'ouvrir
      setActiveNav(navType);
      setShowSearch(false);
    } else {
      // Si c'est un lien sans dropdown, fermer le dropdown
      setActiveNav(null);
    }
  };

  // 👉 Ouvrir/fermer la recherche
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setActiveNav(null);
    setHoveredNavItem(null);
  };

  // 👉 Animation pour l'overlay du dropdown
  useEffect(() => {
    if (dropdownOverlayRef.current) {
      if (activeNav) {
        gsap.to(dropdownOverlayRef.current, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(dropdownOverlayRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.2,
          ease: 'power2.in',
        });
      }
    }
  }, [activeNav]);

  // 👉 Animation pour l'overlay de la recherche
  useEffect(() => {
    if (searchOverlayRef.current) {
      if (showSearch) {
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
  }, [showSearch]);

  // 👉 Animation pour la recherche
  useEffect(() => {
    if (searchRef.current) {
      if (showSearch) {
        gsap.fromTo(
          searchRef.current,
          { x: 100, opacity: 0 },
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.3, 
            ease: 'power2.out',
            onStart: () => gsap.set(searchRef.current, { display: 'block' })
          }
        );
      } else {
        gsap.to(searchRef.current, {
          x: 100,
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
          onComplete: () => gsap.set(searchRef.current, { display: 'none' })
        });
      }
    }
  }, [showSearch]);

  const hasDropdownOpen = activeNav !== null;
  const navbarBg = isTop && !hasDropdownOpen && !showSearch ? "bg-transparent" : "bg-white";
  const textColor = isTop && !hasDropdownOpen && !showSearch ? "text-white" : "text-black";

  return (
    <>
      {/* Navbar - z-index: 100 */}
      <div
        className={`w-full fixed top-0 left-0 z-[100] transition-colors duration-300 ${navbarBg}`}
      >
        <div className="flex justify-between items-center my-[8px] mx-[30px] px-[8px] relative">
          <p className={`font-medium text-[29px] ${textColor}`}>Elyanne</p>
          <div className={`flex flex-row text-[14px] w-2/3 items-center font-medium justify-between ${textColor}`} style={{ letterSpacing: '0.4px' }}>
            <div className="flex flex-row gap-[24px]">
              {/* Liens avec dropdown */}
              <a
                onMouseEnter={() => handleNavItemHover('products')}
                className={`cursor-pointer nav-item-underline ${activeNav === 'products' ? 'text-black' : textColor}`}
              >
                Products
              </a>
              <a
                onMouseEnter={() => handleNavItemHover('about')}
                className={`cursor-pointer nav-item-underline ${activeNav === 'about' ? 'text-black' : textColor}`}
              >
                About
              </a>
              
              {/* Liens SANS dropdown */}
              <a 
                onMouseEnter={() => handleNavItemHover('gallery')}
                className="cursor-pointer nav-item-underline"
              >
                Gallery
              </a>
              <a 
                onMouseEnter={() => handleNavItemHover('journal')}
                className="cursor-pointer nav-item-underline"
              >
                Journal
              </a>
              <a 
                onMouseEnter={() => handleNavItemHover('faq')}
                className="cursor-pointer nav-item-underline"
              >
                FAQ
              </a>
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

        {/* Dropdown - seulement pour 'products' et 'about' */}
        {activeNav && hasDropdown(activeNav) && (
          <div
            ref={dropdownRef}
            className="absolute left-0 w-full z-[101]"
            style={{ top: "100%" }}
            onMouseEnter={() => setActiveNav(activeNav)}
            onMouseLeave={() => setActiveNav(null)}
          >
            <DropDownNav activeNav={activeNav} />
          </div>
        )}
      </div>

      {/* Overlay pour le Dropdown - z-index: 99 */}
      <div
        ref={dropdownOverlayRef}
        className="fixed inset-0 bg-black/30 z-[99] pointer-events-none opacity-0"
        onClick={() => setActiveNav(null)}
      />

      {/* Overlay pour la Recherche - z-index: 150 */}
      <div
        ref={searchOverlayRef}
        className="fixed inset-0 bg-black/30 z-[150] pointer-events-none opacity-0"
        onClick={handleSearchClick}
      />

      {/* Composant Search - z-index: 151 */}
      <div 
        ref={searchRef}
        className="fixed top-0 right-0 h-full z-[151]"
        style={{ display: 'none' }}
      >
        <SearchComponents onClose={handleSearchClick} />
      </div>
    </>
  );
}

export default Navbar;