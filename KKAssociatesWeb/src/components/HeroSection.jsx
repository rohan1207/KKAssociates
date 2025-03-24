import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: "url('/ServiceSection.png')" }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          U.S. Corporate Tax Filings
        </h1>
        <p className="mt-3">
          Ensure seamless compliance with our expert tax filing services.
        </p>
        <a
          href="#"
          className="mt-5 inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition"
        >
          Get Started Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
