import React from "react";

const Services = ({service}) => {
  return (
    <div className="pr-8">
      <div className="border-t h-1 border-gray-300"></div>
      <div className="px-5 pt-7 pb-12 flex flex-row">
        <h2 className="text-5.4xl font-medium w-[325px]">{service.title}</h2>
        <p className="text-3.2xl font-normal w-3/4 pt-20">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Services;
