"use client";
import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import Main from "@/components/Main";
import Footer from "@/components/Footer";


// Dynamically importing Nav to optimize performance
const DynamicNav = dynamic(() => import("@/components/Nav"), { ssr: false });

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathName = usePathname();

  // Toggle menu function
  const toggleMenu = useCallback(() => setIsActive((prev) => !prev), []);

  // Close the menu when the pathname changes

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathName]);

  // Resize event listener with debounce for performance
  useEffect(() => {
    const debounceResize = debounce(() => {
      setIsMobile(window.innerWidth < 640);
    }, 150);

    debounceResize(); // Call initially to set mobile state

    window.addEventListener("resize", debounceResize);
    return () => window.removeEventListener("resize", debounceResize);
  }, []);

  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 flex justify-between pt-6 px-3">
        <div className="text-3.2xl lg:text-4xl text-white font-light">Gk</div>
        <button onClick={toggleMenu} className="sm:hidden z-20">
          <div className="w-full text-3.2xl">{isActive ? "close" : "menu"}</div>
        </button>

        {isMobile && (
          <AnimatePresence mode="wait">
            {isActive && (
              <DynamicNav isMobile={isMobile} setIsActive={setIsActive} />
            )}
          </AnimatePresence>
        )}
        {!isMobile && <DynamicNav isMobile={isMobile} />}
      </header>
      {/* Sections */}

        <HeroSection />
        <Main/>
    </>
  )
}
