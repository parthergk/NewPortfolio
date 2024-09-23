import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Model = ({ model, projects }) => {
  const { active, index } = model;
  const modalContainer = useRef(null);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "5%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    // Move Container on Desktop (Mouse Move)
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    // Handle mouse movement
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
    };

    // Handle touch movement for mobile devices
    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        // Get the first touch point coordinates
        const touch = e.touches[0];
        const { clientX, clientY } = touch;

        xMoveContainer(clientX);
        yMoveContainer(clientY);
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="h-full w-full absolute transition-[top] duration-500 ease-custom-bezier"
      >
        {projects.map((project, index) => {
          const { src, color } = project;
          return (
            <div
              className="h-full w-full flex items-center justify-center relative"
              style={{ backgroundColor: color }}
              key={index}
            >
              <Image
                src={`/images/${src}`}
                width={300}
                height={200}
                alt="image"
                style={{ backgroundColor: color }}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Model;
