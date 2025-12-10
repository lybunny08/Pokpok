import React, { useState, useRef, useEffect } from 'react';
import AbsNav from './Absolutenav/Absnav';
import gsap from 'gsap';

function Navbar() {
  const [activeNav, setActiveNav] = useState(null);
  const [showNav, setShowNav] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const closeTimeoutRef = useRef(null);
  const overlayRef = useRef(null);
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);

  // 👉 Gérer scroll pour changer bg
  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY <= 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  const navbarBg = isTop && !hasDropdownOpen ? "bg-transparent" : "bg-white";
  const textColor = isTop && !hasDropdownOpen ? "text-white" : "text-black";

  return (
    <>
      <div
  ref={navbarRef}
  className={`w-full fixed top-0 z-50 transition-colors duration-300 ${navbarBg}`}
>
  {/* Contenu interne */}
  <div className="flex justify-between items-center my-[8px] px-[30px] relative">
    <p className={`font-medium text-[29px] ${textColor}`}>Elyzette</p>
    <div className={`flex flex-row text-[14px] w-2/3 items-center font-medium justify-between ${textColor}`} style={{ letterSpacing: '0.4px' }}>
      <div className="flex flex-row gap-[24px]">
        <p onMouseEnter={() => setActiveNav(null)} className="cursor-pointer nav-item-underline">Produits</p>
        <p
          onMouseEnter={() => handleMouseEnter('about')}
          className={`cursor-pointer nav-item-underline ${activeNav === 'about' ? 'text-black' : textColor}`}
        >
          A propos
        </p>
        <p
          onMouseEnter={() => handleMouseEnter('heritage')}
          className={`cursor-pointer nav-item-underline ${activeNav === 'heritage' ? 'text-black' : textColor}`}
        >
          Heritage
        </p>
        <p onMouseEnter={() => setActiveNav(null)} className="cursor-pointer nav-item-underline">Gallerie</p>
        <p onMouseEnter={() => setActiveNav(null)} className="cursor-pointer nav-item-underline">Journale</p>
      </div>
      <div className="flex flex-row gap-[24px]">
        <p className="cursor-pointer nav-item-underline">Recherche</p>
        <p className="cursor-pointer nav-item-underline">Compte</p>
        <p className="cursor-pointer nav-item-underline">Panier (0)</p>
      </div>
    </div>

    {/* Dropdown attaché directement ici */}
    {showNav && activeNav && (
      <div
        ref={dropdownRef}
        className="absolute left-0 w-full z-40"
        style={{ top: "100%" }} // ⬅️ sous le navbar
      >
        <AbsNav activeNav={activeNav} />
      </div>
    )}
  </div>
</div>


    </>
  );
}

export default Navbar;
