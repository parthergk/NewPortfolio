import Link from "next/link";
import React from "react";

const Project = ({ index, title, href, setModel }) => {
  // Function to determine justify-content class based on index
  const getJustifyClass = (index) => {
    switch (index) {
      case 0:
        return "justify-start";
      case 1:
        return "justify-center";
      case 2:
        return "justify-end";
      default:
        return "justify-start"; // Default for other projects
    }
  };

  return (
    <>
      <Link
      target="_blank"
        href={href}
        className={`project border-b flex w-full ${getJustifyClass(index)} items-center pt-6 pb-9 md:pt-9 md:pb-[50px] lg:pb-[70px] cursor-pointer transition-all duration-200 hover:opacity-[0.7]`}
        onMouseEnter={() => {
          setModel({ active: true, index: index });
        }}
        onMouseLeave={() => {
          setModel({ active: false, index: index });
        }}
      >
        <h2 className="text-lg md:text-3.2xl lg:text-5.4xl leading-6 md:leading-[1.2] lg:leading-[1.2] transition-all duration-400">
          {title}
        </h2>
      </Link>
    </>
  );
};

export default Project;
