import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import heroImage from "../public/img.png"; // Ensure image is in the public folder

export default function HeroSection({ offset = 600 }) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, offset], [1, 5]);
  const opacity = useTransform(scrollY, [0, offset], [1, 0]); // Adjusted opacity to start at 1
  const moveDown = useTransform(scrollY, [0, offset], [0, -1200]);

  useEffect(() => {
    // Calculate and set the --vh custom property on load and resize
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set --vh on load
    setVh();

    // Recalculate --vh on window resize
    window.addEventListener("resize", setVh);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);

  return (
    <>
      {/* Image Container */}
      <motion.div
        className="w-full fixed top-0 left-0 overflow-hidden z-0 flex"
        style={{
          opacity: opacity,
          scale: scale,
          y: moveDown,
          height: "calc(var(--vh, 1vh) * 100)",
        }}
      >
        {/* Optimized Image Component */}
        <Image
          src={heroImage}
          alt="Model"
          priority // Load image with high priority
          className=" object-contain w-auto "
        />
      </motion.div>
        <div className="fixed left-0 right-0  bottom-12 w-full m-auto flex">
          <h1 className="  text-responsive-h1 block m-auto ml-[450px]">
            Creative
          </h1>
        </div>
    </>
  );
}
