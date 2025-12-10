import { useEffect, useRef } from "react";
import gsap from "gsap";
import AboutNavBar from "./Aboutnabar";
import HeritageNavBar from "./Heritagenavbar";

// AbsNav.jsx
function AbsNav({ activeNav }) {
  const menuRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (!tl.current) {
      tl.current = gsap.timeline({ paused: true });
      tl.current.fromTo(
        menuRef.current,
        { clipPath: "inset(0 0 100% 0)" },   // complètement masqué depuis le haut
        { clipPath: "inset(0 0 0% 0)", duration: 0.3, ease: "power4.out" } // révélé
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
      className="bg-white w-full shadow-xl pt-[20px] pb-[8px] px-[30px] "
    >
      {activeNav === "about" && <AboutNavBar />}
      {activeNav === "heritage" && <HeritageNavBar />}
    </div>
  );
}


export default AbsNav;
