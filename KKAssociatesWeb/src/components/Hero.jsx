import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY < 100) {
      controls.start({ opacity: 1, y: 0, scale: 1 });
    } else if (scrollY < 300) {
      controls.start({ opacity: 1, y: -20, scale: 0.9 });
    } else if (scrollY < 600) {
      controls.start({ opacity: 0, y: -50, scale: 0.8 });
    } else {
      controls.start({ opacity: 0, scale: 0.7 });
    }
  }, [scrollY, controls]);

  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative px-4 sm:px-6 md:px-12"
      style={{ backgroundImage: "url('/homePage.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2D215594]"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full px-2 sm:px-4 md:px-8"
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        {/* Logo and Company Name */}
        <motion.div className="mb-4 sm:mb-6 flex flex-col items-center">
          <motion.img
            src="/logo.png"
            alt="KK Associates Logo"
            className="h-12 sm:h-14 md:h-16 mx-auto"
            animate={{
              scale: scrollY > 100 ? 0.8 : 1,
              opacity: scrollY > 600 ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <p className="text-gray-300 text-sm sm:text-lg tracking-wide">
            CHARTERED ACCOUNTANTS
          </p>
        </motion.div>

        {/* Main Heading & Subheading */}
        <motion.h2
          className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug sm:leading-tight"
          animate={{ opacity: scrollY > 300 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Seamless Cross-Border Tax Solutions <br className="hidden sm:block" />
          Between the U.S. & India
        </motion.h2>

        <motion.p
          className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md mt-3 sm:mt-4 text-center"
          animate={{ opacity: scrollY > 300 ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          Navigating the complexities of cross-border taxation can be daunting.
          Our expert guidance ensures compliance and maximizes your tax
          efficiencies.
        </motion.p>

        {/* Book Consultation Button */}
        <motion.div
          animate={{ opacity: scrollY > 100 ? 1 : 0 }}
          transition={{ duration: 0.15 }}
          className="w-full max-w-xs sm:max-w-sm mt-5 sm:mt-6"
        >
          <Link to="/book-consultation">
            <motion.button
              className="w-full px-5 py-2 sm:py-3 rounded-md text-white text-sm sm:text-lg font-semibold"
              style={{ backgroundColor: "#FF7300" }}
              whileHover={{ backgroundColor: "#FFA14A" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Book Consultation
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
