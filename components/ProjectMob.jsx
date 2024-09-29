import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectMob = ({ project, index }) => {
  const { title, src, href, color } = project;
  return (
    <>
    <div className=' mb-20'>
      <Link href={href} key={index} className="p-5 w-80 h-80 flex justify-center items-center" style={{ backgroundColor: color }}>
        <Image src={`/images/${src}`} width={300} height={200} alt="image" />
      </Link>
      <h2 className=" text-[28px] md:text-5.4xl font-medium lg:w-[325px] my-3">{title}</h2>
      <div className="border-t h-1 border-gray-300"></div>
      <p className=" text-lg md:text-3.2xl font-normal md:leading-10 lg:w-3/4 pt-3 md:pt-5 lg:pt-20 w-full opacity-70">Design & Development</p>
    </div>
    </>
  );
};

export default ProjectMob;
