import React from "react";

const Services = ({ service }) => {
  return (
    <div className="lg:pr-8">
      <div className="flex items-center gap-4 py-4 ">
        <h2 className="text-[28px] md:text-5.4xl font-medium">{service.title}</h2>
        <div className="border-t border-gray-300 flex-grow h-1"></div>
      </div>
      <div className="px-4 md:px-6  pb-10 md:pb-14">
        <p className="text-[28px] md:text-5.4xl font-normal leading-[1.4] w-full">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Services;
