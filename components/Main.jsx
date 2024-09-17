import React, { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

const Main = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [skewValue, setSkewValue] = useState(0);

  // Create a spring animation for smooth scrolling
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 80,  // Controls the stiffness (higher = more rigid)
    damping: 30,    // Controls the damping (higher = slower stop)
    duration: 0.5
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || 0;

      smoothScrollY.set(scrollY);

      // Calculate the difference between the current and last scroll position
      const deltaScroll = currentScrollY - lastScrollY;

      // Update the skew value based on the scroll speed
      const newSkewValue = deltaScroll * 0.09; // Adjust this multiplier for skew sensitivity
      setSkewValue(newSkewValue);

      // Update the scroll positions
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);

      // Reset the skew value after scrolling stops
      clearTimeout(window.skewTimeout);
      window.skewTimeout = setTimeout(() => {
        setSkewValue(0);
      }, 150); // After 150ms of no scrolling, reset the skew
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(window.skewTimeout);
    };
  }, [lastScrollY, scrollY]);

  return (
    <main className="w-full h-full px-3 z-0">
      <motion.div
        className="scroll-content h-screen"
        style={{
          transform: `translate3d(0px, ${-smoothScrollY.get()}px, 0px)`,
        }}
        transition={{
          type: "spring",
          damping: 25,  // Higher damping for a slower, smoother stop
          stiffness: 50, // Lower stiffness for a softer scroll
        }}
      >
        <div className="pt-500vh pb-400vh">
          <motion.section
            id="Project"
            className="pt-36 pb-70vh bg-[#343434]"
            style={{
              transform: `skew(0deg, ${skewValue}deg)`,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <h1 className="text-[80px] font-semibold mb-10">How I Can Help</h1>
            <div className="pr-8">
              <div className="border-t h-1 border-gray-300 mb-10"></div>
              <div className="px-5 flex flex-row">
                <h2 className="text-5.4xl font-medium w-[325px]">Web design</h2>
                <p className="text-3.2xl font-normal w-3/4 pt-20">
                  Visually stunning web designs that captivate your audience by
                  blending your brand voice and customer needs.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="Service"
            className="pt-36 pb-70vh h-screen bg-[#343434] flex justify-center items-center"
            style={{
              transform: `skew(0deg, ${skewValue}deg)`,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <h1 className="text-5xl">Service Section</h1>
          </motion.section>

          <motion.section
            id="About"
            className="pt-36 pb-70vh h-screen bg-[#343434] flex justify-center items-center"
            style={{
              transform: `skew(0deg, ${skewValue}deg)`,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <h1 className="text-5xl">About Section</h1>
          </motion.section>

          <motion.section
            id="Contact"
            className="pt-36 pb-70vh h-screen bg-[#343434] flex justify-center items-center"
            style={{
              transform: `skew(0deg, ${skewValue}deg)`,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <h1 className="text-5xl">Contact Section</h1>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
};

export default Main;
