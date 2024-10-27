import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import heroImageDesktop from "../public/pcbg.png"; // Desktop image
import heroImageMobile from "../public/mbbg.png"; // Mobile and tablet image
import Link from "next/link";

export default function HeroSection({ offset = 1200 }) {
  const { scrollY } = useScroll();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      // setIsDesktop(window.innerHeight<800 && (window.innerWidth > 768 || window.innerWidth < 1024) || window.innerWidth >= 1024)
      setIsDesktop(window.innerWidth >= 1024);
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
  
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
  
    return () => {
      window.removeEventListener("resize", checkIsDesktop);
    };
  }, []);
  

  // useEffect(() => {
  //   // Function to check if the current window width is for a desktop screen
  //   const checkIsDesktop = () => {
  //     setIsDesktop(window.innerWidth >= 1024); // Adjust breakpoint as needed
  //   };


  //   // Initial check when component mounts
  //   checkIsDesktop();

  //   // Event listener for window resizing
  //   window.addEventListener("resize", checkIsDesktop);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", checkIsDesktop);
  //   };
  // }, []);

    // useEffect(() => {
  //   // Calculate and set the --vh custom property on load and resize
  //   const setVh = () => {
  //     const vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   };

  //   // Set --vh on load
  //   setVh();

  //   // Recalculate --vh on window resize
  //   window.addEventListener("resize", setVh);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", setVh);
  //   };
  // }, []);

  // Use useTransform directly without useMemo
  const scale = useTransform(scrollY, [0, offset], [1, 5]);
  const opacity = useTransform(scrollY, [0, offset], [1, 0]);
  const moveDown = useTransform(scrollY, [0, offset], [0, -1200]);
  const moveRight = useTransform(scrollY, [0, offset], [0, 1200]);

  // Different move values for each navigation item
  const moveNavInstagram = useTransform(scrollY, [0, offset], [0, 200]); // Additional move for Instagram
  const moveNavLinkedin = useTransform(scrollY, [0, offset], [0, 400]); // Additional move for LinkedIn
  const moveNavTwitter = useTransform(scrollY, [0, offset], [0, 600]); // Additional move for Twitter

  return (
    <>
      <motion.div
        className="flex items-end justify-center w-full h-screen fixed top-0 left-0 overflow-hidden"
        style={{
          opacity: opacity,
          scale: scale,
          y: moveDown,
          willChange: "transform, opacity", // Hint to the browser for smoother animation
        }}
      >
        <Image
          src={isDesktop ? heroImageDesktop : heroImageMobile}
          alt="Model"
          priority
          className="w-[145%] max-w-none object-contain object-center lg:w-full lg:h-full bottom-0 lg:object-cover lg:object-left-center opacity-100"
        />

      </motion.div>

      <div className="hidden lg:block fixed lg:text-3.8xl top-[16.9rem] right-[2.5rem] text-right z-10">
        <ul className="leading-9">
          <motion.li
            style={{
              x: moveNavInstagram,
              willChange: "transform, opacity", // Smoother transition
            }}
          >
            <Link href="https://www.instagram.com/parther_gk/" aria-label="Instagram Profile">Instagram</Link>
          </motion.li>
          <motion.li
            style={{
              x: moveNavLinkedin,
              willChange: "transform, opacity", // Smoother transition
            }}
          >
            <Link href="https://www.linkedin.com/in/gaurav-kumar-b5a76626b" aria-label="Linkedin Profile">Linkedin</Link>
          </motion.li>
          <motion.li
            style={{
              x: moveNavTwitter,
              willChange: "transform, opacity", // Smoother transition
            }}
          >
            <Link href="https://x.com/parther_gk" aria-label="Twitter Profile">Twitter</Link>
          </motion.li>
          <li className="fixed -right-[38px] top-[300px] -rotate-90">
            <Link  href="https://github.com/parthergk" aria-label="GitHub Profile">GitHub</Link>
          </li>
        </ul>
      </div>

      <div className="px-3 flex flex-col fixed left-0 right-0 responsive-top sm:responsive-top-tab w-full lg:m-auto lg:bottom-20 lg:px-0 lg:top-auto lg:block">
        <motion.h1
          aria-label="Creative"
          className="text-8xl sm:text-[180px] lg:text-responsive-h1 block lg:m-auto lg:ml-[500px] xl-h800:ml-[600px] xl-h800:text-[200px]"
          style={{
            x: moveRight,
            willChange: "transform, opacity", // Smoother transition
          }}
        >
          Creative
        </motion.h1>

        <motion.span
          className="text-3.2xl sm:text-[64px] self-end lg:text-responsive-span lg:block lg:fixed lg:custom-margin lg:bottom-10"
          style={{
            x: moveDown,
            willChange: "transform, opacity", // Smoother transition
          }}
        >
          Web Solution
        </motion.span>
      </div>
    </>
  );
}
