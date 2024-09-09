"use client";
import { useState, useEffect, useCallback } from "react";
import dynamic from 'next/dynamic';
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import HeroSection from "@/components/HeroSection";

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
    <header className="fixed top-0 left-0 w-full z-10 flex justify-between pt-6 px-8">
      <div className="text-md sm:text-3xl lg:text-4xl text-white font-light">
        Gk
      </div>
      <button onClick={toggleMenu} className="sm:hidden z-20">
        <div className="w-11">{isActive ? "close" : "menu"}</div>
      </button>

      {isMobile && (
        <AnimatePresence mode="wait">
          {isActive && <DynamicNav isMobile={isMobile} setIsActive={setIsActive} />}
        </AnimatePresence>
      )}
      {!isMobile && <DynamicNav isMobile={isMobile} />}
    </header>
    {/* Sections */}



      <HeroSection/>
      {/* <div className = ' w-full m-auto block'>
              <h1 className = 'fixed left-[500px] bottom-20 text-9xl block m-auto w-full'>Creative</h1>
            </div> */}
    <section id="home" className="h-screen bg-[#353535] flex justify-center items-center">
        <h1 className="text-5xl">Home</h1>
      </section>

    <section id="project" className="h-screen  bg-[#353535] flex justify-center items-center">
        <h1 className="text-5xl">Project Section</h1>
      </section>
      
      <section id="service" className="h-screen  bg-[#353535] flex justify-center items-center">
        <h1 className="text-5xl">Service Section</h1>
      </section>

      <section id="about" className="h-screen  bg-[#353535] flex justify-center items-center">
        <h1 className="text-5xl">About Section</h1>
      </section>

      <section id="contact" className="h-screen  bg-[#353535] flex justify-center items-center">
        <h1 className="text-5xl">Contact Section</h1>
      </section>
    </>

  );
}
