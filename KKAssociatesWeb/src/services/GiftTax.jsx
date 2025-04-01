import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const GiftTax = () => {
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
      title: "Preparation & filing of Form 706 for U.S. gift tax",
      description:
        "Expert preparation and filing of Forms 1120C, 1120S, and 1120F with meticulous attention to detail.",
    },
    {
      id: 2,
      title: "Guidance on tax liabilities & exemptions",
      description:
        "Ensuring full compliance with U.S. tax laws and IRS regulations through our comprehensive review process.",
    },
    {
      id: 3,
      title: "Compliance with IRS regulations",
      description:
        "Strategic tax optimization approaches to maximize efficiency while maintaining compliance.",
    },
  ];

  const details = [
    {
      id: 1,
      title: "U.S. citizens & residents making large gifts",
      description:
        "Companies registered in the U.S. that require annual corporate tax filings.",
    },
    {
      id: 2,
      title: "Non-residents gifting U.S.-based assets",
      description:
        "Indian businesses operating in the U.S. market requiring compliance.",
    },
    {
      id: 3,
      title: "High-net-worth individuals managing wealth transfers",
      description:
        "Businesses with international operations that need expert tax management.",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Understanding Gift Tax Liabilities",
      description:
        "Comprehensive review of your business structure and tax requirements.",
    },
    {
      id: 2,
      title: "Document Collection & Review",
      description:
        "Thorough analysis of financial documents and previous filings.",
    },
    {
      id: 3,
      title: "Tax Return Filing & Compliance",
      description:
        "Expert preparation and submission of all required tax forms.",
    },
    {
      id: 4,
      title: "Ongoing Wealth Management Support",
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
          <h1 className="text-3xl md:text-5xl font-bold">Gift Tax Returns</h1>
          <p className="mt-3">
            Navigate U.S. gift tax regulations effortlessly with precise Form
            706 preparation and filing.
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

      {/* Offerings Section */}
      <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
          What We Offer
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center text-sm sm:text-base">
          Our comprehensive gift tax services ensure accurate and timely filing of your gift tax returns.
        </p>

        {/* Image & Service List */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 mt-8">
          {/* Image Section */}
          <div className="w-full md:w-[45%] flex justify-center">
            <img
              src="/service3.png"
              alt="Offerings"
              className="w-full sm:w-[300px] lg:w-[350px] aspect-[16/10] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Services List - Scrollable on mobile */}
          <div className="w-full md:w-[55%]">
            <div className="h-[191px] md:h-auto overflow-y-auto md:overflow-visible space-y-4 pr-2 md:pr-0 scroll-smooth">
              {services.map((service) => (
                <div key={service.id} className="flex items-start space-x-3 sm:space-x-4 bg-white p-3 rounded-lg shadow-sm md:shadow-none">
                  {/* Service Number */}
                  <div className="bg-orange-500 text-white font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-xs sm:text-lg flex-shrink-0">
                    {service.id}
                  </div>

                  {/* Service Title & Description */}
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl mx-auto mt-[-79px]">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
          Who Needs This Service
        </h2>

        {/* Grid Layout */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 mt-8">
          {/* Service List - Scrollable on mobile */}
          <div className="w-full md:w-[55%]">
            <div className="h-[191px] md:h-auto overflow-y-auto md:overflow-visible space-y-4 pr-2 md:pr-0 scroll-smooth">
              {details.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 sm:space-x-4 bg-white p-3 rounded-lg shadow-sm md:shadow-none">
                  {/* Number Icon */}
                  <div className="bg-orange-500 text-white font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-xs sm:text-lg flex-shrink-0">
                    {item.id}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[45%] flex justify-center">
            <img
              src="service2.png"
              alt="Who Needs This Service"
              className="w-full sm:w-[300px] lg:w-[350px] aspect-[16/10] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl mx-auto mt-[-75px]">
        {/* Section Heading */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
          How It Works
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-center">
          Our streamlined process ensures efficient and accurate gift tax filing services.
        </p>

        {/* Grid Layout */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 sm:gap-10 mt-10">
          {/* Process Steps - Scrollable on mobile */}
          <div className="w-full md:w-[55%]">
            <div className="h-[191px] md:h-auto overflow-y-auto md:overflow-visible space-y-4 pr-2 md:pr-0 scroll-smooth">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start space-x-3 sm:space-x-4 bg-white p-3 rounded-lg shadow-sm md:shadow-none">
                  {/* Step Number */}
                  <div className="bg-orange-500 text-white font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-xs sm:text-lg flex-shrink-0">
                    {step.id}
                  </div>

                  {/* Step Title & Description */}
                  <div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[45%] flex justify-center">
            <img
              src="service1.png"
              alt="How It Works"
              className="w-full sm:w-[300px] lg:w-[350px] aspect-[16/10] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftTax;
