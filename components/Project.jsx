import React from "react";

const Project = ({ index, title, setModel }) => {
  return (
    <>
      
      <div
        className="project border-b flex w-full  justify-between items-center pt-6 pb-9 md:pt-9 md:pb-[50px] lg:pb-[70px] cursor-pointer transition-all duration-200 hover:opacity-[0.7]"
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
        <p className="text-lg md:text-3.2xl lg:text-5.4xl font-light leading-6 md:leading-[1.2] lg:leading-[1.2] transition-all duration-400">
          Design & Development
        </p>
      </div>
    </>
  );
};

export default Project;