import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Estate = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => setShowButton(true);

    window.addEventListener("wheel", handleUserInteraction);
    window.addEventListener("touchmove", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Structuring of estate plans to optimize tax efficiency",
      description:
        "Expert preparation and filing of Forms 1120C, 1120S, and 1120F with meticulous attention to detail.",
    },
    {
      id: 2,
      title: "Legal & tax advisory for wealth transfers",
      description:
        "Ensuring full compliance with U.S. tax laws and IRS regulations through our comprehensive review process.",
    },
    {
      id: 3,
      title: "U.S. & India cross-border estate planning",
      description:
        "Strategic tax optimization approaches to maximize efficiency while maintaining compliance.",
    },
  ];

  const details = [
    {
      id: 1,
      title: "High-net-worth individuals & families",
      description:
        "Companies registered in the U.S. that require annual corporate tax filings.",
    },
    {
      id: 2,
      title: "Business owners planning succession",
      description:
        "Indian businesses operating in the U.S. market requiring compliance.",
    },
    {
      id: 3,
      title: "Individuals with cross-border assets",
      description:
        "Businesses with international operations that need expert tax management.",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Initial Planning & Strategy Development",
      description:
        "Comprehensive review of your business structure and tax requirements.",
    },
    {
      id: 2,
      title: "Legal & Tax Structuring",
      description:
        "Thorough analysis of financial documents and previous filings.",
    },
    {
      id: 3,
      title: "Execution of Estate Plans",
      description:
        "Expert preparation and submission of all required tax forms.",
    },
    {
      id: 4,
      title: "Ongoing Advisory & Adjustments",
      description:
        "Ongoing assistance and support for any follow-up requirements.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: "url('/ServiceSection.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            Estate & Succession Planning
          </h1>
          <p className="mt-3">
            Secure your assets and legacy with strategic estate planning and
            cross-border succession solutions.
          </p>
          {showButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} // Always visible, adjust based on scroll logic if needed
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full flex justify-center mt-5 sm:mt-6"
            >
              <Link to="/contact-us">
                <motion.button
                  className="w-[194px] h-[55px] sm:w-[223px] sm:h-[64px] rounded-[20px] bg-[#FF5500] text-white font-semibold 
                           text-md sm:text-lg px-5 py-2 sm:py-3 flex justify-center items-center shadow-lg"
                  whileHover={{ scale: 1.05, backgroundColor: "#FF7733" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
      <div className="py-8 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
          What We Offer
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center text-sm sm:text-base">
          Our comprehensive corporate tax services ensure your business
          maintains full compliance while optimizing tax efficiency.
        </p>

        {/* Image - Full width on phone */}
        <div className="w-full mt-6">
          <img
            src="/Offerings.png"
            alt="Offerings"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Smooth Horizontal Scrollable Services List */}
        <div className="mt-6 overflow-x-auto">
          <motion.div
            className="flex space-x-6 px-4"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="flex flex-col items-center text-center min-w-[83%] sm:min-w-[50%] lg:min-w-[30%] bg-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                {/* Service ID Number */}
                <div className="bg-orange-500 text-white font-bold w-9 h-9 flex items-center justify-center rounded-full text-lg">
                  {service.id}
                </div>

                {/* Title & Description */}
                <h3 className="mt-2 text-lg font-bold text-gray-900 text-left mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs px-2 text-left">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Service Details Section */}
      <div className="py-8 px-4 sm:px-6 max-w-5xl mx-auto mt-[-30px]">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
          Who Needs This Service
        </h2>

        {/* Image - Full width on phone */}
        <div className="w-full mt-6">
          <img
            src="/ServiceDetails.png"
            alt="Who Needs This Service"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Smooth Horizontal Scrollable List */}
        <div className="mt-6 overflow-x-auto">
          <motion.div
            className="flex space-x-6 px-4"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
          >
            {details.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col items-center text-center min-w-[75%] sm:min-w-[50%] lg:min-w-[30%] bg-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                {/* Service ID Number */}
                <div className="bg-orange-500 text-white font-bold w-9 h-9 flex items-center justify-center rounded-full text-lg">
                  {item.id}
                </div>

                {/* Title & Description */}
                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs px-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="py-8 px-4 sm:px-6 max-w-5xl mx-auto mt-[-30px]">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
          How It Works
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center text-sm sm:text-base">
          Our streamlined process ensures efficient and accurate tax filing
          services.
        </p>

        {/* Image - Full width on phone */}
        <div className="w-full mt-6">
          <img
            src="/HowItWorks.png"
            alt="How It Works"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Smooth Horizontal Scrollable Steps List */}
        <div className="mt-6 overflow-x-auto">
          <motion.div
            className="flex space-x-6 px-4"
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="flex flex-col items-center text-center min-w-[75%] sm:min-w-[50%] lg:min-w-[30%] bg-white p-4 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                {/* Step Number */}
                <div className="bg-orange-500 text-white font-bold w-9 h-9 flex items-center justify-center rounded-full text-lg">
                  {step.id}
                </div>

                {/* Title & Description */}
                <h3 className="mt-2 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs px-2">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
