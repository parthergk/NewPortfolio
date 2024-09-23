import React from "react";

const Services = ({service}) => {
  return (
    <div className="lg:pr-8">
      <div className="border-t h-1 border-gray-300"></div>
      <div className=" px-4 md:px-5 pt-6 pb-9 md:pt-9 md:pb-[50px] lg:pb-[70px] flex flex-col lg:flex-row">
        <h2 className=" text-[28px] md:text-5.4xl font-medium lg:w-[325px]">{service.title}</h2>
        <p className=" text-lg md:text-3.2xl font-normal md:leading-10 lg:w-3/4 pt-3 md:pt-5 lg:pt-20 w-full">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Services;
