import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PersonalTax = () => {
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
      title: "Assistance with Form 1040 & 1040NR filings",
      description:
        "Expert preparation and filing of Forms 1120C, 1120S, and 1120F with meticulous attention to detail.",
    },
    {
      id: 2,
      title: "Compliance with IRS regulations for expats & non-residents",
      description:
        "Ensuring full compliance with U.S. tax laws and IRS regulations through our comprehensive review process.",
    },
    {
      id: 3,
      title: "Tax planning for individuals with U.S. income",
      description:
        "Strategic tax optimization approaches to maximize efficiency while maintaining compliance.",
    },
  ];

  const details = [
    {
      id: 1,
      title: "U.S. citizens living abroad",
      description:
        "Companies registered in the U.S. that require annual corporate tax filings.",
    },
    {
      id: 2,
      title: "Non-residents with U.S. income",
      description:
        "Indian businesses operating in the U.S. market requiring compliance.",
    },
    {
      id: 3,
      title: "Foreign nationals with U.S. tax obligations",
      description:
        "Businesses with international operations that need expert tax management.",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Personal Tax Consultation,",
      description:
        "Comprehensive review of your business structure and tax requirements.",
    },
    {
      id: 2,
      title: "Review of Financial Documents",
      description:
        "Thorough analysis of financial documents and previous filings.",
    },
    {
      id: 3,
      title: "Tax Return Preparation & Submission",
      description:
        "Expert preparation and submission of all required tax forms.",
    },
    {
      id: 4,
      title: "IRS Compliance & Advisory",
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
            U.S. Personal Tax Filings
          </h1>
          <p className="mt-3">
            Hassle-free tax preparation and filing of Forms 1040 and 1040NR for
            U.S. residents and non-residents.
          </p>
          {showButton && (
            <motion.a
              href="/contact-us"
              className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-medium shadow-lg hover:bg-orange-600 transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Get Started Today
            </motion.a>
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
                <div className="bg-orange-500 text-white font-bold w-[55px]  h-10 flex items-center justify-center rounded-full text-lg">
                  {service.id}
                </div>
                <div>
                  <h3 className="text-left text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-left text-gray-600">
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
                <div className="bg-orange-500 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full text-lg">
                  {item.id}
                </div>
                <div>
                  <h3 className="text-left text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-left text-gray-600">{item.description}</p>
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
        <h2 className="text-3xl font-bold md:text-4xl  text-gray-900">How It Works</h2>
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
                <div className="bg-orange-500 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full text-lg">
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

export default PersonalTax;
