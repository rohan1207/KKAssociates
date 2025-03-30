import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "U.S. Corporate Tax Filings",
    description: "Smooth compliance with U.S. tax laws for corporations.",
    tags: ["Forms 1120C", "1120S", "1120F"],
    buttonColor: "bg-[#2E1A55] hover:bg-purple hover:scale-105 transition-all duration-300",

    path: "/corporate-tax",
    image: "service1.png",
  },
  {
    title: "U.S. Personal Tax Filings",
    description: "Hassle-free preparation and filing for U.S. residents.",
    tags: ["Forms 1040", "1040NR"],
    buttonColor: "bg-[#2E1A55] hover:bg-purple hover:scale-105 transition-all duration-300",

    path: "/personal-tax",
    image: "service2.png",
  },
  {
    title: "EB-5 Investor Services",
    description: "Navigate the EB-5 Immigrant Investor Program.",
    tags: ["Investment", "Green Card"],
    buttonColor: "bg-[#2E1A55] hover:bg-purple hover:scale-105 transition-all duration-300",
    path: "/investor-services",
    image: "service3.png",
  },
  {
    title: "Tax Advisory Services",
    description: "Expert guidance on international tax regulations.",
    tags: ["Compliance", "Consulting"],
    buttonColor: "bg-[#2E1A55] hover:bg-purple hover:scale-105 transition-all duration-300",
    path: "/tax-advisory",
    image: "service4.png",
  },
  {
    title: "FinCen Reporting",
    description: "Compliance with FinCen reporting regulations.",
    tags: ["AML", "Financial Crimes"],
    buttonColor: "bg-[#2E1A55] hover:bg-purple hover:scale-105 transition-all duration-300",
    path: "/fin-advisory",
    image: "service5.png",
  },
  {
    title: "Estate Planning",
    description: "Plan your estate effectively with expert guidance.",
    tags: ["Wealth", "Inheritance"],
    buttonColor: "bg-[#2E1A55] hover:bg-purple hover:scale-105 transition-all duration-300",
    path: "/estate",
    image: "service6.png",
  },
  {
    title: "Business Formation",
    description: "Guidance on setting up your business.",
    tags: ["Startup", "LLC", "Corporation"],
    buttonColor: "bg-[#2E1A55] hover:bg-purple hover:scale-105 transition-all duration-300",
    path: "/formation-advisory",
    image: "service7.png",
  },
  {
    title: "Gift Tax Return",
    description: "Ensure compliance with gift tax regulations.",
    tags: ["IRS", "Exemptions"],
    buttonColor: "bg-[#2E1A55] hover:bg-purple hover:scale-105 transition-all duration-300",
    path: "/return-advisory",
    image: "service8.png",
  },
];

const OurServices = () => {
  const [visibleServices, setVisibleServices] = useState(2);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services
          .slice(0, isLargeScreen ? services.length : visibleServices)
          .map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isLargeScreen={isLargeScreen}
            />
          ))}
      </div>

      {!isLargeScreen && visibleServices < services.length && (
        <div className="text-center mt-8">
          <button
            onClick={() =>
              setVisibleServices((prev) => Math.min(prev + 2, services.length))
            }
            className="w-[194px] h-[55px] sm:w-[223px] sm:h-[64px]  bg-[#FF5500] text-white font-roboto font-medium 
             text-md sm:text-lg  leading-[24px] sm:leading-[27px] text-center 
             rounded-[20px] sm:rounded-[20px] px-5 py-2 sm:px-6 sm:py-3 
             hover:bg-[#FF7733] transition duration-300 ease-in-out"
          >
            View All Services
          </button>
        </div>
      )}
    </div>
  );
};

const ServiceCard = ({ service, isLargeScreen }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#fff9f2] rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition duration-300 group">
      <img
        src={service.image}
        alt={service.title}
        className="h-32 w-full object-cover rounded-md"
      />
      <h3 className="text-base sm:text-lg font-bold text-orange-600 mt-3">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm lg:block hidden">
        {service.description}
      </p>
      <div className="mt-2 flex flex-wrap lg:flex hidden">
        {service.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-md mr-2 mb-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center sm:items-center justify-end h-full">
        <button
          onClick={() => navigate(service.path)}
          className={`w-[75px] h-[29px] sm:w-[95px] sm:h-[38px] px-3 py-1 text-white rounded-[6px] sm:rounded-[8px] 
                font-roboto font-medium text-[10px] sm:text-[14px] leading-[20px] sm:leading-[24px] 
                ${service.buttonColor} 
                mt-[-29px] sm:mt-[20px]   /* -29px for phone, 20px for desktop */
                sm:mb-3 mb-[-0.25rem]    /* Adjusted bottom margin */
                ${
                  isLargeScreen
                    ? "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    : "opacity-100"
                }`}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default OurServices;
