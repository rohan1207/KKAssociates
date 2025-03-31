import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FinCen = () => {
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
      title: "Compliance assistance for U.S. taxpayers with foreign assets",
      description:
        "Expert preparation and filing of Forms 1120C, 1120S, and 1120F with meticulous attention to detail.",
    },
    {
      id: 2,
      title: "Filing of FINCEN 114 & FATCA Form 8938",
      description:
        "Ensuring full compliance with U.S. tax laws and IRS regulations through our comprehensive review process.",
    },
    {
      id: 3,
      title: "Advisory on penalties & reporting obligations",
      description:
        "Strategic tax optimization approaches to maximize efficiency while maintaining compliance.",
    },
  ];

  const details = [
    {
      id: 1,
      title: "U.S. citizens & residents with foreign bank accounts",
      description:
        "Companies registered in the U.S. that require annual corporate tax filings.",
    },
    {
      id: 2,
      title: "Expats with overseas financial interests",
      description:
        "Indian businesses operating in the U.S. market requiring compliance.",
    },
    {
      id: 3,
      title: "Businesses with global financial operations",
      description:
        "Businesses with international operations that need expert tax management.",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Assessment of Foreign Asset Holdings",
      description:
        "Comprehensive review of your business structure and tax requirements.",
    },
    {
      id: 2,
      title: "Determination of Filing Requirements",
      description:
        "Thorough analysis of financial documents and previous filings.",
    },
    {
      id: 3,
      title: "Preparation & Submission of Reports",
      description:
        "Expert preparation and submission of all required tax forms.",
    },
    {
      id: 4,
      title: "Ongoing Compliance Support",
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
            FINCEN 114 & FATCA (Form 8938) Filings
          </h1>
          <p className="mt-3">
            Stay compliant with U.S. foreign asset reporting requirements,
            ensuring full adherence to FinCEN 114 and FATCA regulations.
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
      <div className="py-8 px-4 sm:px-6 max-w-5xl mx-auto">
  {/* Section Heading */}
  <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
    What We Offer
  </h2>
  <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center text-sm sm:text-base">
    Our comprehensive corporate tax services ensure your business maintains full compliance while optimizing tax efficiency.
  </p>

  {/* Image & Services List - Always Side by Side */}
  <div className="flex flex-row items-center gap-4 sm:gap-8 mt-6">
    {/* Image with Auto Scaling */}
    <div className="w-[45%] flex justify-center">
      <img
        src="/Offerings.png"
        alt="Offerings"
        className="w-full sm:w-[300px] lg:w-[350px] aspect-[16/10] object-cover rounded-lg shadow-md"
      />
    </div>

    {/* Services List */}
    <div className="w-[55%] space-y-3">
      {services.map((service) => (
        <div key={service.id} className="flex items-start space-x-2 sm:space-x-3">
          {/* Service ID Number */}
          <div className="bg-orange-500 text-white font-bold w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-xs sm:text-lg flex-shrink-0">
            {service.id}
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-sm sm:text-lg font-bold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-base line-clamp-2 sm:line-clamp-none">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Service Details Section */}
      <div className="py-8 px-4 sm:px-6 max-w-5xl mx-auto mt-[-20px]">
  {/* Section Heading */}
  <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
    Who Needs This Service
  </h2>

  {/* Image & Services List - Always Side by Side */}
  <div className="flex flex-row items-center gap-4 sm:gap-8 mt-6">
    {/* Services List */}
    <div className="w-[55%] space-y-3">
      {details.map((item) => (
        <div key={item.id} className="flex items-start space-x-2 sm:space-x-3">
          {/* Service ID Number */}
          <div className="bg-orange-500 text-white font-bold w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-xs sm:text-lg flex-shrink-0">
            {item.id}
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-sm sm:text-lg font-bold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-base line-clamp-2 sm:line-clamp-none">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Image with Auto Scaling */}
    <div className="w-[45%] flex justify-center">
      <img
        src="/ServiceDetails.png"
        alt="Who Needs This Service"
        className="w-full sm:w-[300px] lg:w-[350px] aspect-[16/10] object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
</div>


      {/* How It Works Section */}
      <div className="py-8 px-4 sm:px-6 max-w-5xl mx-auto mt-[-30px]">
  {/* Section Heading */}
  <h2 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
    How It Works
  </h2>
  <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center text-sm sm:text-base">
    Our streamlined process ensures efficient and accurate tax filing services.
  </p>

  {/* Image & Steps List - Always Side by Side */}
  <div className="flex flex-row items-center gap-4 sm:gap-8 mt-6">
    {/* Steps List */}
    <div className="w-[55%] space-y-3">
      {steps.map((step) => (
        <div key={step.id} className="flex items-start space-x-2 sm:space-x-3">
          {/* Step Number */}
          <div className="bg-orange-500 text-white font-bold w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-xs sm:text-lg flex-shrink-0">
            {step.id}
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-sm sm:text-lg font-bold text-gray-900">
              {step.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-base line-clamp-2 sm:line-clamp-none">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Image with Auto Scaling */}
    <div className="w-[45%] flex justify-center">
      <img
        src="/HowItWorks.png"
        alt="How It Works"
        className="w-full sm:w-[300px] lg:w-[350px] aspect-[16/10] object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default FinCen;
