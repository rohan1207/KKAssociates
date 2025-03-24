import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "U.S. Corporate Tax Filings",
    description: "Smooth compliance with U.S. tax laws for corporations.",
    tags: ["Forms 1120C", "1120S", "1120F"],
    buttonColor: "bg-purple-900 hover:bg-purple-800",
  },
  {
    title: "U.S. Personal Tax Filings",
    description: "Hassle-free preparation and filing for U.S. residents.",
    tags: ["Forms 1040", "1040NR"],
    buttonColor: "bg-purple-900 hover:bg-purple-800",
  },
  {
    title: "EB-5 Investor Services",
    description:
      "Navigate the EB-5 Immigrant Investor Program with structured investment planning and compliance support.",
    buttonColor: "bg-purple-900 hover:bg-purple-800",
  },
  {
    title: "Cross-Border Tax Advisory Services",
    description:
      "Expert guidance on international tax regulations to optimize tax efficiency across India and the U.S.",
    buttonColor: "bg-purple-900 hover:bg-purple-800",
  },
  {
    title: "FinCEN 114 & FATCA Filings",
    description: "Stay compliant with U.S. foreign asset reporting rules.",
    buttonColor: "bg-purple-900 hover:bg-purple-800",
  },
  {
    title: "Estate and Succession Planning",
    description: "Protect your assets and legacy with strategic planning.",
    buttonColor: "bg-purple-900 hover:bg-purple-800",
  },
  {
    title: "Formation of Trusts (India & USA)",
    description:
      "Establish trusts in India or the U.S. with structured tax planning to protect and manage wealth effectively.",
    buttonColor: "bg-purple-900 hover:bg-purple-800",
  },
  {
    title: "Gift Tax Returns",
    description:
      "Navigate U.S. gift tax regulations effortlessly with precise Form 706 preparation and filing.",
    buttonColor: "bg-purple-900 hover:bg-purple-800",
  },
];

const OurServices = () => {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

// Individual Service Card Component
const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-6 rounded-lg shadow-md bg-white transition duration-300 ${
        service.highlight ? "border-2 border-blue-500" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
      <p className="text-gray-600 mb-3">{service.description}</p>

      {service.tags && (
        <div className="mb-3">
          {service.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-md mr-2"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Read More Button (Smooth fade-in effect on hover) */}
      <AnimatePresence>
        {isHovered && (
          <motion.button
            className={`text-white px-4 py-2 rounded-md ${service.buttonColor}`}
            initial={{ opacity: 0, y: 10 }} // Start hidden and slightly lower
            animate={{ opacity: 1, y: 0 }} // Fade in and move up
            exit={{ opacity: 0, y: 10 }} // Fade out and move down
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
          >
            Read More
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurServices;
