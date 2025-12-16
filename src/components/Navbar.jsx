import React, { useState, useRef, useEffect } from 'react';
import DropDownNav from './Absolutenav/Drop_down_nav';
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
        className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${navbarBg}`}
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
              <p className="cursor-pointer nav-item-underline">Search</p>
              <p className="cursor-pointer nav-item-underline">Account</p>
              <p className="cursor-pointer nav-item-underline">Bag (0)</p>
            </div>
          </div>
        </div>

        {/* Dropdown en position absolue, en dehors du conteneur avec padding */}
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

      {/* Overlay pour le fond */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/20 z-40 pointer-events-none opacity-0"
      />
    </>
  );
}

export default Navbar;
