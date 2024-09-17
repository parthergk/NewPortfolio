import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import heroImageDesktop from "../public/pcbg.png"; // Desktop image
import heroImageMobile from "../public/mbbg.png"; // Mobile and tablet image


export default function HeroSection({ offset = 1200 }) {
  const { scrollY } = useScroll();
  const [isDesktop, setIsDesktop] = useState(false);

  // Update state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <motion.div 
      className=" flex items-end justify-center w-full h-screen fixed top-0 left-0 overflow-hidden "
      style={{
        opacity: opacity,
        scale: scale,
        y: moveDown,
        willChange: "transform, opacity",  // Hint to the browser for smoother animation
      }}
      >
        <Image
          src={isDesktop ? heroImageDesktop : heroImageMobile}
          alt="Model"
          priority
          className=" w-[145%] max-w-none object-contain object-center lg:w-full lg:h-full bottom-0 lg:object-cover lg:object-left-center opacity-100"
        />
      </motion.div>

      <div className = ' hidden lg:block fixed lg:text-3.8xl top-[16.9rem] right-[2.5rem] text-right z-10'>
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
          <li className=" fixed -right-[38px] top-[300px] -rotate-90">GitHub</li>
        </ul>
        </div>

      <div className=" px-3 flex flex-col fixed left-0 right-0 responsive-top sm:responsive-top-tab w-full lg:m-auto lg:bottom-20 lg:px-0 lg:top-auto lg:block ">
        <motion.h1
          className=" text-8xl sm:text-[180px] lg:text-responsive-h1 block lg:m-auto lg:ml-[500px]"
          style={{
            x: moveRight,
            willChange: "transform, opacity",  // Smoother transition
          }}
        >
          Creative
        </motion.h1>

        <motion.span
          className=" text-3.2xl sm:text-[64px] self-end lg:text-responsive-span lg:block lg:fixed lg:custom-margin lg:bottom-10"
          style={{
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
