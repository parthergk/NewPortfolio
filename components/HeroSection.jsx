import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import heroImage from "../public/img.png"; // Ensure image is in the public folder

export default function HeroSection({ offset = 1200 }) {
  const { scrollY } = useScroll();

  // Use useTransform directly without useMemo
  const scale = useTransform(scrollY, [0, offset], [1, 5]);
  const opacity = useTransform(scrollY, [0, offset], [1, 0]);
  const moveDown = useTransform(scrollY, [0, offset], [0, -1200]);
  const moveRight = useTransform(scrollY, [0, offset], [0, 1200]);
  // const moveLeft = useTransform(scrollY, [0, offset], [0, -1200]);

  // Different move values for each navigation item
  const moveNavInstagram = useTransform(scrollY, [0, offset], [0, 200]); // Additional move for Instagram
  const moveNavLinkedin = useTransform(scrollY, [0, offset], [0, 400]); // Additional move for LinkedIn
  const moveNavTwitter = useTransform(scrollY, [0, offset], [0, 600]); // Additional move for Twitter

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
          willChange: "transform, opacity",  // Hint to the browser for smoother animation
        }}
      >
        {/* Optimized Image Component */}
        <Image
          src={heroImage}
          alt="Model"
          priority // Load image with high priority
          className="object-contain w-auto"
        />
      </motion.div>

      <div className = ' hidden fixed text-3.8xl top-[16.9rem] right-[2.5rem] text-right'>
      <ul className="leading-9">
          <motion.li
            style={{
              x: moveNavInstagram,
              willChange: "transform, opacity",  // Smoother transition
            }}
          >
            Instagram
          </motion.li>
          <motion.li
            style={{
              x: moveNavLinkedin,
              willChange: "transform, opacity",  // Smoother transition
            }}
          >
            Linkedin
          </motion.li>
          <motion.li
            style={{
              x: moveNavTwitter,
              willChange: "transform, opacity",  // Smoother transition
            }}
          >
            Twitter
          </motion.li>
          <li className="fixed -right-[38px] top-[300px] -rotate-90">GitHub</li>
        </ul>
        </div>

      <div className="fixed left-0 right-0 bottom-10 w-full m-auto">
        <motion.h1
          className=" md:text-responsivem-h1 lg:text-responsive-h1 block m-auto md:ml-96 lg:ml-[450px]"
          style={{
            opacity: opacity,
            x: moveRight,
            willChange: "transform, opacity",  // Smoother transition
          }}
        >
          Creative
        </motion.h1>

        <motion.span
          className=" md:text-responsivem-span text-responsive-span block fixed custom-margin bottom-10"
          style={{
            opacity: opacity,
            x: moveDown,
            willChange: "transform, opacity",  // Smoother transition
          }}
        >
          Web Solution
        </motion.span>
      </div>
    </>
  );
}
