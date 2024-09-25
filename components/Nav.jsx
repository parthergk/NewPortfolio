"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { memo } from "react";
import { menuSlide } from "@/lib/anim"; // Assuming menuSlide is defined in lib/anim

const Nav = memo(({ isMobile, setIsActive }) => {
  const NavComponent = isMobile ? motion.nav : "nav";

  // Calculate dynamic offset based on device height
  const getDynamicOffset = (sectionId) => {
    const height = window.innerHeight;

    // Adjust the baseline offsets proportionally based on height
    const baseOffsets = {
      Service: 2.3,  
      Project: 3.3,  
      About: 4.3,    
    };

    // Return the proportional offset value
    return baseOffsets[sectionId] * height;
  };

  // Handle scroll to section
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      const offsetAdjust = getDynamicOffset(sectionId); // Calculate dynamic offset
      const offsetTop = section.offsetTop - offsetAdjust;

      // Smooth scroll to the calculated offset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    // Close the mobile menu after clicking a link
    if (isMobile) {
      setIsActive(false);
    }
  };

  return (
    <NavComponent
      variants={isMobile ? menuSlide : {}}
      initial={isMobile ? "initial" : undefined}
      animate={isMobile ? "enter" : undefined}
      exit={isMobile ? "exit" : undefined}
      className="bg-custom-gray sm:bg-transparent sm:relative sm:flex-none fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10"
    >
      <ul className="sm:flex sm:space-x-5 text-white text-5.4xl sm:text-3.2xl lg:text-3.8xl font-light">
        {["Service", "Project", "About"].map((item) => (
          <li key={item}>
            <Link href={`/#${item}`} onClick={(e) => handleScroll(e, item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </NavComponent>
  );
});

export default Nav;
