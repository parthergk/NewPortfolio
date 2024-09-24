"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { memo, useState, useEffect } from "react";
import { menuSlide } from "@/lib/anim"; // Assuming menuSlide is defined in lib/anim

const Nav = memo(({ isMobile, setIsActive }) => {
  const NavComponent = isMobile ? motion.nav : "nav";
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDeviceType("mobile");
      } else if (width >= 640 && width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Run on mount and on resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define scroll offsets for each section and device type
  const sectionOffsets = {
    mobile: {
      Service: 1720,
      Project: 2300,
      About: 3480,
    },
    tablet: {
      Service: 2370,
      Project: 3200,
      About: 4300,
    },
    desktop: {
      Service: 1470,
      Project: 2120,
      About: 2755,
    }
  };

  // Handle scroll to section
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      // Get offset based on device type and section
      const offsetAdjust = sectionOffsets[deviceType][sectionId];
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
      <ul className="sm:flex sm:space-x-5 text-white text-xl sm:text-2xl lg:text-3xl font-normal">
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
