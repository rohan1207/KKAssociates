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
      <div className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What We Offer
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Our comprehensive corporate tax services ensure your business
          maintains full compliance while optimizing tax efficiency.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
          <div>
            <img
              src="/Offerings.png"
              alt="Offerings"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="space-y-6">
            {services.map((service) => (
              <div key={service.id} className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white font-bold w-10 h-10 sm:w-[40px] sm:h-10 flex items-center justify-center rounded-full text-lg flex-shrink-0">
                  {service.id}
                </div>
                <div>
                  <h3 className=" fles text-left text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className=" text-left text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto text-center mt-[-75px]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Who Needs This Service
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
          <div className="space-y-6">
            {details.map((item) => (
              <div key={item.id} className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white font-bold w-10 h-10 sm:w-[40px] sm:h-10 flex items-center justify-center rounded-full text-lg flex-shrink-0">
                  {item.id}
                </div>
                <div>
                  <h3 className=" text-left text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className=" text-left text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <img
              src="/ServiceDetails.png"
              alt="Who Needs This Service"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 px-6 md:px-12 lg:px-20 text-center mt-[-75px]">
        <h2 className="text-3xl font-bold  md:text-4xl text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our streamlined process ensures efficient and accurate tax filing
          services.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <img
              src="/HowItWorks.png"
              alt="How It Works"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white font-bold w-10 h-10 sm:w-[40px] sm:h-10 flex items-center justify-center rounded-full text-lg flex-shrink-0">
                  {step.id}
                </div>
                <div>
                  <h3 className="text-left text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-left text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinCen;
