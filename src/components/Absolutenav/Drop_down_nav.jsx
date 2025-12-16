import { useEffect, useRef } from "react";
import gsap from "gsap";
import AboutNavBar from "./Aboutnabar";
import ProductsNavBar from "./Products_navbar";

function DropDownNav({ activeNav }) {
  const menuRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (!tl.current) {
      tl.current = gsap.timeline({ paused: true });
      tl.current.fromTo(
        menuRef.current,
        { clipPath: "inset(0 0 100% 0)" },   // complètement masqué depuis le haut
        { clipPath: "inset(0 0 0% 0)", duration: 0.4, ease: "power4.out" } // révélé
      );
    }

    if (activeNav) {
      tl.current.play(0);
    } else {
      tl.current.reverse();
    }
  }, [activeNav]);

  return (
    <div
      ref={menuRef}
      style={{ clipPath: "inset(0 0 100% 0)" }}
      className="bg-white w-full shadow-xl pt-[24px] pb-[16px] px-[30px] "
    >
      {activeNav === "about" && <AboutNavBar />}
      {activeNav === "products" && <ProductsNavBar />}
    </div>
  );
}


export default DropDownNav;
