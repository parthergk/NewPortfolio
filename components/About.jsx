import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div className="lg:pr-8">
      
      <div className="border-t h-1 border-gray-300"></div>
      <div className=" pt-6 md:pt-10 lg:pt-12 pb-12 px-4 md:px-5">
        <h2 className="text-[28px] md:text-5.4xl font-medium ">
          Web Developer & Designer
        </h2>
        <p className="text-lg md:text-3.2xl font-normal md:leading-10 pt-3 md:pt-5 lg:pt-6">
          I’m Gaurav Kumar, a passionate web developer and designer dedicated to
          creating visually appealing and user-centric digital experiences. With
          a blend of creativity and technical expertise, I transform ideas into
          impactful web solutions.
        </p>
      </div>

      <div className=" my-7 md:my-10 lg:pb-12 px-4 md:px-5">
        <h2 className="text-[28px] md:text-5.4xl font-medium mb-5 md:mb-10">
          Let's build something amazing together!
        </h2>

        <div className=" flex flex-col items-end pt-5 md:pt-10">
          <h2 className=" text-lg font-normal md:text-5.4xl md:font-medium ">
            gauravkumar81464@gmail.com
          </h2>
          <div className="border-t h-1 border-gray-300 w-[300px] md:w-[540px] mt-2 md:mt-8"></div>
        </div>
        <div className=" flex flex-col items-end pt-5 md:pt-10">
          <h2 className=" text-lg font-normal md:text-5.4xl md:font-medium ">
            +917351500283
          </h2>
          <div className="border-t h-1 border-gray-300 w-[300px] md:w-[540px] mt-2 md:mt-8"></div>
        </div>
      </div>

      <div className="w-full flex justify-between text-lg md:text-3xl font-normal px-4 md:px-5">
        <div>
          <h5 className="mb-1 md:mb-3">Socials</h5>
          <ul className="flex gap-3 md:gap-5">
            <li><Link  href="https://github.com/parthergk">GitHub</Link></li>
            <li><Link href="https://www.instagram.com/parther_gk">Instagram</Link></li>
            <li><Link href="https://x.com/parther_gk">Twitter</Link></li>
            <li><Link href="https://www.linkedin.com/in/gaurav-kumar-b5a76626b">Linkedin</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
