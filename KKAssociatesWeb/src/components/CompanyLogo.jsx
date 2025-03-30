import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CompanyLogo() {
  const logos = [
    "/amazon.webp",
    "/intel.svg",
    "/amdo.png",
    "/adobe.svg",
    "/oliver.png",
    "/microsoft.webp",
    "/coviam.png",
    "/adobe.png",
    "/Arista.webp",
    "/microsoft.webp",
    "/amdo.png",
    "/intel.svg",
  ];

  // Duplicate logos to create an infinite effect
  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="bg-white py-16 text-center px-6 mt-[-133px]">
      {/* Company Logos Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-orange-500">
          <span className="block sm:hidden">Trusted By</span>
          <span className="hidden sm:block">Chosen By Professionals At</span>
        </h3>

        <div className="overflow-hidden w-full flex justify-center mt-8">
          <motion.div
            className="flex space-x-10"
            animate={{
              x: ["0%", "-100%"], // Move continuously left
            }}
            transition={{
              ease: "linear",
              duration: 18, // Adjust speed
              repeat: Infinity, // Infinite loop
            }}
          >
            {infiniteLogos.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Company Logo"
                className="h-14 w-28 object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
