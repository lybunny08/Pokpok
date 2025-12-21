import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import DropDownNav from './NavbarDropDown/NavbarDropDown';
import SearchComponents from './ui/SearchComponents';
import gsap from 'gsap';
import { useLocation, Link } from 'react-router-dom';

// Constantes pour éviter les "magic strings"
const NAV_TYPES = {
  PRODUCTS: 'products',
  ABOUT: 'about',
  GALLERY: 'gallery',
  JOURNAL: 'journal',
  FAQ: 'faq'
};

const DROPDOWN_NAVS = [NAV_TYPES.PRODUCTS, NAV_TYPES.ABOUT];

// Hook personnalisé pour gérer le scroll
const useScrollPosition = (threshold = 50) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY <= threshold);
    window.addEventListener('scroll', handleScroll);
    // Vérifier immédiatement la position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isTop;
};

// Hook personnalisé pour gérer les overlays avec GSAP
const useOverlayAnimation = (isVisible, ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const animation = isVisible
      ? gsap.to(ref.current, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.3,
          ease: 'power2.out'
        })
      : gsap.to(ref.current, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.2,
          ease: 'power2.in'
        });

    return () => {
      animation.kill();
    };
  }, [isVisible, ref]);
};

// Hook personnalisé pour gérer l'animation de la recherche
const useSearchAnimation = (isVisible, searchRef) => {
  useEffect(() => {
    if (!searchRef.current) return;

    if (isVisible) {
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
  }, [isVisible, searchRef]);
};

function Navbar() {
  const [activeNav, setActiveNav] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  
  const dropdownOverlayRef = useRef(null);
  const searchOverlayRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  
  const location = useLocation();
  const isTop = useScrollPosition(50);

  // Désactiver le scroll quand la recherche est ouverte
  useEffect(() => {
    document.body.style.overflow = showSearch ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSearch]);

  // Réinitialiser l'état quand on change de route
  useEffect(() => {
    setActiveNav(null);
    setShowSearch(false);
    setHoveredNavItem(null);
  }, [location.pathname]);

  // Déterminer si on est sur la page d'accueil
  const isHomePage = location.pathname === '/';
  const hasDropdownOpen = activeNav !== null;

  // Logique centralisée pour le style du navbar
  const { navbarBg, textColor } = useMemo(() => {
    let bg = 'bg-white';
    let color = 'text-black';

    if (isHomePage) {
      if (isTop && !hasDropdownOpen && !showSearch) {
        bg = 'bg-transparent';
        color = 'text-white';
      }
    }

    return { navbarBg: bg, textColor: color };
  }, [isHomePage, isTop, hasDropdownOpen, showSearch]);

  // Vérifier si un lien a un dropdown
  const hasDropdown = useCallback((navType) => {
    return DROPDOWN_NAVS.includes(navType);
  }, []);

  // Gestion du hover sur les liens
  const handleNavItemHover = useCallback((navType) => {
    setHoveredNavItem(navType);
    
    if (hasDropdown(navType)) {
      setActiveNav(navType);
      setShowSearch(false);
    } else {
      setActiveNav(null);
    }
  }, [hasDropdown]);

  // Ouvrir/fermer la recherche
  const handleSearchClick = useCallback(() => {
    setShowSearch(prev => !prev);
    setActiveNav(null);
    setHoveredNavItem(null);
  }, []);

  // Fermer tous les menus
  const handleLogoInteraction = useCallback(() => {
    setActiveNav(null);
    setShowSearch(false);
    setHoveredNavItem(null);
  }, []);

  // Gestionnaires d'événements pour les dropdowns
  const handleDropdownMouseEnter = useCallback(() => {
    if (activeNav && hasDropdown(activeNav)) {
      setActiveNav(activeNav);
    }
  }, [activeNav, hasDropdown]);

  const handleDropdownMouseLeave = useCallback(() => {
    setActiveNav(null);
  }, []);

  // Animation des overlays
  useOverlayAnimation(activeNav, dropdownOverlayRef);
  useOverlayAnimation(showSearch, searchOverlayRef);
  useSearchAnimation(showSearch, searchRef);

  // Liens de navigation sans dropdown
  const simpleNavLinks = useMemo(() => [
    { type: NAV_TYPES.GALLERY, label: 'Gallery' },
    { type: NAV_TYPES.JOURNAL, label: 'Journal' },
    { type: NAV_TYPES.FAQ, label: 'FAQ' }
  ], []);

  // Liens de navigation avec dropdown
  const dropdownNavLinks = useMemo(() => [
    { type: NAV_TYPES.PRODUCTS, label: 'Products' },
    { type: NAV_TYPES.ABOUT, label: 'About' }
  ], []);

  // Liens d'actions (droite de la navbar)
  const actionLinks = useMemo(() => [
    { label: 'Search', onClick: handleSearchClick },
    { label: 'Favorites' },
    { label: 'Account' },
    { label: 'Bag (0)' }
  ], [handleSearchClick]);

  return (
    <>
      {/* Navbar principal */}
      <nav
        className={`w-full fixed top-0 left-0 z-100 transition-colors duration-300 ${navbarBg}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center my-2 md:mx-5 lg:mx-7.5 px-1.5 lg:px-2 relative">
          {/* Logo */}
          <Logo 
            onClick={handleLogoInteraction}
            textColor={textColor}
          />

          {/* Liens de navigation */}
          <div className={`flex flex-row text-sm lg:w-2/3 md:gap-15 items-center font-medium justify-between ${textColor}`} 
               style={{ letterSpacing: '0.4px' }}>
            
            <div className="flex flex-row gap-6">
              {/* Liens avec dropdown */}
              {dropdownNavLinks.map(({ type, label }) => (
                <NavLink
                  key={type}
                  type={type}
                  label={label}
                  hasDropdown={hasDropdown(type)}
                  isActive={activeNav === type}
                  textColor={textColor}
                  onHover={handleNavItemHover}
                />
              ))}

              {/* Liens sans dropdown */}
              {simpleNavLinks.map(({ type, label }) => (
                <NavLink
                  key={type}
                  type={type}
                  label={label}
                  hasDropdown={false}
                  textColor={textColor}
                  onHover={handleNavItemHover}
                />
              ))}
            </div>

            {/* Actions (droite) */}
            <div className="flex flex-row gap-6">
              {actionLinks.map(({ label, onClick }) => (
                <ActionLink
                  key={label}
                  label={label}
                  textColor={textColor}
                  onClick={onClick}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Dropdown */}
        {activeNav && hasDropdown(activeNav) && (
          <Dropdown 
            ref={dropdownRef}
            activeNav={activeNav}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          />
        )}
      </nav>

      {/* Overlays */}
      <Overlay 
        ref={dropdownOverlayRef}
        onClick={() => setActiveNav(null)}
        zIndex={99}
      />

      <Overlay 
        ref={searchOverlayRef}
        onClick={handleSearchClick}
        zIndex={150}
      />

      {/* Composant de recherche */}
      <SearchPanel 
        ref={searchRef}
        isVisible={showSearch}
        onClose={handleSearchClick}
      />
    </>
  );
}

// Composants séparés pour plus de clarté
const Logo = React.memo(({ onClick, textColor }) => (
  <Link 
    to="/" 
    onClick={onClick}
    className={`font-medium text-[29px] ${textColor} no-underline hover:opacity-80 transition-opacity`}
    aria-label="Go to homepage"
  >
    Elyanne
  </Link>
));

const NavLink = React.memo(({ type, label, hasDropdown, isActive = false, textColor, onHover }) => (
  <button
    type="button"
    onMouseEnter={() => onHover(type)}
    className={`cursor-pointer link-item-underline bg-transparent border-none p-0 ${
      isActive ? 'text-black' : textColor
    }`}
    aria-haspopup={hasDropdown ? 'true' : 'false'}
    aria-expanded={isActive ? 'true' : 'false'}
  >
    {label}
  </button>
));

const ActionLink = React.memo(({ label, textColor, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`cursor-pointer link-item-underline bg-transparent border-none p-0 ${textColor}`}
  >
    {label}
  </button>
));

const Dropdown = React.forwardRef(({ activeNav, onMouseEnter, onMouseLeave }, ref) => (
  <div
    ref={ref}
    className="absolute left-0 w-full z-101"
    style={{ top: "100%" }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    role="menu"
    aria-label={`${activeNav} menu`}
  >
    <DropDownNav activeNav={activeNav} />
  </div>
));

const Overlay = React.forwardRef(({ onClick, zIndex }, ref) => (
  <div
    ref={ref}
    className="fixed inset-0 bg-black/30 pointer-events-none opacity-0"
    style={{ zIndex }}
    onClick={onClick}
    role="presentation"
  />
));

const SearchPanel = React.forwardRef(({ isVisible, onClose }, ref) => (
  <div 
    ref={ref}
    className="fixed top-0 right-0 h-full z-151"
    style={{ display: 'none' }}
    role="dialog"
    aria-modal="true"
    aria-hidden={!isVisible}
  >
    <SearchComponents onClose={onClose} />
  </div>
));

export default Navbar;