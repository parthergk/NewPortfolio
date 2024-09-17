import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Main = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className=" w-full h-full px-3 z-0">
      <motion.div
        className="scroll-content h-screen"
        style={{ transform: `translate3d(0px, ${-scrollY}px, 0px)` }}
        transition={{
          type: "spring",
          damping: 25, // Higher damping for a slower, smoother stop
          stiffness: 50, // Lower stiffness for a softer, less rigid scroll
          duration: 0.8, // Increase duration for a slower transition
        }}
      >
        <div className="pt-500vh pb-400vh">
          <section
            id="Project"
            className=" pt-36 pb-70vh h-screen  bg-[#343434]"
          >
            <h1 className=" text-[80px] font-semibold mb-10">How I Can Help</h1>
            <div className=" pr-8">
              <div className="border-t h-1 border-gray-300"></div>
              <div>
                <h2 className=" text-5.4xl font-medium">Web design</h2>
                <p className=" text-3.2xl font-normal">
                  Visually stunning web designs that captivate your audience by
                  blending your brand voice and customer needs.
                </p>
              </div>
            </div>
          </section>

          <section
            id="Service"
            className="pt-36 pb-70vh h-screen  bg-[#343434] flex justify-center items-center"
          >
            <h1 className="text-5xl">Service Section</h1>
          </section>

          <section
            id="About"
            className="pt-36 pb-70vh h-screen  bg-[#343434] flex justify-center items-center"
          >
            <h1 className="text-5xl">About Section</h1>
          </section>

          <section
            id="Contact"
            className="pt-36 pb-70vh h-screen  bg-[#343434] flex justify-center items-center"
          >
            <h1 className="text-5xl">Contact Section</h1>
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default Main;
